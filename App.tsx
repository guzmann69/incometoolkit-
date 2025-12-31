
import React from 'react';
import Hero from './components/Hero';
import ToolCard from './components/ToolCard';
import Footer from './components/Footer';
import { TOOLS, REDIRECT_URL } from './constants';
import { ArrowRight, Lock } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#000] selection:bg-emerald-500/30 selection:text-emerald-200 relative">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-2xl tracking-tighter text-white">INCOME<span className="text-emerald-500">TOOLKIT</span></span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={REDIRECT_URL}
              className="hidden md:flex items-center gap-2 bg-emerald-600/10 text-emerald-400 px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest border border-emerald-500/20 hover:bg-emerald-600 hover:text-white transition-all"
            >
              <Lock className="w-3 h-3" />
              Client Portal
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-grow relative z-10">
        <Hero />

        {/* Tools Grid Section */}
        <section id="tools" className="py-24 relative">
          <div className="container mx-auto px-4 md:px-6">
            {/* Grid strictly 2 columns per row as requested */}
            <div className="grid grid-cols-2 gap-4 md:gap-10 max-w-6xl mx-auto">
              {TOOLS.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>

            <div className="mt-24 text-center">
              <div className="inline-block p-1 bg-white/5 rounded-3xl border border-white/10 shadow-3xl">
                <a
                  href={REDIRECT_URL}
                  className="group flex items-center gap-6 bg-[#28a745] text-white pl-8 pr-3 py-4 rounded-2xl font-black text-lg md:text-xl hover:bg-[#218838] transition-all hover:scale-[1.02] active:scale-95 shadow-2xl shadow-emerald-500/20 uppercase tracking-tight"
                >
                  DOWNLOAD ALL TOOLS
                  <div className="bg-white/20 p-2.5 rounded-xl group-hover:translate-x-2 transition-transform">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </a>
              </div>
              <p className="mt-8 text-slate-500 text-sm font-medium tracking-wide">
                Join 10,000+ members getting weekly updates.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
