# '''''Protocol Backend code'''''''''
from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel
import minimalmodbus
import serial
import struct
import logging
from fastapi.middleware.cors import CORSMiddleware
# Initialize FastAPI app
app = FastAPI()

# Set up logging (optional, for debugging)
logging.basicConfig(level=logging.DEBUG)

# Load HTML templates (for rendering)
templates = Jinja2Templates(directory="templates")

# Global variable to store the connection configuration
current_connection_config = None

# Add CORS middleware to allow all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

# Pydantic model to validate the connection configuration input
class ModbusConfig(BaseModel):
    port: str
    slave_address: int
    baudrate: int
    parity: str
    stopbits: int
    timeout: int


# Pydantic model to validate the register reading configuration input
class ReadRegisterConfig(BaseModel):
    function_code: int
    register_range_start: int  # Starting register address
    register_range_end: int  # Ending register address
    combine_registers: bool = True  # Whether to combine multiple registers for a single value
    endianess: str = "little"  # Endianness: "little" or "big"


def combine_registers_and_convert_to_float(registers, endianess="little"):
    """
    Combine two 16-bit Modbus registers into a 32-bit integer and convert to a float.
    """
    if endianess == "little":
        # Little Endian: First register is the most significant part.
        int_value = (registers[0] << 16) + registers[1]
    else:
        # Big Endian: Second register is the most significant part.
        int_value = (registers[1] << 16) + registers[0]

    # Now, convert the 32-bit integer to a float using IEEE 754 format
    float_value = struct.unpack('f', struct.pack('I', int_value))[0]

    return float_value


@app.get("/", response_class=HTMLResponse)
async def index(request: Request):
    """Render the main dashboard page."""
    return templates.TemplateResponse("index.html", {"request": request})


@app.post("/connect")
async def connect(config: ModbusConfig):
    """Connect to the Modbus device with the given configuration and verify communication."""
    global current_connection_config  # Use the global variable to store the connection config

    # Mapping of parity values for the serial connection
    parity_map = {
        'even': serial.PARITY_EVEN,
        'odd': serial.PARITY_ODD,
        'none': serial.PARITY_NONE
    }

    # Set up the Modbus RTU device connection
    try:
        instrument = minimalmodbus.Instrument(config.port, config.slave_address)
        instrument.serial.baudrate = config.baudrate
        instrument.serial.bytesize = 8  # 8 data bits
        instrument.serial.parity = parity_map.get(config.parity, serial.PARITY_NONE)
        instrument.serial.stopbits = config.stopbits
        instrument.serial.timeout = config.timeout

        # Test read from register 142 to verify communication
        registers = instrument.read_registers(142, 2, functioncode=3)  # Default function code 3 (holding registers)

        # If no exceptions, the device is connected
        current_connection_config = config  # Save the connection config globally
        return {"status": "success",
                "message": f"Connected to Modbus device successfully!"}

    except minimalmodbus.ModbusException as e:
        return {"status": "error", "message": f"Modbus Error: {e}"}

    except Exception as e:
        return {"status": "error", "message": f"Connection failed: {e}"}


@app.post("/read_registers")
async def read_registers(config: ReadRegisterConfig):
    """Read data from Modbus device using previously saved connection configuration."""
    global current_connection_config  # Access the globally stored connection config

    if current_connection_config is None:
        raise HTTPException(status_code=400, detail="Modbus connection not established. Please connect first.")

    # If the connection config exists, use it
    connection_config = current_connection_config

    # Mapping of parity values for the serial connection
    parity_map = {
        'even': serial.PARITY_EVEN,
        'odd': serial.PARITY_ODD,
        'none': serial.PARITY_NONE
    }

    try:
        # Set up the Modbus RTU device connection using the saved configuration
        instrument = minimalmodbus.Instrument(connection_config.port, connection_config.slave_address)
        instrument.serial.baudrate = connection_config.baudrate
        instrument.serial.bytesize = 8  # 8 data bits
        instrument.serial.parity = parity_map.get(connection_config.parity, serial.PARITY_NONE)
        instrument.serial.stopbits = connection_config.stopbits
        instrument.serial.timeout = connection_config.timeout

        # Calculate the number of registers to read
        register_count = config.register_range_end - config.register_range_start + 1

        # Read the requested range of registers
        registers = instrument.read_registers(config.register_range_start, register_count,
                                              functioncode=config.function_code)

        # Process the registers
        result = []
        if config.combine_registers:
            # If combining registers into a float (e.g., reading 2 registers as one float value)
            for i in range(0, len(registers), 2):  # Assuming every 2 registers are combined into a float
                if i + 1 < len(registers):
                    combined_float = combine_registers_and_convert_to_float(registers[i:i + 2],
                                                                            endianess=config.endianess)
                    result.append({
                        "register_address": config.register_range_start + i,
                        # Address of the first register in the pair
                        "value": combined_float
                    })
        else:
            # If not combining, display each register with its value
            for i, register in enumerate(registers):
                result.append({
                    "register_address": config.register_range_start + i,
                    "value": register
                })

        return {"status": "success", "message": "Data read successfully", "data": result}

    except minimalmodbus.ModbusException as e:
        return {"status": "error", "message": f"Modbus Error: {e}"}

    except Exception as e:
        return {"status": "error", "message": f"Connection failed: {e}"}


@app.get("/dashboard", response_class=HTMLResponse)
async def dashboard(request: Request):
    """Render the dashboard page to display Modbus data."""
    return templates.TemplateResponse("dashboard.html", {"request": request})


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="localhost", port=8000)
