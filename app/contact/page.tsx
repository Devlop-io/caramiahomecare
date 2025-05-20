"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar, 
  Send,
  MessageSquare,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export default function ContactPage() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [infoRef, infoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [faqRef, faqInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredContact: "email",
    serviceType: "",
    message: "",
    preferredTime: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to the database
    alert("Thank you for your message! We'll be in touch shortly to schedule your free consultation.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      preferredContact: "email",
      serviceType: "",
      message: "",
      preferredTime: "",
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-muted">
        <div className="container-custom">
          <motion.div
            ref={headerRef}
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6 text-primary-dark dark:text-primary-light">
              Let's Begin a Conversation That Feels Like Home
            </h1>
            <p className="text-xl text-foreground-80 mb-8">
              We're here to answer your questions and guide you through the process of finding the perfect care solution for your loved one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white dark:bg-background" ref={formRef}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Schedule a Free Consultation</h2>
              <p className="text-foreground-80 mb-6">
                Fill out the form below to schedule a free, no-obligation consultation with one of our care coordinators. We'll discuss your needs, answer your questions, and help you determine if our services are the right fit for your family.
              </p>

              <div className="bg-muted p-6 rounded-lg mb-8">
                <h3 className="text-xl font-serif font-medium mb-4 text-primary-dark dark:text-primary-light">What to Expect</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary-10 p-1 rounded-full flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-foreground-70">A friendly, no-pressure conversation about your care needs</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary-10 p-1 rounded-full flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-foreground-70">Information about our services and approach to care</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary-10 p-1 rounded-full flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-foreground-70">Answers to your questions about home care options</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary-10 p-1 rounded-full flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-foreground-70">Guidance on next steps, with no obligation to proceed</p>
                  </li>
                </ul>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://img.freepik.com/free-photo/senior-woman-talking-with-her-caregiver_23-2149019415.jpg"
                    alt="Care consultation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-10 rounded-full -z-10" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary-20 rounded-full -z-10" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="card">
                <h3 className="text-xl font-serif font-medium mb-6 text-primary-dark dark:text-primary-light">Contact Form</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Preferred Contact Method</label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === "email"}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        Email
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === "phone"}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        Phone
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium mb-1">Service of Interest</label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Daily Living Support">Daily Living Support</option>
                      <option value="Instrumental Activities">Instrumental Activities</option>
                      <option value="Specialized Care">Specialized Care</option>
                      <option value="Not Sure">Not Sure / Need Guidance</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium mb-1">Preferred Consultation Time</label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a time</option>
                      <option value="Morning">Morning (9am - 12pm)</option>
                      <option value="Afternoon">Afternoon (12pm - 4pm)</option>
                      <option value="Evening">Evening (4pm - 6pm)</option>
                      <option value="Flexible">Flexible / Any Time</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Please share any specific questions or concerns you have about care for your loved one."
                      className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                  </div>
                  
                  <div className="pt-2">
                    <button type="submit" className="btn-primary w-full">
                      <Calendar className="h-5 w-5 mr-2" />
                      Schedule My Free Consultation
                    </button>
                  </div>
                </div>
                
                <p className="text-xs text-foreground-60 mt-4">
                  By submitting this form, you agree to be contacted regarding your care inquiry. We respect your privacy and will never share your information with third parties.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-muted" ref={infoRef}>
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={infoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-description">
              We're available to answer your questions and provide support in multiple ways.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Method 1 */}
            <motion.div
              className="card text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={infoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-primary-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary-20 transition-colors">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-primary-dark dark:text-primary-light">Call Us</h3>
              <p className="text-foreground-70 mb-6">
                Speak directly with a care coordinator who can answer your questions.
              </p>
              <a 
                href="tel:5551234567" 
                className="btn-primary w-full"
              >
                (555) 123-4567
              </a>
            </motion.div>

            {/* Contact Method 2 */}
            <motion.div
              className="card text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={infoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-primary-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary-20 transition-colors">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-primary-dark dark:text-primary-light">Email Us</h3>
              <p className="text-foreground-70 mb-6">
                Send us a message and we'll respond within 24 hours.
              </p>
              <a 
                href="mailto:info@caramiahomecare.com" 
                className="btn-primary w-full"
              >
                info@caramiahomecare.com
              </a>
            </motion.div>

            {/* Contact Method 3 */}
            <motion.div
              className="card text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={infoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-primary-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary-20 transition-colors">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-primary-dark dark:text-primary-light">Live Chat</h3>
              <p className="text-foreground-70 mb-6">
                Chat with a care coordinator during business hours.
              </p>
              <button className="btn-primary w-full">
                Start Chat
              </button>
            </motion.div>
          </div>

          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={infoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {/* Office Information */}
            <div className="card">
              <h3 className="text-xl font-serif font-medium mb-4 text-primary-dark dark:text-primary-light">Office Information</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-foreground-70">
                      123 Compassion Way<br />
                      Suite 100<br />
                      Heartfelt, CA 90210
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Office Hours</p>
                    <p className="text-foreground-70">
                      Monday - Friday: 8am - 6pm<br />
                      Saturday: 9am - 3pm<br />
                      Sunday: Closed
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Service Area */}
            <div className="card">
              <h3 className="text-xl font-serif font-medium mb-4 text-primary-dark dark:text-primary-light">Service Area</h3>
              <p className="text-foreground-70 mb-4">
                We provide care services throughout the greater metropolitan area and surrounding communities, including:
              </p>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-primary-10 px-3 py-2 rounded-md text-primary text-sm">Heartfelt</div>
                <div className="bg-primary-10 px-3 py-2 rounded-md text-primary text-sm">Compassion Hills</div>
                <div className="bg-primary-10 px-3 py-2 rounded-md text-primary text-sm">Gentle Valley</div>
                <div className="bg-primary-10 px-3 py-2 rounded-md text-primary text-sm">Serenity Heights</div>
                <div className="bg-primary-10 px-3 py-2 rounded-md text-primary text-sm">Harmony Grove</div>
                <div className="bg-primary-10 px-3 py-2 rounded-md text-primary text-sm">Kindness Park</div>
              </div>
              <p className="text-sm text-foreground-70 mt-4">
                Not sure if we serve your area? Contact us to find out!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-background" ref={faqRef}>
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-description">
              Find answers to common questions about contacting us and getting started with care.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* FAQ Item 1 */}
              <div className="card">
                <h3 className="text-xl font-medium mb-3 text-primary-dark dark:text-primary-light">How quickly can you start providing care?</h3>
                <p className="text-foreground-80">
                  In most cases, we can begin care within 48-72 hours of your initial assessment. For urgent situations, we can often expedite the process. We'll work with you to establish a timeline that meets your needs.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="card">
                <h3 className="text-xl font-medium mb-3 text-primary-dark dark:text-primary-light">Is there a minimum number of hours required?</h3>
                <p className="text-foreground-80">
                  We typically have a minimum of 4 hours per visit, but we're flexible and can discuss your specific situation. We offer services ranging from a few hours a week to 24/7 care, depending on your needs.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="card">
                <h3 className="text-xl font-medium mb-3 text-primary-dark dark:text-primary-light">What happens during the free consultation?</h3>
                <p className="text-foreground-80">
                  During the consultation, we'll discuss your care needs, answer your questions, and explain our services and approach. This is a no-obligation conversation to help you determine if our services are the right fit for your family.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div className="card">
                <h3 className="text-xl font-medium mb-3 text-primary-dark dark:text-primary-light">Do you accept insurance or long-term care insurance?</h3>
                <p className="text-foreground-80">
                  While we don't directly bill health insurance, we can work with long-term care insurance policies. We'll help you understand your coverage and provide the documentation needed for reimbursement claims.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted">
        <div className="container-custom">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Find Us</h2>
          </motion.div>

          <div className="rounded-lg overflow-hidden shadow-lg h-[400px] relative">
            {/* Placeholder for map - in a real implementation, this would be an actual map */}
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Map Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
              Ready to Take the First Step?
            </h2>
            <p className="text-xl text-white-90 mb-8">
              Contact us today to schedule your free consultation and discover how we can support your loved one with compassionate care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:5551234567" className="btn-secondary">
                <Phone className="h-5 w-5 mr-2" />
                Call (555) 123-4567
              </a>
              <Link href="#" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="btn-outline border-white text-white hover:bg-white-20">
                Complete Contact Form <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}