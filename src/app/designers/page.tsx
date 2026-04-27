import Image from "next/image";
import Link from "next/link";

const designers = [
  {
    id: 1,
    name: "Ayesha Malik",
    specialty: "Bridal Couture",
    image: "https://images.unsplash.com/photo-1594235412462-9573a115b7b1?q=80&w=2070&auto=format&fit=crop",
    tier: "Elite",
  },
  {
    id: 2,
    name: "Zainab Chottani",
    specialty: "Luxury Pret",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop",
    tier: "Premium",
  },
  {
    id: 3,
    name: "Hassan Sheheryar",
    specialty: "Men's Formal",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1974&auto=format&fit=crop",
    tier: "Elite",
  },
  {
    id: 4,
    name: "Sania Maskatiya",
    specialty: "Contemporary Fusion",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1974&auto=format&fit=crop",
    tier: "Premium",
  },
  {
    id: 5,
    name: "Fahad Hussayn",
    specialty: "Avant-Garde Bridal",
    image: "https://images.unsplash.com/photo-1496217590455-aa63a8350eea?q=80&w=1974&auto=format&fit=crop",
    tier: "Basic",
  },
  {
    id: 6,
    name: "Elan by Khadijah",
    specialty: "High Embroidery",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
    tier: "Elite",
  },
];

export default function DesignersPage() {
  return (
    <div className="bg-warm-ivory dark:bg-luxury-black min-h-screen py-20 pb-40">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h1 className="text-primary-gold font-bold uppercase tracking-[0.3em] mb-4">The Collective</h1>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">Our Designers</h2>
          <p className="text-xl text-luxury-black/60 dark:text-warm-ivory/60">
            Discover the visionary designers shaping the future of Pakistani fashion. 
            From traditional heritage to modern fusion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-20">
          {designers.map((designer) => (
            <div key={designer.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden mb-8 border border-primary-gold/10">
                <Image
                  src={designer.image}
                  alt={designer.name}
                  fill
                  className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary-gold mb-2 block">{designer.tier} Member</span>
                      <Link href={`/designers/${designer.id}`} className="text-white text-sm font-bold uppercase tracking-widest bg-primary-gold/20 px-4 py-2 hover:bg-primary-gold hover:text-luxury-black transition-all">View Portfolio</Link>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-1 uppercase tracking-tight group-hover:text-primary-gold transition-colors">{designer.name}</h3>
                    <p className="text-luxury-black/40 dark:text-warm-ivory/40 uppercase text-[10px] font-bold tracking-[0.2em]">{designer.specialty}</p>
                  </div>
              </div>
            </div>
          ))}
        </div>

        {/* Locked Feature Teaser */}
        <div className="mt-40 p-16 bg-luxury-black text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-gold to-transparent"></div>
            <div className="relative z-10">
                <h3 className="text-3xl font-serif font-bold text-white mb-6">Unlock Full Designer Access</h3>
                <p className="text-warm-ivory/60 max-w-xl mx-auto mb-10">
                    Members get access to full portfolios, contact information, direct messaging, 
                    and exclusive collaboration opportunities with our designers.
                </p>
                <Link 
                    href="/membership" 
                    className="inline-block bg-primary-gold hover:bg-vibrant-gold text-luxury-black font-bold py-4 px-12 rounded-sm transition-all uppercase tracking-widest text-xs"
                >
                    Join the Collective
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
