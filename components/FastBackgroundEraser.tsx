import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function FastBackgroundEraser() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/3] w-full">
            <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
              <source src="/video.mp4" type="video/mp4" />
            </video>
         </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              The fastest background eraser
            </h2>
            <p className="text-xl text-gray-600">
              Transform your photos with our background remover app! Highlight your subject and create a transparent background, 
              so you can place it in a variety of new designs and destinations. Try it now and immerse your subject in a 
              completely different environment!
            </p>
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white rounded-full px-8">
              Try now - no sign up required
            </Button>
          </div>
        </div>
      </div>

    
    </section>
  )
}

