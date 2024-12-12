import React from 'react';
import { motion } from 'framer-motion';
import { Star, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative mt-32">
      {/* Curved separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-24"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-black"
          />
        </svg>
      </div>

      <div className="bg-gray-900 pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Star className="w-7 h-7 text-purple-500" />
                <span className="text-white text-2xl font-bold tracking-tight">
                  Tunga<span className="text-purple-500">Web</span>
                </span>
              </div>
              <p className="text-gray-400">
                Transforming ideas into stunning digital experiences through innovative web development.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Portfolio</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-6">Services</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Web Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">E-commerce</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Maintenance</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="text-gray-400">123 Web Street</li>
                <li className="text-gray-400">Digital City, DC 12345</li>
                <li className="text-gray-400">contact@tungaweb.com</li>
                <li className="text-gray-400">+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} TungaWeb. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;