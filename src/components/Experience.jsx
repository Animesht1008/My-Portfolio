import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experienceData = [
  {
    role: "Software Development Engineer Intern",
    org: "ZeTheta Algorithms Private Limited",
    period: "July 2026 — Current",
    tag: "REMOTE",
    points: [
      "Engineered a distributed payment orchestration system with multi-gateway routing and 2s automated failover, achieving 99.95% transaction success.",
      "Designed an event-driven notification engine on Kafka & RabbitMQ processing 50K+ daily financial events, cutting message drop rate below 0.01%."
    ],
    tags: ["TypeScript", "JavaScript", "Node.js", "Express.js", "React", "PostgreSQL", "Redis", "Apache Kafka", "RabbitMQ", "Autocannon",
            "K6 Testing", "Docker", "Nginx", "Webhooks", "WebSockets", "Prometheus", "Grafana", "JWT", "CI/CD", "Github"]
  },
  {
    role: "Software Development Engineer Intern",
    org: "NR Engineering Works Pvt. Ltd.",
    period: "November 2025 — May 2026",
    tag: "CERTIFICATE",
    points: [
      "Built a full-stack workforce compliance platform for a 300+ worker firm — 13-table schema with a rules-based payroll engine automating PF/ESI deductions.",
      "Designed an ELT pipeline with materialized-view refreshes and Redis caching, powering real-time dashboards with sub-3s load times."
    ],
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "React Query", "React Hook Form", "Zod", "Recharts", "React Router", 
            "NestJS", "Node.js", "PostgreSQL", "Prisma", "Redis", "BullMQ", "JWT", "RBAC", "Cloudflare R2 (S3-compatible storage)", "Docker", "GitHub Actions", "Jest"]
  },
  {
    role: "Research Internship",
    org: "Dept. of IT, NIT Raipur — under Dr. Rakesh Tripathi",
    period: "June 2023 — November 2023",
    tag: "IEEE PUBLISHED",
    points: [
      "Researched lightweight deep learning models for resource-efficient drowsiness detection systems.",
      "Optimized a MobileNetV2 architecture for edge deployment — 94.03% accuracy at a 65% smaller footprint (8.9MB)."
    ],
    tags: ["Python", "TensorFlow", "Deep Learning", "CNN", "Multi-Model Testing", "AI Compatibility Checking", "Git", "GitHub"]
  },
  {
    role: "Open-Source Contributor",
    org: "Google Summer of Code — CCExtractor",
    period: "June 2022 — September 2022",
    tag: "GSOC 2022",
    points: [
      "Developed Beacon, a Flutter-based cross-platform group travel app with 100% decoupling of business logic from UI via Clean Architecture.",
      "Implemented MVVM with GraphQL subscriptions for real-time location updates."
    ],
    tags: [ "Flutter", "Dart", "Node.js", "GraphQL", "GraphQL Subscriptions", "WebSockets", "CI/CD", "Load Testing", "Git", "GitHub" ]
  }
];

const Experience = () => {
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const items = itemRefs.current;
    if (!items.length) return;

    gsap.fromTo(
      items,
      { x: -40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const addToRefs = (el) => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current.push(el);
    }
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative w-full bg-[#050505] text-white py-28 px-6 md:px-12 select-none overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto w-full space-y-16">

        {/* Section Header */}
        <div className="flex flex-col items-start space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-black/80 backdrop-blur-2xl border border-red-600/40 text-xs font-mono uppercase tracking-widest text-white shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
            <span className="text-red-500 font-bold">SEASON LOG</span>
            <span className="text-white/40">|</span>
            <span>WORK EXPERIENCE</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            PREVIOUSLY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-600 to-red-700 drop-shadow-[0_0_30px_rgba(229,9,20,0.4)]">
              ON THIS CAREER.
            </span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-12 space-y-10">
          {/* Vertical rail */}
          <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-red-600/70 via-white/10 to-transparent"></div>

          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              ref={addToRefs}
              className="relative group"
            >
              {/* Timeline node */}
              <span className="absolute -left-8 md:-left-12 top-2 w-4 h-4 rounded-full bg-[#050505] border-2 border-red-600 shadow-[0_0_12px_rgba(229,9,20,0.7)] group-hover:scale-125 transition-transform"></span>

              <div className="p-6 md:p-8 bg-[#141414]/90 backdrop-blur-2xl border border-white/10 rounded-2xl md:rounded-[1.75rem] shadow-xl hover:border-red-600/50 transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-black text-white group-hover:text-red-500 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-white/60 font-light">{exp.org}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-500 bg-red-600/10 px-2.5 py-1 rounded border border-red-600/25">
                      {exp.tag}
                    </span>
                  </div>
                </div>

                <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">{exp.period}</p>

                <ul className="space-y-2 mb-5">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-sm text-white/75 font-light leading-relaxed">
                      <span className="text-red-500 font-bold shrink-0">&#8250;</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono text-white/70 bg-white/5 border border-white/10 px-2.5 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership & Activities strip */}
        <div className="pt-4 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 text-sm text-white/70 font-light border-t border-white/10 pt-8">
          <span className="text-xs font-mono uppercase tracking-widest text-red-500 font-bold shrink-0">Leadership //</span>
          <span><strong className="text-white">President, Royal Rook Chess Club </strong>— NIT Raipur (2022 – 2024)</span>
          <span className="text-white/20 hidden md:inline">|</span>
          <span><strong className="text-white">President, ELITE Association of IT Dept. </strong>— NIT Raipur (2023 – 2024)</span>
        </div>

      </div>
    </section>
  );
};

export default Experience;
