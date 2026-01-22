import { AlbumCard } from "@/app/components/AlbumCard";

const albums = [
  {
    id: 7,
    image: "/images/024 - june's not faking - magic 2022.jpeg",
    artist: "June's Not Faking",
    album: "Magic",
    year: "2022",
    link: "https://open.spotify.com/track/5ljVQLlxx3OPL0PYMTL7bG?flow_ctx=f683d3d6-7979-4c71-9243-a58d40237b2c%3A1769077510",
  },
  {
    id: 8,
    image: "/images/026 - cyaan - falling apart - 2021.jpeg",
    artist: "Cyaan",
    album: "Falling Apart",
    year: "2021",
    link: "https://www.youtube.com/watch?v=37jUMrle5sQ",
  },
  {
    id: 9,
    image: "/images/023 - bao lg - promises - 2022.jpeg",
    artist: "Bao Lg",
    album: "Promises",
    year: "2022",
    link: "https://open.spotify.com/track/7vPTOLwmVtSUanUZQ1cF2d",
  },
  
  {
    id: 4,
    image: "/images/027 - sage motel - perspective 2021.jpg",
    artist: "Sage Motel",
    album: "Perspective",
    year: "2021",
    link: "https://www.youtube.com/watch?v=aTEQn1Ncm3c",
  },
  {
    id: 5,
    image: "/images/026 - turnover+art - 2021.jpeg",
    artist: "Sage Motel",
    album: "Turnover",
    year: "2021",
    link: "https://www.youtube.com/watch?v=-ckEtR6uJT8",
  },
  {
    id: 6,
    image: "/images/016 - native state - soil 2020.jpg",
    artist: "Native State",
    album: "Soil",
    year: "2020",
    link: "https://www.youtube.com/watch?v=gsEmXy9KLO8",
  },
  {
    id: 10,
    image: "/images/022 - deceive the king - shattered crown - 2021.jpeg",
    artist: "Deceive The King",
    album: "Shattered Crown",
    year: "2021",
    link: "https://www.youtube.com/watch?v=ZwVamcO_6JA",
  },
  {
    id: 11,
    image: "/images/021 - cyaan-paradise 2021.jpeg",
    artist: "Cyaan",
    album: "Paradise",
    year: "2021",
    link: "https://www.youtube.com/watch?v=GvWWd2hbKFY",
  },
  {
    id: 12,
    image: "/images/018 - Sage+Motel+-+August - 2021.jpg",
    artist: "Sage Motel",
    album: "August",
    year: "2021",
    link: "https://www.youtube.com/watch?v=yhnjxqxycYo",
  },
  {
    id: 13,
    image: "/images/017 - free safety - 2020.jpg",
    artist: "Free Safety",
    album: "Let's Pretend That I Don't Know You",
    year: "2020",
    link: "https://www.youtube.com/watch?v=AITz9zR7fUY",
  },
  {
    id: 14,
    image: "/images/015 - Sage+Motel+-+Desperate 2020.jpg",
    artist: "Sage Motel",
    album: "Desperate",
    year: "2020",
    link: "https://www.youtube.com/watch?v=CzxZEPRc0Vo",
  },
  {
    id: 18,
    image: "/images/029 - Homecoming-st-cover-002-1600x1600-2020.png",
    artist: "Homecoming",
    album: "S/T (Self-Titled)",
    year: "2020",
    link: "https://homecomingtx.bandcamp.com/album/s-t-self-titled",
  },
  {
    id: 19,
    image: "/images/009 - homecoming - tremors single 2020.png",
    artist: "Homecoming",
    album: "Tremors (Single)",
    year: "2020",
    link: "https://open.spotify.com/track/148yuUF95qo1V598l2ox6A?autoplay=true",
  },
  {
    id: 20,
    image: "/images/011 - New Blood - headspin+5.png",
    artist: "New Blood",
    album: "Headspin",
    year: "2020",
    link: "https://newbloodtx.bandcamp.com/track/headspin",
  },
  {
    id: 21,
    image: "/images/007 - Not+at+All 2020.png",
    artist: "New Blood",
    album: "Not At All",
    year: "2020",
    link: "https://newbloodtx.bandcamp.com/track/not-at-all",
  },
  {
    id: 22,
    image: "/images/006 - New Blood - Now - 2020.png",
    artist: "New Blood",
    album: "Now",
    year: "2020",
    link: "https://newbloodtx.bandcamp.com/track/now",
  },
  {
    id: 23,
    image: "/images/030_Hearts+and+Minds+REDUX_2012.png",
    artist: "Homecoming",
    album: "Hearts And Minds",
    year: "2012",
    link: "https://open.spotify.com/album/2VeU0hE72NnNUve6LHbDRh",
  },
  {
    id: 24,
    image: "/images/013 - homecoming - mixtape - 1600x1600 - 2011.png",
    artist: "Homecoming",
    album: "Mixtape",
    year: "2011",
    link: "https://homecomingtx.bandcamp.com/album/mixtape",
  },
  {
    id: 25,
    image: "/images/012 - homecoming - worthless - 2011.png",
    artist: "Homecoming",
    album: "Worthless",
    year: "2011",
    link: "https://homecomingtx.bandcamp.com/album/mixtape",
  },
  {
    id: 26,
    image: "/images/028 - vl-paragons_2011.png",
    artist: "Versus Leviathan",
    album: "Paragons",
    year: "2011",
    link: "https://open.spotify.com/album/2WnBaXMt9pkwsFu8asG4qB",
  },
  {
    id: 27,
    image: "/images/010 - vl-paragons_2008.png",
    artist: "Versus Leviathan",
    album: "Roots EP",
    year: "2008",
    link: "https://versusleviathan.bandcamp.com/album/roots-ep",
  },

];

export function HomePage() {
  return (
    <main className="bg-neutral-800 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album) => (
            <AlbumCard key={album.id} {...album} />
          ))}
        </div>
      </div>
    </main>
  );
}
