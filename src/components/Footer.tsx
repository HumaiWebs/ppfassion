import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-luxury-black text-white py-32 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-gold/20 to-transparent"></div>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-20">
        <div className="md:col-span-2">
          <Link href="/" className="text-3xl font-serif font-bold text-primary-gold mb-8 block tracking-tighter hover:scale-105 transition-transform origin-left">
            PAKISTANI PASSION FOR FASHION
          </Link>
          <p className="text-white/40 max-w-sm mb-10 leading-relaxed text-sm font-medium">
            Empowering the elite Pakistani fashion collective through 
            exclusive networking, high-profile physical events, and a 
            global-first digital infrastructure.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 hover:text-primary-gold transition-colors">Instagram</a>
            <a href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 hover:text-primary-gold transition-colors">LinkedIn</a>
            <a href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 hover:text-primary-gold transition-colors">Twitter</a>
          </div>
        </div>

        <div>
          <h3 className="text-[11px] font-bold mb-8 text-primary-gold uppercase tracking-[0.3em]">The Org</h3>
          <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
            <li><Link href="/about" className="text-white/40 hover:text-white transition-colors">Our Story</Link></li>
            <li><Link href="/events" className="text-white/40 hover:text-white transition-colors">Global Events</Link></li>
            <li><Link href="/designers" className="text-white/40 hover:text-white transition-colors">Designer Collective</Link></li>
            <li><Link href="/membership" className="text-white/40 hover:text-white transition-colors">Membership Tiers</Link></li>
            <li><Link href="/faq" className="text-white/40 hover:text-white transition-colors">FAQ</Link></li>
            <li><Link href="/contact" className="text-white/40 hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] font-bold mb-8 text-primary-gold uppercase tracking-[0.3em]">Registry</h3>
          <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-white/40">
            <li className="flex items-start gap-2">
                <span className="text-primary-gold">HQ:</span> Glasgow, UK
            </li>
            <li className="flex items-start gap-2">
                <span className="text-primary-gold">E:</span> registry@ppfassion.com
            </li>
            <li className="flex items-start gap-2">
                <span className="text-primary-gold">T:</span> +44 (0) 141 555 7800
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-32 pt-12 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-white/20 text-[9px] font-bold uppercase tracking-[0.4em]">&copy; {new Date().getFullYear()} Pakistani Passion for Fashion. All international rights reserved.</p>
        <div className="flex gap-8 text-white/20 text-[9px] font-bold uppercase tracking-[0.4em]">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Diversity</a>
        </div>
      </div>
    </footer>
  );
}
