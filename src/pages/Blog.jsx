import { useState, useEffect } from 'react'
import { Play, Check, Zap, Users, BarChart3, Sparkles, ArrowRight, Shield, Rocket, Globe, Clock, Target, Layers, Search, Calendar, GitBranch, TrendingUp, Menu, X } from 'lucide-react'

function Blog() {
  const [billingPeriod, setBillingPeriod] = useState('annual')
  const [showVideo, setShowVideo] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const [activeWorkflow, setActiveWorkflow] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

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

  const workflows = [
    {
      title: 'Built-in Tools',
      desc: 'Streamline the product development flow with a content platform that\'s aligned across specs and insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800'
    },
    {
      title: 'Scale Instantly',
      desc: 'Streamline the product development flow with a content platform that\'s aligned across specs and insights.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800'
    },
    {
      title: 'Tailored Flows',
      desc: 'Streamline the product development flow with a content platform that\'s aligned across specs and insights.',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800'
    }
  ]

  const advancedFeatures = [
    { 
      icon: <Target className="w-6 h-6" />, 
      title: 'Project Milestones', 
      desc: 'Track progress across custom flows for your team. Find the right balance for the user, privacy and security.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: <Users className="w-6 h-6" />, 
      title: 'Team Views', 
      desc: 'Track progress across custom flows for your team. Find the right balance for the user, privacy and security.',
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      icon: <Search className="w-6 h-6" />, 
      title: 'Advanced Search', 
      desc: 'Track progress across custom flows for your team. Find the right balance for the user, privacy and security.',
      gradient: 'from-orange-500 to-red-500'
    },
    { 
      icon: <Layers className="w-6 h-6" />, 
      title: 'Strategic Initiatives', 
      desc: 'Track progress across custom flows for your team. Find the right balance for the user, privacy and security.',
      gradient: 'from-green-500 to-emerald-500'
    },
    { 
      icon: <GitBranch className="w-6 h-6" />, 
      title: 'Flexible Workflows', 
      desc: 'Track progress across custom flows for your team. Find the right balance for the user, privacy and security.',
      gradient: 'from-indigo-500 to-blue-500'
    },
    { 
      icon: <Calendar className="w-6 h-6" />, 
      title: 'Unified Timeline', 
      desc: 'Track progress across custom flows for your team. Find the right balance for the user, privacy and security.',
      gradient: 'from-pink-500 to-rose-500'
    }
  ]

  const efficiencyFeatures = [
    { 
      icon: <Sparkles className="w-5 h-5" />,
      title: 'Strategic Sync', 
      desc: 'Remove corners from the avatars and transform the way your team work.' 
    },
    { 
      icon: <Shield className="w-5 h-5" />,
      title: 'Feedback Loop', 
      desc: 'Best-in-class design practices to keep your work safe and secure.' 
    },
    { 
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Enterprise-Ready', 
      desc: 'Built for teams of all sizes. From early-stage startups to global enterprises.' 
    }
  ]

  const pricingPlans = [
    {
      name: 'Freelancer',
      price: billingPeriod === 'annual' ? 7 : 9,
      description: 'Per user/month, billed annually.',
      features: [
        '50 users per month',
        'Email, Live Chat, WhatsApp',
        'Unlimited dashboards',
        'Custom integrations'
      ]
    },
    {
      name: 'Small Team',
      price: billingPeriod === 'annual' ? 27 : 32,
      description: 'Per user/month, billed annually.',
      features: [
        'No seat limits',
        'Real-time space syncing',
        'Automatic data enrichment',
        'Custom billing'
      ]
    },
    {
      name: 'Business',
      price: billingPeriod === 'annual' ? 47 : 55,
      popular: true,
      description: 'Per user/month, billed annually.',
      features: [
        'Adjustable permissions',
        'Unlimited reporting',
        'Bulk email sending',
        'Priority support'
      ]
    },
    {
      name: 'Enterprise Team',
      price: billingPeriod === 'annual' ? 87 : 99,
      description: 'Per user/month, billed annually.',
      features: [
        'Strongest connection',
        'First calendar interaction',
        'Historical attributes',
        'Time comparisons'
      ]
    }
  ]

  const carouselImages = [
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800'
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920')] bg-cover bg-center bg-no-repeat"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950"></div>
        </div>

        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="text-center mb-12" id="hero-content" data-animate>
            <h1 className={`text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight tracking-tight ${isVisible['hero-content'] ? 'animate-in fade-in slide-in-from-bottom duration-700' : 'opacity-0'}`}>
              <span className="inline-block hover:scale-105 transition-transform">AI-driven</span>{' '}
              <span className="inline-block hover:scale-105 transition-transform">tools</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                for product teams
              </span>
            </h1>
            <p className={`text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed ${isVisible['hero-content'] ? 'animate-in fade-in slide-in-from-bottom duration-700 delay-200' : 'opacity-0'}`}>
              Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${isVisible['hero-content'] ? 'animate-in fade-in slide-in-from-bottom duration-700 delay-400' : 'opacity-0'}`}>
              <button className="group px-8 py-3.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50">
                Start Building
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group px-8 py-3.5 border-2 border-slate-600 hover:border-slate-500 bg-slate-900/60 hover:bg-slate-800/60 rounded-xl font-semibold transition-all backdrop-blur-xl">
                Schedule Demo
              </button>
            </div>
          </div>

          {/* Video Preview */}
          <div className={`max-w-6xl mx-auto mt-12 ${isVisible['hero-content'] ? 'animate-in fade-in zoom-in duration-1000 delay-600' : 'opacity-0'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-950 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200" 
                  alt="Hero" 
                  className="w-full h-auto"
                />
                
                <button 
                  onClick={() => setShowVideo(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/30 backdrop-blur-0 hover:backdrop-blur-sm transition-all group/play"
                >
                  <div className="w-20 h-20 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center group-hover/play:scale-110 group-hover/play:bg-white transition-all shadow-2xl">
                    <Play size={32} className="text-slate-900 ml-1" fill="currentColor" />
                  </div>
                  <div className="absolute bottom-6 right-6 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold">
                    Watch Demo - 3:47
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflows Section */}
      <section className="py-24 px-4 relative" id="workflows-section" data-animate>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920')] bg-cover bg-center bg-no-repeat"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-16 ${isVisible['workflows-section'] ? 'animate-in fade-in slide-in-from-bottom duration-700' : 'opacity-0'}`}>
            <div className="inline-block bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-blue-300 font-semibold">Tailored Workflows</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Map your product journey
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Simple and elegant interface to start collaborating with your team in minutes. It seamlessly integrates with your code and your favorite programming languages.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {workflows.map((workflow, idx) => (
              <div 
                key={idx} 
                className={`group relative transition-all duration-300 ${isVisible['workflows-section'] ? 'animate-in fade-in zoom-in duration-700' : 'opacity-0'}`}
                style={{animationDelay: `${idx * 100}ms`}}
              >
                <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-700 hover:border-slate-600 transition-all overflow-hidden cursor-pointer">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={workflow.image} 
                      alt={workflow.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{workflow.title}</h3>
                    <p className="text-slate-400 leading-relaxed">
                      {workflow.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Controls Section */}
      <section className="py-24 px-4 relative" id="controls-section" data-animate>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-16 ${isVisible['controls-section'] ? 'animate-in fade-in slide-in-from-bottom duration-700' : 'opacity-0'}`}>
            <div className="inline-block bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-purple-300 font-semibold">Advanced Controls</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built for modern product teams
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Open AI reads and understands your files, and with nothing more than a single line of feedback, so you can go further than the speed of thought.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div className={`${isVisible['controls-section'] ? 'animate-in fade-in slide-in-from-left duration-700' : 'opacity-0'}`}>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800" 
                alt="Features" 
                className="rounded-2xl border border-slate-700 shadow-2xl"
              />
            </div>

            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${isVisible['controls-section'] ? 'animate-in fade-in slide-in-from-right duration-700' : 'opacity-0'}`}>
              {advancedFeatures.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="group relative transition-all duration-300"
                  style={{animationDelay: `${idx * 100}ms`}}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 rounded-xl blur-xl transition-all duration-500`}></div>
                  <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all cursor-pointer">
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-lg mb-4 flex items-center justify-center transform group-hover:scale-110 transition-all shadow-lg`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Efficiency Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent relative" id="efficiency-section" data-animate>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920')] bg-cover bg-center bg-no-repeat"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-16 ${isVisible['efficiency-section'] ? 'animate-in fade-in slide-in-from-bottom duration-700' : 'opacity-0'}`}>
            <div className="inline-block bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-blue-300 font-semibold">Software Standard</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Improve efficiency & global coverage
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Open is so simple to use, it's easy to overlook the wealth of complex technologies packed under the hood that keep Open robust, safe, and blazing fast.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {efficiencyFeatures.map((feature, idx) => (
              <div 
                key={idx} 
                className={`group relative transition-all duration-300 ${isVisible['efficiency-section'] ? 'animate-in fade-in zoom-in duration-700' : 'opacity-0'}`}
                style={{animationDelay: `${idx * 100}ms`}}
              >
                <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all cursor-pointer">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl mb-6 flex items-center justify-center transform group-hover:scale-110 transition-all border border-slate-700/50 group-hover:border-blue-500/50">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial with Carousel */}
      <section className="py-24 px-4" id="testimonial-section" data-animate>
        <div className={`max-w-6xl mx-auto ${isVisible['testimonial-section'] ? 'animate-in fade-in zoom-in duration-700' : 'opacity-0'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative bg-slate-900/60 backdrop-blur-2xl rounded-2xl p-8 md:p-12 border border-slate-700 group hover:border-slate-600 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl"></div>
              <div className="relative">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs">★</span>
                    </div>
                  ))}
                </div>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed text-slate-200">
                  "I was blown away by how easy it was to create my content using this tool! Within a few hours, I had a professional-looking flow up and running."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-xl font-bold">
                    CP
                  </div>
                  <div>
                    <div className="font-bold text-lg">Chris Pick</div>
                    <div className="text-slate-400">Notion Circle</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {carouselImages.map((img, idx) => (
                <div 
                  key={idx}
                  className="relative rounded-xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all cursor-pointer group"
                  onClick={() => setCurrentTestimonial(idx)}
                >
                  <img 
                    src={img} 
                    alt={`Carousel ${idx + 1}`}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 relative" data-animate>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5 blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-16 ${isVisible['pricing'] ? 'animate-in fade-in slide-in-from-bottom duration-700' : 'opacity-0'}`}>
            <div className="inline-block bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-blue-300 font-semibold">Simple Pricing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pick the right plan for your business
            </h2>
            
            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-slate-900/90 backdrop-blur-xl rounded-xl p-1.5 border border-slate-700 mt-8">
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`px-6 py-2.5 rounded-lg transition-all font-medium relative ${
                  billingPeriod === 'annual' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
                }`}
              >
                Billed Annually
              </button>
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2.5 rounded-lg transition-all font-medium ${
                  billingPeriod === 'monthly' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
                }`}
              >
                Billed Monthly
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`group relative bg-slate-900/60 backdrop-blur-xl rounded-2xl p-8 border transition-all hover:-translate-y-2 ${
                  plan.popular 
                    ? 'border-blue-500/50 shadow-2xl shadow-blue-500/20 scale-105' 
                    : 'border-slate-700 hover:border-slate-600'
                } ${isVisible['pricing'] ? 'animate-in fade-in zoom-in duration-700' : 'opacity-0'}`}
                style={{animationDelay: `${idx * 100}ms`}}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    POPULAR
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold">${plan.price}</span>
                </div>
                <p className="text-slate-400 text-sm mb-6">{plan.description}</p>
                
                <button className={`w-full py-3.5 rounded-xl transition-all font-semibold mb-8 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-slate-600'
                }`}>
                  Start free trial
                </button>

                <div className="space-y-1 mb-4">
                  <p className="text-sm font-semibold text-slate-300">
                    {idx === 0 ? 'Freelancer includes:' : `Everything in ${pricingPlans[idx-1].name}, plus:`}
                  </p>
                </div>

                <ul className="space-y-4">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="text-blue-400" size={14} />
                      </div>
                      <span className="text-sm text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Large Testimonial */}
      <section className="py-24 px-4" id="large-testimonial" data-animate>
        <div className={`max-w-6xl mx-auto ${isVisible['large-testimonial'] ? 'animate-in fade-in zoom-in duration-700' : 'opacity-0'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800" 
                alt="Testimonial" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative">
              <p className="text-2xl md:text-3xl mb-8 leading-relaxed text-slate-200">
                "Open PRO lives up to its name. It's incredibly easy to use yet powerful enough to handle all my content needs effortlessly. It's become an essential part of our work routine."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold">
                  CP
                </div>
                <div>
                  <div className="font-bold text-lg">Chris Pick</div>
                  <div className="text-slate-400">VP of Product, Disney</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden" id="cta-section" data-animate>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"></div>
        <div className={`max-w-4xl mx-auto text-center relative z-10 ${isVisible['cta-section'] ? 'animate-in fade-in zoom-in duration-700' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Join the content-first platform
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50">
              Start Building
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-slate-600 hover:border-slate-500 bg-slate-900/60 hover:bg-slate-800/60 rounded-xl font-semibold transition-all backdrop-blur-xl">
              Schedule Demo
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
                <li><a href="#" className="hover:text-white transition">Our method</a></li>
                <li><a href="#" className="hover:text-white transition">User policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Company</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-white transition">About us</a></li>
                <li><a href="#" className="hover:text-white transition">Diversity & Inclusion</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Financial statements</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Resources</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-white transition">Community</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of service</a></li>
                <li><a href="#" className="hover:text-white transition">Report a vulnerability</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Content Library</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-white transition">Templates</a></li>
                <li><a href="#" className="hover:text-white transition">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition">Knowledge base</a></li>
                <li><a href="#" className="hover:text-white transition">Learn</a></li>
                <li><a href="#" className="hover:text-white transition">Cookie manager</a></li>
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
            <p className="text-slate-400">© Cruip.com · Terms</p>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {showVideo && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setShowVideo(false)}
        >
          <div className="max-w-5xl w-full aspect-video bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
            <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 bg-gradient-to-br from-slate-900 to-slate-950">
              <Play size={64} className="text-slate-600 mb-4" />
              <p className="text-xl font-semibold">Video Player Placeholder</p>
              <p className="text-sm text-slate-500 mt-2">Click outside to close</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Blog