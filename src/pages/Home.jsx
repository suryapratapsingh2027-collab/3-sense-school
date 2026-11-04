
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Brain,
  FlaskConical,
  Flower2,
  MessageCircle,
  GraduationCap,
  BookOpen,
  Atom,
  Dna,
  Award,
  Target,
  Calculator,
  HeartHandshake,
  Star,
  CheckCircle2
} from 'lucide-react'

import AnimatedStats from '../components/AnimatedStats'


// =====================================================
// DATA
// =====================================================

const features = [
  {
    icon: Brain,
    title: 'Mid-Brain & Vedic Maths',
    description:
      'Build focus, memory, number sense and problem-solving confidence through engaging activities.',
    tag: 'Mental Development'
  },
  {
    icon: FlaskConical,
    title: 'Science & Research Models',
    description:
      'Hands-on exploration that turns questions into experiments, discoveries and real understanding.',
    tag: 'Practical Learning'
  },
  {
    icon: Flower2,
    title: 'Meditation & Yoga',
    description:
      'Encouraging calm, concentration and a healthy balance between learning and wellbeing.',
    tag: 'Mind & Wellness'
  },
  {
    icon: MessageCircle,
    title: 'English Speaking',
    description:
      'Communication practice that helps learners express ideas clearly and speak with confidence.',
    tag: 'Communication'
  },
  {
    icon: GraduationCap,
    title: 'Career & Exam Guidance',
    description:
      'Early direction and foundational support to help students explore future opportunities.',
    tag: 'Future Readiness'
  },
  {
    icon: BookOpen,
    title: 'Abacus & Reading Culture',
    description:
      'Strengthening mental arithmetic, curiosity, imagination and a lifelong love of learning.',
    tag: 'Learning Skills'
  }
]

const programs = [
  {
    icon: Atom,
    title: 'Maths & Science',
    description: 'Explore · Question · Create',
    number: '01',
    color: 'from-blue-500 to-indigo-600',
    light: 'bg-blue-50',
    text: 'text-blue-700'
  },
  {
    icon: Dna,
    title: 'Bio-Science',
    description: 'Discover the science of life',
    number: '02',
    color: 'from-emerald-500 to-teal-600',
    light: 'bg-emerald-50',
    text: 'text-emerald-700'
  },
  {
    icon: Award,
    title: 'Career Guidelines',
    description: "Prepare for what's next",
    number: '03',
    color: 'from-orange-400 to-rose-500',
    light: 'bg-orange-50',
    text: 'text-orange-700'
  },
  {
    icon: Target,
    title: 'IIT / NEET Foundation',
    description: 'Build strong fundamentals',
    number: '04',
    color: 'from-violet-500 to-purple-600',
    light: 'bg-violet-50',
    text: 'text-violet-700'
  },
  {
    icon: MessageCircle,
    title: 'English Speaking',
    description: 'Communicate with confidence',
    number: '05',
    color: 'from-cyan-500 to-blue-600',
    light: 'bg-cyan-50',
    text: 'text-cyan-700'
  },
  {
    icon: Calculator,
    title: 'Vedic Maths & Abacus',
    description: 'Think faster, learn smarter',
    number: '06',
    color: 'from-amber-400 to-orange-500',
    light: 'bg-amber-50',
    text: 'text-amber-700'
  },
  {
    icon: Flower2,
    title: 'Meditation & Yoga',
    description: 'Balance mind and body',
    number: '07',
    color: 'from-pink-500 to-rose-600',
    light: 'bg-pink-50',
    text: 'text-pink-700'
  },
  {
    icon: Sparkles,
    title: 'Vision Board & Mid Brain',
    description: 'Imagine · Focus · Achieve',
    number: '08',
    color: 'from-indigo-500 to-blue-600',
    light: 'bg-indigo-50',
    text: 'text-indigo-700'
  }
]


// =====================================================
// SCROLL REVEAL ANIMATION
// =====================================================

function Reveal({ children, index = 0, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -35px 0px'
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 110}ms` }}
      className={`${className} transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-10 opacity-0'
      }`}
    >
      {children}
    </div>
  )
}


// =====================================================
// COMMON SECTION HEADING
// =====================================================

function PremiumSectionHeading({
  kicker,
  title,
  highlight,
  description
}) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">

      <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-5 py-2 text-[10px] font-extrabold uppercase tracking-[.2em] text-indigo-700 sm:text-xs">
        <span className="h-2 w-2 rounded-full bg-indigo-500" />
        {kicker}
      </span>

      <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight tracking-tight text-[#14214d] sm:text-4xl lg:text-5xl">
        {title}

        {highlight && (
          <span className="mt-1 block bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
        {description}
      </p>

      <div className="mx-auto mt-7 h-1.5 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />

    </div>
  )
}


// =====================================================
// WHY CHOOSE US CARD
// =====================================================

function WhyChooseCard({ item, index }) {
  const Icon = item.icon

  const gradients = [
    'from-blue-500 to-indigo-600',
    'from-cyan-500 to-blue-600',
    'from-violet-500 to-purple-600',
    'from-orange-400 to-pink-500',
    'from-emerald-500 to-teal-600',
    'from-amber-400 to-orange-500'
  ]

  return (
    <Reveal index={index} className="h-full">

      <article className="group relative h-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-[0_22px_55px_rgba(37,59,120,0.13)] sm:p-8">

        {/* Decorative glow */}

        <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-indigo-100 opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-100" />

        {/* Icon and number */}

        <div className="relative flex items-center justify-between">

          <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${gradients[index % gradients.length]} shadow-lg transition-all duration-500 group-hover:rotate-3 group-hover:scale-110`}>
            <Icon
              size={29}
              strokeWidth={1.8}
              className="text-white"
            />
          </div>

          <span className="font-display text-4xl font-extrabold text-slate-100 transition-colors duration-500 group-hover:text-indigo-100">
            0{index + 1}
          </span>

        </div>

        {/* Card content */}

        <div className="relative mt-7">

          <span className="text-[10px] font-extrabold uppercase tracking-[.15em] text-indigo-500">
            {item.tag}
          </span>

          <h3 className="mt-2 font-display text-xl font-extrabold tracking-tight text-[#14214d] transition-colors duration-300 group-hover:text-indigo-700 sm:text-2xl">
            {item.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-500">
            {item.description}
          </p>

        </div>

        {/* Bottom accent */}

        <div className="relative mt-7 flex items-center justify-between">

          <div className="h-1 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-500 group-hover:w-24" />

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white">
            <ArrowUpRight size={18} />
          </div>

        </div>

      </article>

    </Reveal>
  )
}


// =====================================================
// PROGRAM CARD
// =====================================================

function LearningProgramCard({ item, index }) {
  const Icon = item.icon

  return (
    <Reveal index={index} className="h-full">

      <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-[0_20px_45px_rgba(30,50,100,0.12)] sm:p-7">

        {/* Number */}

        <div className="absolute right-5 top-5 font-display text-3xl font-extrabold text-slate-100 transition-colors duration-500 group-hover:text-indigo-100">
          {item.number}
        </div>

        {/* Icon */}

        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.light} transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
          <Icon
            size={27}
            strokeWidth={1.9}
            className={item.text}
          />
        </div>

        {/* Content */}

        <div className="mt-6">

          <h3 className="max-w-[90%] font-display text-lg font-extrabold leading-snug text-[#14214d] transition-colors duration-300 group-hover:text-indigo-700">
            {item.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            {item.description}
          </p>

        </div>

        {/* Bottom decoration */}

        <div className="mt-auto flex items-center justify-between pt-7">

          <span className="h-1 w-10 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-500 group-hover:w-20" />

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white">
            <ArrowUpRight size={17} />
          </div>

        </div>

      </article>

    </Reveal>
  )
}


// =====================================================
// ADMISSIONS SECTION
// =====================================================

function AdmissionsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">

      <div className="mx-auto w-[min(1180px,90%)]">

        <Reveal>

          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#101d50] via-[#172b70] to-[#243e91] p-7 text-white shadow-[0_25px_70px_rgba(16,29,80,0.18)] sm:p-10 md:p-14">

            {/* Background decorations */}

            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border-[45px] border-white/5" />

            <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

            <div className="relative grid items-center gap-12 md:grid-cols-[1.2fr_.8fr]">

              {/* Left content */}

              <div>

                <span className="inline-flex items-center gap-2 rounded-full border border-yellow-300/30 bg-yellow-300/10 px-4 py-2 text-[10px] font-extrabold tracking-[.2em] text-yellow-300 sm:text-xs">
                  <Sparkles size={14} />
                  ADMISSIONS · 2027–2028
                </span>

                <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  Every great journey starts with a

                  <span className="block text-yellow-300">
                    first step.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-8 text-blue-100 sm:text-base">
                  Give your child an environment to learn with curiosity,
                  grow with confidence and discover their unique potential.
                </p>

                <Link
                  to="/admissions"
                  className="group mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-yellow-300 to-amber-400 px-7 py-4 text-sm font-extrabold text-[#101d50] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-yellow-300/20"
                >
                  Know About Admissions

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

              </div>

              {/* Right admission card */}

              <div className="relative">

                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-yellow-300/20 to-cyan-300/10 blur-xl" />

                <div className="relative rounded-[1.7rem] border border-white/20 bg-white/[0.09] p-7 shadow-2xl backdrop-blur-xl sm:p-9">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-300 text-[#101d50] shadow-lg">
                    <GraduationCap size={34} />
                  </div>

                  <p className="mt-7 text-xs font-bold uppercase tracking-[.18em] text-blue-100">
                    New Academic Session
                  </p>

                  <h3 className="mt-2 font-display text-4xl font-extrabold text-yellow-300 sm:text-5xl">
                    2027–28
                  </h3>

                  <p className="mt-3 text-sm text-blue-100">
                    Nursery to Higher Secondary
                  </p>

                  <div className="my-7 h-px bg-white/15" />

                  <ul className="space-y-4">

                    {[
                      'Academic learning with enrichment',
                      'Maths & Science / Bio-Science streams',
                      'Yoga, meditation and value education'
                    ].map((item) => (

                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-blue-50"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-yellow-300"
                        />

                        {item}

                      </li>

                    ))}

                  </ul>

                </div>

              </div>

            </div>

          </div>

        </Reveal>

      </div>

    </section>
  )
}


// =====================================================
// MAIN HOME PAGE
// =====================================================

export default function Home() {
  return (
    <main className="overflow-hidden bg-white font-sans">

      {/* ================================================
          HERO SECTION
      ================================================= */}

      <section className="relative isolate flex min-h-[720px] items-center overflow-hidden bg-[#07113e] text-white">

        {/* School background image */}

        <div className="absolute inset-0 -z-20">

          <img
            src="/assets/campus-building.png"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#07113e]/95 via-[#101d68]/85 to-[#101d68]/65" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#07113e]/85 via-transparent to-[#07113e]/30" />

        </div>

        {/* Background glow */}

        <div className="absolute inset-0 -z-10 overflow-hidden">

          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />

          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[120px]" />

        </div>

        {/* Hero content */}

        <div className="mx-auto w-[min(1180px,90%)] py-24">

          <div className="max-w-4xl">

            <Reveal>

              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[10px] font-extrabold tracking-[.13em] text-yellow-300 backdrop-blur-xl sm:text-[11px]">

                <span className="h-2 w-2 rounded-full bg-green-400" />

                MANAGED BY THREE SENSE EDUCATION SOCIETY

              </span>

            </Reveal>

            <Reveal index={1}>

              <h1 className="mt-8 font-display text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">

                Learn with purpose.

                <span className="mt-3 block bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-300 bg-clip-text text-transparent">
                  Grow with confidence.
                </span>

              </h1>

            </Reveal>

            <Reveal index={2}>

              <p className="mt-7 max-w-2xl text-base leading-8 text-blue-50/90 sm:text-lg">
                Welcome to 3 Sense Higher Secondary School, Shahpur.
                A place where strong academics, practical discovery
                and mindful living come together to shape brighter futures.
              </p>

            </Reveal>

            <Reveal index={3}>

              <div className="mt-9 flex flex-wrap gap-4">

                <Link
                  to="/admissions"
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 px-7 py-4 text-sm font-extrabold text-[#101d50] shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-yellow-400/30"
                >
                  Explore Admissions

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-3 rounded-full border border-white/50 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-xl transition hover:bg-white/20"
                >
                  <BookOpen size={18} />
                  Explore School Life
                </Link>

              </div>

            </Reveal>

            <Reveal index={4}>

              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-5 text-xs font-semibold text-blue-100 sm:text-sm">

                <span className="flex items-center gap-2">
                  <HeartHandshake size={19} className="text-yellow-300" />
                  Holistic Learning
                </span>

                <span className="flex items-center gap-2">
                  <Brain size={19} className="text-yellow-300" />
                  Mindful Minds
                </span>

                <span className="flex items-center gap-2">
                  <Star size={19} className="text-yellow-300" />
                  Brighter Futures
                </span>

              </div>

            </Reveal>

          </div>

        </div>

        {/* Bottom accent */}

        <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-yellow-400 via-white to-green-400" />

      </section>


      {/* ================================================
          STATS SECTION
      ================================================= */}

      <AnimatedStats />


      {/* ================================================
          WHY CHOOSE US SECTION
      ================================================= */}

      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f7f9ff] to-white py-24 md:py-32">

        {/* Background decoration */}

        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-100/50 blur-[100px]" />

        <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-violet-100/50 blur-[100px]" />

        <div className="relative mx-auto w-[min(1180px,90%)]">

          <Reveal>

            <PremiumSectionHeading
              kicker="Why Choose 3 Sense"
              title="More than lessons."
              highlight="A world of possibilities."
              description="Experiences that help students become independent thinkers, confident communicators and lifelong learners."
            />

          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {features.map((item, index) => (

              <WhyChooseCard
                key={item.title}
                item={item}
                index={index}
              />

            ))}

          </div>

        </div>

      </section>


      {/* ================================================
          LEARNING PROGRAMS SECTION
      ================================================= */}

      <section className="relative overflow-hidden bg-gradient-to-b from-[#eef2ff] via-[#f7f9ff] to-white py-24 md:py-32">

        {/* Background decorations */}

        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-indigo-200/40 blur-[110px]" />

        <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-cyan-100/50 blur-[110px]" />

        <div className="relative mx-auto w-[min(1180px,90%)]">

          <Reveal>

            <PremiumSectionHeading
              kicker="Learning Pathways"
              title="Find your spark."
              highlight="Build your future."
              description="A range of academic and enrichment pathways to discover individual talents, strengthen skills and build confidence."
            />

          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {programs.map((item, index) => (

              <LearningProgramCard
                key={item.title}
                item={item}
                index={index}
              />

            ))}

          </div>

        </div>

      </section>


      {/* ================================================
          ADMISSIONS SECTION
      ================================================= */}

      <AdmissionsSection />


    </main>
  )
}
