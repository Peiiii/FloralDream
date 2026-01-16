
import React from 'react';
import { Heart, MessageCircle, Share2, Bookmark, Search, ArrowLeft, MoreHorizontal } from 'lucide-react';

const UIOverlay: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4 md:p-6 text-white font-sans overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center pointer-events-auto">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/10 rounded-full">
            <ArrowLeft size={24} />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold italic tracking-wider opacity-80">Pingo</span>
          <button className="p-2 hover:bg-white/10 rounded-full">
            <Search size={24} />
          </button>
        </div>
      </div>

      {/* Right Sidebar Icons */}
      <div className="absolute right-4 bottom-32 flex flex-col gap-6 items-center pointer-events-auto">
        <div className="relative group">
          <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-sky-200">
            <img src="https://picsum.photos/100/100" alt="avatar" />
          </div>
          <div className="absolute -bottom-2 bg-red-500 rounded-full p-1 text-[10px] leading-none">+</div>
        </div>
        
        <div className="flex flex-col items-center gap-1">
          <button className="p-2 hover:scale-110 transition-transform"><Heart size={32} fill="white" className="text-white" /></button>
          <span className="text-xs font-semibold">766</span>
        </div>
        
        <div className="flex flex-col items-center gap-1">
          <button className="p-2 hover:scale-110 transition-transform"><MessageCircle size={32} fill="white" className="text-white" /></button>
          <span className="text-xs font-semibold">18</span>
        </div>
        
        <div className="flex flex-col items-center gap-1">
          <button className="p-2 hover:scale-110 transition-transform"><Bookmark size={32} fill="white" className="text-white" /></button>
          <span className="text-xs font-semibold">296</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <button className="p-2 hover:scale-110 transition-transform"><Share2 size={32} fill="white" className="text-white" /></button>
          <span className="text-xs font-semibold">46</span>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="flex flex-col gap-3 max-w-[80%] pointer-events-auto">
        <div className="flex items-center gap-2">
           <div className="bg-sky-500 px-3 py-1 rounded-full text-xs font-bold">Pingo壁纸插画</div>
           <button className="bg-red-500 px-4 py-1 rounded-full text-xs font-bold hover:bg-red-600">关注</button>
        </div>
        <p className="text-sm font-medium leading-relaxed drop-shadow-md">
          美好的事，总会与你不期而遇 #花开 #治愈系 #自然美景
        </p>
        <div className="flex items-center gap-2 text-xs opacity-70">
           <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded">
             <MoreHorizontal size={14} />
             <span>合集 · 清风 · 去看看</span>
           </div>
        </div>
        
        {/* Comment Input Mockup */}
        <div className="w-full mt-2 flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
          <span className="text-sm opacity-60">留下你的想法吧...</span>
        </div>
      </div>
    </div>
  );
};

export default UIOverlay;
