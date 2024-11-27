import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface Tool {
  title: string
  description: string
  image: string
  href: string
}

const tools: Tool[] = [
  {
    title: 'AI Backgrounds',
    description: 'Generate realistic backgrounds in less than a second',
    image: '/generateBackAi.webp',
    href: '#'
  },
  {
    title: 'Add white background',
    description: 'Add a white background behind your subject automatically',
    image: '/whiteBackAi.webp',
    href: '#'
  },
  {
    title: 'Blur background',
    description: 'Blur the background of your image automatically',
    image: '/blurAi.webp',
    href: '#'
  },
  {
    title: 'AI Retouch',
    description: 'Remove unwanted parts of your image with a swipe',
    image: '/retouch.webp',
    href: '#'
  }
]

export default function ExploreTools() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          Explore more AI tools
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tools.map((tool, index) => (
            <Link 
              key={index} 
              href={tool.href}
              className="group block"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={tool.image}
                    alt={tool.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2 text-gray-900">
                    {tool.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {tool.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button variant="default" size="lg" className="bg-black hover:bg-gray-800 text-white px-8">
            See all tools
          </Button>
        </div>
      </div>
    </section>
  )
}

