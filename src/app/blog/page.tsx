import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "The Rise of Emerald in 2026 Bridal Wear",
    excerpt: "Exploring the evolution of color palettes in recent Pakistani runway shows and why emerald is the choice for elite designers.",
    date: "April 12, 2026",
    category: "Trends",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Navigating the Global Market as a Desi Designer",
    excerpt: "A guide for emerging designers on how to scale their brand internationally while maintaining cultural authenticity.",
    date: "March 28, 2026",
    category: "Business",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "10 Minutes with Ayesha Malik",
    excerpt: "An exclusive interview with our newest Elite member about her journey from Glasgow to the global stage.",
    date: "March 15, 2026",
    category: "Spotlight",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1976&auto=format&fit=crop",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-warm-ivory dark:bg-luxury-black min-h-screen py-20 pb-40">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h1 className="text-primary-gold font-bold uppercase tracking-[0.3em] mb-4">Magazine</h1>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">Perspectives & Trends</h2>
          <p className="text-xl text-luxury-black/60 dark:text-warm-ivory/60">
            Insights from the heart of Pakistani fashion. Trend reports, 
            business advice, and designer spotlights.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-32">
            <Link href="/blog/1" className="group grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-video overflow-hidden">
                    <Image
                        src={posts[0].image}
                        alt={posts[0].title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                </div>
                <div>
                    <span className="text-primary-gold font-bold uppercase tracking-widest text-xs mb-4 block">{posts[0].category} — {posts[0].date}</span>
                    <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6 group-hover:text-primary-gold transition-colors">{posts[0].title}</h3>
                    <p className="text-lg text-luxury-black/60 dark:text-warm-ivory/60 mb-8 leading-relaxed">
                        {posts[0].excerpt}
                    </p>
                    <span className="text-sm font-bold uppercase tracking-[0.2em] border-b-2 border-primary-gold pb-1">Read Insight</span>
                </div>
            </Link>
        </div>

        {/* Grid Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-24">
          {posts.slice(1).map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="group">
              <div className="relative aspect-[16/9] overflow-hidden mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
              <span className="text-primary-gold font-bold uppercase tracking-widest text-[10px] mb-4 block">{post.category} • {post.date}</span>
              <h4 className="text-3xl font-serif font-bold mb-4 group-hover:text-primary-gold transition-colors">{post.title}</h4>
              <p className="text-sm text-luxury-black/60 dark:text-warm-ivory/60 leading-relaxed max-w-lg">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-40 p-20 bg-secondary-emerald relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                 {/* Decorative elements */}
            </div>
            <div className="relative z-10 text-center max-w-2xl mx-auto">
                <h3 className="text-3xl font-serif font-bold text-white mb-6 underline decoration-primary-gold underline-offset-8">Stay Ahead of the Trend</h3>
                <p className="text-warm-ivory/80 mb-10">
                    Get exclusive trend reports and early access to event tickets directly in your inbox.
                </p>
                <form className="flex flex-col sm:flex-row gap-4">
                    <input 
                        type="email" 
                        placeholder="your@email.com" 
                        className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-6 py-4 focus:outline-none focus:border-primary-gold transition-colors"
                    />
                    <button className="bg-primary-gold hover:bg-vibrant-gold text-luxury-black font-bold py-4 px-10 uppercase tracking-widest text-xs transition-all">Subscribe</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
}
