import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: '$9',
      features: ['50 images per month', 'Basic editing tools', 'Email support'],
    },
    {
      name: 'Pro',
      price: '$29',
      features: ['500 images per month', 'Advanced editing tools', 'Priority support', 'API access'],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['Unlimited images', 'Custom integrations', 'Dedicated account manager', 'On-premise deployment'],
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto px-4 max-w-7xl md:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white flex flex-col justify-between p-8 rounded-lg shadow-lg">
             <div>
             <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold text-purple-600 mb-6">{plan.price}<span className="text-base font-normal text-gray-600">/month</span></p>
              <ul className="mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
             </div>
              <Button className="w-full">{plan.name === 'Enterprise' ? 'Contact Us' : 'Get Started'}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

