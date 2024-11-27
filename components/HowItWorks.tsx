import { Upload, Wand2, Download } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    { icon: Upload, title: 'Upload Image', description: 'Upload any image you want to remove the background from.' },
    { icon: Wand2, title: 'AI Magic', description: 'Our AI automatically detects and removes the background in seconds.' },
    { icon: Download, title: 'Download', description: 'Download your image with a transparent background, ready to use.' },
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <step.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

