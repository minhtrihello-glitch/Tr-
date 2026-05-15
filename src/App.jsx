import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fdfcfb] font-sans text-gray-900">
      <nav className="p-6 flex justify-between items-center bg-white/50 backdrop-blur-sm fixed w-full top-0 z-50">
        <div className="font-serif text-xl italic font-bold tracking-tighter text-amber-700">MINH TR-N.</div>
        <div className="text-[10px] uppercase tracking-widest font-bold border-b border-gray-900 pb-1 text-black">Media Creator</div>
      </nav>

      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <span className="text-amber-600 text-[10px] uppercase tracking-[0.4em] mb-4 font-bold tracking-widest">Beauty & Skin Specialist</span>
        <h1 className="text-5xl md:text-8xl font-serif italic mb-8 leading-tight text-black">Nâng Tầm <br/> Thương Hiệu</h1>
        <p className="max-w-md text-gray-400 text-sm leading-relaxed mb-10">Biến ý tưởng thành trải nghiệm thị giác chuyên nghiệp cho các Skin Center & Beauty Brand.</p>
        <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center animate-bounce text-gray-300">↓</div>
      </section>

      <section className="py-24 bg-black text-white text-center px-6">
        <h2 className="text-3xl font-serif italic mb-12 text-amber-200 uppercase tracking-widest">Let's build something new</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-[11px] tracking-[0.3em] uppercase opacity-70">
          <a href="#" className="hover:text-amber-200 transition-colors">Instagram</a>
          <a href="#" className="hover:text-amber-200 transition-colors">Zalo</a>
          <a href="#" className="hover:text-amber-200 transition-colors lowercase">hello@minhtran.media</a>
        </div>
      </section>
    </div>
  );
}
