import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const NetflixPreloader = ({ onComplete }) => {
  const preloaderRef = useRef(null);
  const barsContainerRef = useRef(null);
  const glowRef = useRef(null);
  const nameRef = useRef(null);
  const surnameRef = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    const bars = barsContainerRef.current
      ? Array.from(barsContainerRef.current.children)
      : [];

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        }
      });

      tl.set(preloaderRef.current, { autoAlpha: 1 })
        .set(bars, { scaleY: 0, transformOrigin: 'center center' })
        .set([nameRef.current, surnameRef.current], { opacity: 0, scale: 0.4, filter: 'blur(20px)' })
        .set(taglineRef.current, { opacity: 0, y: 10 })
        .set(glowRef.current, { opacity: 0, scale: 0.3 })

        // 1. Curtain sweeps in across the screen
        .to(bars, {
          scaleY: 1,
          duration: 0.5,
          stagger: 0.035,
          ease: 'power4.inOut'
        })

        // 2. A red glow blooms behind the curtain (the "tudum" beat)
        .to(glowRef.current, {
          opacity: 0.9,
          scale: 1,
          duration: 0.4,
          ease: 'power2.out'
        }, '-=0.15')

        // 3. Curtain retreats, revealing the name
        .to(bars, {
          scaleY: 0,
          duration: 0.5,
          stagger: 0.03,
          ease: 'power4.inOut'
        }, '-=0.05')

        // 4. Logo punches in
        .to([nameRef.current, surnameRef.current], {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.7,
          ease: 'back.out(1.7)',
          stagger: 0.08
        }, '-=0.35')

        // 5. Glow settles into a soft ambient pulse
        .to(glowRef.current, {
          scale: 1.4,
          opacity: 0.35,
          duration: 0.6,
          ease: 'power2.out'
        }, '-=0.5')

        // 6. Tagline fades in beneath
        .to(taglineRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out'
        }, '-=0.2')

        // 7. Hold on the logo for a beat
        .to({}, { duration: 0.5 })

        // 8. Everything fades and pushes out to reveal the site
        .to([nameRef.current, surnameRef.current, taglineRef.current, glowRef.current], {
          opacity: 0,
          scale: 1.08,
          filter: 'blur(6px)',
          duration: 0.45,
          ease: 'power2.in'
        })
        .to(preloaderRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.inOut'
        }, '-=0.1');
    }, preloaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center select-none overflow-hidden"
    >
      {/* Ambient vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-transparent to-black pointer-events-none" />

      {/* Radial glow burst behind the logo */}
      <div
        ref={glowRef}
        className="absolute w-[500px] h-[500px] bg-red-600 rounded-full blur-[140px] pointer-events-none"
        style={{ opacity: 0, transform: 'scale(0.3)' }}
      />

      {/* Curtain bars — the Netflix-style sweep */}
      <div ref={barsContainerRef} className="absolute inset-0 flex">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="flex-1 bg-red-600 origin-center" style={{ transform: 'scaleY(0)' }} />
        ))}
      </div>

      {/* Logo reveal */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="flex flex-col items-center leading-[0.9]">
          <span
            ref={nameRef}
            className="text-4xl md:text-6xl font-black uppercase tracking-[0.15em] text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif", opacity: 0, transform: 'scale(0.4)' }}
          >
            ANIMESH
          </span>
          <span
            ref={surnameRef}
            className="text-4xl md:text-6xl font-black uppercase tracking-[0.15em] text-red-600 drop-shadow-[0_0_50px_rgba(229,9,20,0.8)]"
            style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif", opacity: 0, transform: 'scale(0.4)' }}
          >
            TIWARI
          </span>
        </div>
        <span
          ref={taglineRef}
          className="text-[10px] md:text-xs font-mono uppercase tracking-[0.5em] text-white/50"
          style={{ opacity: 0, transform: 'translateY(10px)' }}
        >
          Software Engineer
        </span>
      </div>
    </div>
  );
};

export default NetflixPreloader;
