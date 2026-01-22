export function MusicPage() {
  return (
    <main className="bg-neutral-800 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div style={{ width: '100%', maxWidth: '800px', margin: '40px auto' }}>
          <iframe 
            width="100%" 
            height="500" 
            scrolling="no" 
            frameBorder="no" 
            allow="autoplay"
            style={{ background: 'rgba(0,0,0,0.5)', borderRadius: '4px' }}
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/versus-brett/sets/2020-avalanche-recordings&color=%23FFB6C1&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false"
          />
        </div>
      </div>
    </main>
  );
}
