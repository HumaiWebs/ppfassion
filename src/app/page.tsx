import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/runway-bridal-1.jpg"
            alt="Pakistani Fashion Runway"
            fill
            sizes="100vw"
            className="object-cover brightness-[0.4]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-primary-gold font-bold uppercase tracking-[0.4em] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              The Official Home of Pakistani Designers
            </h2>
            <h1 className="text-7xl md:text-[9rem] font-serif font-bold text-white mb-10 leading-[0.85] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 tracking-tighter">
              Couture <br />
              <span className="text-primary-gold italic font-light">Excellence.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
              Join the elite circle of 50+ leading designers. Unlock priority access to 
              runway shows, global networking, premium visibility, and exclusive opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 mb-16 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-700">
              <Link
                href="/membership"
                className="bg-primary-gold hover:bg-vibrant-gold text-luxury-black text-center font-bold py-5 px-12 rounded-sm transition-all transform hover:scale-105 active:scale-95 uppercase tracking-[0.2em] text-sm shadow-[0_0_30px_rgba(201,164,76,0.3)]"
              >
                Become a Member
              </Link>
              <Link
                href="/events"
                className="border-2 border-white/20 hover:border-primary-gold text-white text-center font-bold py-5 px-12 rounded-sm transition-all backdrop-blur-md hover:bg-white/5 uppercase tracking-[0.2em] text-sm transform hover:scale-105"
              >
                View Events
              </Link>
            </div>
            
            {/* Trust Bar */}
            <div className="animate-in fade-in zoom-in duration-1000 delay-1000 border-l border-primary-gold/30 pl-8">
              <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/30 mb-6">Established Presence Across</p>
              <div className="flex flex-wrap gap-x-12 gap-y-4 text-[10px] font-black text-white/60 uppercase tracking-[0.3em]">
                <span className="hover:text-primary-gold transition-colors cursor-default">London</span>
                <span className="hover:text-primary-gold transition-colors cursor-default">Glasgow</span>
                <span className="hover:text-primary-gold transition-colors cursor-default">Manchester</span>
                <span className="hover:text-primary-gold transition-colors cursor-default">Dubai</span>
                <span className="hover:text-primary-gold transition-colors cursor-default">Lahore</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-primary-gold to-transparent"></div>
        </div>
      </section>

      {/* Stats Section - Reimagined */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/luxury_pakistani_fabric_bg_1777291822766.png"
            alt="Luxury Fabric Background"
            fill
            className="object-cover brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-luxury-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-transparent to-luxury-black"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 md:gap-8 border-y border-white/10 py-20 backdrop-blur-sm bg-white/[0.02]">
            <div className="flex flex-col items-center border-r border-white/5 last:border-0">
              <div className="text-5xl md:text-8xl font-serif font-bold text-primary-gold mb-4 tracking-tighter">50+</div>
              <div className="text-white/60 uppercase tracking-[0.4em] text-[9px] font-black">Elite Designers</div>
            </div>
            <div className="flex flex-col items-center border-r border-white/5 last:border-0">
              <div className="text-5xl md:text-8xl font-serif font-bold text-primary-gold mb-4 tracking-tighter">12</div>
              <div className="text-white/60 uppercase tracking-[0.4em] text-[9px] font-black">Annual Shows</div>
            </div>
            <div className="flex flex-col items-center border-r border-white/5 last:border-0">
              <div className="text-5xl md:text-8xl font-serif font-bold text-primary-gold mb-4 tracking-tighter">UK</div>
              <div className="text-white/60 uppercase tracking-[0.4em] text-[9px] font-black">Based Operations</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl md:text-8xl font-serif font-bold text-primary-gold mb-4 tracking-tighter">10k+</div>
              <div className="text-white/60 uppercase tracking-[0.4em] text-[9px] font-black">Global Reach</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Designers Preview */}
      <section className="py-40 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
            <div>
              <h2 className="text-primary-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-6">The Designer Collective</h2>
              <h3 className="text-5xl md:text-8xl font-serif font-bold text-white leading-[0.9] tracking-tighter">High Fashion <br/>Visionaries</h3>
            </div>
            <Link href="/designers" className="text-primary-gold hover:text-vibrant-gold font-bold uppercase tracking-[0.3em] text-[10px] flex items-center group border-b border-primary-gold/30 pb-2 transition-all">
              Explore the full collective <span className="ml-3 group-hover:translate-x-3 transition-transform text-lg">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                name: "Ayesha Malik", 
                type: "Bridal Couture", 
                img: "/runway-red.jpg",
                location: "London, UK"
              },
              { 
                name: "Zainab Chottani", 
                type: "Luxury Pret", 
                img: "/runway-couple.jpg",
                location: "Karachi, PK"
              },
              { 
                name: "Hassan Sheheryar", 
                type: "Men's Formal", 
                img: "/runway-bridal-1.jpg",
                location: "Dubai, UAE"
              },
            ].map((designer, i) => (
              <div key={i} className="group cursor-pointer relative">
                <div className="relative aspect-[4/5] overflow-hidden mb-10 transition-all duration-700 shadow-2xl group-hover:shadow-primary-gold/10">
                  <div className="absolute inset-0 bg-luxury-black/40 group-hover:bg-transparent transition-all z-10 duration-700"></div>
                  <Image
                    src={designer.img}
                    alt={designer.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                  />
                  
                  {/* Hover Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-luxury-black via-luxury-black/80 to-transparent">
                    <Link href="/designers" className="w-full bg-primary-gold text-luxury-black text-center font-bold py-4 uppercase tracking-widest text-[10px] block hover:bg-vibrant-gold transition-colors">
                      View Exclusive Profile
                    </Link>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-6 left-6 z-20 flex gap-2">
                    <span className="bg-primary-gold/90 text-luxury-black text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-[2px] shadow-lg">Elite Member</span>
                  </div>
                </div>

                <div className="flex justify-between items-start border-l-2 border-primary-gold/20 pl-6 group-hover:border-primary-gold transition-colors duration-500">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-2xl font-serif font-bold text-white uppercase tracking-tight group-hover:text-primary-gold transition-colors">{designer.name}</h4>
                      <svg className="w-4 h-4 text-secondary-emerald" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-white/40 uppercase text-[9px] font-bold tracking-[0.3em]">{designer.type}</p>
                      <p className="text-primary-gold/60 uppercase text-[8px] font-bold tracking-[0.2em]">{designer.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Reimagined */}
      <section className="py-48 bg-luxury-black relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-0 w-full h-full bg-primary-gold/[0.02] -skew-x-12 transform translate-x-1/2"></div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
          <div className="flex flex-col items-center mb-16">
            <div className="flex -space-x-4 mb-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-16 h-16 rounded-full border-2 border-luxury-black overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer shadow-2xl">
                  <Image src={`https://i.pravatar.cc/100?u=${i+20}`} alt="Member" fill sizes="64px" />
                </div>
              ))}
            </div>
            <p className="text-primary-gold font-bold uppercase tracking-[0.4em] text-[10px]">The Elite Circle is Growing</p>
          </div>

          <h2 className="text-6xl md:text-[7rem] font-serif font-bold text-white mb-12 leading-[0.9] tracking-tighter">
            Build Your <br /> 
            <span className="text-primary-gold italic font-light">Legacy.</span>
          </h2>
          <p className="text-2xl text-white/40 mb-20 max-w-2xl mx-auto leading-relaxed">
            Join the most influential Pakistani designer community. 
            Step into the global spotlight.
          </p>
          <div className="flex flex-col items-center gap-8">
            <Link
              href="/membership"
              className="bg-primary-gold hover:bg-vibrant-gold text-luxury-black font-bold py-7 px-24 rounded-sm transition-all transform hover:scale-105 uppercase tracking-[0.4em] text-xs shadow-[0_0_60px_rgba(201,164,76,0.15)]"
            >
              Apply for Exclusive Membership
            </Link>
            <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold">Priority Slots for Summer 2026 are Closing</p>
          </div>
        </div>
      </section>
    </div>
  );
}
