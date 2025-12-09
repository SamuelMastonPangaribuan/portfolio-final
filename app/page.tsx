"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

// --- DATA SKILLS ---
const skills = {
  networking: ["Cisco Packet Tracer", "Mikrotik", "OSPF & VLAN", "Routing & Switching", "Network Security"],
  iot: ["ESP32 & Arduino", "LoRa Communication", "Node-RED", "MQTT Protocol", "Sensors"],
  webCloud: ["Next.js & React", "Laravel", "Docker", "Linux Admin", "MongoDB"]
};

// --- DATA PROJECTS ---
const projectsData = [
  {
    id: 1,
    title: "IoT Water Safety (Lake Toba)",
    role: "Project Leader",
    desc: "Real-time IoT water safety monitoring using LoRa & ESP32. Visualized on Grafana for tourist safety.",
    tech: ["ESP32", "LoRa", "Node-RED", "Grafana"],
    year: "2025",
    color: "bg-blue-50 border-blue-100 text-blue-600"
  },
  {
    id: 2,
    title: "Food Order Microservices",
    role: "Backend Dev",
    desc: "Backend system for food ordering using Microservices architecture, Kafka, and Docker containers.",
    tech: ["Node.js", "Kafka", "Docker", "MongoDB"],
    year: "2024",
    color: "bg-emerald-50 border-emerald-100 text-emerald-600"
  },
  {
    id: 3,
    title: "Smart Mushroom Farming",
    role: "Embedded Dev",
    desc: "Automated temperature control for mushroom farming with remote monitoring via Blynk App.",
    tech: ["Arduino", "IoT", "Blynk", "C++"],
    year: "2024",
    color: "bg-orange-50 border-orange-100 text-orange-600"
  },
  {
    id: 4,
    title: "Lake Toba Tourism Web",
    role: "Full Stack Dev",
    desc: "Tourism booking platform for Lake Toba built with Laravel and MySQL for managing travel packages.",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    year: "2024",
    color: "bg-purple-50 border-purple-100 text-purple-600"
  }
];

// --- DATA CERTIFICATES ---
const certificatesData = [
  { id: 1, image: "/certs/cert-huawei.png", title: "Huawei ICT Competition" },
  { id: 2, image: "/certs/cert-cisco.png", title: "Cisco Networking Academy" },
  { id: 3, image: "/certs/cert-samsung.png", title: "Samsung Innovation Campus" },
  { id: 4, image: "/certs/cert-jaringan.png", title: "Fundamental Networking" },
  { id: 5, image: "/certs/cert-linux.png", title: "Fundamental Linux" },
];

// --- DATA TIMELINE (BARU: PENDIDIKAN & ORGANISASI) ---
const timelineData = [
  {
    year: "2023 - Present",
    title: "Institut Teknologi Del",
    subtitle: "Diploma in Computer Technology",
    desc: "Focusing on Embedded Systems, IoT, and Computer Networks. Maintains a GPA of 3.30/4.00.",
    type: "education",
    icon: "🎓"
  },
  {
    year: "2023 - Present",
    title: "HIMATEK IT Del",
    subtitle: "Staff of Internal Division",
    desc: "Organizing academic workshops and supporting IoT community projects for students.",
    type: "org",
    icon: "users"
  },
  {
    year: "2023 - Present",
    title: "BEM IT Del",
    subtitle: "Staff of Sports Department",
    desc: "Coordinating campus sports events and tournaments to encourage student participation.",
    type: "org",
    icon: "flag"
  },
  {
    year: "2019 - 2022",
    title: "SMKS Yapim Taruna Balige",
    subtitle: "Computer Network Engineering",
    desc: "Specialized in network configuration, Cisco Packet Tracer, and hardware troubleshooting.",
    type: "education",
    icon: "🎓"
  }
];

// --- COMPONENT ANIMASI ---
const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const roles = ["IoT Engineer", "Network Engineer", "Web Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      
      {/* --- BACKGROUND BLOBS --- */}
      <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 bg-slate-50">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-[100px] animate-blob mix-blend-multiply filter"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply filter"></div>
        <div className="absolute -bottom-32 left-20 w-[500px] h-[500px] bg-pink-300/30 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply filter"></div>
      </div>

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md border-b border-slate-200 z-50 shadow-sm transition-all">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="#" className="text-xl font-extrabold tracking-tighter text-slate-900 hover:text-blue-600 transition">
            SMP<span className="text-blue-600">.</span>DEV
          </Link>
          <ul className="hidden md:flex gap-8 text-sm font-semibold text-slate-500">
            {['Home', 'Skills', 'Projects', 'Journey', 'Contact'].map((item) => (
              <li key={item}>
                <Link href={`#${item.toLowerCase()}`} className="hover:text-blue-600 transition-colors relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="pt-40 pb-20 px-6 min-h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row-reverse items-center justify-between gap-16">
          <div className="md:w-1/2 flex justify-center relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96 animate-float">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-300 animate-spin-slow"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-blue-100 to-purple-100 blur-xl"></div>
              <Image 
                src="/profile.png" 
                alt="Samuel Maston Pangaribuan"
                fill
                className="rounded-full object-cover border-8 border-white shadow-2xl relative z-10"
                priority
              />
               <div className="absolute bottom-10 -left-4 bg-white px-4 py-2 rounded-xl shadow-xl border border-slate-100 z-20 animate-bounce">
                <span className="text-2xl">🎓</span>
                <span className="text-xs font-bold ml-2 text-slate-700">IT Del Student</span>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <FadeIn>
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
                👋 Hello World, I am
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight tracking-tight">
                Samuel <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Maston.
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={400}>
               <h2 className="text-2xl md:text-3xl font-medium text-slate-500 h-12 flex justify-center md:justify-start items-center gap-2">
                 I build <span className="text-slate-900 underline decoration-blue-500 decoration-4 underline-offset-4">{roles[textIndex]}</span>
               </h2>
            </FadeIn>
            <FadeIn delay={600}>
              <p className="text-slate-500 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
                Passionate about connecting the world through <b>Smart IoT</b> and <b>Secure Networks</b>. Let's build scalable solutions together.
              </p>
            </FadeIn>
            <FadeIn delay={800}>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                <a href="/cv.pdf" target="_blank" className="bg-slate-900 text-white px-8 py-3.5 rounded-full font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 active:scale-95 flex items-center gap-2">
                  <span>📄</span> Download CV
                </a>
                <a href="#contact" className="px-8 py-3.5 rounded-full font-bold text-slate-600 border border-slate-300 hover:border-slate-900 hover:text-slate-900 transition-all bg-white shadow-sm hover:shadow-md">
                  Contact Me
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black text-slate-900 mb-4">My Skills</h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={200}>
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-6">🌐</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Networking</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.networking.map((s, i) => <span key={i} className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">{s}</span>)}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl mb-6">⚡</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">IoT & Hardware</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.iot.map((s, i) => <span key={i} className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">{s}</span>)}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={600}>
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-3xl mb-6">💻</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Full Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.webCloud.map((s, i) => <span key={i} className="text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1.5 rounded-full">{s}</span>)}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- JOURNEY SECTION (TIMELINE PENDIDIKAN & ORGANISASI - BARU!) --- */}
      <section id="journey" className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-black text-center text-slate-900 mb-16">My Journey</h2>
          </FadeIn>
          
          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-12">
            {timelineData.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 150}>
                <div className="relative pl-8 md:pl-12">
                  {/* Dot on Timeline */}
                  <div className={`absolute -left-[9px] md:-left-[11px] top-0 w-5 h-5 md:w-6 md:h-6 rounded-full border-4 border-white ${item.type === 'education' ? 'bg-blue-500' : 'bg-purple-500'} shadow-md`}></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
                    <span className="text-xs font-bold text-slate-500 bg-white px-2 py-1 rounded border border-slate-200 mt-1 sm:mt-0 w-fit">{item.year}</span>
                  </div>
                  <h4 className={`text-md font-bold mb-2 ${item.type === 'education' ? 'text-blue-600' : 'text-purple-600'}`}>
                    {item.subtitle}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <FadeIn>
            <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Featured Projects</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project, idx) => (
              <FadeIn key={project.id} delay={idx * 200}>
                <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                   <div className="relative z-10">
                      <div className="flex justify-between items-start mb-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${project.color}`}>
                          {project.role}
                        </span>
                        <span className="text-slate-400 font-bold text-sm">#{project.year}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-500 mb-6 leading-relaxed">
                        {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                        {project.tech.map((t, i) => (
                          <span key={i} className="text-xs font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded-md">
                            {t}
                          </span>
                        ))}
                      </div>
                   </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- CERTIFICATES --- */}
      <section id="certificates" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-black text-center text-slate-900 mb-12">Certifications</h2>
          </FadeIn>
          <div className="flex flex-wrap justify-center gap-8">
            {certificatesData.map((cert, idx) => (
              <FadeIn key={cert.id} delay={idx * 150}>
                <div className="w-36 h-36 md:w-48 md:h-48 bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 border border-slate-200 flex flex-col items-center justify-center group cursor-pointer">
                  <div className="relative w-full h-full mb-2">
                    <Image src={cert.image} alt={cert.title} fill className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className="py-20 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <FadeIn>
          <h2 className="text-3xl font-bold mb-8">Let's Build Something Amazing</h2>
          <div className="flex justify-center gap-6 mb-12">
              <a href="mailto:samuelpangaribuan1234@gmail.com" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all">📧</a>
              <a href="https://linkedin.com/in/samuelpangaribuan-106722306" target="_blank" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-700 hover:scale-110 transition-all">🔗</a>
              <a href="https://wa.me/6282180492805" target="_blank" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-500 hover:scale-110 transition-all">📱</a>
          </div>
          <p className="text-slate-500 text-sm">© 2025 Samuel Maston Pangaribuan</p>
        </FadeIn>
      </footer>

      {/* Style CSS Tambahan */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-spin-slow { animation: spin 10s linear infinite; }
      `}</style>
    </div>
  );
}