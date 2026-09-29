import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaMoon, FaSun, FaDownload, FaPhone, FaExternalLinkAlt, FaBars, FaTimes } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import emailjs from 'emailjs-com'; // <-- ADD THIS IMPORT

// Import placeholder images (replace with your actual images)
// Replace all image imports with these direct URLs
const profileImage = "images/profile.jpg";
const webDevImage = "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80";
const fullstackImage = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
const supportImage = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
const proplocalImage = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80";
const financeImage = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1511&q=80";
const weatherImage = "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: 'PropLocal',
      description: 'A platform for buying and selling plots with verified registry data (MERN Stack).',
      tags: ['React', 'Node.js', 'MongoDB', 'Redux'],
      link: '#',
      image: proplocalImage
    },
    {
      title: 'Finance Tracker',
      description: 'Helps manage personal expenses, featuring charts and authentication.',
      tags: ['React', 'Firebase', 'Chart.js'],
      link: '#',
      image: financeImage
    },
    {
      title: 'Weather App',
      description: 'Real-time weather forecasts using OpenWeather API & React Hooks.',
      tags: ['React', 'API Integration', 'Geolocation'],
      link: '#',
      image: weatherImage
    },
  ];

  const skills = [
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'JavaScript', level: 95 },
    { name: 'MongoDB', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Git', level: 85 },
    { name: 'Java', level: 55 },
  ];

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setFormStatus('submitting');
    
  //   try {
  //     // Simulate API call
  //     await new Promise(resolve => setTimeout(resolve, 1500));
      
  //     // In a real app, you would send the data to your backend
  //     // await axios.post('/api/contact', formData);
      
  //     setFormStatus('success');
  //     setFormData({ name: '', email: '', message: '' });
      
  //     // Reset form status after 3 seconds
  //     setTimeout(() => setFormStatus('idle'), 3000);
  //   } catch (error) {
  //     setFormStatus('error');
  //     setTimeout(() => setFormStatus('idle'), 3000);
  //   }
  // };

  // updated for working email
  const handleSubmit = async (e) => {
  e.preventDefault();
  setFormStatus('submitting');

  try {
    await emailjs.sendForm(
      'service_3x5ypzh',    // Replace with your actual service ID
      'template_80o4ab8',   // Replace with your template ID
      e.target,             // The form element
      'M7B4pqgTJWq8l3N0U'        // Replace with your EmailJS user ID
    );
    
    setFormStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    // Optional: Reset form status after 5 seconds
    setTimeout(() => setFormStatus('idle'), 5000);
  } catch (error) {
    console.error('Failed to send message:', error);
    setFormStatus('error');
    setTimeout(() => setFormStatus('idle'), 5000);
  }
};

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="transition-all duration-300 dark:bg-gray-900 bg-[#f8fafc] dark:text-white text-gray-900 font-sans min-h-screen overflow-x-hidden">
        {/* Floating theme toggle */}
        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-indigo-600 text-white shadow-lg flex items-center justify-center hover:bg-indigo-700 transition-all hover:scale-110"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
        </button>

        {/* Navbar */}
        <header className="fixed w-full z-40 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Shahzaman Shamsi
            </h3>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {['home', 'about', 'skills', 'services', 'projects', 'contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item}`}
                  className={`relative px-2 py-1 text-sm font-medium transition-all ${activeSection === item ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  {activeSection === item && (
                    <span className="absolute left-0 top-full h-0.5 w-full bg-indigo-600 dark:bg-indigo-400 transition-all duration-300"></span>
                  )}
                </a>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-600 dark:text-gray-400 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-lg py-4 px-6">
              <nav className="flex flex-col space-y-4">
                {['home', 'about', 'skills', 'services', 'projects', 'contact'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item}`}
                    className={`px-3 py-2 rounded-md text-base font-medium ${activeSection === item ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                    onClick={closeMobileMenu}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </header>

        {/* Hero */}
        {/* <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-indigo-900/20 opacity-80"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="transition-opacity duration-500">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Shahzaman Shamsi</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-8">
                MERN Stack Developer & AI Enthusiast
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/documents/resume.pdf"
                  download
                  className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-full font-medium shadow-lg hover:bg-indigo-700 transition-all hover:scale-105"
                >
                  <FaDownload className="mr-2" /> Download Resume
                </a>
                <a
                  href="#contact"
                  className="flex items-center px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-full font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all hover:scale-105"
                >
                  Contact Me <FiArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section> */}
<section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16 relative overflow-hidden">
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-indigo-900/20 opacity-80"></div>
  </div>
  
  <div className="max-w-4xl mx-auto text-center relative z-10">
    <div className="transition-opacity duration-500">
      {/* REPLACE THIS SECTION */}
   <h1 className="text-[42px] sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
  <span
    className="
      bg-gradient-to-r
      from-indigo-500
      via-purple-500
      to-pink-500
      bg-clip-text
      text-transparent
      bg-[length:200%_200%]
      animate-gradient-pan
      inline-block
      animate-float-tilt
      will-change-transform
      whitespace-nowrap
    "
  >
    Shahzaman Shamsi
  </span>
</h1>
      {/* KEEP YOUR EXISTING SUBHEADING AND BUTTONS */}
      <h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-8">
        MERN Stack Developer & AI Enthusiast
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="/documents/resume.pdf"
          download
          className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-full font-medium shadow-lg hover:bg-indigo-700 transition-all hover:scale-105"
        >
          <FaDownload className="mr-2" /> Download Resume
        </a>
        <a
          href="#contact"
          className="flex items-center px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-full font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all hover:scale-105"
        >
          Contact Me <FiArrowRight className="ml-2" />
        </a>
      </div>
    </div>
  </div>
</section>
        

        {/* About */}
        <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 transition-opacity duration-500">
              <div className="relative rounded-2xl overflow-hidden shadow-lg w-[300px] h-[300px] mx-auto md:mx-0 bg-gray-100 dark:bg-gray-800">
  <img 
    src={profileImage} 
    alt="Shahzaman Shamsi" 
    className="w-full h-full object-contain"
  />
</div>
            </div>
            
            <div className="md:w-1/2 transition-opacity duration-500">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">About Me</h2>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                I'm a passionate full-stack developer specializing in the MERN stack with 3+ years of experience building scalable web applications. My expertise lies in creating seamless user experiences with modern React architectures while ensuring robust backend functionality.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                Beyond coding, I'm deeply interested in the intersection of AI/ML and web development, constantly exploring ways to integrate intelligent features into applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 px-4 py-2 rounded-full text-sm font-medium text-indigo-700 dark:text-indigo-300">
                  MERN Stack
                </div>
                <div className="bg-indigo-100 dark:bg-indigo-900/30 px-4 py-2 rounded-full text-sm font-medium text-indigo-700 dark:text-indigo-300">
                  Responsive Design
                </div>
                <div className="bg-indigo-100 dark:bg-indigo-900/30 px-4 py-2 rounded-full text-sm font-medium text-indigo-700 dark:text-indigo-300">
                  AI Integration
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">My Skills</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
              Technologies I've worked with and my proficiency in each
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium text-gray-800 dark:text-white">{skill.name}</h3>
                  <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2.5 rounded-full transition-all duration-1000" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Professional Services
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
              Tailored solutions to transform your digital presence and business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Custom Web Development */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 p-8 border border-gray-100 dark:border-gray-700">
              <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                <img src={webDevImage} alt="Web Development" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Custom Web Development</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Bespoke websites built for performance, scalability, and your unique business needs.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Responsive, mobile-first design
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  SEO-optimized architecture
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  CMS integration
                </li>
              </ul>
            </div>

            {/* Full-Stack Applications */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 p-8 border border-gray-100 dark:border-gray-700">
              <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                <img src={fullstackImage} alt="Full Stack Development" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Full-Stack Applications</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                End-to-end web applications with modern architectures and robust APIs.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  MERN stack solutions
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  RESTful & GraphQL APIs
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Real-time functionality
                </li>
              </ul>
            </div>

            {/* Ongoing Support */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 p-8 border border-gray-100 dark:border-gray-700">
              <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                <img src={supportImage} alt="Ongoing Support" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Ongoing Support</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Long-term maintenance to keep your digital assets performing at their peak.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Performance optimization
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Security updates
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Feature enhancements
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Let's Build Something Great
              <FiArrowRight className="ml-2" />
            </a>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">Featured Projects</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
              Some of my recent work that I'm particularly proud of
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-indigo-600 transition-colors"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-6 max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">Get In Touch</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="transition-opacity duration-500">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-500 dark:text-gray-400">Email</h4>
                    <a href="mailto:shahzaman@example.com" className="text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      shamsitechservices@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-500 dark:text-gray-400">Phone</h4>
                    <a href="tel:+917761846646" className="text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      +91 7761846646
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                    <FaLinkedin className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-500 dark:text-gray-400">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/shahzaman-shamsi-532675250/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                    Shahzaman Shamsi
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <form
              onSubmit={handleSubmit}
              className="space-y-6 transition-opacity duration-500"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows="4" 
                  value={formData.message}
                  onChange={handleInputChange}
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                ></textarea>
              </div>
              
              <button
                type="submit" 
                disabled={formStatus === 'submitting'}
                className={`w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-95 ${formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {formStatus === 'submitting' ? (
                  'Sending...'
                ) : formStatus === 'success' ? (
                  'Message Sent!'
                ) : formStatus === 'error' ? (
                  'Error - Try Again'
                ) : (
                  'Send Message'
                )}
              </button>
              {formStatus === 'success' && (
                <div className="text-green-600 dark:text-green-400 text-sm text-center">
                  Thank you! I'll get back to you soon.
                </div>
              )}
              {formStatus === 'error' && (
                <div className="text-red-600 dark:text-red-400 text-sm text-center">
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Shahzaman Shamsi</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Full Stack Developer & AI Enthusiast</p>
              </div>
              
              <div className="flex space-x-6">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-xl"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://www.linkedin.com/in/shahzaman-shamsi-532675250/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-xl"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="shamsitechservices@gmail.com" 
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-xl"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800 text-center text-gray-500 dark:text-gray-500 text-sm">
              <p>&copy; {new Date().getFullYear()} Shahzaman Shamsi. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}