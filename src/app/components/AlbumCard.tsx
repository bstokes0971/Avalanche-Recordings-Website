interface AlbumCardProps {
  image: string;
  artist: string;
  album: string;
  year: string;
  link: string;
}

export function AlbumCard({ image, artist, album, year, link }: AlbumCardProps) {
  return (
    <div className="flex flex-col">
      {/* Album Cover - 1600x1600 aspect ratio */}
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="aspect-square overflow-hidden bg-gray-100 block group"
      >
        <img
          src={image}
          alt={`${album} by ${artist}`}
          className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-70"
        />
      </a>
      
      {/* Album Info */}
      <div className="mt-4 space-y-1">
        <p className="text-sm text-white">{artist}</p>
        <p className="text-sm text-gray-300">{album}</p>
        <p className="text-sm text-gray-300">{year}</p>
      </div>
    </div>
  );
}