import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function ContactPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-orange-500">Contact Us</h1>
      <div className="mb-4 flex items-center">
        <Phone className="w-6 h-6 mr-2 text-orange-500" />
        <span className="text-lg">Phone: <a href="tel:+1234567890" className="text-orange-500">+1 (234) 567-890</a></span>
      </div>
      <div className="mb-4 flex items-center">
        <Mail className="w-6 h-6 mr-2 text-orange-500" />
        <span className="text-lg">Email: <a href="mailto:contact@bahu.com" className="text-orange-500">contact@bahu.com</a></span>
      </div>
      <div className="mb-4 flex items-center">
        <MapPin className="w-6 h-6 mr-2 text-orange-500" />
        <span className="text-lg">Address: <span className="text-orange-500">1234 Example St, City, Country</span></span>
      </div>
    </div>
  );
}

export default ContactPage;
