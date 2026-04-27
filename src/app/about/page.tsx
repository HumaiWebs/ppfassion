import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-warm-ivory dark:bg-luxury-black min-h-screen">
      {/* Hero Header */}
      <section className="py-24 border-b border-primary-gold/10">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-primary-gold font-bold uppercase tracking-[0.3em] mb-4">Our Story</h1>
          <h2 className="text-5xl md:text-7xl font-serif font-bold">Pakistani Passion for Fashion</h2>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square">
            <Image
              src="/event-group.jpg"
              alt="Pakistani Passion for Fashion Collective"
              fill
              className="object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-gold -z-10 hidden md:block"></div>
          </div>
          
          <div>
            <h3 className="text-4xl font-serif font-bold mb-8">Elevating South Asian Heritage</h3>
            <p className="text-lg text-luxury-black/70 dark:text-warm-ivory/70 mb-8 leading-relaxed">
              Pakistani Passion for Fashion was born out of a desire to create a permanent, 
              prestigious digital home for South Asian fashion talent. 
              While our physical shows in Glasgow and beyond celebrate the vibrancy 
              of our culture, our digital platform ensures that impact is felt 365 days a year.
            </p>
            <p className="text-lg text-luxury-black/70 dark:text-warm-ivory/70 mb-10 leading-relaxed">
              We provide a unified ecosystem where emerging designers can stand 
              alongside established brands, sharing resources, opportunities, 
              and the global spotlight.
            </p>
            
            <div className="grid grid-cols-2 gap-10">
              <div>
                <h4 className="text-primary-gold font-bold uppercase tracking-widest text-xs mb-4">Our Mission</h4>
                <p className="text-sm opacity-60 italic">&ldquo;To represent the pinnacle of South Asian fashion excellence in the UK and internationally.&rdquo;</p>
              </div>
              <div>
                <h4 className="text-primary-gold font-bold uppercase tracking-widest text-xs mb-4">Our Goal</h4>
                <p className="text-sm opacity-60 italic">&ldquo;To facilitate £10M+ in designer revenue and create a global network of 500+ professionals.&rdquo;</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-luxury-black text-warm-ivory relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
            {/* Pattern placeholder */}
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-primary-gold font-bold uppercase tracking-widest mb-4">Philosophy</h3>
            <h4 className="text-4xl md:text-5xl font-serif font-bold mb-12">More Than Just a Show</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
              <div className="p-8 border border-white/10 hover:border-primary-gold transition-colors">
                <h5 className="text-xl font-serif font-bold mb-4 text-primary-gold">Community</h5>
                <p className="text-sm opacity-60">Fostering genuine connections between designers, brands, and buyers that last beyond the runway.</p>
              </div>
              <div className="p-8 border border-white/10 hover:border-primary-gold transition-colors">
                <h5 className="text-xl font-serif font-bold mb-4 text-primary-gold">Innovation</h5>
                <p className="text-sm opacity-60">Blending traditional craftsmanship with modern technology and digital-first growth strategies.</p>
              </div>
              <div className="p-8 border border-white/10 hover:border-primary-gold transition-colors">
                <h5 className="text-xl font-serif font-bold mb-4 text-primary-gold">Legacy</h5>
                <p className="text-sm opacity-60">Building a bridge between generations of talent to preserve our cultural heritage for future designers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
