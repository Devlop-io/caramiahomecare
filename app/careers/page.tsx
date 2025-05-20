"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { 
  Heart, 
  Users, 
  Clock, 
  Star, 
  ArrowRight, 
  CheckCircle2, 
  Send,
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap
} from "lucide-react";

export default function CareersPage() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [cultureRef, cultureInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [benefitsRef, benefitsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [positionsRef, positionsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to the database
    alert("Thank you for your interest! We'll review your application and contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      message: "",
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
              Join Our Heart-Led Team
            </h1>
            <p className="text-xl text-foreground-80 mb-8">
              Make a meaningful difference in the lives of others while building a rewarding career with a company that values compassion, growth, and work-life balance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Culture Section */}
      <section className="py-20 bg-white dark:bg-background" ref={cultureRef}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={cultureInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Our Caregiver Culture</h2>
              <p className="text-foreground-80 mb-6">
                At Cara Mia Companions, we believe that exceptional care begins with exceptional caregivers. We're committed to creating a supportive, nurturing environment where our team members can thrive professionally and personally.
              </p>
              <p className="text-foreground-80 mb-6">
                Our caregivers are the heart of our organization, and we invest in their wellbeing, professional development, and job satisfaction. When you join our team, you become part of a compassionate community dedicated to making a meaningful difference.
              </p>

              <div className="space-y-4 mt-8">
                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={cultureInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="bg-primary-10 p-2 rounded-full flex-shrink-0">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Compassion-First Philosophy</h3>
                    <p className="text-sm text-foreground-70">
                      We prioritize genuine care and emotional connection in everything we do.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={cultureInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <div className="bg-primary-10 p-2 rounded-full flex-shrink-0">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Supportive Team Environment</h3>
                    <p className="text-sm text-foreground-70">
                      You're never alone—our care coordinators and leadership team provide ongoing support.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={cultureInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <div className="bg-primary-10 p-2 rounded-full flex-shrink-0">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Continuous Learning</h3>
                    <p className="text-sm text-foreground-70">
                      We invest in your growth through ongoing training and professional development opportunities.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={cultureInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <div className="bg-primary-10 p-2 rounded-full flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Work-Life Balance</h3>
                    <p className="text-sm text-foreground-70">
                      We offer flexible scheduling options to accommodate your personal life and commitments.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={cultureInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://img.freepik.com/free-photo/nurse-talking-with-senior-woman-nursing-home_23-2148266477.jpg"
                    alt="Caregiver connecting with senior client"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-10 rounded-full -z-10" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary-20 rounded-full -z-10" />
              </div>

              <div className="mt-12 bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-serif font-medium mb-4 text-primary-dark dark:text-primary-light">Caregiver Testimonial</h3>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="italic text-foreground-80 mb-4">
                  "Working with Cara Mia has been the most rewarding experience of my career. The support I receive from the team, the meaningful connections I make with clients, and the flexibility to maintain work-life balance make this more than just a job—it's a calling."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-20 rounded-full flex items-center justify-center text-primary font-bold mr-4">
                    JD
                  </div>
                  <div>
                    <p className="font-medium">Jennifer D.</p>
                    <p className="text-sm text-foreground-60">Caregiver, 3 years</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted" ref={benefitsRef}>
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Caregiver Benefits</h2>
            <p className="section-description">
              We value our caregivers and offer competitive benefits to support your professional and personal wellbeing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefits Column 1 */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="card group">
                <div className="bg-primary-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary-20 transition-colors">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-3 text-primary-dark dark:text-primary-light">Flexible Scheduling</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-70">Part-time and full-time positions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-70">Weekend and weekday options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-70">Consistent client assignments</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Benefits Column 2 */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="card group">
                <div className="bg-primary-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary-20 transition-colors">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-3 text-primary-dark dark:text-primary-light">Competitive Compensation</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-70">Above-industry pay rates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-70">Performance bonuses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-70">Paid training and certifications</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Benefits Column 3 */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="card group">
                <div className="bg-primary-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary-20 transition-colors">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-3 text-primary-dark dark:text-primary-light">Growth & Development</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-70">Career advancement opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-70">Specialized care training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-70">Mentorship program</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-white dark:bg-background" ref={positionsRef}>
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={positionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Current Opportunities</h2>
            <p className="section-description">
              We're looking for compassionate individuals to join our team in the following roles.
            </p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Position 1 */}
            <motion.div
              className="card group"
              initial={{ opacity: 0, y: 30 }}
              animate={positionsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-serif font-medium mb-2 text-primary-dark dark:text-primary-light">Companion Caregiver</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-primary-10 text-primary text-xs px-3 py-1 rounded-full">Full-Time</span>
                    <span className="bg-primary-10 text-primary text-xs px-3 py-1 rounded-full">Part-Time</span>
                    <span className="bg-primary-10 text-primary text-xs px-3 py-1 rounded-full">Flexible Hours</span>
                  </div>
                  <p className="text-foreground-70 mb-4">
                    Provide companionship, light housekeeping, meal preparation, medication reminders, and assistance with daily activities to help clients maintain independence and dignity in their homes.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-foreground-70">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Multiple Locations</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4 text-primary" />
                      <span>No Experience Required</span>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <button
                    onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-primary whitespace-nowrap"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Position 2 */}
            <motion.div
              className="card group"
              initial={{ opacity: 0, y: 30 }}
              animate={positionsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-serif font-medium mb-2 text-primary-dark dark:text-primary-light">Specialized Care Provider</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-primary-10 text-primary text-xs px-3 py-1 rounded-full">Full-Time</span>
                    <span className="bg-primary-10 text-primary text-xs px-3 py-1 rounded-full">Part-Time</span>
                    <span className="bg-primary-10 text-primary text-xs px-3 py-1 rounded-full">Experience Required</span>
                  </div>
                  <p className="text-foreground-70 mb-4">
                    Provide specialized care for clients with dementia, Parkinson's, or other conditions requiring additional training and expertise. Previous caregiving experience required.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-foreground-70">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Multiple Locations</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4 text-primary" />
                      <span>1+ Year Experience</span>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <button
                    onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-primary whitespace-nowrap"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Position 3 */}
            <motion.div
              className="card group"
              initial={{ opacity: 0, y: 30 }}
              animate={positionsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-serif font-medium mb-2 text-primary-dark dark:text-primary-light">Care Coordinator</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-primary-10 text-primary text-xs px-3 py-1 rounded-full">Full-Time</span>
                    <span className="bg-primary-10 text-primary text-xs px-3 py-1 rounded-full">Office-Based</span>
                    <span className="bg-primary-10 text-primary text-xs px-3 py-1 rounded-full">Experience Required</span>
                  </div>
                  <p className="text-foreground-70 mb-4">
                    Oversee client care plans, conduct assessments, match clients with caregivers, and provide ongoing support to both clients and care team members.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-foreground-70">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Main Office</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4 text-primary" />
                      <span>2+ Years Healthcare Experience</span>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <button
                    onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-primary whitespace-nowrap"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-20 bg-muted" ref={formRef}>
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Join Our Team</h2>
            <p className="section-description">
              Complete the form below to express your interest in joining Cara Mia Companions. We'll contact you to discuss the next steps in our hiring process.
            </p>
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
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
                  <label htmlFor="position" className="block text-sm font-medium mb-1">Position of Interest</label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Select a position</option>
                    <option value="Companion Caregiver">Companion Caregiver</option>
                    <option value="Specialized Care Provider">Specialized Care Provider</option>
                    <option value="Care Coordinator">Care Coordinator</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="experience" className="block text-sm font-medium mb-1">Relevant Experience</label>
                  <input
                    type="text"
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="e.g., 2 years as a home caregiver, CNA certification, etc."
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Why You'd Like to Join Our Team</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
              </div>
              
              <div className="flex justify-center">
                <button type="submit" className="btn-primary">
                  <Send className="h-5 w-5 mr-2" />
                  Submit Application
                </button>
              </div>
              
              <p className="text-xs text-foreground-60 mt-6 text-center">
                By submitting this form, you consent to Cara Mia Companions contacting you regarding employment opportunities. We respect your privacy and will not share your information with third parties.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
              Have Questions About Joining Our Team?
            </h2>
            <p className="text-xl text-white-90 mb-8">
              Contact our recruitment team directly to learn more about career opportunities at Cara Mia Companions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:5551234567" className="btn-secondary">
                Call (555) 123-4567
              </a>
              <a href="mailto:careers@caramiahomecare.com" className="btn-outline border-white text-white hover:bg-white-20">
                Email Careers Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}