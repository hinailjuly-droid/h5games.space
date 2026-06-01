import { serverApi } from "@/lib/api-server";
import BlogCard from "@/components/BlogCard";
import { BlogResponse } from "@/types";
import Link from "next/link";

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export const revalidate = 3600; // Revalidate every hour

export default async function BlogListingPage({ searchParams }: Props) {
  const params = await searchParams;
  const page = parseInt(params.page || "1");
  
  let data: BlogResponse;
  try {
    data = await serverApi.getBlogPosts({ page, limit: 10 });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    data = { posts: [], pagination: { total: 0, page: 1, limit: 10, pages: 0, hasNext: false, hasPrev: false } };
  }

  const posts = data?.posts || [];
  const featuredPost = posts.find(p => p.featured) || posts[0];
  const otherPosts = posts.filter(p => p._id !== featuredPost?._id);

  return (
    <div className="bg-black min-h-screen pb-32">
      {/* Content */}
      <div className="container mx-auto px-4 mt-10 relative z-20">
        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPost && (
            <BlogCard post={featuredPost} featured={true} />
          )}

          {otherPosts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-32 bg-primary-light/20 rounded-[3rem] border border-dashed border-white/5">
             <h3 className="text-2xl font-bold text-gray-600 uppercase italic">No articles found</h3>
          </div>
        )}

        {/* Pagination */}
        {data && data.pagination.pages > 1 && (
          <div className="mt-20 flex justify-center gap-4">
            {Array.from({ length: data.pagination.pages }).map((_, i) => (
              <Link
                key={i}
                href={`/blog?page=${i + 1}`}
                className={`w-12 h-12 rounded-2xl font-black text-sm transition-all border flex items-center justify-center ${page === i + 1 ? 'bg-accent text-white border-accent shadow-lg shadow-accent/20' : 'bg-primary-light text-gray-500 border-white/5 hover:border-white/20'}`}
              >
                {i + 1}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
