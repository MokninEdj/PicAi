import Image from 'next/image'
import Link from 'next/link'

export default function MobileAppPromo() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-400 via-blue-500 to-blue-600 p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get Remove BG AI mobile app
              </h2>
              <p className="text-white/90 text-lg">
                Try our mobile app to enjoy better user experience and great performance
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#" 
                className="transition-transform hover:scale-105"
              >
                <Image
                  src="/placeholder.svg"
                  alt="Download on the App Store"
                  width={180}
                  height={60}
                  className="h-[60px] w-auto"
                />
              </Link>
              <Link 
                href="#" 
                className="transition-transform hover:scale-105"
              >
                <Image
                  src="/placeholder.svg"
                  alt="Get it on Google Play"
                  width={180}
                  height={60}
                  className="h-[60px] w-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

