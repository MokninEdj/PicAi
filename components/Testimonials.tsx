import Image from 'next/image'

const testimonials = [
  {
    quote: "This tool has saved me countless hours of work. The results are amazing!",
    author: "Sarah Johnson",
    role: "Graphic Designer",
    avatar: "/avatar_1.jpg"
  },
  {
    quote: "We've integrated this into our e-commerce workflow and it's been a game-changer.",
    author: "Michael Chen",
    role: "E-commerce Manager",
    avatar: "/avatar_6.jpg"
  },
  {
    quote: "The API is super easy to use and the results are consistently great.",
    author: "Emily Rodriguez",
    role: "Software Developer",
    avatar: "/avatar_5.jpg"
  }
]

export default function Testimonials() {
  return (
    <section className="py-20  bg-purple-50">
      <div className="mx-auto px-4 max-w-7xl md:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  objectFit="cover"
                  width={48}
                  height={48}
                  className="rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

