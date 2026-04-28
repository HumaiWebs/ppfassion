"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface IDesigner {
  _id: string;
  name: string;
  specialty: string;
  tier: string;
  image: string;
  location: string;
}

export default function DesignersPage() {
  const [designers, setDesigners] = useState<IDesigner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/designers")
      .then(res => res.json())
      .then(data => {
        if (data.success && data.designers.length > 0) {
          setDesigners(data.designers);
        } else {
          // Fallback to initial data if DB is empty
          setDesigners([
            { _id: "1", name: "Ayesha Malik", specialty: "Bridal Couture", tier: "Elite", image: "/runway-red.jpg", location: "London, UK" },
            { _id: "2", name: "Zainab Chottani", specialty: "Luxury Pret", tier: "Premium", image: "/runway-couple.jpg", location: "Karachi, PK" },
            { _id: "3", name: "Hassan Sheheryar", specialty: "Men's Formal", tier: "Elite", image: "/runway-bridal-1.jpg", location: "Dubai, UAE" }
          ]);
        }
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-warm-ivory dark:bg-luxury-black py-24 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mb-24">
          <h1 className="text-primary-gold font-bold uppercase tracking-[0.4em] mb-4">The Collective</h1>
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-luxury-black dark:text-white mb-8">Pakistani Couture <br />Visionaries</h2>
          <p className="text-xl text-luxury-black/60 dark:text-warm-ivory/60 leading-relaxed max-w-2xl">
            Meet the elite circle of designers shaping the future of global Pakistani fashion. 
            From heritage bridal wear to modern luxury pret.
          </p>
        </div>

        {loading ? (
          <div className="py-20 text-center uppercase tracking-widest opacity-40 text-xs">Syncing Collective...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {designers.map((designer) => (
              <Link href={`/designers/${designer._id}`} key={designer._id} className="group">
                <div className="relative aspect-[3/4] overflow-hidden mb-8 shadow-2xl">
                  <Image
                    src={designer.image}
                    alt={designer.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                  />
                  <div className="absolute top-6 left-6 z-10">
                    <span className="bg-primary-gold text-luxury-black text-[9px] font-black uppercase tracking-widest px-3 py-1">
                      {designer.tier} Member
                    </span>
                  </div>
                </div>
                <div className="border-l-2 border-primary-gold/20 pl-6 group-hover:border-primary-gold transition-colors">
                  <h3 className="text-3xl font-serif font-bold text-luxury-black dark:text-white mb-2 uppercase tracking-tight group-hover:text-primary-gold transition-colors">
                    {designer.name}
                  </h3>
                  <div className="flex justify-between items-center">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">{designer.specialty}</p>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-primary-gold">{designer.location}</p>
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
