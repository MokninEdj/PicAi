import Image from 'next/image'
import Link from 'next/link'

export default function MobileAppPromo() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto px-4 max-w-7xl md:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-pink-400 via-purple-500 to-purple-600 p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get Remove BG AI mobile app
              </h2>
              <p className="text-white/90 text-lg">
                Try our mobile app to enjoy better user experience and great performance
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link 
                href="#" 
                className="transition-transform hover:scale-105"
              >
                <Image
                  src="/AppStore.svg"
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
                  src="/GooglePlay.svg"
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

