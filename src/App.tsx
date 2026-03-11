import { motion } from "motion/react";
import { Home, MoreVertical, Instagram, MessageCircle } from "lucide-react";

export default function App() {
  const products = [
    {
      id: 1,
      name: "Manta Decorativa para Sofá",
      description: "Manta grande, macia e elegante para deixar seu sofá mais bonito e confortável.",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=200&h=200&auto=format&fit=crop",
      link: "https://meli.la/2Zpyf7o",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-emerald-500/30">
      <div className="max-w-md mx-auto px-6 py-12 flex flex-col items-center">
        
        {/* Profile Section */}
        <header className="flex flex-col items-center mb-10 text-center">
          <div className="w-24 h-24 rounded-full bg-[#a3b18a] flex items-center justify-center mb-4 shadow-xl border-4 border-[#1a1a1a]">
            {/* Simple House Icon to mimic the logo */}
            <Home className="w-12 h-12 text-[#1a1a1a]" strokeWidth={1.5} />
          </div>
          <h1 className="text-2xl font-bold tracking-tight mb-1">Lar & Conforto Shop</h1>
          <p className="text-gray-400 text-sm font-medium">
            Produtos para deixar sua casa mais confortável
          </p>
        </header>

        {/* Product Links */}
        <main className="w-full space-y-4 mb-12">
          {products.map((product) => (
            <motion.a
              key={product.id}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-4 bg-[#1a1a1a] p-3 rounded-[24px] border border-white/5 hover:bg-[#222222] hover:border-white/10 transition-all duration-200 shadow-lg"
            >
              <div className="relative w-16 h-16 flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-[18px]"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <h2 className="text-sm font-semibold truncate group-hover:text-emerald-400 transition-colors">
                  {product.name}
                </h2>
                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="p-2 text-gray-600 group-hover:text-gray-400">
                <MoreVertical size={20} />
              </div>
            </motion.a>
          ))}
        </main>

        {/* Social Links */}
        <footer className="w-full flex justify-center gap-6 mt-auto">
          <motion.a
            href="#"
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 flex items-center justify-center bg-[#1a1a1a] rounded-full border border-white/5 hover:border-emerald-500/50 hover:text-emerald-500 transition-all"
            title="WhatsApp"
          >
            <MessageCircle size={24} />
          </motion.a>
          <motion.a
            href="#"
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 flex items-center justify-center bg-[#1a1a1a] rounded-full border border-white/5 hover:border-pink-500/50 hover:text-pink-500 transition-all"
            title="Instagram"
          >
            <Instagram size={24} />
          </motion.a>
        </footer>

        {/* Bottom branding */}
        <div className="mt-16 opacity-20 text-[10px] uppercase tracking-[0.2em] font-bold">
          Lar & Conforto © 2026
        </div>
      </div>
    </div>
  );
}
