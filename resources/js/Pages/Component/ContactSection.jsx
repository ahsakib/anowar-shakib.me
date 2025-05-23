import React from "react";
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-[#0a1120]/50 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse-slow animation-delay-1000"></div>

      {/* Animated geometric shapes */}
      <div className="absolute top-20 right-40 w-20 h-20 border border-green-500/10 transform rotate-45 animate-float animation-delay-1000"></div>
      <div className="absolute bottom-20 left-40 w-16 h-16 border border-blue-500/10 rounded-full animate-float animation-delay-1500"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h3 className="text-sm text-gray-400 mb-2 animate-slideUp">CONTACT</h3>
          <h2 className="text-3xl font-bold mb-4 animate-slideUp animation-delay-500">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto animate-fadeIn animation-delay-1000">
            I'm always open to new opportunities and collaborations. Feel free to reach out if you have a project in
            mind or just want to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="animate-fadeIn animation-delay-1000">
            <div className="card-glass p-8 rounded-xl border border-green-500/10 h-full">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-500"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </span>
                Contact Information
              </h3>
              <p className="text-gray-300 mb-8">
                Feel free to reach out to me through any of the following methods. I'm always excited to connect with
                new people and discuss potential collaborations.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-4 group hover-lift p-3 rounded-lg transition-all duration-300 hover:bg-green-500/5">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500/20 transition-all duration-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href="tel:+8801824630876" className="text-gray-200 hover:text-green-500 transition-colors">
                      +8801824630876
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group hover-lift p-3 rounded-lg transition-all duration-300 hover:bg-green-500/5">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500/20 transition-all duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a
                      href="mailto:ahshakib572@gmail.com"
                      className="text-gray-200 hover:text-green-500 transition-colors"
                    >
                      ahshakib572@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group hover-lift p-3 rounded-lg transition-all duration-300 hover:bg-green-500/5">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500/20 transition-all duration-300">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Address</p>
                    <p className="text-gray-200">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-gray-300 mb-4">Find me on</h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#0a1120] border border-green-500/20 flex items-center justify-center text-gray-400 hover:text-green-500 hover:border-green-500/50 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#0a1120] border border-green-500/20 flex items-center justify-center text-gray-400 hover:text-green-500 hover:border-green-500/50 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#0a1120] border border-green-500/20 flex items-center justify-center text-gray-400 hover:text-green-500 hover:border-green-500/50 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fadeIn animation-delay-1500">
            <div className="card-glass p-8 rounded-xl border border-green-500/10">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-500"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </span>
                Send Me a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="w-full bg-[#0f1a2b]/70 border border-green-500/10 focus:border-green-500 rounded-lg px-4 py-3 text-white transition-all duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full bg-[#0f1a2b]/70 border border-green-500/10 focus:border-green-500 rounded-lg px-4 py-3 text-white transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full bg-[#0f1a2b]/70 border border-green-500/10 focus:border-green-500 rounded-lg px-4 py-3 text-white transition-all duration-300"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    className="w-full bg-[#0f1a2b]/70 border border-green-500/10 focus:border-green-500 rounded-lg px-4 py-3 text-white min-h-[150px] transition-all duration-300"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-black w-full px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-glow"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}