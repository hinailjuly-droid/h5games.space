import { serverApi } from "@/lib/api-server";
import { Star, ChevronRight, Flame as FlameIcon } from "lucide-react";
import Link from "next/link";
import GameGrid from "@/components/games/GameGrid";
import GameCard from "@/components/games/GameCard";
import Button from "@/components/ui/Button";
import AdSlot from "@/components/ads/AdSlot";
import BlogCard from "@/components/BlogCard";
import HomeHero from "@/components/home/HomeHero";
import CategoryGrid from "@/components/home/CategoryGrid";
import CTASection from "@/components/home/CTASection";

export const revalidate = 3600; // Revalidate every hour

export default async function HomePage() {
  const [
    featuredGames,
    trendingGames,
    popularGames,
    latestPosts,
    categories
  ] = await Promise.all([
    serverApi.getFeaturedGames(),
    serverApi.getTrendingGames(),
    serverApi.getPopularGames(),
    serverApi.getLatestBlogPosts(3),
    serverApi.getCategories()
  ]);

  const getCategoryThumbnail = (name: string) => {
    const mapping: Record<string, string> = {
      'Puzzle': '/assets/categories/puzzle.png',
      'Mahjong': '/assets/categories/mahjong.png',
      'Hidden Object': '/assets/categories/hidden_object.png',
      'Card & Solitaire': '/assets/categories/card_solitaire.png',
      'Match 3': '/assets/categories/match3.png',
      'Action & Arcade': '/assets/categories/action_arcade.png',
      'Sports': '/assets/categories/sports.png',
      'Racing': '/assets/categories/racing.png',
      'Strategy & Simulation': '/assets/categories/strategy_sim.png',
      'Word Games': '/assets/categories/word.png',
      'Board Games': '/assets/categories/board.png',
      'Multiplayer': '/assets/categories/multiplayer.png',
    };
    return (mapping[name] || '/assets/categories/puzzle.png');
  };

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <HomeHero />

      {/* AdSlot - Home Hero */}
      <AdSlot position="home_hero" className="container mx-auto px-4" />

      {/* Featured Games Section */}
      <section className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-2 uppercase italic">
              Our <span className="text-accent italic tracking-normal underline decoration-white/10">Games</span>
            </h2>
            <p className="text-gray-500 font-medium">Hand-picked premium titles from our curators.</p>
          </div>
          <Link href="/games" className="text-accent font-black uppercase text-sm tracking-widest hover:text-white transition-colors flex items-center gap-2 group">
            Explore All <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <GameGrid games={featuredGames?.slice(0, 30) || []} />

        <div className="mt-16 flex justify-center">
          <Link href="/games">
            <button className="relative group overflow-hidden bg-accent text-white font-black italic text-2xl px-12 py-5 rounded-2xl transition-all shadow-2xl shadow-accent/20 hover:scale-[1.02] active:scale-95 border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="relative z-10 flex items-center gap-3 drop-shadow-md">
                VIEW ALL GAMES <ChevronRight size={28} className="group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
          </Link>
        </div>
      </section>

      {/* Categories Grid */}
      <section id="categories" className="bg-primary-light/30 py-24 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase italic">
              Browse by <span className="text-accent">Category</span>
            </h2>
            <div className="w-20 h-1.5 bg-accent mx-auto rounded-full" />
          </div>

          <CategoryGrid categories={categories} getThumbnail={getCategoryThumbnail} />
        </div>
      </section>

      {/* Trending & Popular Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Trending */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-red-500/10 text-red-500 rounded-xl flex items-center justify-center">
                <FlameIcon size={28} />
              </div>
              <h2 className="text-3xl font-black text-white uppercase italic">Trending <span className="text-red-500">Now</span></h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {trendingGames?.slice(0, 4).map((game: any) => (
                <GameCard key={game._id} game={game} />
              ))}
            </div>
            <Link href="/trending" className="inline-block mt-8">
              <Button variant="outline" size="sm">Explore Trending</Button>
            </Link>
          </div>

          {/* Popular */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center">
                <Star size={28} />
              </div>
              <h2 className="text-3xl font-black text-white uppercase italic">Most <span className="text-accent">Played</span></h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {popularGames?.slice(0, 4).map((game: any) => (
                <GameCard key={game._id} game={game} />
              ))}
            </div>
            <Link href="/games?sort=plays" className="inline-block mt-8">
              <Button variant="outline" size="sm">Explore Popular</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase italic">
              Latest from <span className="text-accent underline decoration-white/10">h5games space</span>
            </h2>
          </div>
          <Link href="/blog" className="text-accent font-black uppercase text-sm tracking-widest hover:text-white transition-colors flex items-center gap-2 group">
            Check the Blog <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts?.posts?.map((post: any) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      </section>

      {/* AdSlot - Home Bottom */}
      <AdSlot position="home_section" />

      {/* Newsletter / CTA Section */}
      <CTASection />
    </div>
  );
}
