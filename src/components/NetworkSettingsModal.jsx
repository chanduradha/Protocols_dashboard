import React, { useState } from 'react';
import { X, Save, RefreshCw } from 'lucide-react';

const NetworkSettingsModal = ({ isOpen, onClose }) => {
  const [settings, setSettings] = useState({
    ipAddress: '192.168.1.100',
    subnetMask: '255.255.255.0',
    gateway: '192.168.1.1',
    portNumber: '502',
    timeout: '1000',
    retries: '3',
    deviceMode: 'server'
  });

  if (!isOpen) return null;

  const handleChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    console.log('Saving network settings:', settings);
    onClose();
  };

  const handleTest = () => {
    console.log('Testing network connection with settings:', settings);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="relative w-full max-w-lg mx-auto bg-white rounded-lg shadow-xl 
                      sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <div className="p-4 sm:p-6 md:p-8 ">
          {/* Header */}
          <div className="flex items-center justify-between mb-4  sm:p-4 border-b border-gray-200 bg-blue-900 rounded-t-lg ">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
              Network Settings
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-full"
            >
              <X size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Form */}
          <div className="space-y-4 md:space-y-6 ">
            {/* Grid layout for larger screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  IP Address
                </label>
                <input
                  type="text"
                  value={settings.ipAddress}
                  onChange={(e) => handleChange('ipAddress', e.target.value)}
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Subnet Mask
                </label>
                <input
                  type="text"
                  value={settings.subnetMask}
                  onChange={(e) => handleChange('subnetMask', e.target.value)}
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Gateway
                </label>
                <input
                  type="text"
                  value={settings.gateway}
                  onChange={(e) => handleChange('gateway', e.target.value)}
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Port Number
                </label>
                <input
                  type="text"
                  value={settings.portNumber}
                  onChange={(e) => handleChange('portNumber', e.target.value)}
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Timeout (ms)
                </label>
                <input
                  type="text"
                  value={settings.timeout}
                  onChange={(e) => handleChange('timeout', e.target.value)}
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Retries
                </label>
                <input
                  type="text"
                  value={settings.retries}
                  onChange={(e) => handleChange('retries', e.target.value)}
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Device Mode
                </label>
                <select
                  value={settings.deviceMode}
                  onChange={(e) => handleChange('deviceMode', e.target.value)}
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                >
                  <option value="server">Server</option>
                  <option value="client">Client</option>
                </select>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-3">
            <button
              onClick={handleTest}
              className="flex items-center justify-center px-4 py-2 sm:py-3 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors text-sm sm:text-base w-full sm:w-auto"
            >
              <RefreshCw size={16} className="mr-2" />
              Test Connection
            </button>
            <button
              onClick={handleSave}
              className="flex items-center justify-center px-4 py-2 sm:py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors text-sm sm:text-base w-full sm:w-auto"
            >
              <Save size={16} className="mr-2" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkSettingsModal;