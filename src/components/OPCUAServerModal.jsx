// import React, { useState } from 'react';
// import { X } from 'lucide-react';

// const OPCUAServerModal = ({ isOpen, onClose }) => {
//   const [formData, setFormData] = useState({
//     endpointUrl: 'opc.tcp://localhost:4840',
//     securityMode: 'Sign',
//     securityPolicy: 'Basic256Sha256',
//     applicationName: 'OPCUA Server',
//     applicationUri: 'urn:localhost:OPCUAServer',
//     serverPort: '4840',
//     maxConnections: '100',
//     enableAnonymous: true,
//     certificatePath: '',
//     privateKeyPath: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//         {/* Header */}
//         <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-indigo-50 to-blue-50">
//           <h2 className="text-xl font-semibold text-indigo-950">OPC UA Server Configuration</h2>
//           <button
//             onClick={onClose}
//             className="p-1 hover:bg-indigo-100 rounded-full transition-colors"
//           >
//             <X className="text-gray-500" size={20} />
//           </button>
//         </div>

//         {/* Content */}
//         <div className="p-6 space-y-6">
//           {/* Basic Settings */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-medium text-indigo-900">Basic Settings</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Endpoint URL
//                 </label>
//                 <input
//                   type="text"
//                   name="endpointUrl"
//                   value={formData.endpointUrl}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Server Port
//                 </label>
//                 <input
//                   type="text"
//                   name="serverPort"
//                   value={formData.serverPort}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Security Settings */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-medium text-indigo-900">Security Settings</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Security Mode
//                 </label>
//                 <select
//                   name="securityMode"
//                   value={formData.securityMode}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//                 >
//                   <option value="None">None</option>
//                   <option value="Sign">Sign</option>
//                   <option value="SignAndEncrypt">Sign and Encrypt</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Security Policy
//                 </label>
//                 <select
//                   name="securityPolicy"
//                   value={formData.securityPolicy}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//                 >
//                   <option value="None">None</option>
//                   <option value="Basic128Rsa15">Basic128Rsa15</option>
//                   <option value="Basic256">Basic256</option>
//                   <option value="Basic256Sha256">Basic256Sha256</option>
//                 </select>
//               </div>
//             </div>
//           </div>

//           {/* Application Settings */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-medium text-indigo-900">Application Settings</h3>
//             <div className="grid grid-cols-1 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Application Name
//                 </label>
//                 <input
//                   type="text"
//                   name="applicationName"
//                   value={formData.applicationName}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Application URI
//                 </label>
//                 <input
//                   type="text"
//                   name="applicationUri"
//                   value={formData.applicationUri}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Authentication Settings */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-medium text-indigo-900">Authentication Settings</h3>
//             <div className="space-y-4">
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="enableAnonymous"
//                   checked={formData.enableAnonymous}
//                   onChange={handleInputChange}
//                   className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//                 />
//                 <label className="ml-2 block text-sm text-gray-700">
//                   Enable Anonymous Access
//                 </label>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Certificate Path
//                 </label>
//                 <input
//                   type="text"
//                   name="certificatePath"
//                   value={formData.certificatePath}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Private Key Path
//                 </label>
//                 <input
//                   type="text"
//                   name="privateKeyPath"
//                   value={formData.privateKeyPath}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="flex items-center justify-end gap-4 p-4 border-t border-gray-200 bg-gray-50">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={() => {
//               console.log('Save configuration:', formData);
//               onClose();
//             }}
//             className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors"
//           >
//             Save Configuration
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OPCUAServerModal;

import React, { useState } from 'react';
import { X } from 'lucide-react';

const OPCUAServerModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    endpointUrl: 'opc.tcp://localhost:4840',
    serverPort: '4840',
    enableAnonymous: false,
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-indigo-50 to-blue-50">
          <h2 className="text-xl font-semibold text-indigo-950">OPC UA Server Configuration</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-indigo-100 rounded-full transition-colors"
          >
            <X className="text-gray-500" size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Basic Settings */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-indigo-900">Basic Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Endpoint URL
                </label>
                <input
                  type="text"
                  name="endpointUrl"
                  value={formData.endpointUrl}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Server Port
                </label>
                <input
                  type="text"
                  name="serverPort"
                  value={formData.serverPort}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
          </div>

          {/* Authentication Settings */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-indigo-900">Authentication Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  name="enableAnonymous"
                  checked={formData.enableAnonymous}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  Enable Anonymous Access
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    disabled={formData.enableAnonymous}
                    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 
                      ${formData.enableAnonymous ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      disabled={formData.enableAnonymous}
                      className={`flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 
                        ${formData.enableAnonymous ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                    />
                    <button
                      onClick={() => {
                        console.log('Connecting with:', formData);
                      }}
                      className="px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors"
                    >
                      Connect
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-4 p-4 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              console.log('Save configuration:', formData);
              onClose();
            }}
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors"
          >
            Save Configuration
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default OPCUAServerModal;