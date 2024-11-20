// import React, { useState } from 'react';
// import { X, Plus, Trash2 } from 'lucide-react';

// const RegisterSettingsModal = ({ isOpen, onClose }) => {
//   const [registers, setRegisters] = useState([
//     { type: 'holding', address: '', quantity: '', description: '' }
//   ]);

//   const registerTypes = [
//     { value: 'holding', label: 'Holding Register (4x)' },
//     { value: 'input', label: 'Input Register (3x)' },
//     { value: 'coil', label: 'Coil (0x)' },
//     { value: 'discrete', label: 'Discrete Input (1x)' }
//   ];

//   const addRegister = () => {
//     setRegisters([...registers, { type: 'holding', address: '', quantity: '', description: '' }]);
//   };

//   const removeRegister = (index) => {
//     setRegisters(registers.filter((_, i) => i !== index));
//   };

//   const updateRegister = (index, field, value) => {
//     const newRegisters = [...registers];
//     newRegisters[index][field] = value;
//     setRegisters(newRegisters);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl">
//         <div className="flex items-center justify-between p-4 border-b">
//           <h2 className="text-xl font-semibold text-gray-800">Register Settings</h2>
//           <button
//             onClick={onClose}
//             className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         <div className="p-4 max-h-[70vh] overflow-y-auto">
//           {registers.map((register, index) => (
//             <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg">
//               <div className="flex flex-wrap gap-4">
//                 <div className="flex-1 min-w-[200px]">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Register Type
//                   </label>
//                   <select
//                     value={register.type}
//                     onChange={(e) => updateRegister(index, 'type', e.target.value)}
//                     className="w-full p-2 border rounded-md"
//                   >
//                     {registerTypes.map((type) => (
//                       <option key={type.value} value={type.value}>
//                         {type.label}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="w-32">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Address
//                   </label>
//                   <input
//                     type="number"
//                     value={register.address}
//                     onChange={(e) => updateRegister(index, 'address', e.target.value)}
//                     className="w-full p-2 border rounded-md"
//                     placeholder="0"
//                   />
//                 </div>

//                 <div className="w-32">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Quantity
//                   </label>
//                   <input
//                     type="number"
//                     value={register.quantity}
//                     onChange={(e) => updateRegister(index, 'quantity', e.target.value)}
//                     className="w-full p-2 border rounded-md"
//                     placeholder="1"
//                   />
//                 </div>

//                 <div className="flex-1 min-w-[200px]">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Description
//                   </label>
//                   <input
//                     type="text"
//                     value={register.description}
//                     onChange={(e) => updateRegister(index, 'description', e.target.value)}
//                     className="w-full p-2 border rounded-md"
//                     placeholder="Register description"
//                   />
//                 </div>

//                 <div className="flex items-end">
//                   <button
//                     onClick={() => removeRegister(index)}
//                     className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
//                   >
//                     <Trash2 size={20} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}

//           <button
//             onClick={addRegister}
//             className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
//           >
//             <Plus size={20} />
//             Add Register
//           </button>
//         </div>

//         <div className="flex justify-end gap-3 p-4 border-t">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={onClose}
//             className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
//           >
//             Save Changes
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterSettingsModal;



// import React, { useState } from 'react';
// import { X } from 'lucide-react';

// const RegisterSettingsModal = ({ isOpen, onClose }) => {
//   const [selectedFunction, setSelectedFunction] = useState('');
//   const [startAddress, setStartAddress] = useState('');
//   const [endAddress, setEndAddress] = useState('');
//   console.log('Register Modal Props:', { isOpen, onClose });
//   const functionCodes = [
//     { code: '0x01', description: 'Read Coil Status' },
//     { code: '0x02', description: 'Read Input Status' },
//     { code: '0x03', description: 'Read Holding Registers' },
//     { code: '0x04', description: 'Read Input Registers' },
//     { code: '0x05', description: 'Force Single Coil' },
//     { code: '0x06', description: 'Preset Single Register' },
//     { code: '0x0F', description: 'Force Multiple Coils' },
//     { code: '0x10', description: 'Preset Multiple Registers' }
//   ];

//   const handleSubmit = () => {
//     console.log({
//       functionCode: selectedFunction,
//       startAddress,
//       endAddress
//     });
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 ">
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-auto">
//         {/* Header - Responsive padding and font sizes */}
//         <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200 bg-blue-900 rounded-t-lg">
//           <h2 className="text-lg sm:text-xl font-semibold text-white ">Register Settings</h2>
//           <button
//             onClick={onClose}
//             className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors"
//           >
//             <X className="w-5 h-5 sm:w-6 sm:h-6" />
//           </button>
//         </div>

//         {/* Content - Responsive padding and spacing */}
//         <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
//           {/* Function Code Selection */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
//               Function Code
//             </label>
//             <select
//               value={selectedFunction}
//               onChange={(e) => setSelectedFunction(e.target.value)}
//               className="w-full p-2 sm:p-2.5 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm sm:text-base"
//             >
//               <option value="">Select Function Code</option>
//               {functionCodes.map((func) => (
//                 <option key={func.code} value={func.code}>
//                   {func.code} - {func.description}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Register Address Range - Responsive grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
//                 Start Address
//               </label>
//               <input
//                 type="number"
//                 value={startAddress}
//                 onChange={(e) => setStartAddress(e.target.value)}
//                 placeholder="0"
//                 className="w-full p-2 sm:p-2.5 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm sm:text-base"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
//                 End Address
//               </label>
//               <input
//                 type="number"
//                 value={endAddress}
//                 onChange={(e) => setEndAddress(e.target.value)}
//                 placeholder="100"
//                 className="w-full p-2 sm:p-2.5 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm sm:text-base"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Footer - Responsive padding and button layout */}
//         <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-3 p-4 border-t border-gray-200 bg-gray-50 rounded-b-lg">
//           <button
//             onClick={onClose}
//             className="w-full sm:w-auto px-4 py-2 text-sm sm:text-base text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSubmit}
//             className="w-full sm:w-auto px-4 py-2 text-sm sm:text-base bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             OK
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterSettingsModal;


// import React, { useState } from 'react';
// import { X } from 'lucide-react';

// const RegisterSettingsModal = ({ isOpen, onClose }) => {
//   const [selectedFunction, setSelectedFunction] = useState('');
//   const [startAddress, setStartAddress] = useState('');
//   const [endAddress, setEndAddress] = useState('');
//   const [combineRegisters, setCombineRegisters] = useState(true);
//   const [endianness, setEndianness] = useState('big');
//   const [responseData, setResponseData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const functionCodes = [
//     { code: 1, description: 'Read Coil Status' },
//     { code: 2, description: 'Read Input Status' },
//     { code: 3, description: 'Read Holding Registers' },
//     { code: 4, description: 'Read Input Registers' },
//     { code: 5, description: 'Force Single Coil' },
//     { code: 6, description: 'Preset Single Register' },
//     { code: 15, description: 'Force Multiple Coils' },
//     { code: 16, description: 'Preset Multiple Registers' }
//   ];

//   const handleSubmit = async () => {
//     setLoading(true);
//     const payload = {
//       function_code: parseInt(selectedFunction),
//       register_range_start: parseInt(startAddress),
//       register_range_end: parseInt(endAddress),
//       combine_registers: combineRegisters,
//       endianness: endianness
//     };

//     try {
//       const response = await fetch('http://localhost:8000/read_registers', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload)
//       });
//       const data = await response.json();
//       setResponseData(data.data);
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 z-50 " style={{width:'896px'}}>
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-9xl mx-auto max-h-[90vh] overflow-y-auto" >
//         {/* Modal Header */}
//         <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200 bg-blue-900 rounded-t-lg sticky top-0">
//           <h2 className="text-lg sm:text-xl font-semibold text-white">Register Settings</h2>
//           <button
//             onClick={onClose}
//             className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors"
//           >
//             <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
//           </button>
//         </div>
  
//         {/* Modal Body */}
//         <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {/* Left Column */}
//             <div className="space-y-4">
//               {/* Function Code */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
//                   Function Code
//                 </label>
//                 <select
//                   value={selectedFunction}
//                   onChange={(e) => setSelectedFunction(e.target.value)}
//                   className="w-full p-2 sm:p-2.5 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm sm:text-base"
//                 >
//                   <option value="">Select Function Code</option>
//                   {functionCodes.map((func) => (
//                     <option key={func.code} value={func.code}>
//                       {func.code} - {func.description}
//                     </option>
//                   ))}
//                 </select>
//               </div>
  
//               {/* Start and End Address */}
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
//                     Start Address
//                   </label>
//                   <input
//                     type="number"
//                     value={startAddress}
//                     onChange={(e) => setStartAddress(e.target.value)}
//                     placeholder="100"
//                     className="w-full p-2 sm:p-2.5 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm sm:text-base"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
//                     End Address
//                   </label>
//                   <input
//                     type="number"
//                     value={endAddress}
//                     onChange={(e) => setEndAddress(e.target.value)}
//                     placeholder="180"
//                     className="w-full p-2 sm:p-2.5 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm sm:text-base"
//                   />
//                 </div>
//               </div>
  
//               {/* Combine Registers and Endianness */}
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
//                     Combine Registers
//                   </label>
//                   <select
//                     value={combineRegisters.toString()}
//                     onChange={(e) => setCombineRegisters(e.target.value === 'true')}
//                     className="w-full p-2 sm:p-2.5 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm sm:text-base"
//                   >
//                     <option value="true">True</option>
//                     <option value="false">False</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
//                     Endianness
//                   </label>
//                   <select
//                     value={endianness}
//                     onChange={(e) => setEndianness(e.target.value)}
//                     className="w-full p-2 sm:p-2.5 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm sm:text-base"
//                   >
//                     <option value="big">Big Endian</option>
//                     <option value="little">Little Endian</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
  
//             {/* Right Column */}
//             <div className="space-y-4">
//           <h3 className="text-lg font-medium text-gray-900">Register Values</h3>
//           <div className="overflow-y-auto max-h-[50vh] space-y-2">
//             {loading ? (
//               <div className="text-center py-4">Loading...</div>
//             ) : responseData ? (
//               responseData.map((item) => (
//                 <div key={item.register_address} className="grid grid-cols-2 gap-2">
//                   <div className="relative">
//                     <label className="block text-xs text-gray-500">Register {item.register_address}</label>
//                     <input
//                       type="text"
//                       value={item.register_address}
//                       readOnly
//                       className="w-full p-2 bg-gray-50 border border-gray-300 rounded-md text-sm"
//                     />
//                   </div>
//                   <div className="relative">
//                     <label className="block text-xs text-gray-500">Value</label>
//                     <input
//                       type="text"
//                       value={item.value}
//                       readOnly
//                       className="w-full p-2 bg-gray-50 border border-gray-300 rounded-md text-sm"
//                     />
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="text-center py-4 text-gray-500">
//                 Submit to view register values
//               </div>
//             )}
//           </div>
//         </div>

//         {/* ... rest of the modal code remains same ... */}
//       </div>
//     </div>
  
//         {/* Modal Footer */}
//         <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-3 p-4 border-t border-gray-200 bg-gray-50 rounded-b-lg sticky bottom-0">
//           <button
//             onClick={onClose}
//             className="w-full sm:w-auto px-4 py-2 text-sm sm:text-base text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSubmit}
//             disabled={loading}
//             className="w-full sm:w-auto px-4 py-2 text-sm sm:text-base bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {loading ? 'Loading...' : 'Submit'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
  
// };

// export default RegisterSettingsModal;



import React, { useState } from 'react';
import { X } from 'lucide-react';
import axios from 'axios';

const RegisterSettingsModal = ({ isOpen, onClose }) => {
  const [selectedFunction, setSelectedFunction] = useState('');
  const [startAddress, setStartAddress] = useState('');
  const [endAddress, setEndAddress] = useState('');
  const [combineRegisters, setCombineRegisters] = useState(false);
  const [endianness, setEndianness] = useState('big');
  const [registerData, setRegisterData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const functionCodes = [
    { code: '0x01', description: 'Read Coil Status' },
    { code: '0x02', description: 'Read Input Status' },
    { code: '0x03', description: 'Read Holding Registers' },
    { code: '0x04', description: 'Read Input Registers' },
    { code: '0x05', description: 'Force Single Coil' },
    { code: '0x06', description: 'Preset Single Register' },
    { code: '0x0F', description: 'Force Multiple Coils' },
    { code: '0x10', description: 'Preset Multiple Registers' }
  ];

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.post('http://localhost:8000/read_registers', {
        function_code: parseInt(selectedFunction, 16),
        register_range_start: parseInt(startAddress),
        register_range_end: parseInt(endAddress),
        combine_registers: combineRegisters,
        endianess: endianness
      });

      setRegisterData(response.data.data);
    } catch (err) {
      setError(err.message || 'Failed to fetch register data');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200 bg-blue-900 rounded-t-lg">
          <h2 className="text-lg sm:text-xl font-semibold text-white">Register Settings</h2>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Function Code Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
              Function Code
            </label>
            <select
              value={selectedFunction}
              onChange={(e) => setSelectedFunction(e.target.value)}
              className="w-full p-2 sm:p-2.5 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm sm:text-base"
            >
              <option value="">Select Function Code</option>
              {functionCodes.map((func) => (
                <option key={func.code} value={func.code}>
                  {func.code} - {func.description}
                </option>
              ))}
            </select>
          </div>

          {/* Register Address Range */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Start Address
              </label>
              <input
                type="number"
                value={startAddress}
                onChange={(e) => setStartAddress(e.target.value)}
                placeholder="0"
                className="w-full p-2 sm:p-2.5 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm sm:text-base"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                End Address
              </label>
              <input
                type="number"
                value={endAddress}
                onChange={(e) => setEndAddress(e.target.value)}
                placeholder="100"
                className="w-full p-2 sm:p-2.5 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Combine Registers and Endianness */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Combine Registers
              </label>
              <select
                value={combineRegisters.toString()}
                onChange={(e) => setCombineRegisters(e.target.value === 'true')}
                className="w-full p-2 sm:p-2.5 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm sm:text-base"
              >
                <option value="false">False</option>
                <option value="true">True</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Endianness
              </label>
              <select
                value={endianness}
                onChange={(e) => setEndianness(e.target.value)}
                className="w-full p-2 sm:p-2.5 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm sm:text-base"
              >
                <option value="big">Big Endian</option>
                <option value="little">Little Endian</option>
              </select>
            </div>
          </div>

          {/* Register Data Display */}
          {registerData && (
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Register Values</h3>
              <div className="max-h-60 overflow-y-auto border border-gray-200 rounded-md">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Address</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Value</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {registerData.map((item) => (
                      <tr key={item.register_address}>
                        <td className="px-4 py-2 text-sm text-gray-900">{item.register_address}</td>
                        <td className="px-4 py-2 text-sm text-gray-900">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Error Display */}
          {error && (
            <div className="text-red-600 text-sm mt-2">
              {error}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-3 p-4 border-t border-gray-200 bg-gray-50 rounded-b-lg">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-sm sm:text-base text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full sm:w-auto px-4 py-2 text-sm sm:text-base bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Loading...' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterSettingsModal;