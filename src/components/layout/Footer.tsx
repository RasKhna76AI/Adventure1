import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mountain className="w-8 h-8 text-green-500" />
              <span className="text-xl font-bold">AdventureBuddy</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your gateway to extraordinary adventures. We create unforgettable experiences 
              in the world's most breathtaking destinations.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/destinations" className="text-gray-400 hover:text-white transition-colors">Destinations</Link></li>
              <li><Link to="/activities" className="text-gray-400 hover:text-white transition-colors">Activities</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Adventures */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Adventures</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/activities/trekking" className="text-gray-400 hover:text-white transition-colors">Trekking</Link></li>
              <li><Link to="/activities/river-rafting" className="text-gray-400 hover:text-white transition-colors">River Rafting</Link></li>
              <li><Link to="/activities/paragliding" className="text-gray-400 hover:text-white transition-colors">Paragliding</Link></li>
              <li><Link to="/activities/skiing" className="text-gray-400 hover:text-white transition-colors">Skiing</Link></li>
              <li><Link to="/activities/scuba-diving" className="text-gray-400 hover:text-white transition-colors">Scuba Diving</Link></li>
              <li><Link to="/activities/desert-safari" className="text-gray-400 hover:text-white transition-colors">Desert Safari</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-400">hello@adventurebuddy.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-400">+91 98123 12345</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Adventure Hub, Manali<br />
                  Himachal Pradesh, India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 AdventureBuddy. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 hover:text-white cursor-pointer text-sm transition-colors">Privacy Policy</span>
              <span className="text-gray-400 hover:text-white cursor-pointer text-sm transition-colors">Terms of Service</span>
              <span className="text-gray-400 hover:text-white cursor-pointer text-sm transition-colors">Cookie Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;