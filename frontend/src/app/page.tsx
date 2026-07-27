import { serverApi } from "@/lib/api-server";
import Link from "next/link";
import GameCard from "@/components/games/GameCard";
import AdSlot from "@/components/ads/AdSlot";
import { ChevronLeft, ChevronRight, ChevronRightIcon } from "lucide-react";
import FeaturedCarousel from "@/components/games/FeaturedCarousel";

export const revalidate = 60;

export default async function HomePage() {
  const [
    allGamesData,
    featuredGamesData,
    actionGamesData,
    arcadeGamesData,
    puzzleGamesData,
    categories,
    blogsData
  ] = await Promise.all([
    serverApi.getGames({ limit: 12 }),
    serverApi.getFeaturedGames().catch(() => null),
    serverApi.getGames({ category: 'Action', limit: 7 }).catch(() => ({ games: [] })),
    serverApi.getGames({ category: 'Arcade', limit: 9 }).catch(() => ({ games: [] })),
    serverApi.getGames({ category: 'Puzzle', limit: 9 }).catch(() => ({ games: [] })),
    serverApi.getCategories().catch(() => []),
    serverApi.getLatestBlogPosts(6).catch(() => ({ posts: [] }))
  ]);

  const allGames = allGamesData?.games || [];
  const featuredGame = featuredGamesData?.games?.[0] || allGames[0];
  const actionGames = actionGamesData?.games || [];
  const arcadeGames = arcadeGamesData?.games || [];
  const puzzleGames = puzzleGamesData?.games || [];
  const blogs = blogsData?.posts || [];

  return (
    <div className="flex flex-col gap-6 pb-20 pt-4 px-4 max-w-7xl mx-auto w-full">
      {/* 1. Category Slider */}
      {categories?.length > 0 && (
        <div className="relative mt-4 flex items-center group">
          <button className="hidden md:flex absolute left-0 z-10 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-accent items-center justify-center backdrop-blur transition-all">
            <ChevronLeft size={20} />
          </button>
          <div className="w-full overflow-x-auto scrollbar-hide flex gap-3 py-2 px-1">
            {categories.map((cat: any) => (
              <Link 
                key={cat.id || cat.slug || cat.name} 
                href={`/games?category=${cat.slug || cat.name}`}
                className="py-3 px-6 whitespace-nowrap bg-primary-light hover:bg-accent text-gray-300 hover:text-white rounded-xl transition-all duration-300 text-sm font-semibold shadow-lg shadow-black/20"
              >
                {cat.name}
              </Link>
            ))}
          </div>
          <button className="hidden md:flex absolute right-0 z-10 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-accent items-center justify-center backdrop-blur transition-all">
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      {/* 2. Featured Carousel */}
      <FeaturedCarousel games={featuredGamesData?.games?.length > 0 ? featuredGamesData.games : allGames.slice(0, 5)} />

      <AdSlot position="home_hero" className="w-full my-4" />

      {/* 3. Action Games Section (Large left, small right) */}
      {actionGames.length > 0 && (
        <div className="mt-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-2xl text-white">Action Games</h2>
            <Link href="/games?category=Action" className="text-gray-400 hover:text-accent transition-colors flex items-center text-sm font-semibold">
              View All <ChevronRightIcon size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
             {actionGames.map((game: any, index: number) => (
               <div key={game.id} className={index === 0 ? "col-span-2 row-span-2 h-full" : "h-full"}>
                 <GameCard game={game} />
               </div>
             ))}
          </div>
        </div>
      )}
      <AdSlot position="home_section" className="w-full my-4" />

      {/* 4. Split Category Sections (Arcade vs Puzzles) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        {/* Arcade */}
        {arcadeGames.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-2xl text-white">Arcade Games</h2>
              <Link href="/games?category=Arcade" className="text-gray-400 hover:text-accent transition-colors flex items-center text-sm font-semibold">
                View All <ChevronRightIcon size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {arcadeGames.map((game: any) => (
                <div key={game.id} className="h-full">
                  <GameCard game={game} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Puzzles */}
        {puzzleGames.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-2xl text-white">Puzzle Games</h2>
              <Link href="/games?category=Puzzle" className="text-gray-400 hover:text-accent transition-colors flex items-center text-sm font-semibold">
                View All <ChevronRightIcon size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {puzzleGames.map((game: any) => (
                <div key={game.id} className="h-full">
                  <GameCard game={game} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 5. Blog Section */}
      {blogs.length > 0 && (
        <div className="mt-12 pt-12 border-t border-white/5">
           <div className="flex items-center justify-between mb-8">
            <h2 className="font-bold text-3xl text-white">Latest News & Guides</h2>
            <Link href="/blog" className="text-gray-400 hover:text-accent transition-colors flex items-center font-semibold">
              View Blog <ChevronRightIcon size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.map((post: any) => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="group block bg-primary-light rounded-2xl overflow-hidden border border-white/5 hover:border-accent/30 transition-colors">
                <div className="aspect-video relative overflow-hidden">
                  <img src={post.coverImage || 'https://images.unsplash.com/photo-1542751371-adc38448a05e'} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="text-accent text-xs font-bold uppercase tracking-wider mb-2 block">{post.category || "News"}</span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-3">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 6. SEO Description */}
      <div className="mt-16 pt-12 pb-10 border-t border-white/5 text-gray-400">
        <h2 className="text-3xl font-black text-white mb-6">H5GAMES SPACE: Your Home for Free Browser Gaming</h2>
        <div className="space-y-6 text-sm md:text-base leading-relaxed">
          <p>
            <strong className="text-white font-bold">H5GAMES SPACE</strong> is your home for free, instant-play browser gaming. We've built a library of over 1,000 HTML5 games spanning every genre imaginable — puzzle, arcade, action, strategy, racing, sports, card games, and more — all playable directly in your browser. No downloads, no installs, no account sign-ups. Just click a game and start playing in seconds, whether you're on a desktop, laptop, tablet, or phone.
          </p>
          
          <h3 className="text-xl font-bold text-white mt-8 mb-4">Why We Built This</h3>
          <p>
            Gaming should be simple. Too many platforms today bury you in downloads, storage requirements, invasive permissions, and mandatory logins before you've even played a single level. We wanted to bring back the feeling of the early browser-gaming era — open a tab, pick a game, play — but with modern HTML5 technology that makes everything faster, smoother, and better looking than ever before. Every game on H5GAMES SPACE runs natively in your browser using open web standards, which means it works across devices without the compatibility headaches of older Flash-based sites.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Explore Every Genre</h3>
          <p>
            Our games are organized into clear, easy-to-browse categories so you can find exactly what you're in the mood for:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4 mb-4">
            <li><strong className="text-white">Puzzle & Match 3</strong> — brain teasers, tile matchers, and logic challenges</li>
            <li><strong className="text-white">Mahjong & Card Games</strong> — classic solitaire and tile-matching favorites</li>
            <li><strong className="text-white">Hidden Object</strong> — sharpen your eye for detail across dozens of scenes</li>
            <li><strong className="text-white">Action & Arcade</strong> — fast-paced reflex games and retro-inspired classics</li>
            <li><strong className="text-white">Strategy & Simulation</strong> — build, manage, and plan your way to victory</li>
            <li><strong className="text-white">Sports & Racing</strong> — competitive games built for quick sessions or long play</li>
            <li><strong className="text-white">Word Games & Board Games</strong> — timeless formats reimagined for the browser</li>
          </ul>
          <p>
            New titles are added regularly, so there's always something fresh to discover, alongside the tried-and-true favorites that keep players coming back.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Built for Every Screen</h3>
          <p>
            Every game on H5GAMES SPACE is optimized for full-screen play and designed to work smoothly whether you're on a desktop monitor or a mobile screen. Our layout adapts to your device automatically, so the experience stays consistent no matter how you access the site. That means you can start a game on your laptop during a break and pick up something similar on your phone later — no friction, no setup.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">More Than Just Games</h3>
          <p>
            Beyond our game library, our <Link href="/blog" className="text-accent hover:underline">Blog</Link> covers guides, roundups, and industry trends — from the best browser gaming sites to explainers on how HTML5 and WebGL are shaping the future of web gaming. Whether you're a curious player or a fellow developer, there's always something worth reading.
          </p>
          <p>
            We've also built a Discord community for players who want more than just a games library. Join to chat with other players, share your favorite finds, request new titles, and get updates on what's coming next to the platform. It's a space built around the same idea as the site itself: gaming should be social, accessible, and free of unnecessary barriers.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Free, Open, and Always Improving</h3>
          <p>
            H5GAMES SPACE is free to use and built on open-source foundations. We believe browser gaming works best when it's accessible to everyone — no paywalls, no forced downloads, no friction between you and the fun. As HTML5 technology continues to evolve, we're committed to expanding our library, improving performance, and making this the best place on the web to jump into a game whenever you have a few spare minutes or a few spare hours.
          </p>
          <p className="text-white font-semibold mt-6 text-center text-lg">
            Ready to play? Browse our <Link href="/games" className="text-accent hover:underline">categories</Link>, pick a game, and dive in — it's already loading.
          </p>
        </div>
      </div>

    </div>
  );
}
