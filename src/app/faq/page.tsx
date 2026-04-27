const faqs = [
  {
    question: "How do I become a member?",
    answer: "You can apply through our Membership page. We offer three tiers: Basic, Premium, and Elite. Each application is reviewed by our board to ensure it meets our collective's standards of excellence.",
  },
  {
    question: "Are events open to non-members?",
    answer: "Most of our signature runway shows have a limited number of public tickets available. However, masterclasses and networking dinners are strictly members-only.",
  },
  {
    question: "Where are you based?",
    answer: "Our headquarters are in Glasgow, UK, but we hold events across London, Manchester, Dubai, and Lahore.",
  },
  {
    question: "Can I upgrade my membership later?",
    answer: "Yes, you can upgrade your membership tier at any time through your member dashboard. The pro-rated difference will be applied to your account.",
  },
];

export default function FAQPage() {
  return (
    <div className="bg-warm-ivory dark:bg-luxury-black min-h-screen py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-primary-gold font-bold uppercase tracking-[0.4em] mb-6 text-center">Inquiries</h1>
        <h2 className="text-5xl md:text-7xl font-serif font-bold mb-20 text-center">Frequently Asked</h2>

        <div className="space-y-12">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-primary-gold/10 pb-12">
              <h3 className="text-2xl font-serif font-bold mb-6 text-primary-gold italic">Q: {faq.question}</h3>
              <p className="text-lg leading-relaxed text-luxury-black/70 dark:text-warm-ivory/70 pl-10 border-l-2 border-primary-gold/20">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center bg-white dark:bg-white/5 p-16 border border-primary-gold/10">
            <h3 className="text-2xl font-serif font-bold mb-6">Still have questions?</h3>
            <p className="text-luxury-black/60 dark:text-warm-ivory/60 mb-10">Our support team is available Monday through Friday to assist you.</p>
            <a href="/contact" className="inline-block bg-primary-gold hover:bg-vibrant-gold text-luxury-black font-bold py-4 px-12 uppercase tracking-widest text-xs transition-all">
                Contact Support
            </a>
        </div>
      </div>
    </div>
  );
}
