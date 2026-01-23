export function VisualsPage() {
  const videos = [
    "https://www.youtube.com/embed/F83VpJ0z-x4?rel=0&modestbranding=1&controls=1",
    "https://www.youtube.com/embed/GvWWd2hbKFY?rel=0&modestbranding=1&controls=1",
    "https://www.youtube.com/embed/-ckEtR6uJT8?rel=0&modestbranding=1&controls=1",
    "https://www.youtube.com/embed/gsEmXy9KLO8?rel=0&modestbranding=1&controls=1",
  ];

  return (
    <main className="bg-neutral-800 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((videoUrl, index) => (
            <div
              key={index}
              className="relative w-full overflow-hidden rounded-xl shadow-lg bg-black aspect-video"
            >
              <iframe
                src={videoUrl}
                title={`Video ${index + 1}`}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

