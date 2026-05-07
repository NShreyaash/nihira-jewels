
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary text-black selection:bg-gold selection:text-white">
      <Header />
      <Hero />
      <Gallery />
      <Contact />
      <Footer />
      
      {/* Floating WhatsApp Button for quick access */}
      <a 
        href="https://wa.me/919582407181" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-95 animate-[bounce-subtle_3s_infinite_ease-in-out]"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.284l-.582 2.166 2.234-.58c1.012.609 2.037.931 3.111.931h.003c3.181 0 5.767-2.587 5.768-5.766 0-3.181-2.587-5.767-5.767-5.767zm3.39 8.2c-.147.412-.85.758-1.168.805-.318.047-.714.062-1.127-.07-.27-.086-.615-.205-1.049-.393-1.84-.798-3.033-2.673-3.125-2.797-.092-.124-.766-.997-.766-1.99 0-.993.52-1.479.704-1.688.184-.209.4-.262.535-.262.135 0 .27.001.387.006.124.005.291-.047.456.347.165.394.565 1.378.614 1.474.049.096.082.208.017.338-.065.13-.098.209-.196.323-.098.114-.206.255-.295.342-.098.096-.2.199-.086.394.114.195.508.834 1.085 1.348.743.663 1.37.868 1.565.966.195.098.309.082.424-.049.114-.131.49-.571.62-.766.131-.195.262-.164.442-.098.18.065 1.144.538 1.341.636.195.098.327.147.375.228.048.082.048.474-.099.886z" />
        </svg>
      </a>
    </main>
  )
}
