import { useEffect, useState } from 'react'
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronDown,
  FaChevronUp,
  FaChartLine,
  FaShoppingCart,
  FaCheckCircle,
  FaMicrochip,
  FaNetworkWired,
  FaCar,
} from 'react-icons/fa'

const Projects = () => {
  const [visible, setVisible] = useState(false)
  const [expandedId, setExpandedId] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const projects = [
    {
      id: 1,
      title: 'Analytics Dashboard – Real‑time ETL',
      shortDesc: 'High‑throughput dashboard processing millions of events/day.',
      fullDesc: 'Built with Node.js microservices, Kafka streams, and TimescaleDB. React frontend with Recharts and WebSockets for live updates.',
      tech: ['PostgreSQL', 'Node.js', 'React', 'Tailwind', 'Redis', 'Kafka'],
      github: '#',
      live: '#',
      icon: <FaChartLine className="text-3xl text-blue-400" />,
      category: 'Data Engineering',
    },
    {
      id: 2,
      title: 'E‑Commerce Platform',
      shortDesc: 'Full‑stack online store with JWT auth, cart, and order system.',
      fullDesc: 'MongoDB aggregation for recommendations, Express API with rate limiting, React Context for state. Stripe integration.',
      tech: ['MongoDB', 'Express', 'React', 'Stripe', 'Tailwind'],
      github: '#',
      live: '#',
      icon: <FaShoppingCart className="text-3xl text-blue-400" />,
      category: 'Full‑Stack',
    },
    {
      id: 3,
      title: 'TaskFlow – Team Productivity Suite',
      shortDesc: 'Real‑time collaboration tool with WebSockets.',
      fullDesc: 'Django + PostgreSQL with full‑text search, Next.js frontend, WebSocket notifications, Redis caching.',
      tech: ['Django', 'PostgreSQL', 'Next.js', 'WebSockets', 'Tailwind'],
      github: '#',
      live: '#',
      icon: <FaCheckCircle className="text-3xl text-blue-400" />,
      category: 'Full‑Stack',
    },
    {
      id: 4,
      title: 'IoT Environmental Monitor',
      shortDesc: 'ESP32 sensors + Node.js backend + React dashboard',
      fullDesc: 'ESP32 with DHT22/MQ135 sends data via MQTT to Node.js broker. Data stored in InfluxDB, visualized on React dashboard.',
      tech: ['C++ (ESP32)', 'Node.js', 'InfluxDB', 'MQTT', 'React'],
      github: '#',
      live: '#',
      icon: <FaMicrochip className="text-3xl text-blue-400" />,
      category: 'Embedded IoT',
    },
    {
      id: 5,
      title: 'Network Scanner & Monitor',
      shortDesc: 'Python tool + Flask dashboard for network analysis',
      fullDesc: 'Scapy + Nmap backend, Flask API stores data in PostgreSQL. Frontend shows live network topology.',
      tech: ['Python', 'Flask', 'PostgreSQL', 'Chart.js', 'Tailwind'],
      github: '#',
      live: '#',
      icon: <FaNetworkWired className="text-3xl text-blue-400" />,
      category: 'Security',
    },
    {
      id: 6,
      title: 'Smart Parking System',
      shortDesc: 'Ultrasonic sensors + React dashboard + MongoDB',
      fullDesc: 'ESP8266 detects parking occupancy. Data sent via HTTP to Node.js API, stored in MongoDB, displayed on React map.',
      tech: ['C++', 'ESP8266', 'Node.js', 'MongoDB', 'React', 'Leaflet'],
      github: '#',
      live: '#',
      icon: <FaCar className="text-3xl text-blue-400" />,
      category: 'Embedded IoT',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-black overflow-hidden relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 animate-pulse"></div>

      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative text-white">
            Featured projects
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
          </h2>
          <p className="text-gray-400 mt-4">Click on any project to expand details</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 overflow-hidden shadow-lg shadow-blue-500/5 hover:shadow-blue-500/20 hover:-translate-y-1"
            >
              <div
                className="p-5 cursor-pointer flex justify-between items-center group"
                onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
              >
                <div className="flex items-center gap-3">
                  {project.icon}
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{project.shortDesc}</p>
                    <span className="inline-block mt-1 text-xs bg-gray-800 px-2 py-0.5 rounded-full text-blue-300">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="text-blue-400 transition-transform duration-200 group-hover:scale-110">
                  {expandedId === project.id ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>

              {expandedId === project.id && (
                <div className="px-5 pb-5 pt-2 border-t border-gray-700/50 animate-fadeIn">
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">{project.fullDesc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs bg-gray-800 px-2 py-1 rounded-full text-purple-300 border border-gray-700">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-gray-300 hover:text-blue-400 transition"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub /> GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-gray-300 hover:text-blue-400 transition"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.2s ease-out forwards;
          }
        `}</style>
      </div>
    </section>
  )
}

export default Projects