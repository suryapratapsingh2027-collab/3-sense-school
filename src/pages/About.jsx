
import { useEffect, useRef, useState } from 'react'

import {
  Heart,
  Brain,
  BookOpenCheck,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  Users,
  Lightbulb,
  Target,
  CheckCircle2,
  Star,
  HeartHandshake
} from 'lucide-react'

import { Link } from 'react-router-dom'


// =====================================================
// ABOUT PAGE DATA
// =====================================================

const values = [
  {
    icon: Heart,
    title: 'Value-based Learning',
    description:
      'Developing kindness, respect, discipline and responsibility in every learner.',
    color: 'from-rose-500 to-pink-600',
    light: 'bg-rose-50',
    text: 'text-rose-600'
  },
  {
    icon: Brain,
    title: 'Mindfulness & Wellness',
    description:
      'Encouraging focus, emotional balance and a healthy mind through mindful practices.',
    color: 'from-violet-500 to-purple-600',
    light: 'bg-violet-50',
    text: 'text-violet-600'
  },
  {
    icon: BookOpenCheck,
    title: 'Activity-led Education',
    description:
      'Making learning meaningful through activities, practical experiences and exploration.',
    color: 'from-blue-500 to-indigo-600',
    light: 'bg-blue-50',
    text: 'text-blue-600'
  },
  {
    icon: Sparkles,
    title: 'Creative Exploration',
    description:
      'Giving students opportunities to discover their talents and express new ideas.',
    color: 'from-amber-400 to-orange-500',
    light: 'bg-amber-50',
    text: 'text-amber-600'
  }
]


const highlights = [
  {
    icon: GraduationCap,
    title: 'Holistic Education',
    description: 'Learning beyond textbooks'
  },
  {
    icon: Users,
    title: 'Supportive Environment',
    description: 'Growing together as a family'
  },
  {
    icon: Lightbulb,
    title: 'Practical Learning',
    description: 'Discovering through experience'
  }
]


// =====================================================
// SCROLL REVEAL
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
// SECTION HEADING
// =====================================================

function SectionHeading({
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
// VALUE CARD
// =====================================================

function ValueCard({ item, index }) {
  const Icon = item.icon

  return (
    <Reveal index={index} className="h-full">

      <article className="group relative h-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-[0_22px_55px_rgba(37,59,120,0.12)]">

        {/* Background glow */}

        <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-indigo-100 opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-100" />

        {/* Icon */}

        <div className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} shadow-lg transition-all duration-500 group-hover:rotate-3 group-hover:scale-110`}>

          <Icon
            size={26}
            strokeWidth={1.9}
            className="text-white"
          />

        </div>

        {/* Content */}

        <div className="relative mt-6">

          <h3 className="font-display text-xl font-extrabold tracking-tight text-[#14214d] transition-colors duration-300 group-hover:text-indigo-700">
            {item.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-500">
            {item.description}
          </p>

        </div>

        {/* Bottom accent */}

        <div className="relative mt-6 flex items-center justify-between">

          <div className="h-1 w-10 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-500 group-hover:w-20" />

          <ArrowUpRight
            size={19}
            className="text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-indigo-600"
          />

        </div>

      </article>

    </Reveal>
  )
}


// =====================================================
// HIGHLIGHT CARD
// =====================================================

function HighlightCard({ item, index }) {
  const Icon = item.icon

  return (
    <Reveal index={index}>

      <div className="group flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.12]">

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-300 text-[#14214d] transition-transform duration-300 group-hover:scale-110">

          <Icon size={23} />

        </div>

        <div>

          <h3 className="font-display text-base font-extrabold text-white">
            {item.title}
          </h3>

          <p className="mt-1 text-xs leading-6 text-blue-100">
            {item.description}
          </p>

        </div>

      </div>

    </Reveal>
  )
}


// =====================================================
// ABOUT PAGE
// =====================================================

export default function About() {
  return (
    <main className="overflow-hidden bg-white font-sans">


      {/* ================================================
          ABOUT HERO
      ================================================= */}

      <section className="relative isolate flex min-h-[430px] items-center overflow-hidden bg-[#101d50] text-white">

        {/* Background */}

        <div className="absolute inset-0 -z-10">

          <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />

          <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-violet-500/20 blur-[120px]" />

          <div className="absolute inset-0 bg-gradient-to-br from-[#101d50] via-[#172b70] to-[#243e91]" />

        </div>

        <div className="mx-auto w-[min(1180px,90%)] py-24">

          <div className="max-w-4xl">

            <Reveal>

              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[10px] font-extrabold uppercase tracking-[.2em] text-yellow-300 backdrop-blur-xl sm:text-xs">

                <Sparkles size={14} />

                ABOUT 3 SENSE

              </span>

            </Reveal>

            <Reveal index={1}>

              <h1 className="mt-7 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">

                Education that goes

                <span className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-300 bg-clip-text text-transparent">
                  beyond the classroom.
                </span>

              </h1>

            </Reveal>

            <Reveal index={2}>

              <p className="mt-6 max-w-2xl text-sm leading-8 text-blue-100 sm:text-lg">

                Managed by Three Sense Education Society,
                3 Sense Higher Secondary School believes in
                nurturing the mind, body and spirit.

              </p>

            </Reveal>

            <Reveal index={3}>

              <div className="mt-8 flex flex-wrap gap-3">

                <a
                  href="#our-story"
                  className="group inline-flex items-center gap-3 rounded-full bg-yellow-400 px-7 py-4 text-sm font-extrabold text-[#101d50] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300"
                >

                  Discover Our Story

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </a>

                <Link
                  to="/admissions"
                  className="inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-xl transition hover:bg-white/20"
                >

                  Admissions

                  <ArrowUpRight size={18} />

                </Link>

              </div>

            </Reveal>

          </div>

        </div>

        {/* Bottom accent */}

        <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-yellow-400 via-white to-green-400" />

      </section>


      {/* ================================================
          SCHOOL FAMILY / OUR STORY
      ================================================= */}

      <section
        id="our-story"
        className="relative overflow-hidden bg-gradient-to-b from-white via-[#f7f9ff] to-white py-20 md:py-28"
      >

        {/* Background decoration */}

        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-100/50 blur-[110px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-100/50 blur-[110px]" />

        <div className="relative mx-auto w-[min(1180px,90%)]">

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">

            {/* LEFT: FAMILY IMAGE */}

            <Reveal>

              <div className="group relative">

                {/* Image glow */}

                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-indigo-200 via-blue-100 to-cyan-100 opacity-70 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative overflow-hidden rounded-[1.7rem] border border-white bg-white p-2 shadow-[0_25px_65px_rgba(30,50,100,0.15)]">

                  <img
                    src="/assets/3-sense-family.jpg"
                    alt="3 Sense Family - School teachers and staff"
                    className="h-auto w-full rounded-[1.25rem] object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                  />

                </div>

                {/* Image caption */}

                <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-xl backdrop-blur-xl sm:left-8 sm:right-8">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white">

                      <HeartHandshake size={23} />

                    </div>

                    <div>

                      <p className="font-display text-sm font-extrabold text-[#14214d] sm:text-base">
                        Together as One Family
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        The people behind the 3 Sense journey
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </Reveal>


            {/* RIGHT: PHILOSOPHY */}

            <div className="pt-8 lg:pt-0">

              <Reveal>

                <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-5 py-2 text-[10px] font-extrabold uppercase tracking-[.2em] text-indigo-700 sm:text-xs">

                  <span className="h-2 w-2 rounded-full bg-indigo-500" />

                  OUR PHILOSOPHY

                </span>

              </Reveal>

              <Reveal index={1}>

                <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight tracking-tight text-[#14214d] sm:text-4xl lg:text-5xl">

                  Change the world

                  <span className="block bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                    by meditation.
                  </span>

                </h2>

              </Reveal>

              <Reveal index={2}>

                <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">

                  We bring academics, practical learning and
                  mindfulness together to help every child find
                  their strengths.

                </p>

                <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">

                  Our approach encourages curiosity, kindness,
                  confidence and a lifelong love of learning.

                </p>

              </Reveal>

              <Reveal index={3}>

                <div className="mt-7 flex items-center gap-3 rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white">

                    <Star size={22} />

                  </div>

                  <p className="text-sm font-bold leading-6 text-[#14214d]">
                    Nurturing the mind, body and spirit of every learner.
                  </p>

                </div>

              </Reveal>

            </div>

          </div>

        </div>

      </section>


      {/* ================================================
          OUR PHILOSOPHY VALUES
      ================================================= */}

      <section className="relative overflow-hidden bg-gradient-to-b from-[#eef2ff] via-[#f8faff] to-white py-24 md:py-32">

        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-indigo-200/40 blur-[110px]" />

        <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-cyan-100/50 blur-[110px]" />

        <div className="relative mx-auto w-[min(1180px,90%)]">

          <Reveal>

            <SectionHeading
              kicker="What We Believe"
              title="Learning with purpose."
              highlight="Growing with values."
              description="Our educational philosophy brings together knowledge, character, creativity and wellbeing to support every child's growth."
            />

          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {values.map((item, index) => (

              <ValueCard
                key={item.title}
                item={item}
                index={index}
              />

            ))}

          </div>

        </div>

      </section>


      {/* ================================================
          OUR APPROACH
      ================================================= */}

      <section className="relative overflow-hidden bg-[#101d50] py-24 md:py-28">

        {/* Background decoration */}

        <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />

        <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-violet-500/20 blur-[120px]" />

        <div className="relative mx-auto w-[min(1180px,90%)]">

          <Reveal>

            <div className="mx-auto mb-14 max-w-3xl text-center">

              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[10px] font-extrabold uppercase tracking-[.2em] text-yellow-300 sm:text-xs">

                <Sparkles size={14} />

                THE 3 SENSE APPROACH

              </span>

              <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">

                Education for the

                <span className="block text-yellow-300">
                  whole individual.
                </span>

              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-blue-100 sm:text-base">

                We believe meaningful education is about more
                than academic achievement. It is about helping
                learners develop skills, values and confidence
                for life.

              </p>

              <div className="mx-auto mt-7 h-1.5 w-20 rounded-full bg-gradient-to-r from-yellow-300 to-cyan-400" />

            </div>

          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">

            {highlights.map((item, index) => (

              <HighlightCard
                key={item.title}
                item={item}
                index={index}
              />

            ))}

          </div>

        </div>

      </section>


      {/* ================================================
          ADMISSIONS CTA
      ================================================= */}

      <section className="relative overflow-hidden bg-white py-20 md:py-28">

        <div className="mx-auto w-[min(1180px,90%)]">

          <Reveal>

            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#172b70] via-[#1b367e] to-[#243e91] p-8 text-white shadow-[0_25px_70px_rgba(16,29,80,0.18)] sm:p-12 md:p-14">

              <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border-[45px] border-white/5" />

              <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

                <div className="max-w-2xl">

                  <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.2em] text-yellow-300">

                    <GraduationCap size={18} />

                    JOIN THE 3 SENSE FAMILY

                  </span>

                  <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">

                    Give your child a

                    <span className="block text-yellow-300">
                      brighter tomorrow.
                    </span>

                  </h2>

                  <p className="mt-5 max-w-xl text-sm leading-8 text-blue-100 sm:text-base">

                    Discover an environment where students
                    can learn, explore, grow and build confidence.

                  </p>

                </div>

                <Link
                  to="/admissions"
                  className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-yellow-400 px-7 py-4 text-sm font-extrabold text-[#101d50] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300"
                >

                  Explore Admissions

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </Link>

              </div>

            </div>

          </Reveal>

        </div>

      </section>

    </main>
  )
}
