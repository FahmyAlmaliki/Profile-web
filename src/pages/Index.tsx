
import React from 'react';
import { Instagram, Github, Linkedin, Mail, Zap } from 'lucide-react';

const Index = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/nickname_AI',
      color: 'hover:text-pink-400',
      glow: 'hover:shadow-pink-400/50'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/FahmyAlmaliki',
      color: 'hover:text-purple-400',
      glow: 'hover:shadow-purple-400/50'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/fahmy-almaliki-951b732a5/',
      color: 'hover:text-blue-400',
      glow: 'hover:shadow-blue-400/50'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:fahmy87arm@gmail.com',
      color: 'hover:text-yellow-400',
      glow: 'hover:shadow-yellow-400/50'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden relative">
      {/* Electric Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-32 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-40 right-40 w-1 h-1 bg-blue-300 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-yellow-500 rounded-full animate-pulse delay-700"></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        
        {/* Electric Border Effect */}
        <div className="absolute inset-4 border border-yellow-400/30 rounded-lg animate-pulse"></div>
        
        {/* Header Section */}
        <div className="text-center mb-12 relative">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="w-8 h-8 text-yellow-400 animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Hello!
            </h1>
            <Zap className="w-8 h-8 text-blue-400 animate-pulse delay-300" />
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-yellow-400 to-blue-400 mx-auto rounded-full shadow-lg shadow-yellow-400/50"></div>
        </div>

        {/* Profile Section */}
        <div className="text-center mb-16 max-w-2xl">
          {/* Profile Picture from Repository */}
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-blue-400 rounded-full p-1 shadow-2xl shadow-yellow-400/30">
              <img 
                src="https://raw.githubusercontent.com/FahmyAlmaliki/Profile-web/main/FAHMY.png" 
                alt="Fahmy Almaliki Dwi Aditya"
                className="w-full h-full rounded-full object-cover bg-gray-800"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) {
                    fallback.style.display = 'flex';
                  }
                }}
              />
              <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                <Zap className="w-16 h-16 text-yellow-400" />
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-500"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              I'm <span className="bg-gradient-to-r from-yellow-400 to-gray-400 bg-clip-text text-transparent">Fahmy</span> Almaliki Dwi Aditya
          </h2>

          <p className="text-xl text-gray-300 mb-4">⚡ Engineering Enthusiast ⚡</p>
          <p className="text-gray-400 leading-relaxed">
            I'm an engineering enthusiast who loves working with embedded systems, IoT, and machine learning.
          </p>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 ${link.color} ${link.glow} hover:shadow-2xl`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Electric border effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <IconComponent className="w-8 h-8 mb-3 transition-all duration-300 group-hover:scale-110" />
                  <span className="text-sm font-semibold tracking-wide">{link.name}</span>
                </div>

                {/* Spark effect on hover */}
                <div className="absolute top-2 right-2 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
              </a>
            );
          })}
        </div>

        {/* Electric Footer */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <Zap className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span>Thans for Visiting</span>
            <Zap className="w-4 h-4 text-blue-400 animate-pulse delay-300" />
          </div>
        </div>
      </div>

      {/* Electric Lines Animation */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse"></div>
      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-pulse delay-700"></div>
    </div>
  );
};

export default Index;
