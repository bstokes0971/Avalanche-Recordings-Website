export function ShopPage() {
  const products = [
    {
      url: "https://homecomingtx.bandcamp.com/album/s-t-self-titled",
      title: "Homecoming – S/T Cassette",
      price: "$12.99",
      image: "https://assets.bigcartel.com/product_images/314374740/bc-homecoming-cassette1.jpg?auto=format&fit=max&w=600", // replace with real image
    },
    {
      url: "https://homecomingtx.bandcamp.com/album/s-t-self-titled",
      title: "Homecoming – S/T Digital Album",
      price: "$9.99",
      image: "https://assets.bigcartel.com/product_images/314375223/Homecoming-st-cover-002-1600x1600.png?auto=format&fit=max&w=600", // replace with real image
    },
    {
      url: "https://homecomingtx.bandcamp.com/album/mixtape",
      title: "Homecoming – Mixtape",
      price: "$9.99",
      image: "/images/013 - homecoming - mixtape - 1600x1600 - 2011.png?auto=format&fit=max&w=600", // replace with real image
    },
    {
      url: "https://newbloodtx.bandcamp.com/track/headspin",
      title: "New Blood – Headspin",
      price: "$1.50",
      image: "/images/011 - New Blood - headspin+5.png?auto=format&fit=max&w=600", // replace with real image
    },
    {
      url: "https://versusleviathan.bandcamp.com/album/paragons",
      title: "Versus Leviathan – Paragons",
      price: "$5.99",
      image: "/images/028 - vl-paragons_2011.png?auto=format&fit=max&w=600", // replace with real image
    },
  ];

  return (
    <main className="bg-neutral-800 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((p) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl overflow-hidden bg-neutral-900/60 border border-white/10 hover:border-white/20 transition"
            >
              <div className="aspect-square bg-black">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover opacity-95 group-hover:opacity-100 transition"
                  loading="lazy"
                />
              </div>

              <div className="p-5 text-center">
                <div className="text-white font-semibold tracking-wide">{p.title}</div>
                <div className="text-white/70 mt-1">{p.price}</div>

                <div className="mt-4 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold bg-white text-black group-hover:scale-[1.02] transition">
                  View / Buy
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

