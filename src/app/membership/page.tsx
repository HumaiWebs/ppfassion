import Link from "next/link";

const tiers = [
  {
    name: "Basic",
    price: "£19",
    yearlyPrice: "£199",
    description: "Perfect for emerging designers looking for visibility.",
    features: [
      "Portfolio Profile",
      "Directory Listing",
      "Event Updates",
      "Digital Member Badge",
      "Access to Public Forums",
    ],
    cta: "Join Basic",
    popular: false,
    color: "bg-soft-gray",
  },
  {
    name: "Premium",
    price: "£49",
    yearlyPrice: "£499",
    description: "For established designers wanting priority growth.",
    features: [
      "Featured Homepage Spot",
      "Priority Event Application",
      "Private Community Access",
      "Monthly Growth Webinars",
      "Supplier Lists Access",
      "Silver Member Badge",
    ],
    cta: "Join Premium",
    popular: true,
    color: "bg-primary-gold",
  },
  {
    name: "Elite",
    price: "£99",
    yearlyPrice: "£999",
    description: "The ultimate tier for industry leaders.",
    features: [
      "VIP Event Invites",
      "1-on-1 Mentoring",
      "PR & Media Features",
      "Custom Landing Page",
      "Runway Priority Slot",
      "Gold Member Badge",
      "Full Resource Access",
    ],
    cta: "Go Elite",
    popular: false,
    color: "bg-secondary-emerald",
  },
];

export default function MembershipPage() {
  return (
    <div className="bg-luxury-black min-h-screen py-20 pb-40">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-32">
          <h1 className="text-primary-gold font-bold uppercase tracking-[0.4em] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">Membership</h1>
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-white">Elevate Your Presence</h2>
          <p className="text-xl text-white/50 leading-relaxed">
            Choose the tier that matches your ambition. Join a community of excellence 
            and unlock exclusive opportunities in the global Pakistani fashion industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`relative flex flex-col p-10 rounded-sm transition-all duration-500 transform hover:-translate-y-4 ${
                tier.popular 
                  ? "bg-luxury-black text-white border-2 border-primary-gold shadow-[0_0_50px_rgba(201,164,76,0.15)] scale-105 z-10" 
                  : "bg-white/5 backdrop-blur-sm border border-white/5 hover:border-primary-gold/30"
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-gold text-luxury-black text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-2xl font-serif font-bold mb-2 ${tier.popular ? "text-primary-gold" : ""}`}>
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-sm opacity-60">/month</span>
                </div>
                <p className="text-sm opacity-70 leading-relaxed font-medium">
                  {tier.description}
                </p>
              </div>

              <div className="flex-1 mb-10">
                <ul className="space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <svg className={`w-5 h-5 flex-shrink-0 ${tier.popular ? "text-primary-gold" : "text-secondary-emerald"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`/register?plan=${tier.name.toLowerCase()}`}
                className={`text-center font-bold py-4 rounded-sm transition-all uppercase tracking-widest text-xs ${
                  tier.popular
                    ? "bg-primary-gold text-luxury-black hover:bg-vibrant-gold"
                    : "bg-luxury-black text-white dark:bg-warm-ivory dark:text-luxury-black hover:bg-primary-gold dark:hover:bg-primary-gold"
                }`}
              >
                {tier.cta}
              </Link>
              
              <div className="mt-4 text-center">
                <p className="text-[10px] opacity-40 uppercase tracking-tighter">
                  Or {tier.yearlyPrice} annually (save 15%)
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Table */}
        <div className="mt-48 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-primary-gold/20">
                <th className="py-10 px-6 font-serif text-3xl uppercase tracking-tighter text-white">The Capability Matrix</th>
                <th className="py-10 px-6 text-center font-bold text-white/30 uppercase tracking-widest text-[10px]">Basic</th>
                <th className="py-10 px-6 text-center font-bold text-primary-gold uppercase tracking-widest text-[10px]">Premium</th>
                <th className="py-10 px-6 text-center font-bold text-secondary-emerald uppercase tracking-widest text-[10px]">Elite</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                { label: "Elite Directory Profile", basic: true, premium: true, elite: true },
                { label: "Runway Event Priority", basic: false, premium: "High", elite: "VIP Priority" },
                { label: "Global PR Placements", basic: false, premium: "Monthly", elite: "Weekly Guaranteed" },
                { label: "Private Networking Dinners", basic: false, premium: true, elite: true },
                { label: "Dedicated Brand Landing Page", basic: false, premium: false, elite: true },
                { label: "Wholesale Buyer Connections", basic: false, premium: false, elite: true },
              ].map((row) => (
                <tr key={row.label} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                  <td className="py-8 px-6 font-bold uppercase tracking-widest text-[10px] text-white/50 group-hover:text-primary-gold transition-colors">{row.label}</td>
                  <td className="py-8 px-6 text-center text-white/60">
                    {typeof row.basic === "boolean" ? (row.basic ? "✓" : "-") : row.basic}
                  </td>
                  <td className="py-8 px-6 text-center text-primary-gold font-bold">
                    {typeof row.premium === "boolean" ? (row.premium ? "✓" : "-") : row.premium}
                  </td>
                  <td className="py-8 px-6 text-center text-secondary-emerald font-bold">
                    {typeof row.elite === "boolean" ? (row.elite ? "✓" : "-") : row.elite}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
