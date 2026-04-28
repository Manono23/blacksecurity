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
    id: 'executive-protection',
    title: 'VIP Protection & Escort',
    description: 'Elite personal security and secure escort for high-profile residents and visitors.',
    detail: 'Our bodyguards are highly trained in defensive driving and threat assessment. We provide 24/7 protection detail for VIPs, ensuring safe transit throughout the Eastern Cape and beyond.',
    icon: UserCheck,
    image: 'https://images.unsplash.com/photo-1541888941259-79018440939d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'farm-guarding',
    title: 'Farm Guarding',
    description: 'Specialized agricultural defense for remote farms in Indwe, Elliot, and Dordrecht.',
    detail: 'We pride ourselves on protecting farmers and livestock. Our units use thermal imaging and night-vision to secure vast perimeters against stock theft and trespassing.',
    icon: ShieldAlert,
    image: 'https://images.unsplash.com/photo-1582845572886-372138290ba5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tracking-devices',
    title: 'Tactical Tracking Devices',
    description: 'Advanced GPS and IoT tracking solutions for assets and vehicle fleets.',
    detail: 'Complete fleet management and asset tracking. We install tamper-proof recovery devices with 24/7 monitoring from our Dordrecht control room.',
    icon: Lock,
    image: 'https://images.unsplash.com/photo-1557597774-9d2739f85a76?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'retail-security',
    title: 'Shop & Local Security',
    description: 'Vigilant guarding for retail stores and local community patrol initiatives.',
    detail: 'From shoplifting prevention to neighborhood watch support, we provide a visible and effective deterrent. We deliver our services to all provinces to ensure community safety.',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1506377711776-dbdc2f3c20d9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cctv-surveillance',
    title: 'CCTV & Digital Footage',
    description: 'Professional surveillance installation and 24/7 video monitoring services.',
    detail: 'State-of-the-art CCTV systems with remote access. Our operations team provides reviewed footage for evidence and real-time intervention.',
    icon: Eye,
    image: 'https://images.unsplash.com/photo-1557597774-9d2739f85a76?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fugitive-apprehension',
    title: 'Fugitive Apprehension Unit',
    description: 'Specialized unit tasked with locating and capturing high-priority wanted individuals.',
    detail: 'Working within the legal framework of SA, our most-wanted division uses intelligence and field tactical units to locate individuals evading justice.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1579333079373-3f1406854728?auto=format&fit=crop&q=80&w=800'
  }
];

const stats = [
  { label: 'Guard Response', value: 'Instant' },
  { label: 'Operational Success', value: '100%' },
  { label: 'Tactical Units', value: '50' },
  { label: 'Provinces Covered', value: '9/9' }
];

const LOCATIONS = [
  { name: 'Dordrecht', type: 'Tactical HQ', x: 45, y: 35 },
  { name: 'Indwe', type: 'Security Outpost', x: 55, y: 38 },
  { name: 'Elliot', type: 'Field Response', x: 65, y: 35 },
  { name: 'Queenstown', type: 'Regional Hub', x: 40, y: 55 },
  { name: 'East London', type: 'Logistics Center', x: 50, y: 85 }
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
  const [activeTab, setActiveTab] = useState(services[0].id);
  const [activeModal, setActiveModal] = useState<null | 'privacy' | 'legal'>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCall = () => {
    window.location.href = 'tel:+270750870303';
  };

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
            {['Services', 'Operations', 'Areas'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`text-[10px] font-black tracking-[0.3em] uppercase transition-colors ${
                  scrolled ? 'text-zinc-600 hover:text-black' : 'text-zinc-400 hover:text-black'
                }`}
              >
                {item}
              </a>
            ))}
            <button 
              onClick={handleCall}
              className="bg-black hover:bg-zinc-800 text-white px-6 py-2 rounded-sm text-[10px] font-black tracking-widest transition-all"
            >
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
              {['Services', 'Operations', 'Areas'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-black uppercase text-black tracking-widest py-2 border-b border-zinc-100"
                >
                  {item}
                </a>
              ))}
              <button 
                onClick={handleCall}
                className="bg-black text-white py-4 rounded-lg font-black text-xs tracking-widest"
              >
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
              Found in Dordrecht, Eastern Cape in 2026. We pride ourselves on delivering elite armed security 
              services to all provinces across South Africa with 50 dedicated tactical units.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={handleCall}
                className="group bg-black hover:bg-zinc-800 text-white px-12 py-6 rounded-xl font-black transition-all flex items-center justify-center gap-4 text-xs tracking-[0.2em] uppercase"
              >
                DEPLOY TACTICAL UNIT
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="#areas"
                className="border border-zinc-200 hover:border-black hover:bg-black/5 text-black px-12 py-6 rounded-xl font-bold transition-all uppercase tracking-[0.2em] text-[10px] flex items-center justify-center"
              >
                BROWSE LOCATIONS
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
                    <button 
                      onClick={handleCall}
                      className="bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-4 rounded-xl hover:bg-zinc-800 transition-all flex items-center gap-2"
                    >
                      CALL TACTICAL HUB
                      <ChevronRight className="w-3 h-3" />
                    </button>
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
                 src="https://images.unsplash.com/photo-1582845572886-372138290ba5?auto=format&fit=crop&q=80&w=600" 
                 alt="Field Operatives" 
                 className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-black/40 group-hover:opacity-0 transition-opacity" />
             </div>
             <div className="md:col-span-1 grid grid-rows-2 gap-6 h-[600px] md:h-full">
               <div className="relative overflow-hidden rounded-[2.5rem] group">
                 <img 
                   src="https://images.unsplash.com/photo-1557597774-9d2739f85a76?auto=format&fit=crop&q=80&w=600" 
                   alt="Night Recon" 
                   className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                   referrerPolicy="no-referrer"
                 />
               </div>
               <div className="relative overflow-hidden rounded-[2.5rem] group">
                 <img 
                   src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=600" 
                   alt="Advanced Surveillance" 
                   className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                   referrerPolicy="no-referrer"
                 />
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section id="areas" className="py-32 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.5em] mb-4">Regional Presence</h2>
              <h3 className="text-5xl font-bold mb-8 tracking-tighter uppercase">Eastern Cape <span className="text-zinc-300">Hubs.</span></h3>
              <p className="text-zinc-600 mb-12 leading-relaxed">
                Headquartered in Dordrecht, our influence extends across the Eastern Cape province. 
                Our response hubs are strategically placed to ensure minimum response times in Elliot, Queenstown, and beyond.
              </p>
              <div className="space-y-4">
                {LOCATIONS.map((loc, i) => (
                  <div key={loc.name} className="flex items-center justify-between p-6 bg-zinc-50 rounded-2xl border border-zinc-100 hover:border-black transition-all group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white text-[10px] font-black">
                        {i + 1}
                      </div>
                      <div>
                        <div className="font-bold uppercase tracking-tight">{loc.name}</div>
                        <div className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{loc.type}</div>
                      </div>
                    </div>
                    <MapPin className="w-5 h-5 text-zinc-200 group-hover:text-black transition-colors" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-zinc-900 rounded-[3rem] overflow-hidden border border-zinc-800 p-4">
                 {/* Realistic Eastern Cape SVG Outline */}
                 <svg viewBox="0 0 400 400" className="w-full h-full fill-white/5 stroke-white/20" strokeWidth="1">
                    {/* Simplified Eastern Cape Coast and Borders */}
                    <path d="M100,50 L300,50 L350,150 L380,300 L250,380 L150,390 L50,300 L20,150 Z" />
                    <path d="M380,300 Q300,320 250,380" className="stroke-red-500/20" strokeWidth="2" />
                 </svg>
                 
                 {/* Tactical Red Pins */}
                 {LOCATIONS.map((spot) => (
                   <div 
                    key={spot.name}
                    className="absolute z-10 -translate-x-1/2 -translate-y-1/2 group/pin" 
                    style={{ top: `${spot.y}%`, left: `${spot.x}%` }}
                   >
                     <div className="relative">
                        <div className="w-4 h-4 bg-red-600 rounded-full border-2 border-white shadow-lg animate-pulse" />
                        <div className="absolute top-0 left-0 w-4 h-4 bg-red-600 rounded-full animate-ping opacity-75" />
                     </div>
                     <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/90 border border-zinc-700 px-3 py-1 rounded shadow-2xl opacity-0 group-hover/pin:opacity-100 transition-all pointer-events-none whitespace-nowrap">
                       <div className="text-[10px] font-black uppercase text-white">{spot.name}</div>
                     </div>
                   </div>
                 ))}
                 
                 <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md p-6 rounded-2xl border border-white/5">
                    <div className="text-white font-bold text-lg mb-1">Eastern Cape Force Presence</div>
                    <div className="text-[10px] font-black tracking-widest uppercase text-red-500">5 Active Tactical Hubs</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / About Section */}
      <section id="operations" className="py-32 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-20">
            <h2 className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.5em] mb-4">Intelligence & Strategy</h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">Operations <span className="text-zinc-300">Briefing.</span></h3>
          </div>

          <div className="bg-white border border-zinc-200 rounded-[3rem] overflow-hidden shadow-sm flex flex-col md:flex-row min-h-[600px]">
            {/* Tabs List */}
            <div className="md:w-1/3 border-r border-zinc-100 p-8 flex flex-col justify-between">
              <div className="space-y-4">
                {services.map((s) => (
                  <button 
                    key={s.id}
                    onClick={() => setActiveTab(s.id)}
                    className={`w-full text-left p-6 rounded-2xl transition-all flex items-center justify-between group ${
                      activeTab === s.id ? 'bg-black text-white' : 'hover:bg-zinc-50'
                    }`}
                  >
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-50">Operational Class</span>
                      <span className="font-bold uppercase tracking-tight">{s.title}</span>
                    </div>
                    <s.icon className={`w-5 h-5 ${activeTab === s.id ? 'text-white' : 'text-zinc-200 group-hover:text-black'}`} />
                  </button>
                ))}
              </div>
              
              <div className="p-6 bg-zinc-50 rounded-2xl mt-8">
                <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest leading-relaxed">
                  Founded in Dordrecht (2026), our operational protocols are built on military-grade discipline.
                </p>
              </div>
            </div>

            {/* Tab Detail content */}
            <div className="flex-1 p-12 lg:p-20 relative flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col h-full"
                >
                  <div className="max-w-2xl">
                    <div className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] mb-6">Service Overview</div>
                    <h4 className="text-4xl lg:text-6xl font-bold tracking-tighter uppercase mb-8 leading-none">
                      {services.find(s => s.id === activeTab)?.title}
                    </h4>
                    <p className="text-zinc-600 text-lg lg:text-xl font-medium leading-relaxed mb-12">
                      {services.find(s => s.id === activeTab)?.detail}
                    </p>
                  </div>
                  
                  <div className="mt-auto grid grid-cols-2 gap-12 pt-12 border-t border-zinc-100">
                    <div className="flex flex-col gap-2">
                       <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Deployment Status</span>
                       <span className="text-black font-bold uppercase flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Available for Tasking
                       </span>
                    </div>
                    <button 
                      onClick={handleCall}
                      className="bg-black text-white p-6 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-zinc-800 transition-all"
                    >
                      REQUEST BRIEFING
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
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
            <div className="flex flex-col md:flex-row gap-12">
              <div className="flex flex-col gap-4">
                <a href="tel:+270750870303" className="text-zinc-400 text-[10px] font-black uppercase hover:text-black transition-colors tracking-widest flex items-center gap-2">
                  <Phone className="w-3 h-3" /> +27 075 087 0303
                </a>
                <a href="mailto:blackhawk.security@gmail.com" className="text-zinc-400 text-[10px] font-black uppercase hover:text-black transition-colors tracking-widest flex items-center gap-2">
                  <Eye className="w-3 h-3" /> blackhawk.security@gmail.com
                </a>
              </div>
              <div className="flex gap-12">
                <button 
                  onClick={() => setActiveModal('privacy')} 
                  className="text-zinc-400 text-[10px] font-black uppercase hover:text-black transition-colors tracking-widest cursor-pointer"
                >
                  Privacy
                </button>
                <button 
                  onClick={() => setActiveModal('legal')} 
                  className="text-zinc-400 text-[10px] font-black uppercase hover:text-black transition-colors tracking-widest cursor-pointer"
                >
                  Legal
                </button>
                <a href="#" className="text-zinc-400 text-[10px] font-black uppercase hover:text-black transition-colors tracking-widest">
                  Audit
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between text-zinc-300 text-[10px] font-mono uppercase tracking-[0.3em] border-t border-zinc-50 pt-12">
            <div>&copy; {new Date().getFullYear()} Black Hawk Armed Security. All Rights Reserved.</div>
            <div className="flex gap-8 mt-4 md:mt-0">
              <span className="text-zinc-400">HQ: Dordrecht, EC</span>
              <span className="text-zinc-400">EST. 2026</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal System */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[2.5rem] p-12 overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute top-8 right-8 text-zinc-400 hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em] mb-4">Official Document</div>
              <h3 className="text-4xl font-bold tracking-tighter uppercase mb-10">
                {activeModal === 'privacy' ? 'Privacy Policy' : 'Legal Compliance'}
              </h3>

              <div className="prose prose-sm prose-zinc max-h-[400px] overflow-y-auto pr-6 custom-scrollbar">
                {activeModal === 'privacy' ? (
                  <div className="space-y-6 text-zinc-600 font-medium leading-relaxed">
                    <p><strong>Compliance with POPIA:</strong> Black Hawk Armed Security is fully committed to the Protection of Personal Information Act. We handle all client data with absolute discretion and tactical integrity.</p>
                    <div className="space-y-4 pt-4 border-t border-zinc-100">
                      <h4 className="font-bold uppercase tracking-widest text-black text-[10px]">1. Data Collection</h4>
                      <p>We specifically collect information required for tactical response, deployment logistics, and legal guarding mandates. This includes location data and operational contacts.</p>
                      
                      <h4 className="font-bold uppercase tracking-widest text-black text-[10px]">2. Surveillance Integrity</h4>
                      <p>Surveillance footage and digital evidence are stored for a maximum of 30 days. After this period, data is securely purged unless flagged for active legal proceedings or police investigation.</p>
                      
                      <h4 className="font-bold uppercase tracking-widest text-black text-[10px]">3. Intel Security</h4>
                      <p>Operational intel is restricted to Tier-1 personnel only. We never share client profiles or tactical vulnerabilities with third-party organizations.</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6 text-zinc-600 font-medium leading-relaxed">
                    <p><strong>South African Regulatory Framework:</strong> As a leading Eastern Cape security firm, we operate under the strictest legal mandates of the Republic of South Africa.</p>
                    <div className="space-y-4 pt-4 border-t border-zinc-100">
                      <h4 className="font-bold uppercase tracking-widest text-black text-[10px]">1. PSiRA Act (56 of 2001)</h4>
                      <p>Fully registered and vetted by the Private Security Industry Regulation Authority. Every operative maintains current registration and tactical grading.</p>
                      
                      <h4 className="font-bold uppercase tracking-widest text-black text-[10px]">2. Firearms Control Act (60 of 2000)</h4>
                      <p>All weapons used by our tactical units are licensed for business use. Personnel undergo mandatory bi-annual competency testing.</p>
                      
                      <h4 className="font-bold uppercase tracking-widest text-black text-[10px]">3. Power of Arrest</h4>
                      <p>Our units operate under the Criminal Procedure Act 51 of 1977, specifically regarding citizen arrest and the protection of life and property.</p>
                    </div>
                  </div>
                )}
              </div>

              <button 
                onClick={() => setActiveModal(null)}
                className="mt-12 w-full bg-black text-white p-6 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-zinc-800 transition-all shadow-xl shadow-black/10"
              >
                ACKNOWLEDGE & CLOSE
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
