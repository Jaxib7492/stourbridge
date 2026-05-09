import React from 'react';

export function ClinicVideoGallery() {
  const clinicVideos = [
    { id: 'raw', src: '/Raw_2.mp4', label: 'Before Treatment' }
  ];

  return (
    <div className="space-y-4">
      {clinicVideos.map((video) => (
        <div key={video.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <video
            className="w-full h-auto"
            controls
            loop
            muted
            playsInline
          >
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
}
