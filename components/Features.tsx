import { CheckCircle, Zap, Image, Cloud, Palette, Code } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Remove backgrounds in less than 5 seconds per image.',
    },
    {
      icon: Image,
      title: 'High Precision',
      description: 'AI-powered edge detection for clean, accurate results.',
    },
    {
      icon: Cloud,
      title: 'Bulk Processing',
      description: 'Upload and process multiple images at once.',
    },
    {
      icon: Palette,
      title: 'Advanced Editing',
      description: 'Fine-tune results with our easy-to-use editing tools.',
    },
    {
      icon: Code,
      title: 'API Access',
      description: 'Integrate background removal into your own applications.',
    },
    {
      icon: CheckCircle,
      title: 'Multiple Formats',
      description: 'Support for PNG, JPG, WEBP, and more.',
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="mx-auto px-4 max-w-7xl md:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

