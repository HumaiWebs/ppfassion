import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="bg-warm-ivory dark:bg-luxury-black min-h-screen py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-primary-gold font-bold uppercase tracking-[0.4em] mb-6">Contact</h1>
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-10 text-luxury-black dark:text-white">Get in Touch</h2>
            <p className="text-xl text-luxury-black/60 dark:text-warm-ivory/60 mb-12 leading-relaxed max-w-xl">
              Whether you are an elite designer looking to join the collective, 
              a brand seeking collaboration, or a member of the press, 
              we are ready to connect.
            </p>

            <div className="space-y-10">
              <div>
                <h3 className="text-primary-gold font-bold uppercase tracking-widest text-xs mb-4">The Registry</h3>
                <p className="text-2xl font-serif">registry@ppfassion.com</p>
              </div>
              <div>
                <h3 className="text-primary-gold font-bold uppercase tracking-widest text-xs mb-4">Press & Media</h3>
                <p className="text-2xl font-serif">media@ppfassion.com</p>
              </div>
              <div>
                <h3 className="text-primary-gold font-bold uppercase tracking-widest text-xs mb-4">HQ Address</h3>
                <p className="text-2xl font-serif">124 St Vincent St, Glasgow G2 5HF, UK</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-white/5 p-12 shadow-2xl border border-primary-gold/10">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-luxury-black/40 dark:text-warm-ivory/40">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-luxury-black/10 dark:border-warm-ivory/10 py-4 focus:outline-none focus:border-primary-gold transition-colors" placeholder="Ayesha Ahmed" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-luxury-black/40 dark:text-warm-ivory/40">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-luxury-black/10 dark:border-warm-ivory/10 py-4 focus:outline-none focus:border-primary-gold transition-colors" placeholder="ayesha@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-luxury-black/40 dark:text-warm-ivory/40">Inquiry Type</label>
                <select className="w-full bg-transparent border-b border-luxury-black/10 dark:border-warm-ivory/10 py-4 focus:outline-none focus:border-primary-gold transition-colors appearance-none">
                  <option className="bg-luxury-black">Membership Application</option>
                  <option className="bg-luxury-black">Event Sponsorship</option>
                  <option className="bg-luxury-black">Press Inquiry</option>
                  <option className="bg-luxury-black">General Question</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-luxury-black/40 dark:text-warm-ivory/40">Message</label>
                <textarea rows={5} className="w-full bg-transparent border-b border-luxury-black/10 dark:border-warm-ivory/10 py-4 focus:outline-none focus:border-primary-gold transition-colors resize-none" placeholder="Tell us about your brand or inquiry..."></textarea>
              </div>

              <button className="w-full bg-primary-gold hover:bg-vibrant-gold text-luxury-black font-bold py-6 uppercase tracking-widest text-xs transition-all shadow-lg">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
