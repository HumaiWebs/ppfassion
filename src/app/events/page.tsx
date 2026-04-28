"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface IEvent {
  _id: string;
  title: string;
  date: string;
  location: string;
  type: string;
  image: string;
  status: string;
  price: string;
}

export default function EventsPage() {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/events")
      .then(res => res.json())
      .then(data => {
        if (data.success && data.events.length > 0) {
          setEvents(data.events);
        } else {
          // Fallback to initial data if DB is empty
          setEvents([
            { _id: "1", title: "Glasgow Fashion Gala 2026", date: "June 15, 2026", location: "Glasgow Royal Concert Hall", type: "Fashion Show", image: "/vvip-event.jpg", status: "Applications Open", price: "From £45" },
            { _id: "2", title: "Pakistani Design Awards", date: "August 22, 2026", location: "London Hilton Park Lane", type: "Awards Ceremony", image: "/hero.png", status: "Tickets on Sale", price: "From £120" }
          ]);
        }
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-warm-ivory dark:bg-luxury-black py-24 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mb-24">
          <h1 className="text-primary-gold font-bold uppercase tracking-[0.4em] mb-4">Calendar</h1>
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-luxury-black dark:text-white mb-8">Global Events <br />& Exhibitions</h2>
          <p className="text-xl text-luxury-black/60 dark:text-warm-ivory/60 leading-relaxed max-w-2xl">
            Join us at the world&apos;s most prestigious venues. Experience Pakistani 
            craftsmanship through immersive runway shows and awards.
          </p>
        </div>

        {loading ? (
          <div className="py-20 text-center uppercase tracking-widest opacity-40 text-xs">Syncing Calendar...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {events.map((event) => (
              <Link href={`/events/${event._id}`} key={event._id} className="group relative overflow-hidden bg-white dark:bg-white/5 border border-luxury-black/5 dark:border-white/5">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-6 right-6 z-10">
                    <span className="bg-secondary-emerald text-white text-[9px] font-black uppercase tracking-widest px-4 py-2">
                      {event.status}
                    </span>
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <p className="text-primary-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-2">{event.type}</p>
                      <h3 className="text-3xl font-serif font-bold text-luxury-black dark:text-white">{event.title}</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-serif font-bold text-primary-gold">{event.price}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-8 border-t border-luxury-black/5 dark:border-white/5">
                    <div className="flex flex-col gap-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">Date & Location</p>
                      <p className="text-xs font-medium text-luxury-black/60 dark:text-warm-ivory/60">{event.date} • {event.location}</p>
                    </div>
                    <span className="text-primary-gold group-hover:translate-x-2 transition-transform text-xl">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
