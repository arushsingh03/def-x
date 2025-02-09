import React from "react";
import { Phone, Mail, MapPin, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const socialIcons = [
    { icon: Github, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  const quickLinks = ["About Us", "Services", "Blog", "Contact"];

  const contactInfo = [
    { icon: Phone, text: "+971 54 642 9475" },
    { icon: Mail, text: "contact@def-x.org" },
    { icon: MapPin, text: "Bldg A1, Dubai Digital Park, UAE" },
  ];

  return (
    <footer className="relative bg-slate-950 py-24">
      <div className="absolute inset-0 bg-grid-white/10 bg-grid-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950" />

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E2CBFF] to-[#393BB2]">
              Def-X
            </span>
            <span className="text-white"> Cyber Labs</span>
          </h2>
          <p className="text-gray-400 mb-6">
            Combining innovation, intelligence, and expertise to provide UAE
            businesses with 360-degree cybersecurity solutions.
          </p>
          <div className="flex space-x-4">
            {socialIcons.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-400 hover:text-[#E2CBFF] transition-colors duration-300"
              >
                <item.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
          <ul className="space-y-4">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#E2CBFF] transition-colors flex items-center"
                >
                  <span className="w-1 h-1 bg-[#E2CBFF] rounded-full mr-2"></span>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-6">
            Contact Info
          </h3>
          <ul className="space-y-4">
            {contactInfo.map((item, index) => (
              <li key={index} className="flex items-center text-gray-400">
                <div className="relative inline-flex overflow-hidden rounded-xl p-[2px] mr-3">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-xl bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    <item.icon className="w-5 h-5 text-[#E2CBFF]" />
                  </span>
                </div>
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-6">Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Stay updated with the latest cybersecurity insights and news.
          </p>
          <div className="space-y-4">
            <div className="relative inline-flex w-full overflow-hidden rounded-full p-[2px]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <input
                type="email"
                placeholder="Your email"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl"
              />
            </div>
            <button className="relative inline-flex w-full h-12 overflow-hidden rounded-full p-[2px] focus:outline-none">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Subscribe
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
