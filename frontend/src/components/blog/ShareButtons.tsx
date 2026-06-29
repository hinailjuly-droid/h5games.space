"use client";

import { Share2 } from "lucide-react";
import { useEffect, useState } from "react";

interface ShareButtonsProps {
  title: string;
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  if (!url) return null;

  return (
    <div className="grid grid-cols-4 gap-3">
      <a 
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} 
        target="_blank" rel="noopener noreferrer" 
        className="h-14 bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#1877F2] rounded-2xl flex items-center justify-center transition-all hover:scale-105"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
      </a>
      <a 
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent('Check out this article: ' + title)}`} 
        target="_blank" rel="noopener noreferrer" 
        className="h-14 bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 text-[#1DA1F2] rounded-2xl flex items-center justify-center transition-all hover:scale-105"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
      </a>
      <a 
        href={`https://api.whatsapp.com/send?text=${encodeURIComponent('Read this: ' + title + ' at ' + url)}`} 
        target="_blank" rel="noopener noreferrer" 
        className="h-14 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] rounded-2xl flex items-center justify-center transition-all hover:scale-105"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.012 2C6.486 2 2 6.486 2 12.012c0 1.748.45 3.447 1.305 4.93L2 22l5.244-1.275a10 10 0 004.768 1.198h.004c5.524 0 10-4.486 10-10.011 0-5.526-4.476-10.012-10-10.012zm0 18.024c-1.488 0-2.95-.39-4.238-1.127l-.304-.176-3.149.765.778-3.08-.204-.32a8.03 8.03 0 01-1.246-4.305C3.65 7.6 7.55 3.7 12.016 3.7c4.466 0 8.366 3.9 8.366 8.366 0 4.467-3.9 8.368-8.368 8.368z"/></svg>
      </a>
      <button 
        onClick={() => {
            navigator.clipboard.writeText(url);
            alert('Link copied!');
        }}
        className="h-14 bg-primary-lighter hover:bg-white/10 text-gray-400 hover:text-white rounded-2xl flex items-center justify-center border border-white/5 transition-all hover:scale-105"
      >
        <Share2 size={22} />
      </button>
    </div>
  );
}
