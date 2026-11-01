'use client';

import React, { useState } from 'react';
import AppSidebar from './AppSidebar';
import AppTopbar from './AppTopbar';
import Footer from './Footer';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F1F5F9] text-slate-900 flex">
      {/* Left Fixed Sidebar */}
      <AppSidebar
        mobileOpen={mobileSidebarOpen}
        onCloseMobile={() => setMobileSidebarOpen(false)}
      />

      {/* Main Right Content Panel */}
      <div className="flex-1 min-w-0 md:pl-64 flex flex-col min-h-screen">
        <AppTopbar onOpenMobileSidebar={() => setMobileSidebarOpen(true)} />
        <main className="flex-grow p-4 sm:p-6 lg:p-8">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
