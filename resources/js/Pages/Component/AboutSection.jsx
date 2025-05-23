import React, { useState } from "react";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-green-500/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"></div>

      {/* Floating particles specific to this section */}
      <div className="particles-container absolute inset-0 z-0 overflow-hidden">
        {[...Array(15)].map((_, index) => (
          <div
            key={`about-particle-${index}`}
            className="particle absolute rounded-full bg-green-500/10"
            style={{
              width: `${Math.random() * 8 + 3}px`,
              height: `${Math.random() * 8 + 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 15}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image with animated border */}
          <div className="w-full md:w-5/12 relative group">
            <div className="relative w-full max-w-md mx-auto aspect-square overflow-hidden rounded-2xl border-2 border-green-500/20 p-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/10 rounded-2xl transform group-hover:scale-105 transition-all duration-700"></div>
              <img
                src="/images/profile.jpg"
                alt="Anowar Shakib"
                className="rounded-xl object-cover w-full h-full relative z-10 transform group-hover:scale-[1.02] transition-all duration-700"
              />

              {/* Animated corner accents */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-green-500 rounded-tl-lg z-20"></div>
              <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-green-500 rounded-tr-lg z-20"></div>
              <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-green-500 rounded-bl-lg z-20"></div>
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-green-500 rounded-br-lg z-20"></div>

              {/* Floating badges */}
              <div className="absolute -top-3 -right-3 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-glow z-30 animate-float">
                Laravel
              </div>
              <div className="absolute -bottom-3 -left-3 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-glow z-30 animate-float animation-delay-1000">
                React
              </div>
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-6 right-1/4 bg-[#0f1a2b] border border-green-500/20 rounded-xl px-4 py-3 shadow-xl z-30 transform rotate-3 hover:rotate-0 transition-all duration-300">
              <div className="text-center">
                <span className="block text-3xl font-bold text-green-500">2+</span>
                <span className="text-xs text-gray-400">Years Experience</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-7/12">
            <h3 className="text-sm text-gray-400 mb-2 animate-slideUp">ABOUT ME</h3>
            <h2 className="text-3xl font-bold mb-6 animate-slideUp animation-delay-500">
              Junior Laravel & React Developer
            </h2>

            {/* Tab navigation */}
            <div className="flex mb-6 border-b border-green-500/20">
              <button
                className={`px-4 py-2 relative ${activeTab === "about" ? "text-green-500" : "text-gray-400"}`}
                onClick={() => setActiveTab("about")}
              >
                About Me
                {activeTab === "about" && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"></span>}
              </button>
              <button
                className={`px-4 py-2 relative ${activeTab === "education" ? "text-green-500" : "text-gray-400"}`}
                onClick={() => setActiveTab("education")}
              >
                Education
                {activeTab === "education" && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"></span>
                )}
              </button>
              <button
                className={`px-4 py-2 relative ${activeTab === "experience" ? "text-green-500" : "text-gray-400"}`}
                onClick={() => setActiveTab("experience")}
              >
                Experience
                {activeTab === "experience" && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"></span>
                )}
              </button>
            </div>

            {/* Tab content */}
            <div className="min-h-[200px]">
              {activeTab === "about" && (
                <div className="animate-fadeIn">
                  <p className="text-gray-300 mb-4">
                    I'm a passionate Junior Laravel & React Developer with 2+ years of experience building web
                    applications. I specialize in creating responsive, user-friendly interfaces and robust backend
                    systems.
                  </p>
                  <p className="text-gray-300 mb-6">
                    My goal is to craft clean, efficient code that solves real-world problems. I'm constantly learning
                    new technologies and techniques to improve my skills and deliver better solutions.
                  </p>

                  {/* Personal info grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span className="text-gray-400">Name:</span>
                      <span className="text-white ml-2">Anowar Shakib</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span className="text-gray-400">Phone:</span>
                      <span className="text-white ml-2">+8801824630876</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span className="text-gray-400">Email:</span>
                      <span className="text-white ml-2">ahshakib572@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span className="text-gray-400">Location:</span>
                      <span className="text-white ml-2">Dhaka, Bangladesh</span>
                    </div>
                  </div>

                  <button className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-glow flex items-center gap-2">
                    Download CV
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
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                  </button>
                </div>
              )}

              {activeTab === "education" && (
                <div className="animate-fadeIn">
                  <div className="relative pl-8 pb-6 border-l border-green-500/30">
                    <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-green-500 -translate-x-1/2 shadow-glow"></div>
                    <div className="mb-1">
                      <span className="text-xs text-green-500 font-semibold bg-green-500/10 px-2 py-1 rounded">
                        2018 - 2022
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-1">BSc in Computer Science & Engineering</h4>
                    <p className="text-gray-400">Daffodil International University</p>
                    <p className="text-gray-300 mt-2">
                      Completed my bachelor's degree with a focus on web development and software engineering.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l border-green-500/30">
                    <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-green-500 -translate-x-1/2 shadow-glow"></div>
                    <div className="mb-1">
                      <span className="text-xs text-green-500 font-semibold bg-green-500/10 px-2 py-1 rounded">
                        2015 - 2017
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-1">Higher Secondary Certificate</h4>
                    <p className="text-gray-400">Govt. Shaheed Bulbul College</p>
                    <p className="text-gray-300 mt-2">
                      Completed HSC with Science background and excellent academic performance.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "experience" && (
                <div className="animate-fadeIn">
                  <div className="relative pl-8 pb-6 border-l border-green-500/30">
                    <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-green-500 -translate-x-1/2 shadow-glow"></div>
                    <div className="mb-1">
                      <span className="text-xs text-green-500 font-semibold bg-green-500/10 px-2 py-1 rounded">
                        2022 - Present
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-1">Junior Laravel & React Developer</h4>
                    <p className="text-gray-400">Droptienda Ltd.</p>
                    <p className="text-gray-300 mt-2">
                      Working on e-commerce platforms and CMS solutions using Laravel, React, and related technologies.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l border-green-500/30">
                    <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-green-500 -translate-x-1/2 shadow-glow"></div>
                    <div className="mb-1">
                      <span className="text-xs text-green-500 font-semibold bg-green-500/10 px-2 py-1 rounded">
                        2021 - 2022
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-1">Web Development Intern</h4>
                    <p className="text-gray-400">Tech Solutions Inc.</p>
                    <p className="text-gray-300 mt-2">
                      Assisted in developing web applications using PHP, Laravel, and front-end technologies.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}