
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="py-10 border-t border-gold/10 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="relative w-40 h-10">
            <Image 
              src="/images/logo.jpg" 
              alt="Nihira Jewels Logo" 
              fill
              sizes="160px"
              className="object-contain invert"
            />
          </div>

          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/nihirajewels_byneha?igsh=NGttZzRpbjRiY3Bl" target="_blank" rel="noopener noreferrer" className="text-black/40 hover:text-gold transition-colors flex items-center gap-2 text-[10px] uppercase tracking-widest">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              <span className="hidden md:inline">Instagram</span>
            </a>
            <a href="https://www.facebook.com/share/15iisc5mVCH/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-black/40 hover:text-gold transition-colors flex items-center gap-2 text-[10px] uppercase tracking-widest">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              <span className="hidden md:inline">Facebook</span>
            </a>
          </div>

          <p className="text-black/30 text-[10px] uppercase tracking-[0.15em]">
            © {new Date().getFullYear()} Nihira Jewels. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
