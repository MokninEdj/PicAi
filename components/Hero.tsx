'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Upload, ImageIcon, Sparkles } from 'lucide-react'

export default function Hero() {
  const [dragActive, setDragActive] = useState(false)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log('Files dropped:', acceptedFiles)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {'image/*': []},
    onDragEnter: () => setDragActive(true),
    onDragLeave: () => setDragActive(false)
  })

  const sampleImages = [
    { src: '/avatar_1.jpg', alt: 'Sample 1' },
    { src: '/avatar_2.jpg', alt: 'Sample 2' },
    { src: '/avatar_3.jpg', alt: 'Sample 3' },
    { src: '/avatar_4.jpg', alt: 'Sample 4' },
  ]

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-white" />
      
      <div className="relative mx-auto max-w-7xl px-4 md:px-8 py-20 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Remove Image Background{' '}
                <span className="inline-flex items-center">
                  With AI
                  <Sparkles className="w-8 h-8 ml-2 text-purple-500" />
                </span>
              </h1>
              <p className="text-xl text-gray-600">
                100% Automatically and{' '}
                <span className="inline-block bg-yellow-300 px-2 py-0.5 rounded-full font-semibold">
                  Free
                </span>
              </p>
            </div>

            {/* Upload Area */}
            <div
              {...getRootProps()}
              className={`
                relative p-4 rounded-2xl border-2 border-dashed cursor-pointer transition-all max-w-[400px]
                ${dragActive 
                  ? 'border-purple-500 bg-purple-50' 
                  : 'border-gray-300 hover:purple-50 hover:border-purple-500 bg-inherit'
                }
              `}
            >
              <input {...getInputProps()} />
              <div className="flex flex-col items-center space-y-4">
                <div className="p-2 pr-7 bg-purple-500 rounded-full flex items-center gap-2">
                  <Upload  className="w-10 h-10 text-white rounded-full p-3  bg-purple-700" />
                  <p className=" font-semibold text-gray-100">
                    Upload Image
                  </p>
                </div>
                <div className="text-center">
                 
                  <p className="text-sm text-gray-500">
                    or drag and drop, paste image or URL
                  </p>
                </div>
            
              </div>
            </div>

            {/* Sample Images */}
            <div className="space-y-3">
              <p className="text-sm text-gray-500">No image? Try one of these:</p>
              <div className="flex gap-2">
                {sampleImages.map((image, index) => (
                  <button
                    key={index}
                    className="relative w-16 h-16 rounded-lg overflow-hidden hover:ring-2 ring-blue-500 transition-all"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative lg:h-[600px]">
            {/* Checkerboard pattern for transparency */}
            <div className="absolute inset-0 bg-[url('/checkerboard.png')] bg-repeat rounded-2xl overflow-hidden">
              <Image
                src="/HeroA.jpeg"
                alt="Example of background removal"
                fill
                className="object-contain"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 text-purple-500">
              <Sparkles className="w-full h-full" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 text-purple-500 transform rotate-45">
              <Sparkles className="w-full h-full" />
            </div>
          </div>
        </div>

        {/* Terms of Service */}
        <div className="mt-8 text-center text-sm text-gray-500">
          By uploading an image, you agree to our{' '}
          <a href="#" className="text-purple-500 hover:underline">Terms of Service</a>
          {' '}and{' '}
          <a href="#" className="text-purple-500 hover:underline">Privacy Policy</a>
        </div>
      </div>
    </section>
  )
}

