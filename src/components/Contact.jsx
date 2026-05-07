'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react'

export default function Contact() {
  const mapLink = "https://maps.app.goo.gl/aruiwp7cKh7HiP1h6?g_st=ic"
  const email = "nehabansal175@gmail.com"
  const whatsapp = "+91 95824 07181"

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const name = formData.get('name')
    const userEmail = formData.get('email')
    const message = formData.get('message')
    
    const whatsappMessage = `Hi Nihira Jewels!\n\nName: ${name}\nEmail: ${userEmail}\nMessage: ${message}`
    const url = `https://wa.me/919582407181?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, '_blank')
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-[10px] md:text-xs uppercase tracking-[0.5em] mb-4 block">Connect With Us</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-black/90 mb-6">Get In Touch</h2>
            <p className="text-black/50 mb-10 text-base font-light leading-relaxed">
              Experience the personalized luxury of Nihira Jewels. Whether you&apos;re looking for a custom piece or have questions about our collection, we&apos;re here to assist you.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <h4 className="text-black/80 uppercase tracking-widest text-[10px] mb-0.5 font-medium">Email Us</h4>
                  <a href={`mailto:${email}`} className="text-black/60 hover:text-gold transition-colors text-sm">{email}</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <h4 className="text-black/80 uppercase tracking-widest text-[10px] mb-0.5 font-medium">Our Location</h4>
                  <a href={mapLink} target="_blank" rel="noopener noreferrer" className="text-black/60 hover:text-gold transition-colors flex items-center gap-1 text-sm">
                    <span>View on Google Maps</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <h4 className="text-black/80 uppercase tracking-widest text-[10px] mb-0.5 font-medium">Call / WhatsApp</h4>
                  <a href={`https://wa.me/919582407181`} className="text-black/60 hover:text-gold transition-colors text-sm">{whatsapp}</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-bg-secondary p-6 md:p-10 border border-gold/10 rounded-lg shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-widest text-gold-dark font-medium">Full Name</label>
                  <input name="name" type="text" required className="w-full bg-white border border-gold/20 px-4 py-3 text-sm text-black focus:border-gold outline-none transition-all rounded-md placeholder:text-black/30" placeholder="John Doe" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-widest text-gold-dark font-medium">Email Address</label>
                  <input name="email" type="email" required className="w-full bg-white border border-gold/20 px-4 py-3 text-sm text-black focus:border-gold outline-none transition-all rounded-md placeholder:text-black/30" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-widest text-gold-dark font-medium">Message</label>
                <textarea name="message" rows="4" required className="w-full bg-white border border-gold/20 px-4 py-3 text-sm text-black focus:border-gold outline-none transition-all rounded-md resize-none placeholder:text-black/30" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full py-3.5 bg-gold text-white uppercase tracking-[0.2em] font-semibold text-xs hover:bg-gold-dark transition-all duration-300 rounded-md">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
