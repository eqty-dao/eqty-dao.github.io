import React from 'react';
import { Menu, X, ArrowRight, ChevronRight, Code, Database, Shield, Globe, Users, Download, Github, BookOpen, PackagePlus, MessageCircle } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="relative z-50 bg-white border-b border-gray-200">
        <nav className="flex items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/eqty.png" alt="EQTY" className="w-8 h-8" />
            <span className="text-xl font-bold tracking-wider text-gray-900">EQTY</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
            <a href="#community" className="text-gray-600 hover:text-gray-900 transition-colors">Community</a>
            <a href="https://github.com/eqty-dao" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="px-6 py-4 space-y-4">
              <a href="#projects" className="block text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
              <a href="#community" className="block text-gray-600 hover:text-gray-900 transition-colors">Community</a>
              <a href="https://github.com/eqty-dao" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16 lg:px-8 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Open Source Digital<br />
              Infrastructure for<br />
              <span className="text-blue-600">Tomorrow's Web</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Building the foundational tools for digital ownership, land registries, and asset management. 
              Free, open source, and built for developers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a 
                href="https://github.com/eqty-dao"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>View on GitHub</span>
              </a>
              <a 
                href="https://t.me/EQTY_DAO"
                className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
              >
                <span>Join Community</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-gray-600">Open Source Projects</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">MIT</div>
              <div className="text-gray-600">Licensed</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Free & Open</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-16 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Our Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Three interconnected open source projects building the infrastructure for digital ownership and asset management.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Ownables */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Ownables</h3>
                    <p className="text-sm text-gray-500">Digital Collectibles Platform</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Ownables are new kind of digital asset based on blockchain technology. They 
                  can be used for anything from digital collectibles to proof of ownership for real-world assets.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Private and secure assets
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Verified ownership
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Always in your control
                  </div>
                </div>
                <div className="flex space-x-3">
                  <a href="https://ownables.me" className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-center transition-colors">
                    <Globe className="w-4 h-4 inline mr-2" />
                    Website
                  </a>
                  <a href="https://docs.ownables.me" className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-center transition-colors">
                    <BookOpen className="w-4 h-4 inline mr-2" />
                    Docs
                  </a>
                </div>
              </div>
            </div>

            {/* GoLand */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">GoLand</h3>
                    <p className="text-sm text-gray-500">Open Source Land Registry</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  A decentralized land registry system built for transparency, immutability, and global accessibility. 
                  Perfect for governments and organizations seeking modern land management solutions.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Blockchain-based records
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Multi-jurisdiction support
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    API-first architecture
                  </div>
                </div>
                <div className="flex space-x-3">
                  <a href="https://github.com/eqty-dao/goland" className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-center transition-colors">
                    <Github className="w-4 h-4 inline mr-2" />
                    Source
                  </a>
                  <button disabled className="flex-1 border border-gray-200 text-gray-400 px-4 py-2 rounded-lg text-center cursor-not-allowed">
                    <BookOpen className="w-4 h-4 inline mr-2" />
                    Docs
                  </button>
                </div>
              </div>
            </div>

            {/* EQTY Platform */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Database className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">EQTY Platform</h3>
                    <p className="text-sm text-gray-500">Asset Management Suite</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  A turn-key solution for real-world asset digitization and management. 
                  Combines Ownables and tokenization into a comprehensive cloud platform for enterprises.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Enterprise-ready
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Modular architecture
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Simple setup
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button disabled className="flex-1 bg-gray-100 text-gray-400 px-4 py-2 rounded-lg text-center cursor-not-allowed">
                    <PackagePlus className="w-4 h-4 inline mr-2" />
                    Create
                  </button>
                  <button disabled className="flex-1 border border-gray-200 text-gray-400 px-4 py-2 rounded-lg text-center cursor-not-allowed">
                    <BookOpen className="w-4 h-4 inline mr-2" />
                    Docs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="px-6 py-16 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Built with Modern Technology</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our projects leverage cutting-edge technologies to ensure scalability, security, and developer experience.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">TypeScript</h3>
              <p className="text-sm text-gray-600">Type-safe development</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Blockchain</h3>
              <p className="text-sm text-gray-600">Immutable records</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Security</h3>
              <p className="text-sm text-gray-600">Privacy-first design</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Web3</h3>
              <p className="text-sm text-gray-600">Decentralized infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="px-6 py-16 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">Join Our Community</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Connect with developers, contributors, and users building the future of digital infrastructure. 
            All skill levels welcome.
          </p>

          {/* Community Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Open Collaboration</h3>
              <p className="text-sm text-gray-600">Work together on issues, features, and documentation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Learning Resources</h3>
              <p className="text-sm text-gray-600">Tutorials, guides, and examples to get you started</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Easy Setup</h3>
              <p className="text-sm text-gray-600">Quick installation and deployment guides</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="https://github.com/eqty-dao"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>Contribute on GitHub</span>
            </a>
            <a 
              href="https://t.me/EQTY_DAO"
              className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
            >
              <span>Join Community</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="text-xs text-gray-500">
            All projects are released under the MIT License. Read our <a href="/EQTY Litepaper.pdf" className="underline">technical documentation</a> for more details.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-6 py-16 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Foundation Info */}
            <div>
              <div className="flex items-center mb-4">
                <img src="/eqty.png" alt="EQTY" className="w-8 h-8 mr-3" />
                <span className="text-xl font-bold tracking-wider">EQTY</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Building open source infrastructure for digital ownership and asset management.
              </p>
            </div>

            {/* Projects */}
            <div>
              <h3 className="font-semibold mb-4">Projects</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://github.com/eqty-dao/goland" className="hover:text-white transition-colors">GoLand Registry</a></li>
                <li><span className="text-gray-500">Ownables Platform</span></li>
                <li><span className="text-gray-500">EQTY Platform</span></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><span className="text-gray-500">Documentation (Coming Soon)</span></li>
                <li><a href="/EQTY Litepaper.pdf" className="hover:text-white transition-colors">Technical Paper</a></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Foundation</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Stichting EQTY</li>
                <li>KvK: 99225344</li>
                <li>Amsterdam, Netherlands</li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-500 mb-4 md:mb-0">
                <p>© 2025 EQTY</p>
                <p>Released under MIT License</p>
              </div>
              <div className="flex items-center space-x-6">
                <a href="https://github.com/eqty-dao" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://t.me/EQTY_DAO" className="text-gray-400 hover:text-white transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="/EQTY Litepaper.pdf" className="text-gray-400 hover:text-white transition-colors">
                  <BookOpen className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
