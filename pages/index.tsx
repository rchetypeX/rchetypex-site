import Head from 'next/head'
import Image from 'next/image'

// Social links configuration
const socials = [
  {
    name: 'X',
    href: 'https://x.com/rchetypeX',
    icon: '𝕏'
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/rchetypex',
    icon: '📷'
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/rchetypeX/',
    icon: '📘'
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@rchetypex',
    icon: '🎵'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/rchetypex',
    icon: '💼'
  }
]

export default function Home() {
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
        <div className="scanlines"></div>
        <div className="vignette"></div>
        
        <div className="frame">
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
              <span className="bracket">&lt;@&gt;</span>
              <span className="name">rchetypeX</span>
            </h1>
            
            <p className="tagline">make progress playable.</p>
            
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
                  <span className="social-icon" aria-hidden="true">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </nav>
          </div>
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
          font-family: 'VT323', monospace;
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
          background: linear-gradient(
            transparent 50%,
            rgba(140, 255, 160, 0.02) 50%
          );
          background-size: 100% 4px;
          pointer-events: none;
          z-index: 1;
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

        .frame {
          background: rgba(0, 0, 0, 0.8);
          border: 2px solid rgba(140, 255, 160, 0.22);
          border-radius: 12px;
          padding: 2rem;
          max-width: 480px;
          width: 100%;
          position: relative;
          z-index: 2;
          box-shadow: 
            0 0 20px rgba(140, 255, 160, 0.1),
            inset 0 0 20px rgba(140, 255, 160, 0.05);
        }

        .content {
          text-align: center;
        }

        .logo-container {
          margin-bottom: 1.5rem;
        }

        .logo {
          border-radius: 8px;
          filter: drop-shadow(0 0 8px rgba(140, 255, 160, 0.3));
        }

        .brand-lockup {
          font-family: 'Tilt Warp', cursive;
          font-size: 2.5rem;
          margin: 0 0 1rem 0;
          letter-spacing: 0.02em;
          text-shadow: 0 0 10px rgba(140, 255, 160, 0.5);
          animation: flicker 3s infinite alternate;
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
          font-size: 1.25rem;
          margin: 0 0 2rem 0;
          color: #9FE6A0;
          letter-spacing: 0.02em;
          text-shadow: 0 0 8px rgba(140, 255, 160, 0.3);
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
          flex-direction: column;
          align-items: center;
          padding: 0.75rem 0.5rem;
          border: 1px solid rgba(140, 255, 160, 0.22);
          border-radius: 8px;
          text-decoration: none;
          color: #C8FFB8;
          transition: all 0.2s ease;
          background: rgba(0, 0, 0, 0.3);
        }

        .social-link:hover,
        .social-link:focus {
          border-color: rgba(140, 255, 160, 0.42);
          background: rgba(140, 255, 160, 0.05);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(140, 255, 160, 0.2);
        }

        .social-link:focus {
          outline: 2px solid rgba(140, 255, 160, 0.6);
          outline-offset: 2px;
        }

        .social-icon {
          font-size: 1.5rem;
          margin-bottom: 0.25rem;
        }

        .social-name {
          font-size: 0.75rem;
          color: #9FE6A0;
        }

        @keyframes flicker {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.95;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .brand-lockup {
            animation: none;
          }
        }

        @media (min-width: 480px) {
          .socials {
            grid-template-columns: repeat(5, 1fr);
            max-width: none;
          }
          
          .frame {
            padding: 3rem;
          }
          
          .brand-lockup {
            font-size: 3rem;
          }
          
          .tagline {
            font-size: 1.5rem;
          }
        }

        @media (min-width: 768px) {
          .frame {
            padding: 4rem;
            max-width: 600px;
          }
          
          .brand-lockup {
            font-size: 3.5rem;
          }
        }
      `}</style>
    </>
  )
}
