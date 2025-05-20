"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Heart, 
  Clock, 
  Shield, 
  Users, 
  Home, 
  Sparkles, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Star,
  Phone
} from "lucide-react";

export default function HomePage() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 200, 300], [1, 0.5, 0]);
  
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [whyUsRef, whyUsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [processRef, processInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (whyUsInView) {
      const interval = setInterval(() => {
        setCount(prev => {
          if (prev < 500) {
            return prev + 5;
          }
          clearInterval(interval);
          return 500;
        });
      }, 10);
      
      return () => clearInterval(interval);
    }
  }, [whyUsInView]);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://img.freepik.com/premium-photo/elderly-woman-smiles-caregiver-warm-setting-emotional-bond-care-concept-human-moments-captured-soft-light-ai_372197-33288.jpg?w=2000"
            alt="Compassionate home care"
            fill
            priority
            className="object-cover"
            style={{ opacity: 0.8 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 to-primary/40" />
        </div>
        
        <motion.div 
          ref={heroRef}
          className="container-custom relative z-10 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Where Home Care Becomes <span className="text-secondary">Heart Care</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-white-90"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Compassionate, non-medical home care with a heart-centered approach.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link href="/contact" className="btn-primary">
                Schedule a Free Consultation
              </Link>
              <Link href="/services" className="btn-outline border-white text-white hover:bg-white-20">
                Explore Our Services
              </Link>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"
          style={{ y: y1 }}
        />
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-muted" ref={servicesRef}>
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">
              Supporting Daily Life with <span className="text-primary">Gentle Hands</span> and <span className="text-primary">Open Hearts</span>
            </h2>
            <p className="section-description">
              Our compassionate caregivers provide personalized support to help your loved ones maintain independence and dignity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <motion.div 
              className="card group"
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="bg-primary-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary-20 transition-colors">
                <Home className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-primary-dark dark:text-primary-light">Daily Living Support</h3>
              <p className="text-foreground-70 mb-4">
                Assistance with personal care, mobility, medication reminders, and other essential daily activities.
              </p>
              <Link 
                href="/services#daily-living" 
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            {/* Service Card 2 */}
            <motion.div 
              className="card group"
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="bg-primary-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary-20 transition-colors">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-primary-dark dark:text-primary-light">Instrumental Activities</h3>
              <p className="text-foreground-70 mb-4">
                Help with meal preparation, light housekeeping, transportation, errands, and companionship.
              </p>
              <Link 
                href="/services#instrumental" 
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            {/* Service Card 3 */}
            <motion.div 
              className="card group"
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="bg-primary-10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary-20 transition-colors">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-primary-dark dark:text-primary-light">Specialized Care</h3>
              <p className="text-foreground-70 mb-4">
                Specialized support for dementia, Parkinson's, post-surgery recovery, and end-of-life comfort care.
              </p>
              <Link 
                href="/services#specialized" 
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white dark:bg-background" ref={whyUsRef}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={whyUsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Why Families Choose Us</h2>
              <p className="text-foreground-70 mb-8">
                At Cara Mia Companions, we believe that exceptional care begins with exceptional caregivers. 
                Our approach is rooted in compassion, dignity, and a deep understanding of each client's unique needs.
              </p>
              
              <div className="space-y-4">
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={whyUsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="bg-primary-10 p-2 rounded-full flex-shrink-0">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Heart-Centered Approach</h3>
                    <p className="text-foreground-70">
                      Our caregivers are selected not just for their skills, but for their compassionate hearts and genuine desire to serve.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={whyUsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <div className="bg-primary-10 p-2 rounded-full flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Personalized Care Plans</h3>
                    <p className="text-foreground-70">
                      We create customized care plans that adapt to your loved one's changing needs and preferences.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={whyUsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <div className="bg-primary-10 p-2 rounded-full flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Flexible Scheduling</h3>
                    <p className="text-foreground-70">
                      From a few hours a week to 24/7 care, we accommodate your schedule with reliable, consistent support.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={whyUsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  <div className="bg-primary-10 p-2 rounded-full flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Peace of Mind</h3>
                    <p className="text-foreground-70">
                      Our caregivers are thoroughly vetted, trained, insured, and supported by our dedicated care coordination team.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={whyUsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-muted p-8 rounded-lg relative z-10">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-serif font-bold text-primary mb-2">
                      {count}+
                    </div>
                    <p className="text-foreground-70 text-sm">Families Served</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-serif font-bold text-primary mb-2">24/7</div>
                    <p className="text-foreground-70 text-sm">Care Available</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-serif font-bold text-primary mb-2">100%</div>
                    <p className="text-foreground-70 text-sm">Satisfaction Guarantee</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-serif font-bold text-primary mb-2">15+</div>
                    <p className="text-foreground-70 text-sm">Years Experience</p>
                  </div>
                </div>
                
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden mb-6">
                  <Image
                    src="https://image.shutterstock.com/z/stock-photo-african-female-doctor-playing-and-smiling-with-mature-elderly-woman-on-wheelchair-in-the-garden-1403158940.jpg"
                    alt="Compassionate caregiver with client"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="bg-white dark:bg-muted p-4 rounded-lg shadow-md">
                  <p className="italic text-foreground-80 mb-4">
                    "The caregivers from Cara Mia have become like family. Their gentle approach and genuine care have made all the difference for my mother."
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Sarah T., Daughter</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-64 h-64 bg-primary-10 rounded-full -z-10" />
              <div className="absolute bottom-12 left-4 w-40 h-40 bg-secondary-20 rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-muted to-white dark:from-muted dark:to-background" ref={processRef}>
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">How It Works</h2>
            <p className="section-description">
              Our simple process ensures that your loved one receives the perfect care match and ongoing support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <motion.div 
              className="card relative"
              initial={{ opacity: 0, y: 30 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 mt-4 text-primary-dark dark:text-primary-light">
                Schedule a Free Consultation
              </h3>
              <p className="text-foreground-70">
                Contact us to discuss your needs and schedule a no-obligation consultation with our care coordinator.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              className="card relative"
              initial={{ opacity: 0, y: 30 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 mt-4 text-primary-dark dark:text-primary-light">
                Meet Your Care Coordinator
              </h3>
              <p className="text-foreground-70">
                We'll visit your home to understand your unique situation and discuss how we can best support you.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              className="card relative"
              initial={{ opacity: 0, y: 30 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 mt-4 text-primary-dark dark:text-primary-light">
                Receive a Personalized Care Plan
              </h3>
              <p className="text-foreground-70">
                We'll create a tailored care plan and carefully match you with the perfect caregiver for your needs.
              </p>
            </motion.div>

            {/* Step 4 */}
            <motion.div 
              className="card relative"
              initial={{ opacity: 0, y: 30 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 mt-4 text-primary-dark dark:text-primary-light">
                Begin Care—with Ongoing Support
              </h3>
              <p className="text-foreground-70">
                Your care begins with our ongoing supervision, regular check-ins, and adjustments as needed.
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <p className="text-lg text-foreground-80 mb-6">
              Let's take the first step together.
            </p>
            <Link href="/how-it-works" className="btn-primary">
              Learn More About Our Process
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-background" ref={testimonialsRef}>
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Testimonials & Love Notes</h2>
            <p className="section-description">
              Hear from families who have experienced the Cara Mia difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div 
              className="card"
              initial={{ opacity: 0, y: 30 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="italic text-foreground-80 mb-6">
                "The caregivers from Cara Mia have become like family. Their gentle approach and genuine care have made all the difference for my mother."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-20 rounded-full flex items-center justify-center text-primary font-bold mr-4">
                  ST
                </div>
                <div>
                  <p className="font-medium">Sarah T.</p>
                  <p className="text-sm text-foreground-60">Daughter</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div 
              className="card"
              initial={{ opacity: 0, y: 30 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="italic text-foreground-80 mb-6">
                "After trying several agencies, we found Cara Mia. The difference is night and day. Their caregivers are truly exceptional and have a gift for connecting with my father."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-20 rounded-full flex items-center justify-center text-primary font-bold mr-4">
                  MJ
                </div>
                <div>
                  <p className="font-medium">Michael J.</p>
                  <p className="text-sm text-foreground-60">Son</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div 
              className="card"
              initial={{ opacity: 0, y: 30 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="italic text-foreground-80 mb-6">
                "As a healthcare professional, I'm particular about who I refer my patients to. Cara Mia Companions consistently provides exceptional care that I can trust."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-20 rounded-full flex items-center justify-center text-primary font-bold mr-4">
                  DR
                </div>
                <div>
                  <p className="font-medium">Dr. Rebecca L.</p>
                  <p className="text-sm text-foreground-60">Geriatrician</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link href="/testimonials" className="btn-primary">
              Read More Testimonials
            </Link>
          </motion.div>
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
              Ready to Experience the Cara Mia Difference?
            </h2>
            <p className="text-xl text-white-90 mb-8">
              Schedule your free, no-obligation consultation today and discover how we can support your loved one with compassionate care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary">
                Schedule a Consultation
              </Link>
              <Link href="/contact" className="btn-outline border-white text-white hover:bg-white-20">
                <Phone className="h-5 w-5 mr-2" /> Call Us Today
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}