import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Pro Craftworks Interior Renovations',
  description: 'Learn about Pro Craftworks history, mission, and team. Transforming Atlanta neighborhoods since 2005 with exceptional craftsmanship.',
};

export default function About() {
  const teamMembers = [
    {
      name: "Michael Johnson",
      position: "Founder & CEO",
      experience: "20+ years",
      description: "Licensed contractor with expertise in commercial and residential construction."
    },
    {
      name: "Sarah Williams",
      position: "Project Manager",
      experience: "15+ years",
      description: "Specializes in project coordination and client relationship management."
    },
    {
      name: "David Chen",
      position: "Lead Architect",
      experience: "12+ years",
      description: "Award-winning architect focused on sustainable and innovative design solutions."
    },
    {
      name: "Lisa Rodriguez",
      position: "Safety Director",
      experience: "10+ years",
      description: "Ensures all projects meet the highest safety standards and regulatory compliance."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About <span className="text-red-600">Pro Craftworks</span>
            </h1>
            <p className="text-xl text-gray-200">
              Transforming Atlanta&apos;s finest neighborhoods since 2005 with exceptional craftsmanship and attention to detail
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Pro Craftworks aka PCW Interior Renovations is the vision of a northern European handyman 
                  who has remodeled homes in Atlanta&apos;s finest neighborhoods since 2005. We are proud to have 
                  lifted the value of entire communities through transformative home improvement, top quality 
                  craftsmanship and attention to detail.
                </p>
                <p>
                  Today the same care and commitment afforded Atlanta residences is also enjoyed by commercial 
                  developments and includes commercial office space, multifamily managed residences, the 
                  hospitality industry and much more.
                </p>
                <p>
                  If creativity, attention to detail and completion time are important for your next investment 
                  project, you can confidently count on PCW Interior Renovations.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🏗️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">18 Years Strong</h3>
                <p className="text-gray-600">
                  Nearly two decades of transforming Atlanta&apos;s interior spaces with European craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Approach</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We&apos;re committed to transforming your vision into reality with exceptional craftsmanship and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Think Outside the Box</h3>
              <p className="text-gray-600">
                The best renovation ideas and custom projects are built to impress and perform for a lifetime. 
                We do everything from wood, steel, and glass that other companies would never tackle.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Vision, Our Expertise</h3>
              <p className="text-gray-600">
                Your home improvement idea is just as important to us as your complete satisfaction. 
                We pair your ideas with our professional knowledge to watch your vision become reality.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">European Craftsmanship</h3>
              <p className="text-gray-600">
                Rooted in northern European handyman traditions, we bring exceptional attention to detail 
                and quality craftsmanship to every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From residential renovations to commercial projects, we handle it all with expertise and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Residential */}
            <div className="text-center p-6">
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Residential</h3>
              <p className="text-gray-600 mb-4">
                Transform living spaces of all sizes from small condos to the finest homes in Atlanta. 
                Simple renovations, fragile historic homes, fixer uppers, townhomes, apartments, rentals, 
                real estate, and new construction.
              </p>
              <p className="text-gray-700 font-medium">You will love your project.</p>
            </div>

            {/* Commercial */}
            <div className="text-center p-6">
              <div className="text-6xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Commercial</h3>
              <p className="text-gray-600 mb-4">
                Experienced renovators of large hotels, boutique inns and commercial office space. 
                Drywall, trim, flooring, tile, carpet, cabinet installation, FF&E, security gates, 
                brick, wall covering, site cleaning, waste removal, receiving, staging and much more.
              </p>
              <p className="text-gray-700 font-medium">We keep to your schedule and adapt to changes.</p>
            </div>

            {/* Custom */}
            <div className="text-center p-6">
              <div className="text-6xl mb-4">🔨</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom</h3>
              <p className="text-gray-600 mb-4">
                Looking for a kitchen remodel that truly stands apart? A custom security fence to protect 
                your property? Specialty glass installation? We work with all materials and tackle projects 
                other companies won&apos;t touch.
              </p>
              <p className="text-gray-700 font-medium">Built to impress and perform for a lifetime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let us partner with you to see your vision come true. Connect with us for your next project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-semibold mb-2">Call or Text</h3>
              <p className="text-gray-300">
                <a href="tel:404-402-7777" className="hover:text-white transition-colors">404-402-7777</a>
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-300">
                <a href="mailto:Alex@ProCraftworks.com" className="hover:text-white transition-colors">Alex@ProCraftworks.com</a>
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">📍</div>
              <h3 className="font-semibold mb-2">Atlanta Office</h3>
              <p className="text-gray-300 text-sm">
                225 Tidwell Drive<br />
                Alpharetta, Georgia 30004
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our experienced professionals bring decades of combined expertise to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👨‍💼</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-red-600 font-medium mb-2">{member.position}</p>
                <p className="text-sm text-gray-500 mb-3">{member.experience}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licenses & Certifications */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Licensed & Certified</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We maintain all necessary licenses and certifications to ensure compliance and quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="font-semibold mb-2">General Contractor License</h3>
              <p className="text-gray-300 text-sm">State certified and bonded</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="font-semibold mb-2">Fully Insured</h3>
              <p className="text-gray-300 text-sm">Comprehensive liability coverage</p>
            </div>
            <div>
              <div className="text-4xl mb-4">✅</div>
              <h3 className="font-semibold mb-2">OSHA Certified</h3>
              <p className="text-gray-300 text-sm">Safety standards compliance</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="font-semibold mb-2">BBB Accredited</h3>
              <p className="text-gray-300 text-sm">A+ Rating with Better Business Bureau</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 