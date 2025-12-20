import { Target, Rocket, Heart, Users, Award, Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'

function AboutUs() {
  const [isVisible, setIsVisible] = useState({})

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

  const values = [
    { icon: <Target className="w-6 h-6" />, title: 'Our Mission', desc: 'To revolutionize how teams collaborate and build products together through innovative technology.', gradient: 'from-blue-500 to-cyan-500' },
    { icon: <Rocket className="w-6 h-6" />, title: 'Our Vision', desc: 'A world where every team has the tools to turn ideas into reality, faster and more efficiently.', gradient: 'from-purple-500 to-pink-500' },
    { icon: <Heart className="w-6 h-6" />, title: 'Our Values', desc: 'Innovation, collaboration, and putting our users first in everything we build.', gradient: 'from-orange-500 to-red-500' }
  ]

  const stats = [
    { number: '50K+', label: 'Active Users' },
    { number: '120+', label: 'Countries' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ]

  const team = [
    { name: 'Alex Chen', role: 'CEO & Founder', initial: 'AC', gradient: 'from-blue-500 to-purple-500' },
    { name: 'Sarah Miller', role: 'Head of Product', initial: 'SM', gradient: 'from-purple-500 to-pink-500' },
    { name: 'Marcus Johnson', role: 'CTO', initial: 'MJ', gradient: 'from-orange-500 to-red-500' },
    { name: 'Emma Davis', role: 'Head of Design', initial: 'ED', gradient: 'from-green-500 to-emerald-500' }
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16" id="hero" data-animate>
            <div className={`inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 rounded-full px-5 py-2.5 mb-6 ${isVisible['hero'] ? 'animate-in fade-in slide-in-from-top duration-700' : 'opacity-0'}`}>
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300 font-semibold">Our Story</span>
            </div>
            
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${isVisible['hero'] ? 'animate-in fade-in slide-in-from-bottom duration-700 delay-200' : 'opacity-0'}`}>
              Building the future of
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                team collaboration
              </span>
            </h1>
            <p className={`text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed ${isVisible['hero'] ? 'animate-in fade-in slide-in-from-bottom duration-700 delay-300' : 'opacity-0'}`}>
              We're on a mission to empower teams worldwide with tools that make collaboration seamless, productive, and enjoyable.
            </p>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto ${isVisible['hero'] ? 'animate-in fade-in zoom-in duration-700 delay-500' : 'opacity-0'}`}>
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all text-center group hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">{stat.number}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 px-4 relative" id="values" data-animate>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, idx) => (
              <div 
                key={idx}
                className={`group relative ${isVisible['values'] ? 'animate-in fade-in zoom-in duration-700' : 'opacity-0'}`}
                style={{animationDelay: `${idx * 100}ms`}}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500`}></div>
                <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all h-full">
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl mb-6 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent" id="team" data-animate>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${isVisible['team'] ? 'animate-in fade-in slide-in-from-bottom duration-700' : 'opacity-0'}`}>
            <div className="inline-block bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-purple-300 font-semibold">Meet The Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The people behind Open PRO
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              A passionate team dedicated to building the best collaboration tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div 
                key={idx}
                className={`group relative ${isVisible['team'] ? 'animate-in fade-in zoom-in duration-700' : 'opacity-0'}`}
                style={{animationDelay: `${idx * 100}ms`}}
              >
                <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all text-center">
                  <div className={`w-24 h-24 bg-gradient-to-br ${member.gradient} rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform`}>
                    {member.initial}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-slate-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-24 px-4 relative overflow-hidden" id="cta" data-animate>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"></div>
        <div className={`max-w-4xl mx-auto text-center relative z-10 ${isVisible['cta'] ? 'animate-in fade-in zoom-in duration-700' : 'opacity-0'}`}>
          <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl p-12 md:p-16 border border-slate-700">
            <Users className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Want to join our team?
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              We're always looking for talented people to help us build the future.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50">
              View Open Positions
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs