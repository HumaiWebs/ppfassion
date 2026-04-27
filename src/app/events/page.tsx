import Image from "next/image";
import Link from "next/link";

const events = [
  {
    id: 1,
    title: "Glasgow Fashion Gala 2026",
    date: "June 15, 2026",
    location: "Glasgow Royal Concert Hall",
    type: "Fashion Show",
    image: "/vvip-event.jpg",
    status: "Applications Open",
    price: "From £45",
  },
  {
    id: 2,
    title: "Pakistani Design Awards",
    date: "August 22, 2026",
    location: "London Hilton Park Lane",
    type: "Awards Ceremony",
    image: "/runway-red.jpg",
    status: "Early Bird Tickets",
    price: "From £95",
  },
  {
    id: 3,
    title: "Digital Trends Masterclass",
    date: "September 10, 2026",
    location: "Virtual / Private Hub",
    type: "Workshop",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    status: "Members Only",
    price: "Free for Premium",
  },
];

export default function EventsPage() {
  return (
    <div className="bg-warm-ivory dark:bg-luxury-black min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h1 className="text-primary-gold font-bold uppercase tracking-[0.3em] mb-4">Calendar</h1>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">Signature Events</h2>
            <p className="text-xl text-luxury-black/60 dark:text-warm-ivory/60">
              From high-stakes runway shows to intimate networking dinners, 
              our calendar is designed to provide maximum impact and growth.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 border border-primary-gold/30 hover:border-primary-gold transition-colors text-sm uppercase tracking-widest font-bold">All</button>
            <button className="px-6 py-2 border border-primary-gold/10 hover:border-primary-gold opacity-50 hover:opacity-100 transition-colors text-sm uppercase tracking-widest font-bold">Workshops</button>
            <button className="px-6 py-2 border border-primary-gold/10 hover:border-primary-gold opacity-50 hover:opacity-100 transition-colors text-sm uppercase tracking-widest font-bold">Shows</button>
          </div>
        </div>

        <div className="space-y-12">
          {events.map((event) => (
            <div key={event.id} className="group bg-white dark:bg-secondary-emerald-dark/10 flex flex-col md:flex-row items-stretch overflow-hidden border border-primary-gold/5 hover:border-primary-gold/30 transition-all duration-500 shadow-sm hover:shadow-2xl">
              <div className="relative w-full md:w-[400px] h-[300px] md:h-auto overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 bg-primary-gold text-luxury-black text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                  {event.type}
                </div>
              </div>

              <div className="flex-1 p-10 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-3xl font-serif font-bold mb-2 group-hover:text-primary-gold transition-colors">{event.title}</h3>
                      <p className="text-primary-gold font-bold uppercase tracking-widest text-xs">{event.date} • {event.location}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold uppercase tracking-widest opacity-40 block mb-1">Status</span>
                      <span className={`text-xs font-bold uppercase tracking-widest ${event.status.includes('Open') ? 'text-green-600' : 'text-primary-gold'}`}>
                        {event.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-luxury-black/60 dark:text-warm-ivory/60 max-w-xl mb-8 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-8 border-t border-primary-gold/5">
                  <div className="text-2xl font-serif font-bold">{event.price}</div>
                  <Link 
                    href={`/events/${event.id}`} 
                    className="bg-luxury-black text-white px-8 py-3 rounded-sm hover:bg-primary-gold transition-colors text-xs font-bold uppercase tracking-widest"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
            <p className="text-sm opacity-50 mb-8 uppercase tracking-widest">Are you a designer interested in showcasing?</p>
            <Link href="/membership" className="inline-block border-b-2 border-primary-gold pb-1 font-bold uppercase tracking-widest text-primary-gold hover:text-vibrant-gold transition-colors">
                Apply for Priority Showcase
            </Link>
        </div>
      </div>
    </div>
  );
}
