"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        router.push("/admin");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Failed to connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-luxury-black flex flex-col items-center justify-center relative overflow-hidden py-20 px-6">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary-gold rounded-full blur-[150px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary-emerald rounded-full blur-[150px]"></div>
      </div>

      <div className="container max-w-lg relative z-10">
        <div className="text-center mb-12">
          <Link href="/" className="text-3xl font-serif font-bold text-primary-gold mb-8 block tracking-tighter hover:scale-105 transition-transform">
            PAKISTANI PASSION FOR FASHION
          </Link>
          <h1 className="text-4xl font-serif font-bold text-white mb-4">Member Portal</h1>
          <p className="text-white/40 uppercase tracking-[0.3em] text-[10px] font-bold">Secure Access for the Elite Collective</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-16 shadow-2xl rounded-sm">
          <form className="space-y-8" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] uppercase tracking-widest p-4 text-center">
                {error}
              </div>
            )}
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Email Address</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-primary-gold transition-colors placeholder:text-white/10" 
                placeholder="designer@ppfassion.com"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Password</label>
                <Link href="#" className="text-[9px] font-bold uppercase tracking-widest text-primary-gold hover:text-vibrant-gold transition-colors">Forgot?</Link>
              </div>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-primary-gold transition-colors placeholder:text-white/10" 
                placeholder="••••••••"
              />
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-primary-gold hover:bg-vibrant-gold text-luxury-black font-bold py-6 uppercase tracking-widest text-xs transition-all shadow-lg active:scale-95 disabled:opacity-50"
            >
              {loading ? "Authenticating..." : "Access Dashboard"}
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-white/5 text-center">
            <p className="text-[10px] text-white/30 uppercase tracking-widest mb-6">Not a member yet?</p>
            <Link 
              href="/membership" 
              className="inline-block border border-primary-gold/30 hover:border-primary-gold text-primary-gold font-bold py-4 px-10 uppercase tracking-widest text-[10px] transition-all"
            >
              Apply for Access
            </Link>
          </div>
        </div>
        
        <p className="mt-12 text-center text-[9px] text-white/20 uppercase tracking-[0.4em]">
          Protected by Pakistani Passion for Fashion Security Registry
        </p>
      </div>
    </div>
  );
}
