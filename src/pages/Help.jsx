import { useState, useEffect } from 'react'
import { Search, HelpCircle, Book, Code, CreditCard, Users, FileText, Sparkles, ChevronDown, ChevronUp, MessageCircle, Mail, ArrowRight, Rocket, ExternalLink, CheckCircle2, Menu, X } from 'lucide-react'

function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [openFaq, setOpenFaq] = useState(null)
  const [isVisible, setIsVisible] = useState({})
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const categories = [
    { id: 'all', name: 'All Topics', icon: <Book className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500' },
    { id: 'getting-started', name: 'Getting Started', icon: <Sparkles className="w-5 h-5" />, color: 'from-purple-500 to-pink-500' },
    { id: 'technical', name: 'Technical', icon: <Code className="w-5 h-5" />, color: 'from-orange-500 to-red-500' },
    { id: 'billing', name: 'Billing & Plans', icon: <CreditCard className="w-5 h-5" />, color: 'from-green-500 to-emerald-500' },
    { id: 'account', name: 'Account', icon: <Users className="w-5 h-5" />, color: 'from-indigo-500 to-blue-500' },
    { id: 'licensing', name: 'Licensing', icon: <FileText className="w-5 h-5" />, color: 'from-pink-500 to-rose-500' }
  ]

  const faqs = [
    {
      category: 'getting-started',
      question: 'How do I get started with Open PRO?',
      answer: 'Getting started with Open PRO is simple! After purchasing, you\'ll receive an email with download instructions. Extract the files, choose your preferred framework (HTML, React, Next.js, or Vue), and follow the included README for setup instructions. Most users are up and running within 30 minutes.'
    },
    {
      category: 'getting-started',
      question: 'Do you have a sample version I can try before purchasing?',
      answer: 'You can download any free templates available on our templates page to get an idea of how our code is structured and organized. While these free templates are not available in multiple stacks like our premium ones, they provide a good starting point to see what you can expect before purchasing.'
    },
    {
      category: 'technical',
      question: 'What technical knowledge do I need?',
      answer: 'You must have a basic understanding of HTML and CSS to use our templates effectively. This knowledge is essential for modifying the code and creating a high-quality end product. Familiarity with your chosen framework (React, Next.js, Vue) is also recommended.'
    },
    {
      category: 'technical',
      question: 'Can I integrate the templates with WordPress or Shopify?',
      answer: 'Theoretically, it\'s possible, but it requires some work such as slicing the HTML template and building a WordPress/Shopify theme. Our templates are coded user interfaces and not full-stack applications, so integration requires custom development work.'
    },
    {
      category: 'technical',
      question: 'Can I copy-paste sections between templates?',
      answer: 'Yes, you can take sections from one template to another, but since every template has a custom tailwind.config.json file, it may require review work. For example, you might need to swap font classes or adjust color schemes to match the destination template\'s configuration.'
    },
    {
      category: 'technical',
      question: 'How do I handle data fetching?',
      answer: 'Our templates are solely coded user interfaces and are not full-stack applications. It is the responsibility of the end-user to handle the data fetching process, which depends on factors such as the data source (API, database, etc.) and the surrounding environment.'
    },
    {
      category: 'technical',
      question: 'Where do the icons and images come from?',
      answer: '99% of the icons used in our templates come from Lucide (formerly Feather Icons) and Nucleo App, a library of over 30K vector icons. As for the images, we typically rely on Unsplash for high-quality stock photography.'
    },
    {
      category: 'billing',
      question: 'What support is included with my purchase?',
      answer: 'Support is available for all templates for 1 year from the purchase date. It provides assistance with common product-related questions but does not cover in-depth technical support (e.g., template customizations, third-party integrations/compatibilities, etc.), or step-by-step guidance for non-technical users.'
    },
    {
      category: 'billing',
      question: 'Do you offer student discounts?',
      answer: 'Yes! We offer a 25% student discount. To qualify, please email us proof of enrollment, such as a student ID card or an official student schedule with a date of issue or expiration. We\'ll respond within 24 hours with your discount code.'
    },
    {
      category: 'billing',
      question: 'What is your refund policy?',
      answer: 'Due to the nature of our product (digital resources), we don\'t currently offer refunds. However, if you believe that the product you purchased is somehow defective or cannot be downloaded (for any reason), please contact us. We will gladly review your case and consider making an exception if necessary.'
    },
    {
      category: 'licensing',
      question: 'Can I use templates for commercial projects?',
      answer: 'Yes! You can use this template for an unlimited number of personal and commercial projects. These can include commercial landing pages, websites, or SaaS applications that end users pay to access. If you\'re a freelancer or agency, you can use the templates for your client projects.'
    },
    {
      category: 'licensing',
      question: 'Can I resell or redistribute the templates?',
      answer: 'No. You cannot use the templates to create products or derivative products for resale in marketplaces, nor can you resell or redistribute the templates in any form. Additionally, usage in website builders or theme generators is not allowed. For more information, please visit our Terms & License page.'
    },
    {
      category: 'licensing',
      question: 'Is attribution required?',
      answer: 'Attribution is not required, although it is really appreciated! If you enjoy using our templates and want to support our work, a link back to Cruip.com would be wonderful, but it\'s completely optional.'
    },
    {
      category: 'account',
      question: 'How do I access my purchased templates?',
      answer: 'After purchase, you\'ll receive an email with a download link. You can also log into your account on our website to access all your purchased templates from your dashboard. Downloads are available for one year after purchase.'
    },
    {
      category: 'account',
      question: 'Can multiple team members use one license?',
      answer: 'A single license allows one developer to use the template. If multiple developers on your team will be working with the template files, each developer needs their own license. We offer volume discounts for teams - contact us for details.'
    },
    {
      category: 'technical',
      question: 'Is there a Figma file included?',
      answer: 'Yes! A Figma file is available for each template. However, since our primary focus is on providing quality code for developers, the design files serve solely as a visual reference and are not organized into complex auto layouts or dynamic components.'
    }
  ]

  const quickLinks = [
    { 
      title: 'Documentation', 
      desc: 'Comprehensive guides and API references',
      icon: <Book className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      link: '#'
    },
    { 
      title: 'Video Tutorials', 
      desc: 'Step-by-step video walkthroughs',
      icon: <Sparkles className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      link: '#'
    },
    { 
      title: 'Community Forum', 
      desc: 'Connect with other developers',
      icon: <MessageCircle className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      link: '#'
    },
    { 
      title: 'Contact Support', 
      desc: 'Get help from our team',
      icon: <Mail className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      link: '#'
    }
  ]

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920')] bg-cover bg-center bg-no-repeat"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950"></div>
        </div>

        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center" id="hero-content" data-animate>
          <div className={`inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 rounded-full px-5 py-2.5 mb-6 ${isVisible['hero-content'] ? 'animate-in fade-in slide-in-from-top duration-700' : 'opacity-0'}`}>
            <HelpCircle className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-semibold">24/7 Help & Support</span>
          </div>

          <h1 className={`text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight ${isVisible['hero-content'] ? 'animate-in fade-in slide-in-from-bottom duration-700 delay-200' : 'opacity-0'}`}>
            How can we{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              help you?
            </span>
          </h1>

          <p className={`text-xl text-slate-300 mb-10 max-w-2xl mx-auto ${isVisible['hero-content'] ? 'animate-in fade-in slide-in-from-bottom duration-700 delay-300' : 'opacity-0'}`}>
            Search our knowledge base or browse categories to find answers to your questions
          </p>

          {/* Search Bar */}
          <div className={`max-w-2xl mx-auto ${isVisible['hero-content'] ? 'animate-in fade-in slide-in-from-bottom duration-700 delay-500' : 'opacity-0'}`}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-900/60 backdrop-blur-xl border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 px-4 relative" id="quick-links" data-animate>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.link}
                className={`group relative bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all cursor-pointer ${isVisible['quick-links'] ? 'animate-in fade-in zoom-in duration-700' : 'opacity-0'}`}
                style={{animationDelay: `${idx * 100}ms`}}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-500`}></div>
                <div className={`w-14 h-14 bg-gradient-to-br ${link.color} rounded-xl mb-4 flex items-center justify-center transform group-hover:scale-110 transition-all shadow-lg`}>
                  {link.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">{link.title}</h3>
                <p className="text-sm text-slate-400 mb-3">{link.desc}</p>
                <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4" id="categories" data-animate>
        <div className="max-w-7xl mx-auto">
          <div className={`flex flex-wrap gap-3 justify-center ${isVisible['categories'] ? 'animate-in fade-in slide-in-from-bottom duration-700' : 'opacity-0'}`}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-slate-900/60 backdrop-blur-xl border border-slate-700 hover:border-slate-600 text-slate-300'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 relative" id="faq-section" data-animate>
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-12 ${isVisible['faq-section'] ? 'animate-in fade-in slide-in-from-bottom duration-700' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-300">
              {filteredFaqs.length} {filteredFaqs.length === 1 ? 'question' : 'questions'} found
            </p>
          </div>

          <div className="space-y-4">
            {filteredFaqs.map((faq, idx) => (
              <div
                key={idx}
                className={`bg-slate-900/60 backdrop-blur-xl rounded-xl border border-slate-700 overflow-hidden transition-all ${isVisible['faq-section'] ? 'animate-in fade-in slide-in-from-bottom duration-700' : 'opacity-0'}`}
                style={{animationDelay: `${idx * 50}ms`}}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-lg">{faq.question}</span>
                  </div>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 pl-16">
                    <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-slate-600" />
              </div>
              <p className="text-xl text-slate-400 mb-2">No results found</p>
              <p className="text-slate-500">Try adjusting your search or category filter</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden" id="cta-section" data-animate>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"></div>
        <div className={`max-w-4xl mx-auto text-center relative z-10 ${isVisible['cta-section'] ? 'animate-in fade-in zoom-in duration-700' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Still have questions?
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Contact Support
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-slate-600 hover:border-slate-500 bg-slate-900/60 hover:bg-slate-800/60 rounded-xl font-semibold transition-all backdrop-blur-xl flex items-center justify-center gap-2">
              <Book className="w-5 h-5" />
              View Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-semibold mb-4 text-lg">Product</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing & Plans</a></li>
                <li><a href="#" className="hover:text-white transition">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Company</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-white transition">About us</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Support</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Resources</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Open PRO
              </span>
            </div>
            <p className="text-slate-400">© 2024 Open PRO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HelpCenter