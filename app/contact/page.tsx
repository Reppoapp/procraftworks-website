export default function Contact() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Contact <span className="text-gray-300">Pro Craftworks</span>
            </h1>
            <p className="text-xl text-gray-200">
              Ready to transform your space? Let us partner with you to see your vision come true.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-600">
                Contact Alex directly via phone or email to discuss your interior renovation project.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Phone Contact */}
              <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-200">
                <div className="text-5xl mb-4">📞</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Call or Text</h3>
                <p className="text-gray-600 mb-6">
                  Ready to discuss your project? Give Alex a call or send a text message.
                </p>
                <a 
                  href="tel:404-402-7777"
                  className="inline-block bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
                >
                  📞 Call: 404-402-7777
                </a>
              </div>

              {/* Email Contact */}
              <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-200">
                <div className="text-5xl mb-4">✉️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Send an Email</h3>
                <p className="text-gray-600 mb-6">
                  Prefer email? Send Alex a message and we&apos;ll respond within 24 hours.
                </p>
                <a 
                  href="mailto:Alex@ProCraftworks.com?subject=Interior Renovation Inquiry&body=Hi Alex,%0D%0A%0D%0AI'm interested in discussing an interior renovation project. Please contact me to schedule a consultation.%0D%0A%0D%0AThanks!"
                  className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
                >
                  ✉️ Email Alex
                </a>
              </div>
            </div>

            {/* Business Info Card */}
            <div className="bg-gray-900 rounded-lg p-8 text-white text-center mb-12">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Pro Craftworks</h3>
                <p className="text-gray-300">Interior Renovations • Residential • Commercial • Custom</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold mb-2">Phone</h4>
                                     <a href="tel:404-402-7777" className="text-gray-300 hover:text-white transition-colors">
                     404-402-7777
                   </a>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                                     <a href="mailto:Alex@ProCraftworks.com" className="text-gray-300 hover:text-white transition-colors">
                     Alex@ProCraftworks.com
                   </a>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Atlanta Office</h4>
                  <p className="text-gray-300 text-sm">
                    225 Tidwell Drive<br />
                    Alpharetta, Georgia 30004
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Partners */}
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Interior Designers & Realtors</h3>
              <p className="text-gray-600 mb-6">
                Let us partner with you to see your clients&apos; vision come true. Connect with us via email, 
                text, or LinkedIn for professional collaborations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:Alex@ProCraftworks.com?subject=Professional Partnership Inquiry&body=Hi Alex,%0D%0A%0D%0AI'm interested in partnering with Pro Craftworks for client projects. Please contact me to discuss collaboration opportunities.%0D%0A%0D%0AThanks!"
                  className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Partner with Us
                </a>
                <a 
                  href="tel:404-402-7777"
                  className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Call Direct
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Areas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We proudly serve clients throughout the Atlanta metropolitan area and surrounding regions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {[
              'Atlanta', 'Alpharetta', 'Buckhead', 'Sandy Springs', 'Roswell', 'Johns Creek',
              'Dunwoody', 'Brookhaven', 'Decatur', 'Marietta', 'Smyrna', 'Vinings'
            ].map((city) => (
              <div key={city} className="bg-white p-4 rounded-lg">
                <p className="font-medium text-gray-900">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 