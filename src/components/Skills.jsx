import { useEffect, useState } from 'react'
import {
  FaDatabase,
  FaServer,
  FaCode,
  FaMicrochip,
  FaCloud,
  FaTools,
  FaGitAlt,
  FaPaperPlane,
  FaDocker,
  FaFigma,
  FaLinux,
} from 'react-icons/fa'
import { VscCode } from 'react-icons/vsc' // ✅ Correct VS Code icon import

const Skills = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const skillCategories = [
    {
      title: 'Databases & Data Engineering',
      icon: <FaDatabase className="text-3xl" />,
      description: 'Design, optimize, and scale data storage solutions.',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Prisma ORM', 'Query Tuning', 'Data Modeling'],
    },
    {
      title: 'Backend Development',
      icon: <FaServer className="text-3xl" />,
      description: 'Robust APIs, microservices, and real‑time systems.',
      skills: ['Node.js / Express', 'Python / Django', 'REST APIs', 'GraphQL', 'JWT', 'Microservices'],
    },
    {
      title: 'Frontend & UI',
      icon: <FaCode className="text-3xl" />,
      description: 'Responsive, accessible, and performant user interfaces.',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Redux Toolkit', 'Framer Motion'],
    },
    {
      title: 'IT & Electronic Engineering',
      icon: <FaMicrochip className="text-3xl" />,
      description: 'From embedded systems to network security.',
      skills: [
        'Embedded C / C++', 'Arduino / Raspberry Pi', 'PCB Design (KiCad)',
        'IoT Protocols (MQTT, Zigbee)', 'Network Security', 'Digital Logic',
        'Sensors & Actuators', 'Linux System Administration'
      ],
    },
    {
      title: 'DevOps & Cloud',
      icon: <FaCloud className="text-3xl" />,
      description: 'Automation, CI/CD, and cloud infrastructure.',
      skills: ['Docker', 'GitHub Actions', 'AWS (RDS, EC2)', 'Vercel', 'Postman', 'Linux'],
    },
  ]

  const toolchain = [
    { name: 'VS Code', icon: <VscCode className="text-xl" /> },
    { name: 'Git', icon: <FaGitAlt className="text-xl" /> },
    { name: 'Postman', icon: <FaPaperPlane className="text-xl" /> },
    { name: 'Docker', icon: <FaDocker className="text-xl" /> },
    { name: 'Figma', icon: <FaFigma className="text-xl" /> },
    { name: 'Linux', icon: <FaLinux className="text-xl" /> },
  ]

  return (
    <section id="skills" className="py-20 bg-black overflow-hidden relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 animate-pulse"></div>

      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative text-white">
            Skills & expertise
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Full‑stack development meets electronic engineering – tools I use daily.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group shadow-lg shadow-blue-500/5 hover:shadow-blue-500/20 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 text-blue-400 mb-3">
                {cat.icon}
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition">{cat.title}</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">{cat.description}</p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-gray-800 text-gray-200 rounded-full text-xs font-medium border border-gray-700 hover:bg-blue-500/20 hover:border-blue-400/40 transition duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 flex items-center justify-center gap-2">
            <FaTools className="text-blue-400" /> Toolchain & workflow
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {toolchain.map((tool) => (
              <div
                key={tool.name}
                className="bg-gray-800 px-4 py-2 rounded-full flex items-center gap-2 border border-gray-700 hover:border-blue-500/50 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <span className="text-blue-400">{tool.icon}</span>
                <span className="text-gray-200 text-sm font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 