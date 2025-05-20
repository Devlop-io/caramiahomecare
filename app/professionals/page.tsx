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
  Shield, 
  ArrowRight, 
  CheckCircle2, 
  Send,
  Download,
  FileText,
  Phone,
  Mail,
  MessageSquare
} from "lucide-react";

export default function ProfessionalsPage() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [partnersRef, partnersInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [referralRef, referralInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to the database
    alert("Thank you for your message! We'll be in touch shortly.");
    setFormData({
      name: "",
      organization: "",
      email: "",
      phone: "",
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
              Compassionate Care You Can Count On
            </h1>
            <p className="text-xl text-foreground-80 mb-8">
              Partner with Cara Mia Companions to provide your patients and clients with exceptional non-medical home care that supports their dignity, independence, and quality of life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white dark:bg-background" ref={partnersRef}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={partnersInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">For Healthcare Professionals</h2>
              <p className="text-foreground-80 mb-6">
                We understand the challenges you face in ensuring continuity of care for your patients after discharge or between appointments. Cara Mia Companions serves as your trusted partner in providing compassionate, reliable non-medical home care that complements your clinical services.
              </p>
              <p className="text-foreground-80 mb-6">
                Our team works closely with healthcare professionals to create seamless care transitions, provide regular updates, and support your patients' adherence to care plans and medication schedules.
              </p>

              <div className="space-y-4 mt-8">
                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={partnersInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="bg-primary-10 p-2 rounded-full flex-shrink-0">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Hospitals & Discharge Planners</h3>
                    <p className="text-sm text-foreground-70">
                      We help reduce readmissions by providing reliable post-discharge support and monitoring.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={partnersInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <div className="bg-primary-10 p-2 rounded-full flex-shrink-0">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Social Workers & Case Managers</h3>
                    <p className="text-sm text-foreground-70">
                      We provide detailed care documentation and regular updates to support your case management.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={partnersInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <div className="bg-primary-10 p-2 rounded-full flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Hospice & Palliative Care</h3>
                    <p className="text-sm text-foreground-70">
                      We offer specialized end-of-life comfort care that complements your clinical services.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={partnersInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <div className="bg-primary-10 p-2 rounded-full flex-shrink-0">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Physicians & Specialists</h3>
                    <p className="text-sm text-foreground-70">
                      We help patients follow treatment plans and provide transportation to medical appointments.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={partnersInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://img.freepik.com/free-photo/doctor-talking-with-senior-woman-nursing-home_23-2148266476.jpg"
                    alt="Healthcare professional with senior patient"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-10 rounded-full -z-10" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary-20 rounded-full -z-10" />
              </div>

              <div className="mt-12 bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-serif font-medium mb-4 text-primary-dark dark:text-primary-light">Professional Testimonial</h3>
                <p className="italic text-foreground-80 mb-4">
                  "As a discharge planner, I've worked with many home care agencies, but Cara Mia Companions stands out for their exceptional communication, reliability, and genuine compassion. They make transitions from hospital to home seamless, and I've seen firsthand how their care reduces readmissions and improves outcomes."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-20 rounded-full flex items-center justify-center text-primary font-bold mr-4">
                    JM
                  </div>
                  <div>
                    <p className="font-medium">Jennifer M., RN</p>
                    <p className="text-sm text-foreground-60">Hospital Discharge Coordinator</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted" ref={servicesRef}>
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Our Services for Your Patients</h2>
            <p className="section-description">
              Comprehensive non-medical home care that supports clinical outcomes and enhances quality of life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div
              className="card group"
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-primary-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary-20 transition-colors">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-primary-dark dark:text-primary-light">Personal Care Support</h3>
              <p className="text-foreground-70 mb-4">
                Assistance with activities of daily living that maintains dignity and promotes independence.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground-70">Bathing, grooming, and dressing assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground-70">Mobility and transfer assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground-70">Medication reminders</span>
                </li>
              </ul>
              <Link 
                href="/services#daily-living" 
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              className="card group"
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-primary-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary-20 transition-colors">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-primary-dark dark:text-primary-light">Recovery & Transition Care</h3>
              <p className="text-foreground-70 mb-4">
                Specialized support for patients transitioning from hospital to home or recovering from illness.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground-70">Post-discharge monitoring and support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground-70">Assistance with recovery exercises</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground-70">Transportation to follow-up appointments</span>
                </li>
              </ul>
              <Link 
                href="/services#specialized" 
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              className="card group"
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-primary-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary-20 transition-colors">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-primary-dark dark:text-primary-light">Specialized Care Services</h3>
              <p className="text-foreground-70 mb-4">
                Tailored care for clients with specific conditions requiring additional expertise.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground-70">Dementia and Alzheimer's care</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground-70">End-of-life comfort care</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground-70">Parkinson's and stroke recovery support</span>
                </li>
              </ul>
              <Link 
                href="/services#specialized" 
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Referral Process Section */}
      <section className="py-20 bg-white dark:bg-background" ref={referralRef}>
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={referralInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Simple Referral Process</h2>
            <p className="section-description">
              We make it easy to refer your patients to our services with a streamlined process designed for busy healthcare professionals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Step 1 */}
            <motion.div
              className="card text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={referralInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-primary-dark dark:text-primary-light">
                Submit Referral
              </h3>
              <p className="text-foreground-70">
                Complete our secure online referral form, email us, or call our dedicated professional line.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="card text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={referralInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-primary-dark dark:text-primary-light">
                Care Coordination
              </h3>
              <p className="text-foreground-70">
                We'll contact the patient/family within 24 hours to schedule an assessment and develop a care plan.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="card text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={referralInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-primary-dark dark:text-primary-light">
                Ongoing Communication
              </h3>
              <p className="text-foreground-70">
                We provide regular updates on your patient's care and alert you to any concerns or changes in condition.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="mt-16 max-w-4xl mx-auto bg-muted p-8 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={referralInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-xl font-serif font-medium mb-4 text-primary-dark dark:text-primary-light text-center">
              Referral Resources
            </h3>
            <p className="text-foreground-80 text-center mb-6">
              Access our downloadable referral kit and resources to streamline the referral process.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-border rounded-md bg-white dark:bg-background hover:bg-muted/50 dark:hover:bg-muted transition-colors">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-primary mr-3" />
                  <span>Professional Referral Form</span>
                </div>
                <button className="btn-outline py-1 px-3 text-sm">
                  <Download className="h-4 w-4 mr-1" /> Download
                </button>
              </div>
              <div className="flex items-center justify-between p-4 border border-border rounded-md bg-white dark:bg-background hover:bg-muted/50 dark:hover:bg-muted transition-colors">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-primary mr-3" />
                  <span>Services Overview for Professionals</span>
                </div>
                <button className="btn-outline py-1 px-3 text-sm">
                  <Download className="h-4 w-4 mr-1" /> Download
                </button>
              </div>
              <div className="flex items-center justify-between p-4 border border-border rounded-md bg-white dark:bg-background hover:bg-muted/50 dark:hover:bg-muted transition-colors">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-primary mr-3" />
                  <span>Patient Information Brochure</span>
                </div>
                <button className="btn-outline py-1 px-3 text-sm">
                  <Download className="h-4 w-4 mr-1" /> Download
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-muted" ref={formRef}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Contact Our Professional Relations Team</h2>
              <p className="text-foreground-80 mb-6">
                Have questions about our services or need assistance with a referral? Our dedicated professional relations team is here to help.
              </p>

              <div className="space-y-6 mt-8">
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={formInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="bg-primary-10 p-3 rounded-full flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Call Our Professional Line</h3>
                    <p className="text-foreground-70 mb-1">
                      Direct access to our professional relations team
                    </p>
                    <a href="tel:5551234567" className="text-primary font-medium hover:underline">
                      (555) 123-4567
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={formInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <div className="bg-primary-10 p-3 rounded-full flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <p className="text-foreground-70 mb-1">
                      Send referrals or inquiries directly to our team
                    </p>
                    <a href="mailto:referrals@caramiahomecare.com" className="text-primary font-medium hover:underline">
                      referrals@caramiahomecare.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={formInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <div className="bg-primary-10 p-3 rounded-full flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Secure Messaging</h3>
                    <p className="text-foreground-70 mb-1">
                      For HIPAA-compliant communication about patients
                    </p>
                    <a href="#" className="text-primary font-medium hover:underline">
                      Request secure messaging access
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="card">
                <h3 className="text-xl font-serif font-medium mb-6 text-primary-dark dark:text-primary-light">Send Us a Message</h3>
                
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
                    <label htmlFor="organization" className="block text-sm font-medium mb-1">Organization</label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
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
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="pt-2">
                    <button type="submit" className="btn-primary w-full">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </button>
                  </div>
                </div>
                
                <p className="text-xs text-foreground-60 mt-4">
                  We respect your privacy and will respond to your inquiry within one business day.
                </p>
              </form>
            </motion.div>
          </div>
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
              Partner With Us for Better Patient Outcomes
            </h2>
            <p className="text-xl text-white-90 mb-8">
              Join the many healthcare professionals who trust Cara Mia Companions to provide exceptional care for their patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary">
                Schedule a Meeting
              </Link>
              <a href="tel:5551234567" className="btn-outline border-white text-white hover:bg-white-20">
                Call Our Professional Line
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}