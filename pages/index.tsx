import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const FaultyTerminal = dynamic(() => import('../components/FaultyTerminal'), {
  ssr: false,
  loading: () => <div className="faulty-terminal-placeholder" />
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
        <meta name="description" content="&lt;@&gt;rchetypeX — make progress playable." />
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
                width={128}
                height={128}
                priority
                className="logo"
              />
            </div>
            
                         <h1 className="brand-lockup">
               rchetypeX
             </h1>
            
                         <p className="tagline">make progress playable<span className="cursor">_</span></p>
            
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
        }

        .crt {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          position: relative;
          background: #000;
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

        .content {
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .logo-container {
          margin-bottom: 1.5rem;
        }

        .logo {
          border-radius: 8px;
          filter: 
            drop-shadow(0 0 8px rgba(140, 255, 160, 0.8))
            drop-shadow(0 0 16px rgba(140, 255, 160, 0.6))
            drop-shadow(0 0 24px rgba(140, 255, 160, 0.4))
            brightness(1.5)
            contrast(1.2)
            hue-rotate(0deg);
        }

        .brand-lockup {
          font-family: 'Tilt Warp', cursive;
          font-size: 2.5rem;
          margin: 0 0 1rem 0;
          letter-spacing: 0.02em;
          color: #9FE6A0;
          text-shadow: 
            0 0 8px rgba(140, 255, 160, 0.3),
            0 0 16px rgba(140, 255, 160, 0.1);
          animation: flicker 3s infinite alternate;
          filter: contrast(1.05);
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
          font-size: 1.25rem;
          margin: 0 0 2rem 0;
          color: #9FE6A0;
          letter-spacing: 0.02em;
          text-shadow: 
            0 0 8px rgba(140, 255, 160, 0.3),
            0 0 16px rgba(140, 255, 160, 0.1);
          filter: contrast(1.05);
        }

        .cursor {
          animation: blink 1s infinite;
        }

        .socials {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          max-width: 360px;
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
            drop-shadow(0 0 8px rgba(140, 255, 160, 0.8))
            drop-shadow(0 0 16px rgba(140, 255, 160, 0.6))
            drop-shadow(0 0 24px rgba(140, 255, 160, 0.4))
            brightness(1.5)
            contrast(1.2)
            hue-rotate(0deg);
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
        }

        @media (min-width: 480px) {
          .socials {
            grid-template-columns: repeat(5, 1fr);
            max-width: none;
          }
          
          .brand-lockup {
            font-size: 3rem;
          }
          
          .tagline {
            font-size: 1.5rem;
          }
        }

        @media (min-width: 768px) {
          .brand-lockup {
            font-size: 3.5rem;
          }
        }
      `}</style>
    </>
  )
}
