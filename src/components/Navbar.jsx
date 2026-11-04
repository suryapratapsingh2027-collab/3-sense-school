import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, PhoneCall } from 'lucide-react'
const links=[['Home','/'],['About','/about'],['Facilities','/facilities'],['Programs','/programs'],['Admissions','/admissions'],['Gallery','/gallery'],['Contact','/contact']]
export default function Navbar(){
 const [open,setOpen]=useState(false)
 return <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
  <div className="mx-auto flex h-[78px] w-[min(1180px,90%)] items-center justify-between">
   <Link to="/" className="flex items-center gap-3" onClick={()=>setOpen(false)}>
    <img src="/assets/school-logo.jpg" className="h-12 w-12 rounded-full border-2 border-indigo-100 object-cover" alt="3 Sense school logo"/>
    <span className="font-display text-sm font-extrabold leading-tight text-navy sm:text-base">3 SENSE<small className="block pt-1 text-[9px] tracking-[1.3px] text-slate-500">HIGHER SECONDARY SCHOOL</small></span>
   </Link>
   <nav className="hidden items-center gap-5 lg:flex">{links.map(([label,to])=><NavLink key={to} to={to} className={({isActive})=>`text-xs font-bold transition hover:text-coral ${isActive?'text-coral':'text-slate-600'}`}>{label}</NavLink>)}</nav>
   <Link to="/contact" className="hidden items-center gap-2 rounded-full bg-navy px-5 py-3 text-xs font-extrabold text-white shadow-lg shadow-indigo-950/15 transition hover:-translate-y-1 lg:flex"><PhoneCall size={15}/> Enquire now</Link>
   <button aria-label="Toggle menu" onClick={()=>setOpen(!open)} className="rounded-xl p-2 text-navy lg:hidden">{open?<X/>:<Menu/>}</button>
  </div>
  {open&&<nav className="grid gap-1 border-t border-slate-100 bg-white px-[5%] py-3 lg:hidden">{links.map(([label,to])=><NavLink onClick={()=>setOpen(false)} key={to} to={to} className="rounded-lg px-3 py-3 text-sm font-bold text-slate-700 hover:bg-indigo-50">{label}</NavLink>)}</nav>}
 </header>
}