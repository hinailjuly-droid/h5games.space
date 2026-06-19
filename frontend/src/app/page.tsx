import { serverApi } from "@/lib/api-server";
import Link from "next/link";
import GameCard from "@/components/games/GameCard";
import AdSlot from "@/components/ads/AdSlot";
import { ChevronLeft, ChevronRight, ChevronRightIcon } from "lucide-react";

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
    serverApi.getGames({ category: 'Arcade', limit: 6 }).catch(() => ({ games: [] })),
    serverApi.getGames({ category: 'Puzzle', limit: 6 }).catch(() => ({ games: [] })),
    serverApi.getCategories().catch(() => []),
    serverApi.getLatestBlogPosts(3).catch(() => ({ posts: [] }))
  ]);

  const allGames = allGamesData?.games || [];
  const featuredGame = featuredGamesData?.games?.[0] || allGames[0];
  const actionGames = actionGamesData?.games || [];
  const arcadeGames = arcadeGamesData?.games || [];
  const puzzleGames = puzzleGamesData?.games || [];
  const blogs = blogsData?.posts || [];

  return (
    <div className="flex flex-col gap-6 pb-20 pt-4 px-4 container mx-auto w-full">
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

      {/* 2. Featured & Recent Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-2">
        {featuredGame && (
          <div className="lg:col-span-2 row-span-2 h-[400px] lg:h-auto">
            <Link href={`/game/${featuredGame.slug}`} className="block relative w-full h-full rounded-2xl overflow-hidden group shadow-lg">
              <img src={featuredGame.thumbnail} alt={featuredGame.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 z-10">
                <h2 className="text-3xl font-black text-white mb-2">{featuredGame.title}</h2>
                <div className="flex items-center gap-3">
                  <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{featuredGame.category}</span>
                </div>
              </div>
            </Link>
          </div>
        )}
        <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {allGames.slice(featuredGame ? 1 : 0, 7).map((game: any) => (
            <div key={game.id} className="h-full">
               <GameCard game={game} />
            </div>
          ))}
        </div>
      </div>

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

    </div>
  );
}
