import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Header() {
  return (
  
    <header className="w-full py-4">
      <div className="mx-auto px-4 max-w-7xl md:px-8 flex justify-between items-center">
        <Link href="/" className="text-xl font-mono font-bold text-purple-600 flex gap-1 items-center">
          <Image
            src="/goprod.png"
            alt="Logo"
            width={35}
            height={35}
            className="mr-2"
          />
         PicAi
        </Link>
        <nav className="hidden md:flex space-x-8 text-sm">
          <Link href="#how-it-works" className="text-gray-600 hover:text-purple-600">
            How It Works
          </Link>
          <Link href="#features" className="text-gray-600 hover:text-purple-600">
            Features
          </Link>
          <Link href="#pricing" className="text-gray-600 hover:text-purple-600">
            Pricing
          </Link>
        </nav>
        <Button variant="outline" className="hidden md:inline-flex">
          Try for Free
        </Button>
        <Button className="md:hidden">Menu</Button>
      </div>
    </header>
  )
}

