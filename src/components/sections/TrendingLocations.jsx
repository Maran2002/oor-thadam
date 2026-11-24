'use client'

import { PlaceCard } from '../place/PlaceCard'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { TrendingUp, ArrowRight } from 'lucide-react'

export function TrendingLocations({ places = [] }) {

  return (
    <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-900 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-14 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-50 dark:bg-accent-900/20 text-accent-600 dark:text-accent-400 text-sm font-medium mb-4 border border-accent-100 dark:border-accent-800/50">
              <TrendingUp size={14} />
              <span>What&apos;s popular</span>
            </div>
            <h2 className="text-4xl font-serif font-bold text-neutral-900 dark:text-white mb-3">
              Trending Locations
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-lg">
              See where fellow explorers are heading this season.
            </p>
          </div>
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:gap-3 transition-all whitespace-nowrap group"
          >
            Explore more
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {places.length === 0 ? (
          <div className="text-center text-neutral-500 dark:text-neutral-400 py-16">
            No trending locations right now. Check back soon!
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
