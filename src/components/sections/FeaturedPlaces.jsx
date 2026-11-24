'use client'

import { PlaceCard } from '../place/PlaceCard'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export function FeaturedPlaces({ places = [] }) {

  return (
    <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-dark-800/50 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-14 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4 border border-primary-100 dark:border-primary-800/50">
              <Sparkles size={14} />
              <span>Hand-picked for you</span>
            </div>
            <h2 className="text-4xl font-serif font-bold text-neutral-900 dark:text-white mb-3">
              Featured Destinations
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-lg">
              Discover the most iconic, beloved, and hidden spots across Villupuram.
            </p>
          </div>
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:gap-3 transition-all whitespace-nowrap group"
          >
            View all places
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {places.length === 0 ? (
          <div className="text-center text-neutral-500 dark:text-neutral-400 py-16">
            No places found. Check back soon!
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {places.map((place, i) => (
              <PlaceCard key={place._id} place={place} index={i} compact />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
