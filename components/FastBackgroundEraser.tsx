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
              {/* Top half with checkerboard background */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-[url('/checkerboard.png')] bg-repeat rounded-t-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg"
                  alt="Product with transparent background"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Bottom half with background */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-600 to-purple-700 rounded-b-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg"
                  alt="Product with new background"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Divider line */}
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-blue-500 glow-effect"></div>
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

      <style jsx>{`
        .glow-effect {
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </section>
  )
}

