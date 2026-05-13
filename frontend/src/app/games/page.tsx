import { serverApi } from "@/lib/api-server";
import GameGrid from "@/components/games/GameGrid";
import GameFilters from "@/components/games/GameFilters";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import AdSlot from "@/components/ads/AdSlot";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse Games | H5GAMES SPACE",
  description: "Browse thousands of free HTML5 games across multiple categories.",
};

interface Props {
  searchParams: Promise<{
    page?: string;
    category?: string;
    sort?: string;
    search?: string;
  }>;
}

export default async function GamesPage({ searchParams }: Props) {
  const { page: pageStr, category, sort, search } = await searchParams;
  
  const page = parseInt(pageStr || '1');
  const limit = 44;

  const data = await serverApi.getGames({ 
    page, 
    category: category || '', 
    sort: sort || 'stars', 
    search: search || '', 
    limit 
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-white italic uppercase mb-2">
              Browse <span className="text-accent underline decoration-white/10">Games</span>
            </h1>
            <p className="text-gray-500 font-medium tracking-tight">
              {data ? `Showing ${data.pagination.total} open-source titles` : 'Exploring the vault...'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <div className="sticky top-32">
              <GameFilters />
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <GameGrid 
              games={data?.games || []} 
            />

            {/* AdSlot - List Inline */}
            <AdSlot position="list_inline" />

            {/* Pagination */}
            {data && data.pagination.pages > 1 && (
              <div className="mt-16 flex items-center justify-center gap-2">
                <Pagination 
                  currentPage={page} 
                  totalPages={data.pagination.pages} 
                  category={category}
                  sort={sort}
                  search={search}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Pagination({ currentPage, totalPages, category, sort, search }: any) {
  const getUrl = (p: number) => {
    const params = new URLSearchParams();
    if (p > 1) params.set('page', p.toString());
    if (category) params.set('category', category);
    if (sort) params.set('sort', sort);
    if (search) params.set('search', search);
    const query = params.toString();
    return `/games${query ? `?${query}` : ''}`;
  };

  const pages = [];
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, currentPage + 2);

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center gap-3">
      {currentPage > 1 ? (
        <Link
          href={getUrl(currentPage - 1)}
          className="w-10 h-10 rounded-xl border border-white/5 bg-primary-light flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all group"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
        </Link>
      ) : (
        <div className="w-10 h-10 rounded-xl border border-white/5 bg-primary-light flex items-center justify-center text-gray-400 opacity-30 cursor-not-allowed">
          <ChevronLeft size={20} />
        </div>
      )}
      
      <div className="flex items-center gap-2">
        {startPage > 1 && (
          <>
            <Link 
              href={getUrl(1)} 
              className="w-10 h-10 rounded-xl text-sm font-black text-gray-500 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center"
            >
              1
            </Link>
            <span className="text-gray-700 font-bold px-1">...</span>
          </>
        )}
        
        {pages.map((p) => (
          <Link
            key={p}
            href={getUrl(p)}
            className={`w-10 h-10 rounded-xl text-sm font-black transition-all flex items-center justify-center ${
              currentPage === p 
                ? 'bg-accent text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] ring-1 ring-white/20' 
                : 'text-gray-500 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10'
            }`}
          >
            {p}
          </Link>
        ))}

        {endPage < totalPages && (
          <>
            <span className="text-gray-700 font-bold px-1">...</span>
            <Link 
              href={getUrl(totalPages)} 
              className="w-10 h-10 rounded-xl text-sm font-black text-gray-500 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center"
            >
              {totalPages}
            </Link>
          </>
        )}
      </div>

      {currentPage < totalPages ? (
        <Link
          href={getUrl(currentPage + 1)}
          className="w-10 h-10 rounded-xl border border-white/5 bg-primary-light flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all group"
        >
          <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      ) : (
        <div className="w-10 h-10 rounded-xl border border-white/5 bg-primary-light flex items-center justify-center text-gray-400 opacity-30 cursor-not-allowed">
          <ChevronRight size={20} />
        </div>
      )}
    </div>
  );
}
