'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const blogPosts = [
  {
    title: 'How to Swap Faces in Photoshop: Easy and Fast Guide',
    image: '/blog1.webp',
    href: '#',
    bgColor: 'bg-pink-100'
  },
  {
    title: 'How to remove background from hair in Photoshop',
    image: '/blog2.webp',
    href: '#',
    bgColor: 'bg-gray-900'
  },
  {
    title: 'Top 5 Best Online Passport Photo Services: Find the Best Fit for You',
    image: '/blog3.webp',
    href: '#',
    bgColor: 'bg-purple-400'
  },
  {
    title: 'How to Take Passport Photo with iPhone: Step-by-Step Guide',
    image: '/blog4.webp',
    href: '#',
    bgColor: 'bg-red-300'
  }
]

export default function BlogAndUpdates() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Newsletter signup:', email)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Blog Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Background Eraser Related Posts
          </h2>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {blogPosts.map((post, index) => (
                <Link key={index} href={post.href} className="group">
                  <div className={`rounded-2xl overflow-hidden  transition-transform group-hover:-translate-y-1`}>
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className={`font-semibold ${post.bgColor === 'bg-gray-900' ? 'text-white' : 'text-gray-900'}`}>
                        {post.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button className="absolute -left-12 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 hidden lg:block">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="absolute -right-12 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 hidden lg:block">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Updates Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl shadow-xl p-8 md:p-12 overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-white/[0.2] -z-1"></div>
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-white">
                  <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                  <p className="text-purple-100 mb-6">
                    Get the latest news, tips, and exclusive offers from BgRemover delivered straight to your inbox.
                  </p>
                </div>

                <div className="w-full md:w-auto">
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 min-w-[240px] bg-white/20 text-white placeholder-purple-200 border-purple-400"
                      value={email}
                      onChange={(e:any) => setEmail(e.target.value)}
                      required
                    />
                    <Button type="submit" className="bg-white text-purple-600 hover:bg-purple-100 transition-colors whitespace-nowrap">
                      Subscribe
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                  <p className="text-sm text-purple-200 mt-4">
                    By subscribing, you agree to our{' '}
                    <Link href="/privacy" className="underline hover:text-white">
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

