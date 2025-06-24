import Link from 'next/link';

export default function Home() {
  const services = [
    {
      title: "Residential Renovations",
      description: "Transform living spaces from small condos to the finest homes in Atlanta with custom interior solutions.",
      icon: "🏠"
    },
    {
      title: "Commercial Projects", 
      description: "Large hotels, boutique inns, and commercial office spaces with expert craftsmanship and attention to detail.",
      icon: "🏢"
    },
    {
      title: "Custom Builds",
      description: "Think outside the box with custom projects built to impress and perform for a lifetime.",
      icon: "🔨"
    },
    {
      title: "Kitchen Remodeling",
      description: "Complete kitchen transformations that truly stand apart with professional design and execution.",
      icon: "🔧"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-gray-900/30 to-slate-800/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
          {/* Enhanced Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full"
                 style={{
                   backgroundImage: `
                     radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
                     linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%),
                     linear-gradient(-45deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)
                   `,
                   backgroundSize: '40px 40px, 80px 80px, 80px 80px'
                 }}>
            </div>
          </div>
          {/* Additional depth layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-slate-900/60"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Elevate Your Space.
            <span className="block text-gray-300">Exceed Your Expectations.</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Since 2005, we&apos;ve transformed Atlanta&apos;s most prestigious properties with 
            <span className="text-white font-medium"> superior craftsmanship</span> and 
            <span className="text-white font-medium"> uncompromising attention to detail</span>. 
            Your vision deserves nothing less than perfection.
          </p>
          <div className="mb-6">
            <p className="text-lg text-gray-300 font-medium tracking-wide">
              Residential • Commercial • Custom Projects
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="btn-primary text-lg px-10 py-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              Begin Your Transformation
            </Link>
          </div>
          <div className="mt-6">
            <p className="text-sm text-gray-400">
              Trusted by Atlanta&apos;s finest neighborhoods for over 18 years
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-30">
          {/* Floating geometric shapes */}
          <div className="absolute top-1/4 left-1/6 w-32 h-32 border-2 border-white/40 transform rotate-45 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/6 w-20 h-20 border-2 border-white/30 rotate-12"></div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-white/20 rotate-45"></div>
          <div className="absolute bottom-1/2 left-1/3 w-16 h-16 border-2 border-white/25 rounded-full"></div>
          {/* Hexagonal shapes for construction theme */}
          <div className="absolute top-1/6 right-1/3 w-24 h-24 border-2 border-white/35" 
               style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'}}>
          </div>
          <div className="absolute bottom-1/6 left-1/5 w-18 h-18 border-2 border-white/25"
               style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'}}>
          </div>
          {/* Additional floating elements */}
          <div className="absolute top-3/4 right-1/5 w-10 h-10 bg-white/15 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/5 left-1/3 w-6 h-6 bg-white/10 rotate-45"></div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Our Interior Renovation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From residential homes to commercial spaces, we deliver exceptional interior renovations 
              tailored to Atlanta&apos;s finest neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card p-6 text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">{service.icon}</div>
                <h3 className="text-xl font-semibold text-black mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="btn-primary"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
                Why Choose Pro Craftworks?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black">18+ Years of Experience</h3>
                    <p className="text-gray-600">Transforming Atlanta&apos;s finest neighborhoods since 2005</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black">Exceptional Craftsmanship</h3>
                    <p className="text-gray-600">European handyman heritage with attention to detail and quality</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black">Complete Vision Realization</h3>
                    <p className="text-gray-600">We pair your ideas with our professional knowledge to make your vision reality</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black">All Materials & Sizes</h3>
                    <p className="text-gray-600">From wood, steel, and glass to projects other companies won&apos;t tackle</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">🏗️</div>
              <h3 className="text-2xl font-bold text-black mb-4">Ready to Transform Your Space?</h3>
              <p className="text-gray-600 mb-6">Contact Alex at Pro Craftworks for a consultation on your interior renovation project.</p>
              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="btn-primary block"
                >
                  Get Started Today
                </Link>
                <a 
                  href="tel:404-402-7777"
                  className="block text-gray-700 hover:text-black font-medium transition-colors duration-200"
                >
                  📞 Call: 404-402-7777
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Lifting Value Across Atlanta</h2>
            <p className="text-xl text-gray-300">We are proud to have lifted the value of entire communities through transformative home improvement</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gray-300 mb-2">18+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-300 mb-2">2005</div>
              <div className="text-gray-400">Founded</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-300 mb-2">100%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-300 mb-2">Atlanta</div>
              <div className="text-gray-400">Metro Area</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
