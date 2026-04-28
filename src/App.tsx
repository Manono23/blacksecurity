/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Eye, 
  Lock, 
  Users, 
  Phone, 
  CheckCircle2, 
  ChevronRight, 
  Menu, 
  X, 
  Clock, 
  MapPin, 
  ArrowRight,
  ShieldAlert,
  Cctv,
  UserCheck
} from 'lucide-react';

const COLORS = {
  bg: '#F4F4F5', // Zinc-100: Technical light gray
  card: '#FFFFFF', // Pure white for cards to pop
  accent: '#09090B', // Zinc-950: High contrast black
  text: '#09090B',
  muted: '#71717A' // zinc-500
};

const services = [
  {
    id: 'close-protection',
    title: 'Close Protection Detail',
    description: 'Elite personal security for high-profile individuals and executives. Tier-1 vetted tactical personnel.',
    icon: UserCheck,
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'asset-recovery',
    title: 'Tactical Asset Recovery',
    description: 'Mission-critical recovery and secure transport of high-value assets and sensitive documents.',
    icon: Lock,
    image: 'https://images.unsplash.com/photo-1541888941259-79018440939d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'maritime-security',
    title: 'Maritime Security Ops',
    description: 'Anti-piracy and vessel protection units deployed in high-risk international waters and ports.',
    icon: ShieldAlert,
    image: 'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'infrastructure-defense',
    title: 'Infrastructure Defense',
    description: 'Specialized guarding for power plants, data centers, and critical industrial hubs.',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1558285514-2746f58f2c8e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'rapid-response',
    title: 'Strike Team Deployment',
    description: 'High-intensity rapid intervention units for containment and neutralization of imminent threats.',
    icon: Clock,
    image: 'https://images.unsplash.com/photo-1509633289644-84610f63ea17?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'intel-surveillance',
    title: 'Tactical Intel & Recon',
    description: 'Advanced surveillance systems integrated with proactive intelligence for preemptive defense.',
    icon: Eye,
    image: 'https://images.unsplash.com/photo-1551808195-2342898c6928?auto=format&fit=crop&q=80&w=800'
  }
];

const stats = [
  { label: 'Guard Response', value: 'Instant' },
  { label: 'Operational Success', value: '100%' },
  { label: 'Tactical Units', value: '250+' },
  { label: 'Global Coverage', value: '24/7' }
];

const Logo = ({ className = "w-16 h-16" }: { className?: string }) => (
  <div className={`${className} bg-white flex items-center justify-center rounded-full border-2 border-zinc-950 transition-all duration-300 group-hover:scale-105 overflow-hidden shadow-sm`}>
    <svg viewBox="0 0 100 100" className="w-full h-full p-1" fill="black">
      {/* Outer Border Circle - Thin like the image */}
      <circle cx="50" cy="50" r="48" fill="none" stroke="black" strokeWidth="1" />
      
      {/* Icon Group */}
      <g transform="translate(0, -5)">
        {/* Top Diamond */}
        <path d="M50 15 L58 23 L50 31 L42 23 Z" />
        
        {/* Outer Large Bars */}
        <path d="M40 28 L15 62 H25 L50 30 Z" />
        <path d="M60 28 L85 62 H75 L50 30 Z" />
        
        {/* Inner Chevron */}
        <path d="M50 42 L65 57 L50 72 L35 57 Z" />
      </g>
      
      {/* Main Text - BLACK HAWK (Serif) */}
      <text 
        x="50" 
        y="72" 
        textAnchor="middle" 
        className="font-serif font-bold" 
        fontSize="12"
      >
        BLACK HAWK
      </text>
      
      {/* Sub Text - ARMED SECURITY (Sans Bold) */}
      <text 
        x="50" 
        y="80" 
        textAnchor="middle" 
        className="font-sans font-black" 
        fontSize="5.5" 
        letterSpacing="0.1em"
      >
        ARMED SECURITY
      </text>
      
      {/* Curved Tagline - Precision protection (Italic Serif) */}
      <defs>
        <path id="logoCurve" d="M 22 80 A 32 32 0 0 0 78 80" />
      </defs>
      <text className="font-serif italic" fontSize="4.5" fill="#333">
        <textPath href="#logoCurve" startOffset="50%" textAnchor="middle">
          Precision protection
        </textPath>
      </text>
    </svg>
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: COLORS.bg, color: COLORS.text }}>
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled ? 'bg-white/95 backdrop-blur-md py-3 border-zinc-200' : 'bg-transparent py-6 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 group cursor-pointer">
            <Logo className="w-16 h-16" />
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tighter uppercase whitespace-nowrap leading-none mb-1">
                Black Hawk <span className="text-zinc-400">Armed Security</span>
              </span>
              <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-zinc-400">
                Precision Protection
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {['Services', 'Operations'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`text-[10px] font-black tracking-[0.3em] uppercase transition-colors ${
                  item === 'Services' ? 'text-black' : 'text-zinc-400 hover:text-black'
                }`}
              >
                {item}
              </a>
            ))}
            <button className="bg-black hover:bg-zinc-800 text-white px-6 py-2 rounded-sm text-[10px] font-black tracking-widest transition-all">
              SECURE NOW
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-black" /> : <Menu className="text-black" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white border-b border-zinc-200 p-8 flex flex-col gap-6 md:hidden shadow-xl"
            >
              {['Services', 'Operations'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-black uppercase text-black tracking-widest py-2 border-b border-zinc-100"
                >
                  {item}
                </a>
              ))}
              <button className="bg-black text-white py-4 rounded-lg font-black text-xs tracking-widest">
                SECURE NOW
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888941259-79018440939d?auto=format&fit=crop&q=80&w=1920" 
            alt="Security Team"
            className="w-full h-full object-cover opacity-10 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white/80 backdrop-blur-md border border-zinc-200 p-12 lg:p-20 rounded-[3rem] max-w-5xl relative overflow-hidden shadow-2xl"
          >
            <div className="absolute -top-24 -right-24 p-12 opacity-5 pointer-events-none">
               <div className="w-96 h-96 bg-black/10 rounded-full flex items-center justify-center">
                 <Shield className="w-64 h-64 text-black" />
               </div>
            </div>
            
            <div className="flex items-center gap-3 text-black font-black tracking-[0.5em] text-[10px] uppercase mb-8">
              <span className="w-12 h-[1px] bg-black" />
              Certified Precision Protection
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[1.05] tracking-tighter uppercase text-black">
              PRECISION<br/>
              <span className="text-zinc-300">PROTECTION.</span>
            </h1>
            <p className="text-zinc-600 text-lg md:text-xl mb-12 leading-relaxed font-medium max-w-3xl">
              Black Hawk Armed Security delivers mission-critical defense strategies for high-stakes assets and executive personnel. 
              Deploying elite tactical units across the globe.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="tel:+27664289612"
                className="group bg-black hover:bg-zinc-800 text-white px-12 py-6 rounded-xl font-black transition-all flex items-center justify-center gap-4 text-xs tracking-[0.2em] uppercase"
              >
                DEPLOY TACTICAL UNIT
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#operations"
                className="border border-zinc-200 hover:border-black hover:bg-black/5 text-black px-12 py-6 rounded-xl font-bold transition-all uppercase tracking-[0.2em] text-[10px] flex items-center justify-center"
              >
                VIEW OPERATIONS
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar (Bento style) */}
      <section className="py-6 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-zinc-200 p-10 rounded-3xl flex flex-col justify-between group hover:border-black transition-colors shadow-sm"
              >
                <div className="text-5xl font-bold text-black mb-3 tracking-tighter group-hover:scale-105 transition-transform">{stat.value}</div>
                <div className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section (Custom Bento Grid) */}
      <section id="services" className="py-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.5em] mb-4">Operations & Capability</h2>
            <h3 className="text-5xl md:text-7xl font-bold leading-none tracking-tighter uppercase text-black">
              Tactical <span className="text-zinc-300 italic">Services.</span>
            </h3>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white border border-zinc-200 rounded-[2.5rem] flex flex-col transition-all duration-300 shadow-sm hover:shadow-2xl hover:border-black overflow-hidden"
            >
              {/* Visible Image Header */}
              <div className="h-64 h-64 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                <div className="absolute bottom-6 left-8">
                   <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80 mb-1">
                    Unit 0{i + 1}
                  </div>
                  <h4 className="text-2xl font-bold tracking-tighter uppercase text-white">
                    {service.title}
                  </h4>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-8 font-medium">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="h-[1px] w-full bg-zinc-100" />
                  <div className="flex items-center justify-between">
                    <service.icon className="w-8 h-8 text-black/20" />
                    <a 
                      href="tel:+27664289612"
                      className="bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-4 rounded-xl hover:bg-zinc-800 transition-all flex items-center gap-2"
                    >
                      CONTACT US
                      <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Operational Field Presence Gallery */}
      <section className="py-24 bg-zinc-950 overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-end mb-16">
            <div className="max-w-3xl">
              <h2 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.6em] mb-6">Field Operations</h2>
              <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase leading-tight">
                MISSION-READY <span className="text-zinc-700 italic">DEPLOYMENT.</span>
              </h3>
            </div>
            <p className="text-zinc-500 max-w-sm mb-2 text-sm leading-relaxed">
              Real-time images of our tactical response units and armored fleet in active high-stakes environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-[600px]">
            <div className="md:col-span-2 relative overflow-hidden rounded-[2.5rem] group h-[300px] md:h-full">
              <img 
                src="https://images.unsplash.com/photo-1541888941259-79018440939d?auto=format&fit=crop&q=80&w=1200" 
                alt="Tactical Response Vehicle" 
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-10 left-10 text-white">
                <div className="text-[10px] font-black uppercase tracking-widest mb-2">Fleet: Vulcan</div>
                <div className="text-2xl font-bold uppercase tracking-tight">Armored Response Unit</div>
              </div>
            </div>
            <div className="md:col-span-1 relative overflow-hidden rounded-[2.5rem] group h-[300px] md:h-full">
              <img 
                src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=600" 
                alt="Field Operatives" 
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:opacity-0 transition-opacity" />
            </div>
            <div className="md:col-span-1 grid grid-rows-2 gap-6 h-[600px] md:h-full">
              <div className="relative overflow-hidden rounded-[2.5rem] group">
                <img 
                  src="https://images.unsplash.com/photo-1551808195-2342898c6928?auto=format&fit=crop&q=80&w=600" 
                  alt="Night Recon" 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="relative overflow-hidden rounded-[2.5rem] group">
                <img 
                  src="https://images.unsplash.com/photo-1581447100595-37f09c693fdc?auto=format&fit=crop&q=80&w=600" 
                  alt="Advanced Surveillance" 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / About Section */}
      <section id="operations" className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="aspect-square rounded-[3rem] bg-zinc-300/50 flex items-center justify-center p-1 overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1541888941259-79018440939d?auto=format&fit=crop&q=80&w=800"
                alt="Tactical HQ"
                className="w-full h-full object-cover rounded-[2.9rem] grayscale group-hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-black p-12 rounded-[2rem] shadow-2xl">
              <Logo className="w-20 h-20 mb-4 bg-white border-zinc-950" />
              <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">Status</div>
              <div className="text-2xl font-bold text-white tracking-tight leading-none uppercase">Combat Ready</div>
            </div>
          </div>

          <div>
            <h2 className="text-[11px] font-black text-zinc-400 uppercase tracking-[0.5em] mb-4">Precision Standard</h2>
            <h3 className="text-5xl md:text-7xl font-bold mb-8 leading-none tracking-tighter uppercase text-black">
              The Black Hawk <br /><span className="text-zinc-300">Protocol.</span>
            </h3>
            <p className="text-zinc-600 text-lg mb-10 leading-relaxed font-medium">
              We operate at the intersection of elite military training and advanced surveillance intelligence. 
              Every mission is executed with clinical precision and absolute discretion.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              {[
                { label: 'Recruitment', val: 'Vetted Elite' },
                { label: 'Technology', val: 'AI-Integrated' },
                { label: 'Response', val: 'Instantaneous' },
                { label: 'Global', val: '24/7 Coverage' }
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-zinc-200 pl-6">
                  <div className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">{item.label}</div>
                  <div className="text-lg font-bold text-black uppercase tracking-tight">{item.val}</div>
                </div>
              ))}
            </div>
            <button className="bg-black text-white px-12 py-6 rounded-xl font-black hover:bg-zinc-800 transition-all tracking-widest text-xs uppercase shadow-lg shadow-black/10">
              Operational Briefing
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-zinc-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
            <div className="flex items-center gap-4">
              <Logo className="w-14 h-14" />
              <div className="flex flex-col">
                <span className="text-sm font-black uppercase tracking-tighter text-black">
                  Black Hawk <span className="text-zinc-400">Armed Security</span>
                </span>
                <span className="text-[8px] font-black tracking-[0.5em] text-zinc-400 uppercase">Precision Protection</span>
              </div>
            </div>
            <div className="flex gap-12">
              {['Privacy', 'Legal', 'Careers', 'Intel'].map((item) => (
                <a key={item} href="#" className="text-zinc-400 text-[10px] font-black uppercase hover:text-black transition-colors tracking-widest">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between text-zinc-300 text-[10px] font-mono uppercase tracking-[0.3em] border-t border-zinc-50 pt-12">
            <div>&copy; {new Date().getFullYear()} Black Hawk Armed Security. All Rights Reserved.</div>
            <div className="flex gap-8 mt-4 md:mt-0">
              <span className="text-zinc-400">UN CLASS: 04 DEFENSE</span>
              <span className="text-zinc-400">EST. 2004</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
