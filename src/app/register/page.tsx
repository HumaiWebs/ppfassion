import Link from "next/link";

export default function RegisterPage({ searchParams }: { searchParams: { plan?: string } }) {
  const planName = searchParams.plan ? searchParams.plan.charAt(0).toUpperCase() + searchParams.plan.slice(1) : "Premium";

  return (
    <div className="min-h-screen bg-warm-ivory dark:bg-luxury-black py-24 px-6 flex flex-col items-center">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-primary-gold font-bold uppercase tracking-[0.4em] mb-4">Application</h1>
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-luxury-black dark:text-white mb-6">Join the Collective</h2>
          <p className="text-xl text-luxury-black/60 dark:text-warm-ivory/60 max-w-2xl mx-auto">
            You are applying for the <span className="text-primary-gold font-bold italic underline decoration-primary-gold/30 underline-offset-8">{planName}</span> Tier. 
            Our review board will process your application within 48 hours.
          </p>
        </div>

        <div className="bg-white dark:bg-white/5 p-10 md:p-20 shadow-2xl border border-primary-gold/10">
          <form className="space-y-12">
            {/* Personal Details */}
            <div className="space-y-8">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary-gold border-b border-primary-gold/10 pb-4">01. Identity Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-luxury-black/40 dark:text-warm-ivory/40">Legal Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-luxury-black/10 dark:border-warm-ivory/10 py-4 focus:outline-none focus:border-primary-gold transition-colors" placeholder="e.g. Zainab Ahmed" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-luxury-black/40 dark:text-warm-ivory/40">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-luxury-black/10 dark:border-warm-ivory/10 py-4 focus:outline-none focus:border-primary-gold transition-colors" placeholder="zainab@brand.com" />
                </div>
              </div>
            </div>

            {/* Brand Details */}
            <div className="space-y-8">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary-gold border-b border-primary-gold/10 pb-4">02. Brand & Portfolio</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-luxury-black/40 dark:text-warm-ivory/40">Brand Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-luxury-black/10 dark:border-warm-ivory/10 py-4 focus:outline-none focus:border-primary-gold transition-colors" placeholder="e.g. Zainab Couture" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-luxury-black/40 dark:text-warm-ivory/40">Portfolio/Website Link</label>
                  <input type="url" className="w-full bg-transparent border-b border-luxury-black/10 dark:border-warm-ivory/10 py-4 focus:outline-none focus:border-primary-gold transition-colors" placeholder="https://zainab-couture.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-luxury-black/40 dark:text-warm-ivory/40">Brand Vision Statement</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-luxury-black/10 dark:border-warm-ivory/10 py-4 focus:outline-none focus:border-primary-gold transition-colors resize-none" placeholder="Describe your design philosophy and heritage..."></textarea>
              </div>
            </div>

            {/* Payment Summary Teaser */}
            <div className="p-8 bg-primary-gold/5 border border-primary-gold/20">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Selected Tier</span>
                    <span className="text-primary-gold font-bold uppercase tracking-widest text-xs">{planName}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Initial Review Fee</span>
                    <span className="text-luxury-black dark:text-white font-bold text-xl font-serif">Included</span>
                </div>
            </div>

            <div className="flex flex-col items-center gap-6 pt-10">
                <button className="w-full bg-primary-gold hover:bg-vibrant-gold text-luxury-black font-bold py-6 uppercase tracking-widest text-xs transition-all shadow-lg">
                    Submit Membership Application
                </button>
                <p className="text-[9px] text-luxury-black/30 dark:text-white/30 text-center uppercase tracking-widest leading-loose">
                    By submitting, you agree to our Terms of Service and professional code of conduct. <br/>
                    All international rights reserved.
                </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
