import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Construction Services - ProCraftWorks',
  description: 'Professional construction services including residential, commercial, remodeling, and project management. Licensed and insured contractors.',
};

export default function Services() {
  const services = [
    {
      title: "Residential Construction",
      description: "Custom home building, additions, and residential renovations designed to meet your family's unique needs and lifestyle.",
      icon: "🏠",
      features: [
        "Custom Home Design & Build",
        "Home Additions & Extensions",
        "Kitchen & Bathroom Remodeling",
        "Basement Finishing",
        "Deck & Patio Construction"
      ]
    },
    {
      title: "Commercial Construction",
      description: "Professional commercial building services for offices, retail spaces, warehouses, and industrial facilities.",
      icon: "🏢",
      features: [
        "Office Building Construction",
        "Retail Space Development",
        "Warehouse & Industrial Buildings",
        "Restaurant & Hospitality",
        "Medical Facility Construction"
      ]
    },
    {
      title: "Remodeling & Renovation",
      description: "Transform your existing space with our expert remodeling services, from minor updates to complete makeovers.",
      icon: "🔨",
      features: [
        "Whole House Renovations",
        "Kitchen Remodeling",
        "Bathroom Renovations",
        "Interior Design & Build",
        "Accessibility Modifications"
      ]
    },
    {
      title: "Project Management",
      description: "Comprehensive project coordination ensuring your construction project is completed on time, within budget, and to specification.",
      icon: "📋",
      features: [
        "Timeline Planning & Scheduling",
        "Budget Management",
        "Permit & Inspection Coordination",
        "Subcontractor Management",
        "Quality Control & Assurance"
      ]
    },
    {
      title: "Design-Build Services",
      description: "Streamlined construction process combining design and construction under one roof for efficient project delivery.",
      icon: "📐",
      features: [
        "Architectural Design",
        "Engineering Services",
        "3D Modeling & Visualization",
        "Integrated Project Delivery",
        "Value Engineering"
      ]
    },
    {
      title: "Roofing & Exteriors",
      description: "Protect your investment with professional roofing, siding, and exterior construction services.",
      icon: "🏠",
      features: [
        "Roof Installation & Repair",
        "Siding Installation",
        "Window & Door Replacement",
        "Gutters & Downspouts",
        "Exterior Painting"
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "We meet to discuss your vision, needs, and budget for your project."
    },
    {
      step: "02", 
      title: "Design & Planning",
      description: "Our team creates detailed plans and obtains necessary permits."
    },
    {
      step: "03",
      title: "Construction",
      description: "Professional execution with regular updates and quality control."
    },
    {
      step: "04",
      title: "Completion",
      description: "Final walkthrough, cleanup, and warranty information provided."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Our Construction <span className="text-white">Services</span>
            </h1>
            <p className="text-xl text-gray-200">
              From residential homes to commercial buildings, we deliver exceptional construction services tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <svg className="w-4 h-4 text-black mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Our Construction Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We follow a proven process to ensure your project is completed efficiently and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Why Choose Our Services?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-black rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black">Licensed & Insured Professionals</h3>
                    <p className="text-gray-600">All our contractors are fully licensed, bonded, and insured for your protection.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-black rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black">Quality Materials & Craftsmanship</h3>
                    <p className="text-gray-600">We use only premium materials and employ skilled craftsmen for lasting results.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-black rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black">Transparent Pricing</h3>
                    <p className="text-gray-600">No hidden costs or surprise fees. We provide detailed estimates upfront.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-black rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black">Warranty Protection</h3>
                    <p className="text-gray-600">Comprehensive warranties on all our work for your peace of mind.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-8 text-white text-center">
              <div className="text-5xl mb-6">💼</div>
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">
                Contact us today for a free consultation and detailed quote for your construction project.
              </p>
              <Link
                href="/contact"
                className="btn-primary"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 