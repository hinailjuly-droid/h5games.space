export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl md:text-6xl font-black text-white italic uppercase mb-12 text-center">
        About <span className="text-accent underline decoration-white/10">h5games space</span>
      </h1>
      
      <div className="prose prose-invert max-w-none text-gray-400 space-y-8 text-lg font-medium leading-relaxed">
        <p>
          Founded in 2024, h5games space was born from a simple realization: the web is the ultimate gaming console. Our team of developers and curators set out to create a sanctuary for high-quality, open-source HTML5 games, providing a premium experience that honors the original creators while delivering instant fun to players globally.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div className="bg-primary-light p-8 rounded-3xl border border-white/5">
            <h2 className="text-2xl font-black text-white uppercase italic mb-4">Our Mission</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              We aggregate, curate, and showcase high-quality, open-source web games. Our goal is to empower indie developers by providing a massive audience for their GitHub-hosted experiments, while giving players a lightning-fast, beautiful interface to discover their next favorite game.
            </p>
          </div>
          <div className="bg-primary-light p-8 rounded-3xl border border-white/5">
            <h2 className="text-2xl font-black text-white uppercase italic mb-4">The h5games Standard</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Every game on our platform undergoes a rigorous quality audit. We check for mobile responsiveness, performance optimized for low-end hardware, and most importantly, an "instant-fun" factor. If it doesn't hook you in 10 seconds, it's not on the Space.
            </p>
          </div>
        </div>

        <section className="space-y-6">
          <h3 className="text-2xl font-black text-white uppercase italic tracking-tight underline decoration-accent/30 underline-offset-8">Why We Are Different</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-bold text-accent italic">Open Source First</h4>
              <p className="text-xs leading-relaxed text-gray-500">Every title is sourced from GitHub. We respect licenses and provide direct links back to the original source code for every game.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-accent italic">Zero Barriers</h4>
              <p className="text-xs leading-relaxed text-gray-500">No accounts, no downloads, no high-end hardware. Just click and play directly in your mobile or desktop browser.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-accent italic">Community Driven</h4>
              <p className="text-xs leading-relaxed text-gray-500">We constantly update our library based on user suggestions and the latest trending repositories on GitHub.</p>
            </div>
          </div>
        </section>
        
        <div className="pt-20 border-t border-white/5 text-center">
            <p className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-4">Architecture</p>
            <p className="text-gray-500 italic">
                h5games space is a highly optimized Next.js 14 platform, powered by an advanced micro-services backend and a massive community of indie developers worldwide.
            </p>
        </div>
      </div>
    </div>
  );
}
