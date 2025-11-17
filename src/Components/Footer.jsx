import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-footer text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h4 className="text-xl font-heading font-bold mb-4">About Us</h4>
            <p className="text-gray-300 text-sm">
              Leading provider of solar energy solutions for residential and commercial customers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-heading font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">Products</a></li>
              <li><a href="#" className="hover:text-white transition">Services</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-heading font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition">Installation</a></li>
              <li><a href="#" className="hover:text-white transition">Maintenance</a></li>
              <li><a href="#" className="hover:text-white transition">Consultation</a></li>
              <li><a href="#" className="hover:text-white transition">Support</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-xl font-heading font-bold mb-4">Connect With Us</h4>
            <p className="text-gray-300 text-sm mb-4">
              📧 info@solarsupplier.com<br/>
              📞 +1 (800) 123-4567
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-2xl hover:text-secondary transition"><FaFacebook /></a>
              <a href="#" className="text-2xl hover:text-secondary transition"><FaTwitter /></a>
              <a href="#" className="text-2xl hover:text-secondary transition"><FaLinkedin /></a>
              <a href="#" className="text-2xl hover:text-secondary transition"><FaInstagram /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2025 Solar Supplier. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
