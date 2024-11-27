'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "How does the background removal work?",
    answer: "Our AI-powered tool uses advanced machine learning algorithms to detect and separate the foreground subject from the background. It works on a wide variety of images, including products, portraits, and complex scenes."
  },
  {
    question: "What file formats are supported?",
    answer: "We support most common image formats including PNG, JPG, and WEBP. The maximum file size is 5MB for the free tier."
  },
  {
    question: "Can I use the images commercially?",
    answer: "Yes, you retain all rights to your images. Our service simply processes them and provides you with the result."
  },
  {
    question: "Is there an API available?",
    answer: "Yes, we offer API access for developers who want to integrate our background removal technology into their own applications. Check our pricing page for more details on API plans."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-white rounded-lg shadow-md"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

