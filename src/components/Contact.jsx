import { useEffect, useState } from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [visible, setVisible] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSending, setIsSending] = useState(false)
  const [feedback, setFeedback] = useState({ type: '', message: '' })

  // Your EmailJS credentials
  const EMAILJS_SERVICE_ID = 'service_awedp4y'
  const EMAILJS_TEMPLATE_ID = 'template_irk9vqq'
  const EMAILJS_PUBLIC_KEY = 'vWQjrkJhH2e5Py0w4'

  // Initialize EmailJS when component mounts
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY)
  }, [])

  // Entrance animation
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 400)
    return () => clearTimeout(timer)
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (feedback.message) setFeedback({ type: '', message: '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSending(true)
    setFeedback({ type: '', message: '' })

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'gibbor3kg@gmail.com',
      }

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      )

      console.log('EmailJS success:', response)
      setFeedback({
        type: 'success',
        message: '✅ Message sent successfully! I\'ll get back to you soon.'
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('EmailJS error:', error)
      let errorMsg = '❌ Oops! Something went wrong. Please try again later.'
      if (error.text) errorMsg += ` (${error.text})`
      setFeedback({ type: 'error', message: errorMsg })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-black overflow-hidden relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 animate-pulse"></div>

      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative text-white">
            Let's connect
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
          </h2>
          <p className="text-gray-400 mt-4">Have a project in mind? Let's build something great together.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-500 shadow-xl shadow-blue-500/5 hover:shadow-blue-500/20">
          {/* Left info */}
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Contact info
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300 group hover:translate-x-2 transition-transform duration-300">
                <FaEnvelope className="text-blue-400 text-xl group-hover:scale-110 transition-transform" />
                <span>gibbor3kg@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 group hover:translate-x-2 transition-transform duration-300">
                <FaPhoneAlt className="text-blue-400 text-xl group-hover:scale-110 transition-transform" />
                <span>+1 (555) 789‑2345</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 group hover:translate-x-2 transition-transform duration-300">
                <FaMapMarkerAlt className="text-blue-400 text-xl group-hover:scale-110 transition-transform" />
                <span>Remote / Worldwide</span>
              </div>
            </div>
          </div>

          {/* Right form */}
          <form onSubmit={handleSubmit} className="flex-1 space-y-5">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all duration-300 focus:shadow-lg focus:shadow-blue-500/20"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all duration-300 focus:shadow-lg focus:shadow-blue-500/20"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Tell me about your project..."
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all duration-300 focus:shadow-lg focus:shadow-blue-500/20"
              />
            </div>

            {/* Feedback message */}
            {feedback.message && (
              <div className={`text-sm ${feedback.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                {feedback.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSending}
              className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 ${
                isSending ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSending ? 'Sending...' : 'Send message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact