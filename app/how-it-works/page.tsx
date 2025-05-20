"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { 
  Heart, 
  Users, 
  FileText, 
  Calendar, 
  CheckCircle2, 
  ArrowRight,
  Phone,
  MessageSquare
} from "lucide-react";

export default function HowItWorksPage() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [processRef, processInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [faqRef, faqInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
              How It Works
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Our simple, four-step process ensures that your loved one receives the perfect care match and ongoing support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-background" ref={processRef}>
        <div className="container-custom">
          <div className="space-y-24">
            {/* Step 1 */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-5 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="md:col-span-2 flex flex-col items-center md:items-end justify-center">
                <div className="relative">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-4xl font-bold">
                    1
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-primary/10 rounded-full -z-10" />
                </div>
              </div>
              <div className="md:col-span-3">
                <h2 className="text-2xl font-serif font-medium mb-4 text-primary-dark dark:text-primary-light flex items-center">
                  <Calendar className="h-6 w-6 mr-2 text-primary" />
                  Schedule a Free Consultation
                </h2>
                <p className="text-foreground/80 mb-4">
                  The first step is simple: reach out to us. You can call, email, or complete our online form to schedule a free, no-obligation consultation. During this initial contact, we'll gather basic information about your situation and schedule a time to meet that works for you.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-medium mb-2">What to expect:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>A friendly, no-pressure conversation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Answers to your initial questions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Information about our services and approach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Scheduling of your in-home assessment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-5 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="md:col-span-3 order-2 md:order-1">
                <h2 className="text-2xl font-serif font-medium mb-4 text-primary-dark dark:text-primary-light flex items-center">
                  <Users className="h-6 w-6 mr-2 text-primary" />
                  Meet Your Care Coordinator
                </h2>
                <p className="text-foreground/80 mb-4">
                  Your dedicated Care Coordinator will visit your home to conduct a thorough assessment. This in-person meeting allows us to understand your loved one's unique needs, preferences, and personality, as well as your family's goals and concerns.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-medium mb-2">During this visit, we'll discuss:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Physical needs and assistance required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Daily routines and preferences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Personality, interests, and life history</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Home environment and safety considerations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Schedule needs and caregiver preferences</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:col-span-2 flex flex-col items-center md:items-start justify-center order-1 md:order-2">
                <div className="relative">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-4xl font-bold">
                    2
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-32 h-32 bg-primary/10 rounded-full -z-10" />
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-5 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="md:col-span-2 flex flex-col items-center md:items-end justify-center">
                <div className="relative">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-4xl font-bold">
                    3
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-primary/10 rounded-full -z-10" />
                </div>
              </div>
              <div className="md:col-span-3">
                <h2 className="text-2xl font-serif font-medium mb-4 text-primary-dark dark:text-primary-light flex items-center">
                  <FileText className="h-6 w-6 mr-2 text-primary" />
                  Receive a Personalized Care Plan
                </h2>
                <p className="text-foreground/80 mb-4">
                  Based on our assessment, we'll create a detailed care plan tailored to your loved one's specific needs. We'll then carefully match them with caregivers whose skills, experience, and personality complement their requirements and preferences.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Your care plan includes:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Detailed outline of care services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Caregiver matching based on needs and personality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Customized schedule of care hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Clear pricing and service agreement</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-5 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="md:col-span-3 order-2 md:order-1">
                <h2 className="text-2xl font-serif font-medium mb-4 text-primary-dark dark:text-primary-light flex items-center">
                  <Heart className="h-6 w-6 mr-2 text-primary" />
                  Begin Care—with Ongoing Support
                </h2>
                <p className="text-foreground/80 mb-4">
                  Once your care begins, our commitment continues. We provide ongoing supervision, regular check-ins, and care plan adjustments as needs change. Your Care Coordinator remains your dedicated point of contact throughout your journey with us.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Our ongoing support includes:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Regular quality assurance visits and check-ins</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Proactive communication with family members</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Care plan adjustments as needs evolve</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>24/7 on-call support for urgent situations</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:col-span-2 flex flex-col items-center md:items-start justify-center order-1 md:order-2">
                <div className="relative">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-4xl font-bold">
                    4
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-32 h-32 bg-primary/10 rounded-full -z-10" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted" ref={faqRef}>
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-description">
              Find answers to common questions about our care process and services.
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
                <h3 className="text-xl font-medium mb-3 text-primary-dark dark:text-primary-light">How quickly can care begin?</h3>
                <p className="text-foreground/80">
                  In most cases, we can begin care within 48-72 hours of your initial assessment. For urgent situations, we can often expedite the process. We'll work with you to establish a timeline that meets your needs.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="card">
                <h3 className="text-xl font-medium mb-3 text-primary-dark dark:text-primary-light">What if we need to change our schedule or services?</h3>
                <p className="text-foreground/80">
                  We understand that care needs can change. Simply contact your Care Coordinator to discuss any adjustments to your schedule or services. We're flexible and will work with you to accommodate changes as needed.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="card">
                <h3 className="text-xl font-medium mb-3 text-primary-dark dark:text-primary-light">How are caregivers selected and screened?</h3>
                <p className="text-foreground/80">
                  Our caregivers undergo a rigorous selection process that includes background checks, reference verification, skills assessment, and personality evaluation. We select caregivers not just for their skills but for their compassionate hearts and genuine desire to serve.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div className="card">
                <h3 className="text-xl font-medium mb-3 text-primary-dark dark:text-primary-light">What if we're not satisfied with our caregiver?</h3>
                <p className="text-foreground/80">
                  Your satisfaction is our priority. If you're not completely happy with your caregiver for any reason, contact your Care Coordinator immediately. We'll work with you to address concerns or arrange for a different caregiver if necessary.
                </p>
              </div>

              {/* FAQ Item 5 */}
              <div className="card">
                <h3 className="text-xl font-medium mb-3 text-primary-dark dark:text-primary-light">Is there a minimum number of hours required?</h3>
                <p className="text-foreground/80">
                  We typically have a minimum of 4 hours per visit, but we're flexible and can discuss your specific situation. We offer services ranging from a few hours a week to 24/7 care, depending on your needs.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="py-20 bg-white dark:bg-background">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Ready to Get Started?</h2>
            <p className="section-description">
              Contact us today to schedule your free consultation and take the first step toward compassionate care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Option 1 */}
            <motion.div 
              className="card text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-primary-dark dark:text-primary-light">Call Us</h3>
              <p className="text-foreground/70 mb-6">
                Speak directly with a care coordinator who can answer your questions and schedule your consultation.
              </p>
              <a 
                href="tel:5551234567" 
                className="btn-primary w-full"
              >
                (555) 123-4567
              </a>
            </motion.div>

            {/* Contact Option 2 */}
            <motion.div 
              className="card text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-primary-dark dark:text-primary-light">Email Us</h3>
              <p className="text-foreground/70 mb-6">
                Send us a message with your information and questions, and we'll respond promptly.
              </p>
              <a 
                href="mailto:info@caramiahomecare.com" 
                className="btn-primary w-full"
              >
                info@caramiahomecare.com
              </a>
            </motion.div>

            {/* Contact Option 3 */}
            <motion.div 
              className="card text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-primary-dark dark:text-primary-light">Schedule Online</h3>
              <p className="text-foreground/70 mb-6">
                Complete our online form to request a consultation at your preferred date and time.
              </p>
              <Link 
                href="/contact" 
                className="btn-primary w-full"
              >
                Schedule Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white" ref={ctaRef}>
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
              Let's Take the First Step Together
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule your free, no-obligation consultation today and discover how we can support your loved one with compassionate care.
            </p>
            <Link href="/contact" className="btn-secondary">
              Schedule a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}