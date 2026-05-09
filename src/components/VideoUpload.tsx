import React from 'react';

interface VideoUploadProps {
  onClose: () => void;
}

export function VideoUpload({ onClose }: VideoUploadProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Upload Video</h2>
        <p className="text-gray-600 mb-4">Video upload functionality would go here.</p>
        <button
          onClick={onClose}
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}
