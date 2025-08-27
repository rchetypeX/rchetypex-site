import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const FaultyTerminal = dynamic(() => import('../components/FaultyTerminal'), {
  ssr: false,
  loading: () => <div className="faulty-terminal-placeholder" />
})

const FuzzyText = dynamic(() => import('../components/FuzzyText'), {
  ssr: false,
  loading: () => <div className="fuzzy-text-placeholder">rchetypeX</div>
})

const TextType = dynamic(() => import('../components/TextType'), {
  ssr: false,
  loading: () => <div className="text-type-placeholder">make progress playable_</div>
})

// Social links configuration
const socials = [
  {
    name: 'X',
    href: 'https://x.com/rchetypeX',
    icon: '/icons/x.svg'
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/rchetypex',
    icon: '/icons/instagram.svg'
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/rchetypeX/',
    icon: '/icons/facebook.svg'
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@rchetypex',
    icon: '/icons/tiktok.svg'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/rchetypex',
    icon: '/icons/linkedin.svg'
  }
]

export default function Home() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      <Head>
        <title>&lt;@&gt;rchetypeX — make progress playable</title>
        <meta name="description" content="&lt;@&gt;rchetypeX | make progress playable." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:title" content="&lt;@&gt;rchetypeX — make progress playable" />
        <meta property="og:description" content="&lt;@&gt;rchetypeX — make progress playable." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og.svg" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <main className="crt">
        {isClient && (
          <div className="faulty-terminal-background">
            <FaultyTerminal
              scale={1.5}
              gridMul={[2, 1]}
              digitSize={1.2}
              timeScale={0.5}
              pause={false}
              scanlineIntensity={0.8}
              glitchAmount={0.3}
              flickerAmount={0.5}
              noiseAmp={0.2}
              chromaticAberration={0}
              dither={0}
              curvature={0.1}
              tint="#9FE6A0"
              mouseReact={true}
              mouseStrength={0.3}
              pageLoadAnimation={true}
              brightness={0.6}
            />
          </div>
        )}
        <div className="scanlines"></div>
        <div className="vignette"></div>
        <div className="noise"></div>
        <div className="glow"></div>
        
        <div className="content">
            <div className="logo-container">
              <Image
                src="/logo.svg"
                alt="&lt;@&gt;rchetypeX logo"
                width={256}
                height={256}
                priority
                className="logo"
                style={{ width: 'clamp(256px, 25vw, 512px)', height: 'auto' }}
              />
            </div>
            
                         <h1 className="brand-lockup">
               {isClient ? (
                 <FuzzyText
                   fontSize="5rem"
                   fontWeight={400}
                   fontFamily="'Tilt Warp', cursive"
                   color="#9FE6A0"
                   enableHover={true}
                   baseIntensity={0.2}
                   hoverIntensity={0.8}
                 >
                   rchetypeX
                 </FuzzyText>
               ) : (
                 <span>rchetypeX</span>
               )}
             </h1>
            
                         <p className="tagline">
               {isClient ? (
                 <TextType
                   text="make progress playable"
                   typingSpeed={75}
                   pauseDuration={3000}
                   showCursor={true}
                   cursorCharacter="_"
                   cursorClassName="tagline-cursor"
                   textColors={["#9FE6A0"]}
                   loop={false}
                 />
               ) : (
                 <span>make progress playable</span>
               )}
             </p>
            
                         <nav className="socials" aria-label="Social media links">
               {socials.map((social) => (
                 <a
                   key={social.name}
                   href={social.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="social-link"
                   aria-label={`Visit ${social.name}`}
                 >
                                       <Image
                      src={social.icon}
                      alt=""
                      width={32}
                      height={32}
                      className="icon-image"
                      style={{ width: 'clamp(24px, 6vw, 32px)', height: 'auto' }}
                    />
                 </a>
               ))}
             </nav>
           </div>
         </main>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          background: #000;
          color: #C8FFB8;
          font-family: 'Sixtyfour', monospace;
          overflow-x: hidden;
          border: none;
          outline: none;
        }

        html {
          border: none;
          outline: none;
        }

        .crt {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(1rem, 4vw, 2rem);
          position: relative;
          background: #000;
          border: none;
          outline: none;
        }

        .scanlines {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            linear-gradient(
              transparent 50%,
              rgba(140, 255, 160, 0.02) 50%
            ),
            linear-gradient(
              90deg,
              transparent 50%,
              rgba(140, 255, 160, 0.01) 50%
            );
          background-size: 100% 4px, 4px 100%;
          pointer-events: none;
          z-index: 1;
          animation: scanlines 0.1s infinite linear;
        }

        .vignette {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle at center,
            transparent 0%,
            rgba(0, 0, 0, 0.3) 70%,
            rgba(0, 0, 0, 0.7) 100%
          );
          pointer-events: none;
          z-index: 1;
        }

        .noise {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.02;
          pointer-events: none;
          z-index: 1;
          animation: noise 0.2s infinite linear;
        }

        .glow {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(140, 255, 160, 0.03) 0%,
            transparent 50%
          );
          pointer-events: none;
          z-index: 1;
          animation: glow 4s ease-in-out infinite alternate;
        }

        .faulty-terminal-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          opacity: 0.3;
        }

        .faulty-terminal-placeholder {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          background: radial-gradient(circle at center, rgba(140, 255, 160, 0.05) 0%, transparent 50%);
        }

        .fuzzy-text-placeholder {
          font-family: 'Tilt Warp', cursive;
          font-size: 2.5rem;
          color: #9FE6A0;
          text-shadow: 
            0 0 12px rgba(140, 255, 160, 0.8),
            0 0 20px rgba(140, 255, 160, 0.6),
            0 0 32px rgba(140, 255, 160, 0.4),
            0 0 48px rgba(140, 255, 160, 0.2);
        }



        .text-type-placeholder {
          font-family: 'Sixtyfour', monospace;
          font-size: 1.25rem;
          color: #9FE6A0;
          text-shadow: 
            0 0 12px rgba(140, 255, 160, 0.8),
            0 0 20px rgba(140, 255, 160, 0.6),
            0 0 32px rgba(140, 255, 160, 0.4),
            0 0 48px rgba(140, 255, 160, 0.2);
        }

        .content {
          text-align: center;
          position: relative;
          z-index: 2;
          padding: 0 clamp(0.5rem, 3vw, 1rem);
          max-width: 100%;
        }

        .logo-container {
          margin-bottom: 1.5rem;
        }

        .logo {
          border-radius: 8px;
          filter: 
            drop-shadow(0 0 12px rgba(140, 255, 160, 1))
            drop-shadow(0 0 20px rgba(140, 255, 160, 0.8))
            drop-shadow(0 0 32px rgba(140, 255, 160, 0.6))
            drop-shadow(0 0 48px rgba(140, 255, 160, 0.4))
            brightness(1.8)
            contrast(1.3)
            hue-rotate(0deg);
          animation: logoGlow 3s ease-in-out infinite alternate, logoFuzzy 0.1s infinite linear;
        }



        @keyframes logoGlow {
          0% {
            filter: 
              drop-shadow(0 0 12px rgba(140, 255, 160, 1))
              drop-shadow(0 0 20px rgba(140, 255, 160, 0.8))
              drop-shadow(0 0 32px rgba(140, 255, 160, 0.6))
              drop-shadow(0 0 48px rgba(140, 255, 160, 0.4))
              brightness(1.8)
              contrast(1.3)
              hue-rotate(0deg);
          }
          100% {
            filter: 
              drop-shadow(0 0 16px rgba(140, 255, 160, 1))
              drop-shadow(0 0 28px rgba(140, 255, 160, 0.9))
              drop-shadow(0 0 40px rgba(140, 255, 160, 0.7))
              drop-shadow(0 0 56px rgba(140, 255, 160, 0.5))
              brightness(2.2)
              contrast(1.4)
              hue-rotate(0deg);
          }
        }

        @keyframes logoFuzzy {
          0%, 100% {
            transform: translate(0, 0);
          }
          10% {
            transform: translate(-0.5px, -0.5px);
          }
          20% {
            transform: translate(-1px, 0.5px);
          }
          30% {
            transform: translate(0.5px, -1px);
          }
          40% {
            transform: translate(-0.5px, 1px);
          }
          50% {
            transform: translate(-1px, 0.5px);
          }
          60% {
            transform: translate(1px, 0px);
          }
          70% {
            transform: translate(0px, 1px);
          }
          80% {
            transform: translate(-1px, 0px);
          }
          90% {
            transform: translate(1px, 0.5px);
          }
        }

        .brand-lockup {
          font-family: 'Tilt Warp', cursive;
          font-size: clamp(2rem, 8vw, 2.5rem);
          margin: 0 0 1rem 0;
          letter-spacing: 0.02em;
          color: #9FE6A0;
          text-shadow: 
            0 0 12px rgba(140, 255, 160, 0.8),
            0 0 20px rgba(140, 255, 160, 0.6),
            0 0 32px rgba(140, 255, 160, 0.4),
            0 0 48px rgba(140, 255, 160, 0.2);
          animation: flicker 3s infinite alternate;
          filter: contrast(1.05);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .brand-lockup canvas {
          filter: 
            drop-shadow(0 0 12px rgba(140, 255, 160, 0.8))
            drop-shadow(0 0 20px rgba(140, 255, 160, 0.6))
            drop-shadow(0 0 32px rgba(140, 255, 160, 0.4));
        }

        .bracket {
          color: #9FE6A0;
          font-weight: normal;
        }

        .name {
          color: #C8FFB8;
          font-weight: normal;
        }

        .tagline {
          font-family: 'Sixtyfour', monospace;
          font-size: clamp(0.75rem, 3.5vw, 1.25rem);
          margin: 0 0 2rem 0;
          color: #9FE6A0;
          letter-spacing: 0.02em;
          text-shadow: 
            0 0 12px rgba(140, 255, 160, 0.8),
            0 0 20px rgba(140, 255, 160, 0.6),
            0 0 32px rgba(140, 255, 160, 0.4),
            0 0 48px rgba(140, 255, 160, 0.2);
          filter: contrast(1.05);
          white-space: nowrap;
          overflow: visible;
        }

        .text-type {
          display: inline-block;
          white-space: pre-wrap;
        }

        .text-type__cursor {
          margin-left: 0.25rem;
          display: inline-block;
          opacity: 1;
          color: #9FE6A0;
          text-shadow: 
            0 0 12px rgba(140, 255, 160, 0.8),
            0 0 20px rgba(140, 255, 160, 0.6),
            0 0 32px rgba(140, 255, 160, 0.4),
            0 0 48px rgba(140, 255, 160, 0.2);
        }

        .text-type__cursor--hidden {
          display: none;
        }

        .tagline-cursor {
          animation: blink 1s infinite;
        }

        .cursor {
          animation: blink 1s infinite;
        }

        .socials {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: clamp(0.5rem, 2vw, 1rem);
          flex-wrap: nowrap;
          margin: 0 auto;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
          text-decoration: none;
          color: #C8FFB8;
          transition: all 0.2s ease;
        }

        .social-link:hover,
        .social-link:focus {
          transform: translateY(-2px);
        }

        .social-link:focus {
          outline: 2px solid rgba(140, 255, 160, 0.6);
          outline-offset: 2px;
        }

        .icon-image {
          filter: 
            drop-shadow(0 0 12px rgba(140, 255, 160, 1))
            drop-shadow(0 0 20px rgba(140, 255, 160, 0.8))
            drop-shadow(0 0 32px rgba(140, 255, 160, 0.6))
            drop-shadow(0 0 48px rgba(140, 255, 160, 0.4))
            brightness(1.8)
            contrast(1.3)
            hue-rotate(0deg);
          animation: iconGlow 3s ease-in-out infinite alternate;
        }

        @keyframes iconGlow {
          0% {
            filter: 
              drop-shadow(0 0 12px rgba(140, 255, 160, 1))
              drop-shadow(0 0 20px rgba(140, 255, 160, 0.8))
              drop-shadow(0 0 32px rgba(140, 255, 160, 0.6))
              drop-shadow(0 0 48px rgba(140, 255, 160, 0.4))
              brightness(1.8)
              contrast(1.3)
              hue-rotate(0deg);
          }
          100% {
            filter: 
              drop-shadow(0 0 16px rgba(140, 255, 160, 1))
              drop-shadow(0 0 28px rgba(140, 255, 160, 0.9))
              drop-shadow(0 0 40px rgba(140, 255, 160, 0.7))
              drop-shadow(0 0 56px rgba(140, 255, 160, 0.5))
              brightness(2.2)
              contrast(1.4)
              hue-rotate(0deg);
          }
        }

        @keyframes flicker {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.95;
          }
        }

        @keyframes noise {
          0%, 100% {
            transform: translate(0, 0);
          }
          10% {
            transform: translate(-5%, -5%);
          }
          20% {
            transform: translate(-10%, 5%);
          }
          30% {
            transform: translate(5%, -10%);
          }
          40% {
            transform: translate(-5%, 15%);
          }
          50% {
            transform: translate(-10%, 5%);
          }
          60% {
            transform: translate(15%, 0%);
          }
          70% {
            transform: translate(0%, 10%);
          }
          80% {
            transform: translate(-15%, 0%);
          }
          90% {
            transform: translate(10%, 5%);
          }
        }

        @keyframes glow {
          0% {
            opacity: 0.3;
            transform: scale(1);
          }
          100% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }



        @keyframes scanlines {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(4px);
          }
        }

        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .brand-lockup {
            animation: none;
          }
          .noise {
            animation: none;
          }
          .glow {
            animation: none;
          }
          .scanlines {
            animation: none;
          }
          .cursor {
            animation: none;
          }
          .logo {
            animation: none;
          }
          .icon-image {
            animation: none;
          }
        }

        @media (min-width: 480px) {
          .socials {
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .content {
            padding: 0 1.5rem;
          }
          
          .crt {
            padding: 1.5rem 1rem;
          }
          
          .tagline {
            font-size: clamp(0.7rem, 3vw, 0.875rem);
          }
        }

        @media (max-width: 360px) {
          .content {
            padding: 0 2rem;
          }
          
          .tagline {
            font-size: clamp(0.65rem, 2.5vw, 0.75rem);
          }
        }
      `}</style>
    </>
  )
}
