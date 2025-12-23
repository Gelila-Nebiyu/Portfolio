import React, { useState } from 'react';
import { Send, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    
    // Simulate form submission or construct mailto
    const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    
    // Reset after delay
    setTimeout(() => {
        setStatus('idle');
        setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-primary font-mono text-lg">04. What's Next?</span>
        <h2 className="text-4xl md:text-5xl font-bold text-text mt-2 mb-4">Get In Touch</h2>
        <p className="text-text-light max-w-xl mx-auto">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is open!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-surface">
        {/* Contact Info */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-text">Let's talk about everything!</h3>
          <p className="text-text-light">
            Don't like forms? Send me an email directly.
          </p>
          
          <div className="space-y-4">
             <div className="flex items-center gap-4 text-text-light">
                <div className="w-10 h-10 rounded-full bg-surface-dark flex items-center justify-center text-primary">
                    <Mail size={20} />
                </div>
                <span>{PERSONAL_INFO.email}</span>
             </div>
             <div className="flex items-center gap-4 text-text-light">
                <div className="w-10 h-10 rounded-full bg-surface-dark flex items-center justify-center text-primary">
                    <MapPin size={20} />
                </div>
                <span>Available Remote & Worldwide</span>
             </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="name" className="text-sm font-medium text-text">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-surface border border-surface-dark focus:border-primary focus:ring-2 focus:ring-surface-dark outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-medium text-text">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-surface border border-surface-dark focus:border-primary focus:ring-2 focus:ring-surface-dark outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div className="space-y-1">
            <label htmlFor="subject" className="text-sm font-medium text-text">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-surface border border-surface-dark focus:border-primary focus:ring-2 focus:ring-surface-dark outline-none transition-all"
              placeholder="Project Inquiry"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="message" className="text-sm font-medium text-text">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-surface border border-surface-dark focus:border-primary focus:ring-2 focus:ring-surface-dark outline-none transition-all resize-none"
              placeholder="Hello, I'd like to talk about..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-primary text-white rounded-lg font-bold hover:bg-primary-hover transition-all flex items-center justify-center gap-2 shadow-lg shadow-surface-dark"
          >
            {status === 'success' ? 'Opening Email Client...' : 'Send Message'}
            <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;