import React from 'react';

export function VideoGallery() {
  const videos = [
    { id: 'removal', src: '/Wax Removal_2.mp4', label: 'During Procedure' }
  ];

  return (
    <div className="flex justify-center">
      {videos.map((video) => (
        <div key={video.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 w-96">
          <video
            className="w-full aspect-square object-cover"
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
