'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import allProducts from '../data/products.json'

// Fallback products in case JSON is empty or to maintain existing presentation
const fallbackProducts = [
  { id: 901, name: 'Emerald Royale Necklace', category: 'Necklace Set', image: '/images/product1.jpg' },
  { id: 902, name: 'Deep Green Stone Set', category: 'Jewellery Set', image: '/images/product2.jpg' },
  { id: 903, name: 'Kundan Multi-Stone Choker', category: 'Bridal Wear', image: '/images/product3.jpg' },
  { id: 904, name: 'Intricate Gold Cuff', category: 'Bangle/Cuff', image: '/images/product4.jpg' },
  { id: 905, name: 'Bridal Kundan Set', category: 'Wedding Collection', image: '/images/product5.png' },
  { id: 906, name: 'Ruby Drop Jhumkas', category: 'Earrings', image: '/images/product6.png' },
  { id: 907, name: 'Temple Gold Set', category: 'Traditional', image: '/images/product7.png' },
  { id: 908, name: 'Emerald Polki Bangles', category: 'Bangles', image: '/images/product8.png' },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [visibleCount, setVisibleCount] = useState(20)
  const [mounted, setMounted] = useState(false)
  const whatsappNumber = "+919582407181"
  
  // Only use products from the JSON if they exist, otherwise fallback
  const displayProducts = allProducts.length > 0 ? allProducts : fallbackProducts;

  // Extract unique categories
  const categories = ['All', ...new Set(displayProducts.map(p => p.category))]
  
  const filteredProducts = activeCategory === 'All' 
    ? displayProducts 
    : displayProducts.filter(p => p.category === activeCategory)

  const displayedProducts = filteredProducts.slice(0, visibleCount)

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setVisibleCount(20)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleQuote = (product) => {
    // WhatsApp can't auto-send an attachment from a website, but it will show a preview card for links.
    // Send only the image URL so the user can tap "Send" with a preview.
    const origin = typeof window !== 'undefined' ? window.location.origin : ''
    const imageUrl = product.image?.startsWith('http') ? product.image : `${origin}${product.image}`
    const productRef = getProductRef(product)
    const message = `Hi Nihira Jewels, I’d like to know more about product ${productRef} (${product.name}).\n\n${imageUrl}`
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const getProductRef = (product) => {
    const index = displayProducts.findIndex(p => p.id === product.id);
    return `NJ${String(index + 1).padStart(2, '0')}`;
  }

  if (!mounted) return null; // Avoid hydration mismatch on initial render

  return (
    <section id="collection" className="py-20 md:py-28 bg-bg-secondary scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold text-[10px] md:text-xs uppercase tracking-[0.5em] mb-4 block"
          >
            Our Masterpieces
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif text-black/90 mb-6"
          >
            The Collection
          </motion.h2>
          <div className="w-20 h-[1px] bg-gold mx-auto relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gold rotate-45" />
          </div>
        </div>

        {/* Category Filter */}
        {categories.length > 2 && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2.5 text-[10px] md:text-xs uppercase tracking-widest transition-all duration-300 border rounded-sm ${
                  activeCategory === category 
                    ? 'border-gold bg-gold text-white shadow-md' 
                    : 'border-gold/30 text-black/70 hover:border-gold hover:text-gold'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Product Grid */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {displayedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-[#1a1a1a] border border-gold/10 group-hover:border-gold/40 transition-all duration-500 shadow-sm group-hover:shadow-xl">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    unoptimized={true}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Reference ID Badge */}
                  <div className="absolute top-3 left-3 z-10 px-2 py-1 bg-black/60 backdrop-blur-md border border-gold/30 rounded text-gold text-[9px] font-bold tracking-widest">
                    {getProductRef(product)}
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                    <span className="text-gold/90 text-[10px] uppercase tracking-widest mb-1 truncate">{product.category}</span>
                    <h3 className="text-white text-base font-serif line-clamp-1">{product.name}</h3>
                  </div>
                </div>
                <div className="mt-3 mt-auto">
                  <button
                    onClick={() => handleQuote(product)}
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#1a1a1a] border border-gold/20 text-gold text-[10px] uppercase tracking-widest hover:bg-[#252525] hover:border-gold/40 transition-all duration-300 rounded-sm shadow-sm"
                  >
                    <MessageCircle size={12} />
                    <span>Get Quote</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More Button */}
        {filteredProducts.length > visibleCount && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 20)}
              className="px-8 py-3 bg-transparent border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 tracking-widest text-xs uppercase"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
