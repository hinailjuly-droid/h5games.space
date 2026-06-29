import { serverApi } from "@/lib/api-server";
import { BlogPost } from "@/types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import ShareButtons from "@/components/blog/ShareButtons";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post: BlogPost = await serverApi.getPostBySlug(slug);
    if (!post) return {};
    
    return {
      title: `${post.title} | H5GAMES SPACE Blog`,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        images: [post.coverImage],
        type: 'article',
        publishedTime: post.publishedAt.toString(),
      },
    };
  } catch (error) {
    return {};
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  
  let post: BlogPost | null = null;
  try {
    post = await serverApi.getPostBySlug(slug);
  } catch (error) {
    console.error("Error fetching post:", error);
  }

  if (!post) {
    return (
      <div className="flex bg-black min-h-screen items-center justify-center text-white">
        Post not found
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen pb-32">
      {/* Hero Header */}
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          unoptimized={true}
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        <div className="container mx-auto px-4 absolute inset-0 flex flex-col justify-end pb-20">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-accent text-xs font-black uppercase italic tracking-widest mb-8 hover:translate-x-[-4px] transition-all bg-white/5 px-6 py-2.5 rounded-full border border-white/10 hover:bg-white/10"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white italic uppercase tracking-tighter mb-8 max-w-5xl leading-none">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-8 text-xs font-bold text-gray-300 uppercase tracking-widest border-t border-white/10 pt-8 mt-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border-2 border-white/20 shadow-xl overflow-hidden bg-primary-lighter">
                {post.author.name.toLowerCase() === 'h5games space team' ? (
                  <Image 
                    src="/assets/team/h5games_team.png" 
                    alt="H5Games Space Team" 
                    width={48} 
                    height={48} 
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <Image 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    width={48} 
                    height={48} 
                    className="object-cover w-full h-full"
                  />
                )}
              </div>
              <span className="text-white font-black italic uppercase tracking-widest text-[10px]">{post.author.name}</span>
            </div>
            <div className="flex items-center gap-2 font-mono">
              <Calendar size={16} className="text-accent" />
              {new Date(post.publishedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            <div className="flex items-center gap-2 font-mono">
              <Clock size={16} className="text-accent" />
              {post.readTime}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <article className="lg:col-span-8">
            <div className="max-w-none text-gray-400 font-medium leading-loose">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({node, ...props}) => <h1 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter mb-8 mt-12" {...props} />,
                  h2: ({node, ...props}) => <h2 className="text-3xl md:text-4xl font-black text-white italic uppercase tracking-tighter mb-6 mt-16 flex items-center gap-4 before:w-2 before:h-8 before:bg-accent before:rounded-full" {...props} />,
                  h3: ({node, ...props}) => <h3 className="text-2xl font-black text-white italic uppercase tracking-tight mb-4 mt-10" {...props} />,
                  p: ({node, ...props}) => <p className="mb-6" {...props} />,
                  ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-8 space-y-3" {...props} />,
                  li: ({node, ...props}) => <li className="marker:text-accent" {...props} />,
                  table: ({node, ...props}) => (
                    <div className="overflow-x-auto my-12 rounded-[2rem] border border-white/5 bg-primary-light/30">
                      <table className="w-full text-left border-collapse" {...props} />
                    </div>
                  ),
                  thead: ({node, ...props}) => <thead className="bg-accent/10 border-b border-white/5" {...props} />,
                  th: ({node, ...props}) => <th className="p-6 text-xs font-black text-accent uppercase italic tracking-widest" {...props} />,
                  td: ({node, ...props}) => <td className="p-6 text-sm border-b border-white/5 text-gray-300" {...props} />,
                  tr: ({node, ...props}) => <tr className="hover:bg-white/5 transition-colors" {...props} />,
                  code: ({node, inline, ...props}: any) => (
                    inline 
                      ? <code className="bg-accent/10 text-accent px-1.5 py-0.5 rounded font-mono text-sm" {...props} />
                      : <div className="p-6 bg-primary-light border border-white/5 rounded-2xl my-8 overflow-x-auto"><code className="font-mono text-sm text-gray-300 block" {...props} /></div>
                  ),
                  blockquote: ({node, ...props}) => (
                    <blockquote className="border-l-4 border-accent bg-accent/5 p-8 rounded-2xl italic my-10 text-gray-300 relative overflow-hidden">
                       <div className="relative z-10">{props.children}</div>
                    </blockquote>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-primary-light border border-white/5 rounded-[2.5rem] p-8 flex flex-col gap-6 scale-95 origin-top-right">
               <h4 className="text-gray-500 font-black italic uppercase text-xs text-center tracking-widest border-b border-white/5 pb-4">Share this Article</h4>
               <ShareButtons title={post.title} />
            </div>

            <Newsletter />
          </aside>
        </div>
      </div>
    </div>
  );
}
