import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Building2,
  CalendarDays,
  Check,
  MapPin,
  Mail,
  Menu,
  Monitor,
  PhoneCall,
  Send,
  Sparkles,
  Users,
  X,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const assets = {
  logo: "/manus-storage/logo_95d53d58.jpg",
  campus: "/manus-storage/garden_83123fb1.jpg",
  classroom: "/manus-storage/st_bfe3ecda.jpg",
  students: "/manus-storage/st2_906e5615.jpg",
};

const heroMessages = ["Shaping tomorrow.", "Growing potential.", "Inspiring futures."];
const heroPhotos = [
  { src: assets.campus, label: "Gaseke campus", caption: "A bright place to belong." },
  { src: assets.classroom, label: "Learning spaces", caption: "Curiosity deserves room." },
  { src: assets.students, label: "Digital confidence", caption: "Learning today, leading tomorrow." },
];

const scrollStories = {
  academics: [
    { eyebrow: "Nursery", title: "A gentle first step into learning.", text: "Early foundations, curiosity and a welcoming start to the GS Gaseke journey.", image: assets.campus, kicker: "Education level 01" },
    { eyebrow: "Primary", title: "Confidence grows one lesson at a time.", text: "Building essential knowledge, learning habits and a strong foundation for the years ahead.", image: assets.classroom, kicker: "Education level 02" },
    { eyebrow: "O-Level", title: "Strong foundations for future choices.", text: "Developing subject understanding and confidence as learners prepare for their next academic step.", image: assets.students, kicker: "Education level 03" },
    { eyebrow: "A-Level", title: "Focused pathways for the next chapter.", text: "Mathematics · Economy · Physics · Computer Science", image: assets.classroom, kicker: "Education level 04" },
  ],
  facilities: [
    { eyebrow: "Learning rooms", title: "Thoughtful spaces for questions and collaboration.", text: "Rooms that give lessons, ideas and shared learning room to grow.", image: assets.classroom, kicker: "Space 01" },
    { eyebrow: "Digital classroom", title: "Hands-on digital confidence.", text: "Computer learning that helps learners build practical confidence step by step.", image: assets.students, kicker: "Space 02" },
    { eyebrow: "Campus grounds", title: "Open paths for everyday school life.", text: "Shared outdoor spaces that keep the campus active, connected and full of possibility.", image: assets.campus, kicker: "Space 03" },
  ],
  activities: [
    { eyebrow: "Clubs & expression", title: "Every day is an invitation to participate.", text: "A space for creative expression, clubs and the moments that make school memorable.", image: assets.students, kicker: "Beyond the timetable" },
    { eyebrow: "Sport & active living", title: "Energy belongs in the school day.", text: "Active living and shared moments help school life feel balanced and connected.", image: assets.campus, kicker: "Beyond the timetable" },
    { eyebrow: "Community moments", title: "Learning happens together.", text: "Use this space to share confirmed events and community experiences as they are provided.", image: assets.classroom, kicker: "Beyond the timetable" },
    { eyebrow: "Digital discovery", title: "The future is something learners can explore.", text: "Digital discovery grows curiosity and confidence beyond the timetable.", image: assets.students, kicker: "Beyond the timetable" },
  ],
  gallery: [
    { eyebrow: "Campus grounds", title: "A bright place to belong.", text: "A glimpse of the Gaseke campus and the shared spaces around school life.", image: assets.campus, kicker: "Gallery 01" },
    { eyebrow: "Learning spaces", title: "Curiosity deserves room.", text: "Classrooms designed for lessons, questions and collaborative discovery.", image: assets.classroom, kicker: "Gallery 02" },
    { eyebrow: "Digital confidence", title: "Learning today, leading tomorrow.", text: "Students building practical digital skills with focus and confidence.", image: assets.students, kicker: "Gallery 03" },
    { eyebrow: "Our identity", title: "The GS Gaseke story in one mark.", text: "The school logo carries the identity and spirit of the Gaseke community.", image: assets.logo, kicker: "Gallery 04" },
  ],
} as const;

const navItems = [
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Facilities", href: "#facilities" },
  { label: "Activities", href: "#activities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#2d7b74]">
      <span className="h-px w-8 bg-[#2d7b74]" />
      {children}
    </div>
  );
}

type ScrollStoryItem = { eyebrow: string; title: string; text: string; image: string; kicker: string };

function AcademicNotebook({ item, progress, reducedMotion }: { item: ScrollStoryItem; progress: ReturnType<typeof useScroll>["scrollYProgress"]; reducedMotion: boolean | null }) {
  const tilt = useTransform(progress, [0, 0.5, 1], [-3, 2, -2]);
  const lift = useTransform(progress, [0, 0.5, 1], [8, -10, 6]);
  return (
    <div className="relative mx-auto aspect-[16/10] w-full max-w-[620px] [perspective:1400px]">
      <motion.div style={reducedMotion ? undefined : { rotateZ: tilt, y: lift }} className="absolute inset-[7%] [transform-style:preserve-3d]">
        <div className="absolute inset-0 rounded-[1.5rem] bg-[#c99742] shadow-2xl shadow-[#173d3e]/25 [transform:translateZ(-24px) rotateZ(-2deg)]" />
        <div className="absolute inset-y-0 left-0 w-1/2 origin-right rounded-l-[1.25rem] border-r border-[#cfd8ca] bg-[#fffdf5] p-5 shadow-xl [transform:rotateY(5deg)] sm:p-8">
          <div className="flex items-center justify-between text-[#2d7b74]"><BookOpen size={19} /><span className="text-[9px] font-bold uppercase tracking-[0.2em]">GS Gaseke</span></div>
          <div className="mt-8 space-y-3 opacity-70"><span className="block h-1.5 w-4/5 rounded-full bg-[#dbe7dd]" /><span className="block h-1.5 w-3/5 rounded-full bg-[#dbe7dd]" /><span className="block h-1.5 w-2/3 rounded-full bg-[#dbe7dd]" /><span className="mt-7 block h-16 rounded-xl bg-[#eaf1e9]" /></div>
          <span className="absolute bottom-5 left-5 font-display text-2xl font-semibold text-[#bdd1c3] sm:bottom-8 sm:left-8">{itemsIndex(item)}</span>
        </div>
        <div className="absolute inset-y-0 right-0 w-1/2 origin-left rounded-r-[1.25rem] border-l border-[#cfd8ca] bg-[#fffdf5] p-5 shadow-xl [transform:rotateY(-5deg)] sm:p-8">
          <AnimatePresence mode="wait" initial={false}><motion.div key={item.eyebrow} initial={reducedMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={reducedMotion ? undefined : { opacity: 0 }} transition={{ duration: reducedMotion ? 0 : 0.25 }}><p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#2d7b74]">{item.eyebrow}</p><p className="mt-3 font-display text-xl font-semibold leading-tight text-[#173d3e] sm:text-2xl">{item.title}</p><p className="mt-4 text-xs leading-5 text-[#718586]">{item.text}</p></motion.div></AnimatePresence>
          <div className="absolute bottom-5 right-5 flex gap-1 sm:bottom-8 sm:right-8"><span className="h-1.5 w-5 rounded-full bg-[#e9c66b]" /><span className="h-1.5 w-1.5 rounded-full bg-[#c5d8cb]" /><span className="h-1.5 w-1.5 rounded-full bg-[#c5d8cb]" /></div>
        </div>
        <div className="absolute inset-y-0 left-1/2 w-1 -translate-x-1/2 rounded-full bg-[#a97b35] shadow-inner [transform:translateZ(8px)]" />
      </motion.div>
      <div className="absolute -bottom-2 left-1/2 h-5 w-3/5 -translate-x-1/2 rounded-[50%] bg-[#173d3e]/15 blur-xl" />
    </div>
  );
}

function itemsIndex(item: ScrollStoryItem) {
  return item.kicker.slice(-2).replace(/\D/g, "") || "01";
}

function DesignedVisual({ mode, item, progress, reducedMotion, motionLevel = "full" }: { mode: "facilities" | "activities"; item: ScrollStoryItem; progress: ReturnType<typeof useScroll>["scrollYProgress"]; reducedMotion: boolean | null; motionLevel?: "full" | "calm" }) {
  const drift = useTransform(progress, [0, 1], [0, motionLevel === "calm" ? 4 : mode === "activities" ? 28 : -22]);
  const isActivities = mode === "activities";
  return (
    <motion.div style={reducedMotion ? undefined : { y: drift }} className={`relative mx-auto aspect-[16/10] w-full max-w-[620px] overflow-hidden rounded-[2rem] border p-6 shadow-2xl sm:p-10 ${isActivities ? "border-white/15 bg-[#0f3537]" : "border-[#cbded5] bg-[#dce9df]"}`}>
      <div className={`absolute -right-16 -top-16 h-56 w-56 rounded-full border ${isActivities ? "border-[#e9c66b]/30" : "border-[#2d7b74]/20"}`} />
      <div className={`absolute -bottom-24 -left-20 h-64 w-64 rounded-full blur-2xl ${isActivities ? "bg-[#2d7b74]/35" : "bg-white/80"}`} />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-center justify-between"><span className={`text-[10px] font-bold uppercase tracking-[0.22em] ${isActivities ? "text-[#f0cf78]" : "text-[#2d7b74]"}`}>{item.kicker}</span><span className={`grid h-11 w-11 place-items-center rounded-2xl ${isActivities ? "bg-[#e9c66b] text-[#173d3e]" : "bg-white text-[#2d7b74]"}`}>{isActivities ? <CalendarDays size={20} /> : <Building2 size={20} />}</span></div>
        <div><AnimatePresence mode="wait" initial={false}><motion.div key={item.eyebrow} initial={reducedMotion ? false : { opacity: 0, x: motionLevel === "calm" ? 5 : 18 }} animate={{ opacity: 1, x: 0 }} exit={reducedMotion ? undefined : { opacity: 0, x: motionLevel === "calm" ? -5 : -18 }} transition={{ duration: reducedMotion ? 0 : motionLevel === "calm" ? 0.16 : 0.28 }}><p className={`font-display text-3xl font-semibold leading-tight sm:text-5xl ${isActivities ? "text-white" : "text-[#173d3e]"}`}>{item.title}</p><p className={`mt-4 max-w-sm text-sm leading-6 ${isActivities ? "text-white/60" : "text-[#547072]"}`}>{item.text}</p></motion.div></AnimatePresence></div>
        <div className="flex items-center gap-2"><span className={`h-2 w-2 rounded-full ${isActivities ? "bg-[#f0cf78]" : "bg-[#2d7b74]"}`} /><span className={`h-2 w-12 rounded-full ${isActivities ? "bg-white/20" : "bg-[#b8d2c8]"}`} /><span className={`h-2 w-4 rounded-full ${isActivities ? "bg-white/20" : "bg-[#b8d2c8]"}`} /></div>
      </div>
    </motion.div>
  );
}

function ScrollStory({ id, eyebrow, title, intro, items, tone = "light", visual = "image", motionLevel = "full" }: { id: string; eyebrow: string; title: React.ReactNode; intro: string; items: readonly ScrollStoryItem[]; tone?: "light" | "dark"; visual?: "image" | "notebook" | "facilities" | "activities"; motionLevel?: "full" | "calm" }) {
  const storyRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: storyRef, offset: ["start start", "end end"] });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", motionLevel === "calm" ? "6%" : "18%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.04, motionLevel === "calm" ? 1.07 : 1.12]);
  const washX = useTransform(scrollYProgress, [0, 1], ["0%", motionLevel === "calm" ? "10%" : "28%"]);
  const contentDuration = motionLevel === "calm" ? 0.16 : 0.28;
  const activeItem = items[activeIndex];

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const nextIndex = Math.min(items.length - 1, Math.floor(value * items.length));
    if (nextIndex !== activeIndex) setActiveIndex(nextIndex);
  });

  return (
    <section id={id} ref={storyRef} className={`relative ${tone === "dark" ? "bg-[#173d3e] text-white" : "bg-[#e6eeea] text-[#173d3e]"}`} style={{ minHeight: `${Math.max(items.length * 36, 108)}vh` }}>
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden py-24 sm:py-28">
        <motion.div className="pointer-events-none absolute -inset-[8%] bg-cover bg-center opacity-20 mix-blend-multiply" style={{ backgroundImage: "url('/manus-storage/scroll-story-background_810824ed.jpg')", backgroundPositionY: backgroundY, scale: backgroundScale }} aria-hidden="true" />
        <motion.div className="pointer-events-none absolute -inset-y-1/4 -left-1/4 w-[125%] opacity-80" style={{ x: washX, background: tone === "dark" ? "radial-gradient(circle at 75% 25%, rgba(45,123,116,.48), transparent 38%)" : "radial-gradient(circle at 85% 20%, rgba(255,255,255,.88), transparent 36%)" }} aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-[#f7f8f4]/20" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="gsap-section-heading mb-10 flex items-end justify-between gap-6 sm:mb-14"><div><SectionEyebrow>{eyebrow}</SectionEyebrow><h2 className={`max-w-2xl font-display text-4xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-6xl ${tone === "dark" ? "text-white" : "text-[#173d3e]"}`}>{title}</h2><p className={`mt-5 max-w-xl text-base leading-7 ${tone === "dark" ? "text-white/65" : "text-[#547072]"}`}>{intro}</p></div><span className={`hidden rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] sm:block ${tone === "dark" ? "border-white/15 text-white/55" : "border-[#b8d2c8] text-[#547072]"}`}>Scroll to explore</span></div>
          <div className="grid items-center gap-8 lg:grid-cols-[.78fr_1.22fr] lg:gap-16">
            <div className="order-2 lg:order-1">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={`${id}-${activeIndex}`} initial={prefersReducedMotion ? false : { opacity: 0, y: motionLevel === "calm" ? 8 : 20 }} animate={{ opacity: 1, y: 0 }} exit={prefersReducedMotion ? undefined : { opacity: 0, y: motionLevel === "calm" ? -4 : -16 }} transition={{ duration: prefersReducedMotion ? 0 : contentDuration }}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#f0cf78]">{activeItem.kicker}</p>
                  <h3 className={`mt-4 max-w-xl font-display text-3xl font-semibold leading-tight sm:text-5xl ${tone === "dark" ? "text-white" : "text-[#173d3e]"}`}>{activeItem.title}</h3>
                  <p className={`mt-5 max-w-md text-base leading-7 ${tone === "dark" ? "text-white/65" : "text-[#547072]"}`}>{activeItem.text}</p>
                </motion.div>
              </AnimatePresence>
              <div className="mt-9 flex items-center gap-3"><div className={`h-1.5 w-40 overflow-hidden rounded-full ${tone === "dark" ? "bg-white/15" : "bg-[#cbded5]"}`}><motion.div style={{ width: progressWidth }} className="h-full rounded-full bg-[#e9c66b]" /></div><span className={`text-xs font-bold ${tone === "dark" ? "text-white/50" : "text-[#718586]"}`}>0{activeIndex + 1} / 0{items.length}</span></div>
              <div className="gsap-card-group mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">{items.map((item, index) => <button key={item.eyebrow} type="button" onClick={() => setActiveIndex(index)} className={`gsap-card rounded-xl border px-3 py-3 text-left text-xs font-bold transition ${index === activeIndex ? "border-[#e9c66b] bg-[#e9c66b] text-[#173d3e]" : tone === "dark" ? "border-white/15 bg-white/5 text-white/70 hover:bg-white/10" : "border-[#cbded5] bg-white/55 text-[#547072] hover:bg-white"}`}>{item.eyebrow}</button>)}</div>
            </div>
            <div className="order-1 lg:order-2">
              {visual === "notebook" ? <AcademicNotebook item={activeItem} progress={scrollYProgress} reducedMotion={prefersReducedMotion} /> : visual === "facilities" || visual === "activities" ? <DesignedVisual mode={visual} item={activeItem} progress={scrollYProgress} reducedMotion={prefersReducedMotion} motionLevel={motionLevel} /> : <div className="relative overflow-hidden rounded-[2rem] border-8 border-white/10 bg-white/10 shadow-2xl shadow-[#082d2d]/20"><AnimatePresence mode="wait" initial={false}><motion.img key={`${id}-image-${activeIndex}`} src={activeItem.image} alt={activeItem.eyebrow} initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1 }} exit={prefersReducedMotion ? undefined : { opacity: 0, scale: .98 }} transition={{ duration: prefersReducedMotion ? 0 : .55 }} className="aspect-[16/10] w-full object-cover" /></AnimatePresence><div className="absolute inset-0 bg-gradient-to-t from-[#0c3938]/60 via-transparent to-transparent" /><div className="absolute bottom-5 left-5 text-white sm:bottom-7 sm:left-7"><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#f0cf78]">{activeItem.eyebrow}</p><p className="mt-2 font-display text-xl font-semibold sm:text-2xl">{activeItem.title}</p></div></div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutView, setAboutView] = useState<"overview" | "levels" | "journey" | "fees">("overview");
  const [typedMessage, setTypedMessage] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [heroPhotoIndex, setHeroPhotoIndex] = useState(0);
  const { scrollYProgress: pageScrollProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const target = heroMessages[messageIndex];
    const isComplete = typedMessage === target;
    const delay = isComplete && !isDeleting ? 1900 : isDeleting ? 55 : 95;
    const timer = window.setTimeout(() => {
      if (!isDeleting && !isComplete) {
        setTypedMessage(target.slice(0, typedMessage.length + 1));
      } else if (!isDeleting && isComplete) {
        setIsDeleting(true);
      } else if (isDeleting && typedMessage.length > 0) {
        setTypedMessage(target.slice(0, typedMessage.length - 1));
      } else {
        setIsDeleting(false);
        setMessageIndex((index) => (index + 1) % heroMessages.length);
      }
    }, delay);
    return () => window.clearTimeout(timer);
  }, [isDeleting, messageIndex, typedMessage]);

  useEffect(() => {
    const timer = window.setInterval(() => setHeroPhotoIndex((index) => (index + 1) % heroPhotos.length), 4800);
    return () => window.clearInterval(timer);
  }, []);

  const activeHeroPhoto = heroPhotos[heroPhotoIndex];

  useLayoutEffect(() => {
    const root = homeRef.current;
    if (!root) return;
    root.classList.add("gsap-enhanced");
    if (prefersReducedMotion) return () => root.classList.remove("gsap-enhanced");

    const context = gsap.context(() => {
      gsap.fromTo(".gsap-hero-item", { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.72, stagger: 0.1, ease: "power3.out", clearProps: "transform,opacity,visibility" });
      gsap.utils.toArray<HTMLElement>(".gsap-section-heading").forEach((heading) => {
        gsap.fromTo(heading, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out", clearProps: "transform,opacity,visibility", scrollTrigger: { trigger: heading, start: "top 80%", once: true } });
      });
      gsap.utils.toArray<HTMLElement>(".gsap-card-group").forEach((group) => {
        gsap.fromTo(group.querySelectorAll<HTMLElement>(".gsap-card"), { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.58, stagger: 0.09, ease: "power2.out", clearProps: "transform,opacity,visibility", scrollTrigger: { trigger: group, start: "top 82%", once: true } });
      });
    }, root);
    return () => {
      context.revert();
      root.classList.remove("gsap-enhanced");
    };
  }, [prefersReducedMotion]);

  return (
    <div ref={homeRef} className="min-h-screen overflow-x-hidden bg-[#f7f8f4] text-[#183b3d]">
      <header className="fixed inset-x-0 top-0 z-40 bg-[#10393b]/95 shadow-xl shadow-[#092c2c]/15 backdrop-blur-xl">
        <motion.div style={{ scaleX: pageScrollProgress }} className="absolute inset-x-0 bottom-0 z-50 h-0.5 origin-left bg-[#e9c66b]" aria-hidden="true" />
        <div className="border-b border-white/15 bg-[#113c3d]/90 text-[11px] text-white/75 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2.5 sm:px-8">
            <p className="hidden sm:block">GICUMBI · MUTETE · GASEKE, RWANDA</p>
            <a className="flex items-center gap-2 transition-colors hover:text-[#e9c66b]" href="tel:0780081074">
              <PhoneCall size={13} /> 0780 081 074
            </a>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-5 pt-4 sm:px-8">
          <nav className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-4 py-3 shadow-2xl shadow-[#092c2c]/10 backdrop-blur-xl sm:px-5">
            <a href="#top" className="flex items-center gap-3" aria-label="GS Gaseke home">
              <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-xl bg-white shadow-lg">
                <img src={assets.logo} alt="GS Gaseke school logo" className="h-full w-full object-cover" />
              </span>
              <span className="hidden text-left leading-none sm:block">
                <span className="block font-display text-lg font-semibold tracking-tight text-white">GS Gaseke</span>
                <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.2em] text-white/60">Learn · Grow · Lead</span>
              </span>
            </a>

            <div className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-xs font-semibold text-white/80 transition-colors hover:text-[#f5d98a]">
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-3 sm:flex">
              <a href="#contact" className="rounded-full bg-[#e9c66b] px-4 py-2.5 text-xs font-bold text-[#173d3e] transition hover:bg-[#f5d98a]">
                Get in touch
              </a>
            </div>

            <button className="rounded-lg p-2 text-white lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation">
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
          {menuOpen && (
            <div className="mt-2 rounded-2xl border border-white/15 bg-[#113c3d] p-3 shadow-xl lg:hidden">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-semibold text-white/85 hover:bg-white/10">
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      <main id="top">
        <section className="relative isolate min-h-[730px] overflow-hidden bg-[#123f40] pt-40 text-white lg:min-h-[780px] lg:pt-48">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(75,151,135,.28),transparent_30%),linear-gradient(120deg,#10393b_0%,#164b4a_54%,#296e67_100%)]" />
          <div className="absolute -right-40 top-36 h-[28rem] w-[28rem] rounded-full border border-white/10" />
          <div className="absolute -right-20 top-56 h-[20rem] w-[20rem] rounded-full border border-white/10" />
          <div className="absolute bottom-0 left-0 h-36 w-full bg-[linear-gradient(to_top,rgba(247,248,244,.9),transparent)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 sm:px-8 lg:grid-cols-[1.02fr_.98fr] lg:gap-20">
            <motion.div initial="hidden" animate="show" variants={reveal} className="max-w-2xl">
              <div className="gsap-hero-item mb-7 inline-flex items-center gap-2 rounded-full border border-[#e9c66b]/35 bg-[#e9c66b]/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5d98a]">
                <Sparkles size={13} /> A place to discover your next step
              </div>
              <h1 className="gsap-hero-item max-w-2xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Building character.<br /><span className="inline-block min-h-[1em] text-[#f0cf78]" aria-live="polite">{typedMessage}<span className="ml-1 inline-block h-[0.82em] w-[3px] translate-y-[0.08em] animate-pulse bg-[#f0cf78]" aria-hidden="true" /></span>
              </h1>
              <p className="gsap-hero-item mt-7 max-w-lg text-base leading-7 text-white/72 sm:text-lg">
                Welcome to GS Gaseke — a learning community in Gaseke, Rwanda where curiosity is encouraged, digital skills are nurtured and every learner is seen.
              </p>
              <div className="gsap-hero-item mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#about" className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#f0cf78] px-6 py-3.5 text-sm font-bold text-[#173d3e] transition hover:bg-[#f7dfa0]">
                  Explore our school <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              <div className="gsap-hero-item mt-11 flex flex-wrap gap-x-8 gap-y-3 text-xs font-semibold text-white/60">
                <span className="flex items-center gap-2"><Check size={15} className="text-[#f0cf78]" /> Learning with purpose</span>
                <span className="flex items-center gap-2"><Check size={15} className="text-[#f0cf78]" /> Digital confidence</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96, x: 20 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative mx-auto w-full max-w-[560px]">
              <div className="absolute -left-5 top-10 z-10 hidden w-44 rounded-2xl border border-white/30 bg-[#f7f8f4] p-4 text-[#183b3d] shadow-xl sm:block">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2d7b74]">Our promise</p>
                <p className="mt-2 font-display text-xl font-semibold leading-tight">Every learner has room to rise.</p>
              </div>
              <div className="relative overflow-hidden rounded-[2rem] border-8 border-white/10 bg-white/10 shadow-2xl shadow-[#082d2d]/35">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.img key={activeHeroPhoto.src} src={activeHeroPhoto.src} alt={activeHeroPhoto.label} initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.7 }} className="aspect-[4/3] w-full object-cover" />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c3938]/65 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#f0cf78]">{activeHeroPhoto.label}</p>
                    <p className="mt-1 font-display text-2xl font-semibold">{activeHeroPhoto.caption}</p>
                  </div>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15 backdrop-blur"><ArrowRight size={17} /></span>
                </div>
                <div className="absolute bottom-5 right-5 flex translate-y-9 gap-1.5 sm:bottom-6 sm:right-6 sm:translate-y-0" aria-label="Hero photo slides">
                  {heroPhotos.map((photo, index) => <button key={photo.src} type="button" onClick={() => setHeroPhotoIndex(index)} aria-label={`Show ${photo.label}`} className={`h-1.5 rounded-full transition-all ${index === heroPhotoIndex ? "w-7 bg-[#f0cf78]" : "w-1.5 bg-white/55 hover:bg-white"}`} />)}
                </div>
              </div>
              <div className="absolute -bottom-9 -right-4 grid h-28 w-28 place-items-center rounded-full border-8 border-[#123f40] bg-[#e9c66b] text-center text-[#173d3e] shadow-xl sm:-right-8">
                <div><span className="block font-display text-2xl font-semibold">GS</span><span className="block text-[8px] font-bold uppercase tracking-widest">Gaseke</span></div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="relative scroll-mt-32 bg-[#f7f8f4] py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <AnimatePresence mode="wait" initial={false}>
              {aboutView === "overview" ? (
                <motion.div key="about-overview" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>
                  <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end lg:gap-20">
                    <div className="gsap-section-heading"><SectionEyebrow>About GS Gaseke</SectionEyebrow><h2 className="max-w-xl font-display text-4xl font-semibold leading-[1.03] tracking-[-0.04em] text-[#173d3e] sm:text-5xl">Discover the school, one <span className="text-[#2d7b74]">story</span> at a time.</h2><p className="mt-6 max-w-md text-base leading-7 text-[#547072]">Choose a topic below to explore the learning levels, school journey and termly fees at GS Gaseke.</p></div>
                    <div className="gsap-card-group grid gap-4 sm:grid-cols-3">
                      {[{ view: "levels" as const, icon: BookOpen, label: "Education levels", text: "Explore Nursery, Primary, O-Level and A-Level." }, { view: "journey" as const, icon: Users, label: "School journey", text: "Learn about our mission, vision and community." }, { view: "fees" as const, icon: Monitor, label: "School fees", text: "See the termly fee for every education level." }].map(({ view, icon: Icon, label, text }) => (
                        <button key={view} type="button" onClick={() => setAboutView(view)} className="gsap-card group rounded-2xl border border-[#dfe7e1] bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-[#b8d2c8] hover:shadow-xl hover:shadow-[#173d3e]/8"><div className="flex items-center justify-between"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#e6eeea] text-[#2d7b74] transition group-hover:bg-[#e9c66b] group-hover:text-[#173d3e]"><Icon size={19} /></span><ArrowRight size={17} className="text-[#9ab3a8] transition group-hover:translate-x-1 group-hover:text-[#206a66]" /></div><h3 className="mt-8 font-display text-xl font-semibold text-[#173d3e]">{label}</h3><p className="mt-2 text-sm leading-6 text-[#718586]">{text}</p><span className="mt-5 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#206a66]">View details</span></button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div key={aboutView} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }} transition={{ duration: 0.25 }}>
                  <button type="button" onClick={() => setAboutView("overview")} className="group mb-9 inline-flex items-center gap-2 text-sm font-bold text-[#206a66] transition hover:text-[#173d3e]"><ArrowLeft size={17} className="transition-transform group-hover:-translate-x-1" /> Back to About</button>
                  {aboutView === "levels" && <div><SectionEyebrow>Education levels</SectionEyebrow><h2 className="max-w-2xl font-display text-4xl font-semibold leading-[1.03] tracking-[-0.04em] text-[#173d3e] sm:text-6xl">A complete path from <span className="text-[#2d7b74]">Nursery to A-Level.</span></h2><p className="mt-6 max-w-2xl text-lg leading-8 text-[#547072]">GS Gaseke offers education across four stages, helping learners move forward with a clear and connected school journey.</p><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[{ level: "Nursery", text: "Early learning foundations and a first step into school life." }, { level: "Primary", text: "Building essential knowledge, confidence and learning habits." }, { level: "O-Level", text: "Developing strong subject foundations for future choices." }, { level: "A-Level", text: "Focused study in Mathematics, Economy, Physics and Computer Science." }].map(({ level, text }, index) => <div key={level} className="rounded-2xl border border-[#dfe7e1] bg-white p-5 shadow-sm"><span className="font-display text-3xl text-[#bfd2c9]">0{index + 1}</span><h3 className="mt-8 font-display text-xl font-semibold text-[#173d3e]">{level}</h3><p className="mt-2 text-sm leading-6 text-[#718586]">{text}</p></div>)}</div></div>}
                  {aboutView === "journey" && <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center"><div><SectionEyebrow>Our school journey</SectionEyebrow><h2 className="max-w-xl font-display text-4xl font-semibold leading-[1.03] tracking-[-0.04em] text-[#173d3e] sm:text-6xl">Learning with purpose, growing with <span className="text-[#2d7b74]">vision.</span></h2><p className="mt-6 max-w-xl text-lg leading-8 text-[#547072]">GS Gaseke is located in Gicumbi – Mutete – Gaseke, Rwanda. Our school journey brings learners through Nursery, Primary, O-Level and A-Level as they build knowledge, confidence and a sense of direction.</p></div><div className="rounded-[2rem] bg-[#173d3e] p-7 text-white shadow-xl sm:p-10"><div className="border-b border-white/15 pb-7"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f0cf78]">Mission draft</p><p className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-3xl">Draft: To support every learner through a purposeful and connected education journey.</p></div><div className="pt-7"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f0cf78]">Vision draft</p><p className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-3xl">Draft: To help learners grow into confident people prepared for their next step.</p></div></div></div>}
                  {aboutView === "fees" && <div><SectionEyebrow>Termly school fees</SectionEyebrow><h2 className="max-w-2xl font-display text-4xl font-semibold leading-[1.03] tracking-[-0.04em] text-[#173d3e] sm:text-6xl">A clear guide for every <span className="text-[#2d7b74]">stage.</span></h2><p className="mt-6 max-w-xl text-lg leading-8 text-[#547072]">The termly fee amounts below were provided for GS Gaseke’s four education levels.</p><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[{ level: "Nursery", fee: "20,000" }, { level: "Primary", fee: "50,000" }, { level: "O-Level", fee: "85,000" }, { level: "A-Level", fee: "85,000" }].map(({ level, fee }, index) => <div key={level} className={`rounded-2xl border p-6 ${index > 1 ? "border-[#b8d2c8] bg-[#e6eeea]" : "border-[#dfe7e1] bg-white"}`}><div className="flex items-center justify-between"><h3 className="font-display text-xl font-semibold text-[#173d3e]">{level}</h3><span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#2d7b74]">FRW</span></div><p className="mt-8 font-display text-4xl font-semibold tracking-[-0.04em] text-[#206a66]">{fee}</p><p className="mt-1 text-sm text-[#718586]">per term</p></div>)}</div></div>}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        <ScrollStory
          id="academics"
          eyebrow="Our academic journey"
          title={<>Learning that grows with every <span className="text-[#2d7b74]">stage.</span></>}
          intro="Scroll through the GS Gaseke pathway. Each level turns the pages of an interactive learning notebook inside this focused experience."
          items={scrollStories.academics}
          visual="notebook"
        />

        <ScrollStory
          id="facilities"
          eyebrow="Spaces that support growth"
          title={<>A campus made for <span className="text-[#2d7b74]">connection.</span></>}
          intro="Keep scrolling to move through the spaces that help school life feel active, focused and full of possibility."
          items={scrollStories.facilities}
          tone="light"
          visual="facilities"
          motionLevel="calm"
        />

        <ScrollStory
          id="activities"
          eyebrow="Beyond the timetable"
          title={<>Every day is an invitation to <span className="text-[#f0cf78]">participate.</span></>}
          intro="Scroll through the moments, interests and future activities that can make GS Gaseke memorable."
          items={scrollStories.activities}
          tone="dark"
          visual="activities"
          motionLevel="calm"
        />

        <ScrollStory
          id="gallery"
          eyebrow="From our campus"
          title={<>A glimpse of <span className="text-[#2d7b74]">Gaseke.</span></>}
          intro="Scroll through the campus, learning spaces, students and school identity without leaving the same visual frame."
          items={scrollStories.gallery}
          tone="light"
        />

        <section id="contact" className="scroll-mt-32 bg-[#e9c66b] py-20 text-[#173d3e] sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-20">
            <div>
              <SectionEyebrow>Let’s connect</SectionEyebrow>
              <h2 className="max-w-xl font-display text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl">Start a conversation with <span className="text-[#206a66]">GS Gaseke.</span></h2>
              <p className="mt-6 max-w-md text-base leading-7 text-[#3e6260]">Have a question about school life, learning or joining our community? Write to the school team and share what you need help with.</p>
              <div className="mt-8 space-y-4 border-t border-[#173d3e]/15 pt-6">
                <a href="tel:0780081074" className="flex items-center gap-3 text-sm font-bold text-[#173d3e] transition hover:text-[#206a66]"><span className="grid h-10 w-10 place-items-center rounded-full bg-[#173d3e] text-[#f0cf78]"><PhoneCall size={17} /></span>0780 081 074</a>
                <div className="flex items-center gap-3 text-sm font-semibold text-[#3e6260]"><span className="grid h-10 w-10 place-items-center rounded-full border border-[#173d3e]/20"><MapPin size={17} /></span>Gicumbi · Mutete · Gaseke, Rwanda</div>
              </div>
            </div>
            <form className="rounded-[2rem] border border-white/55 bg-[#fffaf0]/80 p-5 shadow-2xl shadow-[#9c761b]/15 backdrop-blur sm:p-8" onSubmit={(event) => event.preventDefault()}>
              <div className="mb-7 flex items-start justify-between gap-5 border-b border-[#173d3e]/10 pb-5"><div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#206a66]">Your message</p><h3 className="mt-2 font-display text-2xl font-semibold text-[#173d3e]">How can we help?</h3></div><span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#173d3e] text-[#f0cf78]"><Mail size={20} /></span></div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block"><span className="mb-2 block text-xs font-bold text-[#547072]">Your name</span><input name="name" type="text" placeholder="Enter your full name" className="w-full rounded-xl border border-[#d4dfd7] bg-white/85 px-4 py-3.5 text-sm text-[#173d3e] outline-none transition placeholder:text-[#9aabaa] focus:border-[#2d7b74] focus:ring-4 focus:ring-[#2d7b74]/10" /></label>
                <label className="block"><span className="mb-2 block text-xs font-bold text-[#547072]">Email address</span><input name="email" type="email" placeholder="you@example.com" className="w-full rounded-xl border border-[#d4dfd7] bg-white/85 px-4 py-3.5 text-sm text-[#173d3e] outline-none transition placeholder:text-[#9aabaa] focus:border-[#2d7b74] focus:ring-4 focus:ring-[#2d7b74]/10" /></label>
              </div>
              <label className="mt-5 block"><span className="mb-2 block text-xs font-bold text-[#547072]">Your message</span><textarea name="message" rows={5} placeholder="Tell us what you would like to know..." className="w-full resize-none rounded-xl border border-[#d4dfd7] bg-white/85 px-4 py-3.5 text-sm leading-6 text-[#173d3e] outline-none transition placeholder:text-[#9aabaa] focus:border-[#2d7b74] focus:ring-4 focus:ring-[#2d7b74]/10" /></label>
              <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-xs text-[11px] leading-5 text-[#718586]">Please include enough detail for the school team to respond helpfully.</p><button type="submit" className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#173d3e] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#245a58]">Send your request <Send size={16} className="transition-transform group-hover:translate-x-1" /></button></div>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#0e3031] py-10 text-white"><div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:px-8 md:flex-row md:items-center md:justify-between"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center overflow-hidden rounded-xl bg-white"><img src={assets.logo} alt="GS Gaseke logo" className="h-full w-full object-cover" /></span><div><p className="font-display text-lg font-semibold">GS Gaseke</p><p className="text-[10px] uppercase tracking-[0.18em] text-white/50">Learn · Grow · Lead</p></div></div><div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/55">{navItems.map((item) => <a key={item.href} href={item.href} className="transition hover:text-white">{item.label}</a>)}</div><p className="text-xs text-white/40">© {new Date().getFullYear()} GS Gaseke</p></div></footer>
    </div>
  );
}

export default Home;
