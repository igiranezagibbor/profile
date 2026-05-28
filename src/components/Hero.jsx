import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa'

// If you're using a local image, import it like this:
// import profileImage from '../assets/profile.jpg'

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gray-950 relative overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left side - unchanged */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-400 bg-blue-900/30 rounded-full mb-4 backdrop-blur-sm">
              Full‑Stack Dev + Electronic Engineer
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Bridging{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                hardware & software
              </span>
            </h1>
            <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto lg:mx-0">
              I design robust backends, optimize databases, craft smooth frontends – and understand the electronics that power it all. 
              PostgreSQL, Node.js, React, plus embedded systems & IoT.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold transition transform hover:scale-105"
              >
                Hire me <FaArrowRight />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 border border-gray-700 hover:border-blue-500 px-6 py-3 rounded-full font-semibold transition hover:bg-gray-800/50"
              >
                View projects
              </a>
            </div>
            <div className="mt-8 flex gap-5 justify-center lg:justify-start text-gray-400">
              <a href="https://github.com/igiranezagibbor" className="hover:text-blue-400 text-2xl transition"><FaGithub /></a>
              <a href="#" className="hover:text-blue-400 text-2xl transition"><FaLinkedin /></a>
            </div>
          </div>

          {/* Right side - avatar with image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 p-1 shadow-xl">
              <div className="w-full h-full rounded-full bg-gray-900 overflow-hidden flex items-center justify-center">
                <img
                  // -------- UPDATE THIS PATH --------
                  // Option 1: image from public folder (e.g., public/profile.jpg)
                  src="/profile.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero