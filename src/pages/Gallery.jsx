
import { useEffect, useRef, useState } from 'react'

import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  Images,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react'


// =====================================================
// GALLERY PHOTOS
// =====================================================

const photos = [
  {
    src: '/assets/campus-building.png',
    title: 'Our School Campus',
    category: 'Campus',
    description: 'A place to learn, explore and grow.',
    position: 'center'
  },
  {
    src: '/assets/students-mp-activity.jpeg',
    title: 'Learning Together',
    category: 'Activities',
    description: 'Students learning through experiences.',
    position: 'center'
  },
  {
    src: '/assets/students-mp-art.jpeg',
    title: 'Creativity in Action',
    category: 'Creativity',
    description: 'Encouraging imagination and creative thinking.',
    position: 'center'
  },
  {
    src: '/assets/image5.jfif',
    title: 'Welcome Back to School',
    category: 'Student Activities',
    description: 'Celebrating creativity and the joy of learning.',
    position: 'center'
  },
  {
    src: '/assets/image4.jfif',
    title: 'The 3 Sense Family',
    category: 'Our Community',
    description: 'Together, we learn and grow as one family.',
    position: 'center'
  },
  {
    src: '/assets/image4.jfif',
    title: 'The 3 Sense Family',
    category: 'Our Community',
    description: 'Together, we learn and grow as one family.',
    position: 'center'
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
        threshold: 0.1,
        rootMargin: '0px 0px -35px 0px'
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
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
// GALLERY IMAGE CARD
// =====================================================

function GalleryCard({ photo, index, onOpen }) {
  return (
    <Reveal index={index} className="h-full">

      <button
        type="button"
        onClick={() => onOpen(index)}
        aria-label={`View ${photo.title}`}
        className="group relative block h-full w-full overflow-hidden rounded-3xl bg-slate-100 text-left shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(30,50,100,0.16)] focus:outline-none focus:ring-4 focus:ring-indigo-300"
      >

        {/* Image */}

        <div className="relative h-full min-h-[280px] overflow-hidden">

          <img
            src={photo.src}
            alt={photo.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            style={{ objectPosition: photo.position }}
          />

          {/* Image overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-[#07113e]/95 via-[#07113e]/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Top category */}

          <div className="absolute left-5 top-5">

            <span className="rounded-full border border-white/30 bg-black/20 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[.15em] text-white backdrop-blur-md">
              {photo.category}
            </span>

          </div>

          {/* Open icon */}

          <div className="absolute right-5 top-5 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white/90 text-indigo-700 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">

            <ArrowUpRight size={20} />

          </div>

          {/* Caption */}

          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">

            <div className="translate-y-2 transition-transform duration-500 group-hover:translate-y-0">

              <h3 className="font-display text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                {photo.title}
              </h3>

              <p className="mt-2 max-w-sm text-xs leading-6 text-white/80 sm:text-sm">
                {photo.description}
              </p>

              <div className="mt-4 flex items-center gap-2 text-xs font-bold text-yellow-300">

                View Photo

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </div>

            </div>

          </div>

        </div>

      </button>

    </Reveal>
  )
}


// =====================================================
// IMAGE LIGHTBOX
// =====================================================

function ImageLightbox({ selectedIndex, onClose, onChange }) {
  const photo = photos[selectedIndex]

  useEffect(() => {
    if (selectedIndex === null) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()

      if (event.key === 'ArrowRight') {
        onChange((selectedIndex + 1) % photos.length)
      }

      if (event.key === 'ArrowLeft') {
        onChange(
          (selectedIndex - 1 + photos.length) % photos.length
        )
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedIndex, onClose, onChange])

  if (selectedIndex === null) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050b20]/95 p-4 backdrop-blur-md sm:p-8"
      onClick={onClose}
    >

      {/* Close button */}

      <button
        type="button"
        onClick={onClose}
        aria-label="Close image preview"
        className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:rotate-90 hover:bg-white/20"
      >
        <X size={24} />
      </button>

      {/* Previous */}

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          onChange((selectedIndex - 1 + photos.length) % photos.length)
        }}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/25 sm:left-8 sm:h-12 sm:w-12"
      >
        <ChevronLeft size={25} />
      </button>

      {/* Image and caption */}

      <div
        className="relative flex max-h-[90vh] w-full max-w-5xl flex-col items-center"
        onClick={(event) => event.stopPropagation()}
      >

        <img
          src={photo.src}
          alt={photo.title}
          className="max-h-[76vh] max-w-full rounded-2xl object-contain shadow-2xl"
        />

        <div className="mt-5 text-center">

          <h3 className="font-display text-xl font-extrabold text-white sm:text-2xl">
            {photo.title}
          </h3>

          <p className="mt-2 text-sm text-blue-100">
            {photo.description}
          </p>

          <p className="mt-3 text-xs font-bold tracking-widest text-yellow-300">
            {selectedIndex + 1} / {photos.length}
          </p>

        </div>

      </div>

      {/* Next */}

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          onChange((selectedIndex + 1) % photos.length)
        }}
        aria-label="Next image"
        className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/25 sm:right-8 sm:h-12 sm:w-12"
      >
        <ChevronRight size={25} />
      </button>

    </div>
  )
}


// =====================================================
// GALLERY PAGE
// =====================================================

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null)

  return (
    <main className="overflow-hidden bg-white font-sans">


      {/* ================================================
          GALLERY HERO
      ================================================= */}

      <section className="relative isolate flex min-h-[430px] items-center overflow-hidden bg-[#101d50] text-white">

        {/* Background decoration */}

        <div className="absolute inset-0 -z-10 overflow-hidden">

          <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />

          <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-violet-500/20 blur-[120px]" />

          <div className="absolute inset-0 bg-gradient-to-br from-[#101d50] via-[#172b70] to-[#243e91]" />

        </div>

        <div className="mx-auto w-[min(1180px,90%)] py-24">

          <div className="max-w-4xl">

            <Reveal>

              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[10px] font-extrabold uppercase tracking-[.2em] text-yellow-300 backdrop-blur-xl sm:text-xs">

                <Camera size={15} />

                SCHOOL LIFE · PHOTO GALLERY

              </span>

            </Reveal>

            <Reveal index={1}>

              <h1 className="mt-7 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">

                Little moments.

                <span className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-300 bg-clip-text text-transparent">
                  Big possibilities.
                </span>

              </h1>

            </Reveal>

            <Reveal index={2}>

              <p className="mt-6 max-w-2xl text-sm leading-8 text-blue-100 sm:text-lg">

                A glimpse into activities, creativity and the
                campus community at 3 Sense Higher Secondary School.

              </p>

            </Reveal>

            <Reveal index={3}>

              <a
                href="#school-gallery"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-yellow-400 px-7 py-4 text-sm font-extrabold text-[#101d50] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300"
              >

                Explore Gallery

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </a>

            </Reveal>

          </div>

        </div>

        {/* Bottom accent */}

        <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-yellow-400 via-white to-green-400" />

      </section>


      {/* ================================================
          GALLERY INTRO
      ================================================= */}

      <section
        id="school-gallery"
        className="relative overflow-hidden bg-gradient-to-b from-white via-[#f7f9ff] to-white py-20 md:py-28"
      >

        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-100/50 blur-[110px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-100/50 blur-[110px]" />

        <div className="relative mx-auto w-[min(1180px,90%)]">

          <Reveal>

            <div className="mx-auto mb-14 max-w-3xl text-center">

              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-5 py-2 text-[10px] font-extrabold uppercase tracking-[.2em] text-indigo-700 sm:text-xs">

                <Images size={14} />

                OUR PHOTO COLLECTION

              </span>

              <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight tracking-tight text-[#14214d] sm:text-4xl lg:text-5xl">

                Memories from

                <span className="block bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  our school.
                </span>

              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">

                Every picture tells a story of learning,
                friendship, creativity and unforgettable moments.

              </p>

              <div className="mx-auto mt-7 h-1.5 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />

            </div>

          </Reveal>


          {/* Photo grid */}

          <div className="grid auto-rows-[280px] gap-5 sm:grid-cols-2 lg:auto-rows-[300px] lg:grid-cols-3">

            {photos.map((photo, index) => (

              <div
                key={photo.src}
                className={
                  index === 0
                    ? 'sm:row-span-2 lg:row-span-2'
                    : index === 4
                      ? 'lg:col-span-2'
                      : ''
                }
              >

                <GalleryCard
                  photo={photo}
                  index={index}
                  onOpen={setSelectedIndex}
                />

              </div>

            ))}

          </div>


          {/* Gallery bottom note */}

          <Reveal>

            <div className="mt-14 flex flex-col items-center justify-between gap-5 rounded-3xl border border-indigo-100 bg-indigo-50/70 p-6 text-center sm:flex-row sm:text-left sm:p-8">

              <div className="flex flex-col items-center gap-4 sm:flex-row">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-lg">

                  <Sparkles size={27} />

                </div>

                <div>

                  <h3 className="font-display text-lg font-extrabold text-[#14214d]">
                    Every moment matters.
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Celebrating the little things that make school special.
                  </p>

                </div>

              </div>

              <span className="rounded-full bg-white px-5 py-3 text-xs font-extrabold text-indigo-700 shadow-sm">
                3 SENSE SCHOOL
              </span>

            </div>

          </Reveal>

        </div>

      </section>


      {/* ================================================
          IMAGE PREVIEW
      ================================================= */}

      <ImageLightbox
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onChange={setSelectedIndex}
      />

    </main>
  )
}
