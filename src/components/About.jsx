import { useEffect, useState } from 'react'
import {
  FaGraduationCap,
  FaBriefcase,
  FaHeart,
  FaRocket,
  FaDatabase,
  FaBolt,
  FaPaintBrush,
  FaMicrochip,
} from 'react-icons/fa'

const About = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const timeline = [
    {
      year: '2018 – 2022',
      title: 'B.E. in Electronic Engineering',
      desc: 'Focused on embedded systems, IoT, and signal processing. Graduated with honors.',
      icon: <FaGraduationCap />,
    },
    {
      year: '2022 – 2023',
      title: 'Full‑Stack Developer @ TechStart',
      desc: 'Built REST APIs + React dashboards for logistics clients. Optimized PostgreSQL queries.',
      icon: <FaBriefcase />,
    },
    {
      year: '2023 – Present',
      title: 'Freelance Engineer & Consultant',
      desc: 'Delivering full‑stack solutions + IoT prototypes. Specializing in database design and real‑time systems.',
      icon: <FaRocket />,
    },
  ]

  const passions = [
    { icon: <FaDatabase />, text: 'Database optimization & sharding' },
    { icon: <FaBolt />, text: 'Real‑time systems (WebSockets, MQTT)' },
    { icon: <FaPaintBrush />, text: 'Clean UI with Tailwind & Framer Motion' },
    { icon: <FaMicrochip />, text: 'Embedded electronics & PCB design' },
  ]

  return (
    <section id="about" className="py-20 bg-black overflow-hidden relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 animate-pulse"></div>

      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative text-white">
            About me
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left column: bio + passions */}
          <div className="space-y-6">
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/20">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm <span className="text-blue-400 font-semibold">Gibbor Tech</span>, a full‑stack developer 
                with a degree in <span className="text-purple-300">Electronic Engineering</span>. 
                I build efficient systems from hardware to UI – designing databases, backend APIs, and frontend experiences that scale.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Currently exploring <span className="text-purple-300">edge computing & predictive maintenance</span>, 
                combining my EE background with modern web technologies.
              </p>
            </div>

            <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/20">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 flex items-center gap-2">
                <FaHeart className="text-blue-400" /> What drives me
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {passions.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition hover:translate-x-1 duration-300">
                    <span className="text-blue-400 text-xl">{item.icon}</span>
                    <span className="text-sm text-gray-200">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: timeline */}
          <div>
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/20 h-full">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 flex items-center gap-2">
                <FaBriefcase /> Journey
              </h3>
              <div className="space-y-6">
                {timeline.map((item, idx) => (
                  <div key={idx} className="relative pl-8 pb-6 border-l-2 border-blue-500/40 last:pb-0 group">
                    <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 group-hover:scale-125 transition duration-300 shadow-md"></div>
                    <div className="flex items-center gap-2 text-blue-400 text-sm mb-1 group-hover:translate-x-1 transition duration-300">
                      {item.icon}
                      <span className="font-mono">{item.year}</span>
                    </div>
                    <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition">{item.title}</h4>
                    <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About