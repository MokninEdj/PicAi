import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react'

const footerSections = [
  {
    title: 'Learn more',
    links: [
      { name: 'Magic Brush', href: '#' },
      { name: 'Individuals', href: '#' },
      { name: 'Photographers', href: '#' },
      { name: 'Marketing', href: '#' },
      { name: 'Developers', href: '#' },
      { name: 'Ecommerce', href: '#' },
      { name: 'Media', href: '#' },
      { name: 'Car Dealerships', href: '#' },
      { name: 'Enterprise', href: '#' },
      { name: 'Success stories', href: '#' }
    ]
  },
  {
    title: 'Tools & API',
    links: [
      { name: 'API Documentation', href: '#' },
      { name: 'Integrations, tools & apps', href: '#' },
      { name: 'Photoshop Extension', href: '#' },
      { name: 'Windows / Mac / Linux', href: '#' },
      { name: 'Android App', href: '#' },
      { name: 'Design Templates', href: '#' }
    ]
  },
  {
    title: 'Support',
    links: [
      { name: 'Help & FAQs', href: '#' },
      { name: 'Contact us', href: '#' },
      { name: 'Refunds', href: '#' },
      { name: 'Platform Status', href: '#' }
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'Blog', href: '#' },
      { name: 'Affiliate Program', href: '#' },
      { name: 'Create automatic designs', href: '#' },
      { name: 'Video Background Removal', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'About us', href: '#' },
      { name: 'Press', href: '#' }
    ]
  }
]

const socialLinks = [
  { Icon: Facebook, href: '#' },
  { Icon: Instagram, href: '#' },
  { Icon: Twitter, href: '#' },
  { Icon: Youtube, href: '#' },
  { Icon: Linkedin, href: '#' }
]

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white">
      <div className='max-w-7xl mx-auto px-4 md:px-8'>
      {/* Wave Separator */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <svg
          viewBox="0 0 2880 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full h-16 -mb-1"
        >
          <path
            d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z"
            fill="#111827"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Product Hunt Rating */}
        <div className="flex justify-center mb-16">
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <img src="/productHunt.png" alt="Product Hunt" className="h-6 mr-2" />
              <span className="text-white font-semibold">PRODUCT HUNT</span>
            </div>
            <div className="flex justify-center text-yellow-400 mb-1">
              {'★'.repeat(5)}
            </div>
            <p className="text-gray-400 text-sm">(4.7) based on 794 reviews</p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-300 hover:text-white">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <Button variant="secondary" className=" border-gray-700">
                English
              </Button>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-300">
            <p>© remove.bg, a Canva Austria GmbH brand</p>
            <div className="flex justify-center space-x-4 mt-4">
              <Link href="#" className="hover:text-white">Terms of Service</Link>
              <Link href="#" className="hover:text-white">General Terms and Conditions</Link>
              <Link href="#" className="hover:text-white">Privacy Policy</Link>
              <Link href="#" className="hover:text-white">Cookie Policy</Link>
              <Link href="#" className="hover:text-white">Imprint</Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  )
}

