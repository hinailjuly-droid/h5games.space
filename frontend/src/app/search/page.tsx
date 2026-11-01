'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { promptsApi } from '@/lib/api';
import { Prompt } from '@/types';
import PromptCard from '@/components/prompts/PromptCard';
import PromptModal from '@/components/prompts/PromptModal';
import { Search as SearchIcon, Sparkles } from 'lucide-react';

function SearchPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchInput, setSearchInput] = useState(query);
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeModalPrompt, setActiveModalPrompt] = useState<Prompt | null>(null);

  useEffect(() => {
    async function doSearch() {
      if (!query.trim()) {
        setPrompts([]);
        return;
      }
      setLoading(true);
      try {
        const res = await promptsApi.getPrompts({ search: query, limit: 30 });
        setPrompts(res.prompts);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    doSearch();
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchInput.trim())}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Search Header */}
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          Search AI Prompts
        </h1>
        <form onSubmit={handleSearch} className="relative">
          <div className="relative flex items-center rounded-2xl bg-[#0e1320] border border-white/10 p-1.5 focus-within:border-purple-500">
            <SearchIcon className="w-5 h-5 text-gray-400 ml-3 shrink-0" />
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search by keywords, subject, camera lens..."
              className="w-full bg-transparent px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-purple-600 text-white hover:bg-purple-500 transition-colors"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* Results */}
      {query && (
        <div className="flex items-center justify-between text-xs text-gray-400 border-b border-white/[0.08] pb-4">
          <span>
            Results for <span className="text-white font-bold">&quot;{query}&quot;</span>: {prompts.length} prompts
          </span>
        </div>
      )}

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/[0.02] border border-white/[0.06] aspect-[4/5] animate-pulse"
            />
          ))}
        </div>
      ) : prompts.length === 0 && query ? (
        <div className="text-center py-20 bg-white/[0.02] rounded-3xl border border-white/[0.06] max-w-md mx-auto space-y-3 px-6">
          <Sparkles className="w-8 h-8 text-purple-400 mx-auto" />
          <h2 className="text-base font-bold text-white">No Prompts Found</h2>
          <p className="text-xs text-gray-400">
            Try searching for another style like &quot;cinematic&quot;, &quot;saree&quot;, or &quot;85mm&quot;.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {prompts.map((prompt) => (
            <PromptCard
              key={prompt._id}
              prompt={prompt}
              onOpenModal={setActiveModalPrompt}
            />
          ))}
        </div>
      )}

      <PromptModal
        prompt={activeModalPrompt}
        onClose={() => setActiveModalPrompt(null)}
      />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-xs text-gray-500">Loading search...</div>}>
      <SearchPageContent />
    </Suspense>
  );
}
