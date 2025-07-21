import { Linkedin, Twitter, Mail, Award, Brain, Globe, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Team() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Managing Partner & AI Strategist",
      bio: "Former VP at Google Ventures with PhD in Machine Learning. Led investments in 100+ AI startups with $2B+ in exits.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      linkedin: "#",
      twitter: "#",
      email: "sarah@buildersclub.me",
      specialties: ["AI/ML", "Quantum Computing", "Robotics"],
      achievements: "Forbes 40 Under 40"
    },
    {
      name: "Michael Rodriguez",
      role: "Investment Director & Growth Hacker",
      bio: "Ex-McKinsey partner turned serial entrepreneur. 3 successful exits including a $500M acquisition by Tesla.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
      linkedin: "#",
      twitter: "#",
      email: "michael@buildersclub.me",
      specialties: ["CleanTech", "Mobility", "Energy"],
      achievements: "TechCrunch Disruptor Award"
    },
    {
      name: "Dr. Emily Johnson",
      role: "Principal & BioTech Lead",
      bio: "Former Genentech researcher with 15+ patents. Founded 2 biotech companies with combined valuation of $1.2B.",
      image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=600",
      linkedin: "#",
      twitter: "#",
      email: "emily@buildersclub.me",
      specialties: ["BioTech", "HealthTech", "Longevity"],
      achievements: "Nature Biotechnology Pioneer"
    },
    {
      name: "David Kim",
      role: "Partner & Space Economy Expert",
      bio: "Former SpaceX engineer and NASA consultant. Leading expert in commercial space technology and orbital economics.",
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600",
      linkedin: "#",
      twitter: "#",
      email: "david@buildersclub.me",
      specialties: ["SpaceTech", "Aerospace", "Defense"],
      achievements: "Space Industry Hall of Fame"
    }
  ];

  const advisors = [
    { name: "Elon Musk", role: "Strategic Advisor", company: "Tesla, SpaceX" },
    { name: "Reid Hoffman", role: "Network Advisor", company: "LinkedIn, Greylock" },
    { name: "Fei-Fei Li", role: "AI Advisor", company: "Stanford AI Lab" },
    { name: "Jennifer Doudna", role: "BioTech Advisor", company: "Nobel Laureate" }
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-white via-purple-50/20 to-blue-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full filter blur-3xl floating"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full filter blur-3xl floating" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 glass-morphism rounded-full text-blue-600 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Our Team
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Visionary
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"> Leaders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our diverse team combines decades of experience in building, investing, and scaling 
              breakthrough companies across the most transformative industries of our time.
            </p>
          </div>

          {/* Main Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1 glass-morphism border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Achievement Badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Award className="w-3 h-3 mr-1" />
                      {member.achievements}
                    </div>

                    {/* Social Links Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a 
                        href={member.linkedin} 
                        className="p-3 rounded-full glass-morphism-dark hover:bg-blue-500/20 transition-colors"
                      >
                        <Linkedin className="w-5 h-5 text-white" />
                      </a>
                      <a 
                        href={member.twitter} 
                        className="p-3 rounded-full glass-morphism-dark hover:bg-blue-500/20 transition-colors"
                      >
                        <Twitter className="w-5 h-5 text-white" />
                      </a>
                      <a 
                        href={`mailto:${member.email}`} 
                        className="p-3 rounded-full glass-morphism-dark hover:bg-blue-500/20 transition-colors"
                      >
                        <Mail className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">{member.bio}</p>
                    
                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs font-medium rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Advisory Board */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              World-Class
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Advisory Board</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advisors.map((advisor, index) => (
                <div key={index} className="glass-morphism rounded-2xl p-6 hover:bg-white/60 transition-all duration-300 transform hover:scale-105">
                  <h4 className="font-bold text-gray-900 mb-1">{advisor.name}</h4>
                  <p className="text-blue-600 text-sm font-medium mb-2">{advisor.role}</p>
                  <p className="text-gray-600 text-xs">{advisor.company}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Stats */}
          <div className="glass-morphism rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-12">Our Collective Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Globe, value: "500+", label: "Global Mentors", color: "from-blue-500 to-cyan-500" },
                { icon: Zap, value: "50+", label: "Unicorns Created", color: "from-purple-500 to-pink-500" },
                { icon: Award, value: "200+", label: "Industry Awards", color: "from-green-500 to-emerald-500" },
                { icon: Brain, value: "1000+", label: "Patents Filed", color: "from-orange-500 to-red-500" }
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 neon-glow`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}