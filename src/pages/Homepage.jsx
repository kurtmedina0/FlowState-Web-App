import { useState, useEffect } from 'react'
import { Play, Check, Zap, Users, BarChart3, Sparkles, ArrowRight, Shield, Rocket, Globe, Clock } from 'lucide-react'
import { useLocation } from 'react-router-dom'


function HomePage() {
  const [billingPeriod, setBillingPeriod] = useState('annual')
  const [showVideo, setShowVideo] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4)
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

  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo === 'pricing') {
      setTimeout(() => {
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [location])
  
  const features = [
    { 
      icon: <Zap className="w-6 h-6" />, 
      title: 'Real-time Collaboration', 
      desc: 'Work together seamlessly with your team across timezones',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: <BarChart3 className="w-6 h-6" />, 
      title: 'Advanced Analytics', 
      desc: 'Deep insights into user behavior and product performance',
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      icon: <Users className="w-6 h-6" />, 
      title: 'Custom Workflows', 
      desc: 'Build processes that match your unique team dynamics',
      gradient: 'from-orange-500 to-red-500'
    },
    { 
      icon: <Globe className="w-6 h-6" />, 
      title: 'API Integration', 
      desc: 'Connect with 100+ tools you already use every day',
      gradient: 'from-green-500 to-emerald-500'
    }
  ]

  const pricingPlans = [
    {
      name: 'Freelancer',
      price: billingPeriod === 'annual' ? 7 : 9,
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
      features: [
        'Strongest connection',
        'First calendar interaction',
        'Historical attributes',
        'Time comparisons'
      ]
    }
  ]

  const automationFeatures = [
    { 
      icon: <Sparkles className="w-5 h-5" />,
      title: 'Smart Task Management', 
      desc: 'AI-powered prioritization keeps your team focused' 
    },
    { 
      icon: <BarChart3 className="w-5 h-5" />,
      title: 'Automated Reporting', 
      desc: 'Generate insights without manual data crunching' 
    },
    { 
      icon: <Clock className="w-5 h-5" />,
      title: 'Intelligent Notifications', 
      desc: 'Stay informed without getting overwhelmed' 
    }
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
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="text-center mb-12" id="hero-content" data-animate>
            <div className={`inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 rounded-full px-5 py-2.5 mb-6 hover:border-blue-500/40 transition-all cursor-pointer group ${isVisible['hero-content'] ? 'animate-in fade-in slide-in-from-top duration-700' : 'opacity-0'}`}>
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-blue-300 font-semibold">Now with AI-powered insights</span>
              <Sparkles className="w-4 h-4 text-blue-400 group-hover:rotate-12 transition-transform" />
            </div>
            
            <h1 className={`text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight tracking-tight ${isVisible['hero-content'] ? 'animate-in fade-in slide-in-from-bottom duration-700 delay-200' : 'opacity-0'}`}>
              <span className="inline-block hover:scale-105 transition-transform">Build</span>{' '}
              <span className="inline-block hover:scale-105 transition-transform">better</span>{' '}
              <span className="inline-block hover:scale-105 transition-transform">products</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                with your team
              </span>
            </h1>
            <p className={`text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed ${isVisible['hero-content'] ? 'animate-in fade-in slide-in-from-bottom duration-700 delay-300' : 'opacity-0'}`}>
              The modern workspace for product teams. Collaborate in real-time, ship faster, and build products your customers love.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${isVisible['hero-content'] ? 'animate-in fade-in slide-in-from-bottom duration-700 delay-500' : 'opacity-0'}`}>
              <button className="group px-8 py-3.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50">
                Get Started Free
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group px-8 py-3.5 border-2 border-slate-600 hover:border-slate-500 bg-slate-900/60 hover:bg-slate-800/60 rounded-xl font-semibold transition-all backdrop-blur-xl">
                <Play className="inline-block mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </div>
            <p className={`text-sm text-slate-400 mt-6 flex items-center justify-center gap-2 ${isVisible['hero-content'] ? 'animate-in fade-in duration-700 delay-700' : 'opacity-0'}`}>
              <Shield className="w-4 h-4" />
              No credit card required • Free 14-day trial
            </p>
          </div>

          {/* Video Preview */}
          <div className={`max-w-6xl mx-auto mt-12 ${isVisible['hero-content'] ? 'animate-in fade-in zoom-in duration-1000 delay-700' : 'opacity-0'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-950 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
              
              {/* Dashboard Mockup */}
              <div className="relative p-6">
                <div className="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden">
                  {/* Browser Bar */}
                  <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 bg-slate-900 rounded px-3 py-1.5 text-xs text-slate-400 ml-3">
                      app.openpro.com/dashboard
                    </div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="p-6 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 rounded-xl p-4 backdrop-blur transform hover:scale-105 transition-all">
                        <div className="flex items-center justify-between mb-2">
                          <Users className="w-5 h-5 text-blue-400" />
                          <span className="text-xs font-bold text-green-400">+12%</span>
                        </div>
                        <div className="text-2xl font-bold text-white mb-1">2,847</div>
                        <div className="text-xs text-slate-400">Active Users</div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30 rounded-xl p-4 backdrop-blur transform hover:scale-105 transition-all">
                        <div className="flex items-center justify-between mb-2">
                          <BarChart3 className="w-5 h-5 text-purple-400" />
                          <span className="text-xs font-bold text-green-400">+8%</span>
                        </div>
                        <div className="text-2xl font-bold text-white mb-1">$45.2k</div>
                        <div className="text-xs text-slate-400">Revenue</div>
                      </div>
                      <div className="bg-gradient-to-br from-pink-500/20 to-pink-600/10 border border-pink-500/30 rounded-xl p-4 backdrop-blur transform hover:scale-105 transition-all">
                        <div className="flex items-center justify-between mb-2">
                          <Zap className="w-5 h-5 text-pink-400" />
                          <span className="text-xs font-bold text-green-400">+24%</span>
                        </div>
                        <div className="text-2xl font-bold text-white mb-1">94.3%</div>
                        <div className="text-xs text-slate-400">Performance</div>
                      </div>
                    </div>
                    
                    {/* Chart Placeholder */}
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 backdrop-blur">
                      <div className="h-32 flex items-end gap-2">
                        {[40, 70, 55, 85, 65, 90, 75, 95].map((height, i) => (
                          <div key={i} className="flex-1 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t opacity-70 hover:opacity-100 transition-all cursor-pointer" style={{height: `${height}%`}}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => setShowVideo(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/20 backdrop-blur-0 hover:backdrop-blur-sm transition-all group/play"
              >
                <div className="w-20 h-20 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center group-hover/play:scale-110 group-hover/play:bg-white transition-all shadow-2xl">
                  <Play size={32} className="text-slate-900 ml-1" fill="currentColor" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 relative" id="features-section" data-animate>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920')] bg-cover bg-center bg-no-repeat"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-16 ${isVisible['features-section'] ? 'animate-in fade-in slide-in-from-bottom duration-700' : 'opacity-0'}`}>
            <div className="inline-block bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-blue-300 font-semibold">Powerful Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything you need to ship faster
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              All the tools and integrations you need to build, launch, and scale products that users love.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, idx) => (
              <div 
                key={idx} 
                className={`group relative transition-all duration-300 ${activeFeature === idx ? 'scale-105' : ''} ${isVisible['features-section'] ? 'animate-in fade-in zoom-in duration-700' : 'opacity-0'}`}
                style={{animationDelay: `${idx * 100}ms`}}
                onMouseEnter={() => setActiveFeature(idx)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500`}></div>
                <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all cursor-pointer h-full">
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl mb-6 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent relative" id="automation-section" data-animate>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920')] bg-cover bg-center bg-no-repeat"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`order-2 lg:order-1 ${isVisible['automation-section'] ? 'animate-in fade-in slide-in-from-left duration-700' : 'opacity-0'}`}>
              <div className="inline-block bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
                <span className="text-sm text-purple-300 font-semibold">Smart Automation</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Focus on what matters most
              </h2>
              <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                Automate repetitive tasks and let AI handle the heavy lifting so your team can focus on building great products.
              </p>

              <div className="space-y-5">
                {automationFeatures.map((feature, idx) => (
                  <div key={idx} className="flex gap-4 group cursor-pointer p-4 rounded-xl hover:bg-slate-900/50 transition-all">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center border border-slate-700/50 group-hover:border-blue-500/50 group-hover:scale-110 transition-all">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                      <p className="text-slate-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`order-1 lg:order-2 relative ${isVisible['automation-section'] ? 'animate-in fade-in slide-in-from-right duration-700' : 'opacity-0'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative aspect-square bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl border border-slate-700 p-8 shadow-2xl">
                <div className="w-full h-full bg-slate-800/30 rounded-2xl backdrop-blur-sm p-6 flex flex-col gap-5">
                  {/* Animated Task Cards */}
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-slate-900/90 border border-slate-700 rounded-xl p-5 flex items-center gap-4 hover:border-blue-500/50 transition-all cursor-pointer group" style={{animationDelay: `${i * 0.2}s`}}>
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Check className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="h-3 bg-slate-700 rounded w-3/4 mb-2"></div>
                        <div className="h-2 bg-slate-800 rounded w-1/2"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-4" id="testimonial-section" data-animate>
        <div className={`max-w-4xl mx-auto text-center ${isVisible['testimonial-section'] ? 'animate-in fade-in zoom-in duration-700' : 'opacity-0'}`}>
          <div className="relative bg-slate-900/60 backdrop-blur-2xl rounded-2xl p-12 md:p-16 border border-slate-700 group hover:border-slate-600 transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl"></div>
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm">★</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mt-4">
              <p className="text-2xl md:text-3xl mb-10 leading-relaxed text-slate-200">
                "This platform transformed how our team works. We shipped 3x faster and our productivity skyrocketed. Couldn't imagine going back."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  CP
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg">Chris Pick</div>
                  <div className="text-slate-400">Product Lead @ Notion Circle</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4" data-animate>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${isVisible['pricing'] ? 'animate-in fade-in slide-in-from-bottom duration-700' : 'opacity-0'}`}>
            <div className="inline-block bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-blue-300 font-semibold">Simple Pricing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose your plan
            </h2>
            <p className="text-lg text-slate-300 mb-10 max-w-3xl mx-auto">
              Start free and scale as you grow. All plans include a 14-day trial.
            </p>
            
            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-slate-900/90 backdrop-blur-xl rounded-xl p-1.5 border border-slate-700">
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`px-6 py-2.5 rounded-lg transition-all font-medium relative ${
                  billingPeriod === 'annual' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
                }`}
              >
                Annual 
                {billingPeriod === 'annual' && <span className="text-green-400 text-xs ml-1">Save 20%</span>}
              </button>
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2.5 rounded-lg transition-all font-medium ${
                  billingPeriod === 'monthly' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
                }`}
              >
                Monthly
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
                    MOST POPULAR
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-8">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className="text-slate-400 text-lg">/mo</span>
                </div>
                
                <button className={`w-full py-3.5 rounded-xl transition-all font-semibold mb-8 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-slate-600'
                }`}>
                  Start Free Trial
                </button>

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

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden" id="cta-section" data-animate>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"></div>
        <div className={`max-w-4xl mx-auto text-center relative z-10 ${isVisible['cta-section'] ? 'animate-in fade-in zoom-in duration-700' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Ready to transform your workflow?
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Join thousands of teams already building better products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50">
              Get Started Free
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
              <h4 className="font-semibold mb-4 text-lg">Resources</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-white transition">Community</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Content Library</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-white transition">Templates</a></li>
                <li><a href="#" className="hover:text-white transition">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition">Knowledge base</a></li>
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

export default HomePage