import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Gibbor Tech – Full‑Stack & Database Engineer          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/igiranezagibbor" className="text-gray-400 hover:text-blue-400 text-xl"><FaGithub /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-xl"><FaLinkedin /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-xl"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer