'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const categories = [
  { id: 'people', label: 'People' },
  { id: 'products', label: 'Products' },
  { id: 'animals', label: 'Animals' },
  { id: 'cars', label: 'Cars' },
  { id: 'graphics', label: 'Graphics' },
]

export default function ExampleShowcase() {
  const [activeCategory, setActiveCategory] = useState('people')

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto px-4 max-w-7xl md:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          Just Picture It!
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Transform your images instantly with our AI-powered background removal
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "secondary"}
              className={cn(
                "rounded-full px-6",
                activeCategory === category.id && "bg-purple-600 hover:bg-purple-700"
              )}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Example Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Original Image */}
          <div className="bg-gray-100 rounded-2xl p-4">
            <div className="w-full h-96 relative rounded-xl overflow-hidden">
              <Image
                src="/original.jpg"
                alt="Original image"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center mt-4 text-gray-600 font-medium">Original</p>
          </div>

          {/* Transparent Background */}
          <div className="bg-[url('/checkerboard.png')] bg-repeat rounded-2xl p-4">
            <div className="w-full h-96 relative rounded-xl overflow-hidden">
              <Image
                src="/transparent.jpg"
                alt="Image with transparent background"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center mt-4 text-gray-600 font-medium bg-white/80 rounded-full mx-auto w-fit px-4">
              Transparent background
            </p>
          </div>

          {/* New Background */}
          <div className="bg-gradient-to-b from-purple-100 to-purple-50 rounded-2xl p-4">
            <div className="w-full h-96 relative rounded-xl overflow-hidden">
              <Image
                src="/newBackground.png"
                alt="Image with new background"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center mt-4 text-gray-600 font-medium">New Background</p>
          </div>

          {/* Multiple Variations */}
          <div className="bg-gray-100 rounded-2xl p-4 h-[410px] ">
            <div className="grid grid-cols-2 gap-2 h-full">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-full h-full  relative rounded-lg overflow-hidden">
                  <Image
                    src="/endless.jpg"
                    alt={`Variation ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-center mt-8 text-gray-600 font-medium">Endless possibilities</p>
          </div>
        </div>
      </div>
    </section>
  )
}

