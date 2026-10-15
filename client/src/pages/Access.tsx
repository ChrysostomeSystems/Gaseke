import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, GraduationCap, LockKeyhole, ShieldCheck, UserRound, UsersRound } from "lucide-react";
import { Link } from "wouter";
import { startLogin } from "@/const";
import { applyPageSeo, seoDefaults } from "@/lib/seo";

const logo = "/manus-storage/logo_95d53d58.jpg";

const roles = [
  { title: "School manager", description: "Manage school operations, people, content and reports.", icon: ShieldCheck, accent: "bg-[#34FA34]", iconColor: "text-[#FFFFFF]" },
  { title: "Teacher", description: "Access classes, attendance, results and announcements.", icon: UsersRound, accent: "bg-[#111111]", iconColor: "text-[#34FA34]" },
  { title: "Student", description: "View your profile, subjects, results and school updates.", icon: GraduationCap, accent: "bg-[#111111]", iconColor: "text-[#BDBDBD]" },
];

export default function Access() {
  useEffect(() => {
    applyPageSeo(seoDefaults.portal);
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-5 py-6 sm:px-8">
        <header className="flex items-center justify-between"><Link href="/" className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center overflow-hidden rounded-xl bg-white shadow-sm"><img src={logo} alt="GS Gaseke logo" className="h-full w-full object-cover" /></span><span><span className="block font-display text-lg font-semibold leading-none">GS Gaseke</span><span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.2em] text-[#BDBDBD]">School portal</span></span></Link><Link href="/" className="inline-flex items-center gap-2 rounded-full border border-[#333333] px-4 py-2.5 text-xs font-bold text-[#BDBDBD] transition hover:border-[#34FA34] hover:text-[#34FA34]"><ArrowLeft size={15} /> Back to website</Link></header>
        <main className="grid flex-1 items-center gap-12 py-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-20 lg:py-20">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}><div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#333333] bg-[#111111] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#34FA34]"><LockKeyhole size={13} /> Secure school access</div><h1 className="max-w-xl font-display text-5xl font-semibold leading-[.98] tracking-[-.055em] text-[#FFFFFF] sm:text-6xl">One portal for the people who make school <span className="text-[#34FA34]">happen.</span></h1><p className="mt-6 max-w-md text-base leading-7 text-[#BDBDBD]">Choose your workspace to continue. Your access is determined securely after sign-in, so changing a URL cannot unlock another role’s dashboard.</p><div className="mt-8 flex items-center gap-3 text-xs font-semibold text-[#BDBDBD]"><span className="grid h-8 w-8 place-items-center rounded-full bg-[#111111] text-white"><UserRound size={15} /></span> Role-based access is enabled for the next platform milestone.</div></motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55, delay: .08 }} className="rounded-[2rem] border border-[#333333] bg-white p-4 shadow-[0_25px_70px_rgba(23,61,62,.08)] sm:p-6"><div className="border-b border-[#333333] px-2 pb-5 sm:px-4"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#34FA34]">Select your role</p><h2 className="mt-2 font-display text-2xl font-semibold text-[#FFFFFF]">Continue to sign in</h2></div><div className="space-y-3 pt-5">{roles.map(({ title, description, icon: Icon, accent, iconColor }, index) => <button key={title} onClick={startLogin} className="group flex w-full items-center gap-4 rounded-2xl border border-[#333333] p-4 text-left transition hover:-translate-y-0.5 hover:border-[#34FA34] hover:shadow-lg hover:shadow-black/30 sm:p-5"><span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${accent} ${iconColor}`}><Icon size={23} /></span><span className="min-w-0 flex-1"><span className="block font-display text-xl font-semibold text-[#FFFFFF]">{title}</span><span className="mt-1 block text-xs leading-5 text-[#BDBDBD]">{description}</span></span><ArrowRight size={18} className="shrink-0 text-[#BDBDBD] transition group-hover:translate-x-1 group-hover:text-[#34FA34]" /></button>)} </div><div className="mt-6 flex gap-3 rounded-2xl bg-[#111111] p-4 text-xs leading-5 text-[#BDBDBD]"><ShieldCheck size={18} className="mt-0.5 shrink-0 text-[#34FA34]" /><p><strong className="text-[#BDBDBD]">Administrator registration is restricted.</strong> School manager accounts must be provisioned through an authorized school process.</p></div></motion.div>
        </main>
        <footer className="flex flex-col gap-2 border-t border-[#333333] pt-5 text-xs text-[#BDBDBD] sm:flex-row sm:items-center sm:justify-between"><span>GS Gaseke · Gicumbi – Mutete – Gaseke, Rwanda</span><span>Secure access for the school community</span></footer>
      </div>
    </div>
  );
}
