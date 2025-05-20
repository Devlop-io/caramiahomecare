"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { 
  Heart, 
  ShowerHead, 
  Utensils, 
  PillIcon, 
  PersonStanding, 
  Car, 
  Sparkles, 
  Home, 
  Calendar, 
  ShoppingBag, 
  Brush, 
  Brain, 
  Stethoscope, 
  ArrowRight 
} from "lucide-react";

export default function ServicesPage() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [dailyRef, dailyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [instrumentalRef, instrumentalInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [specializedRef, specializedInView] = useInView({
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
              Supporting Daily Life with <br />
              <span className="text-primary">Gentle Hands</span> and <span className="text-primary">Open Hearts</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Our compassionate caregivers provide personalized support to help your loved ones maintain independence and dignity in the comfort of home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Daily Living Support Section */}
      <section id="daily-living" className="py-20 bg-white dark:bg-background" ref={dailyRef}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={dailyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-medium mb-4">
                <Heart className="h-5 w-5" />
                <span>Activities of Daily Living (ADLs)</span>
              </div>
              <h2 className="section-title">Daily Living Support</h2>
              <p className="text-foreground/80 mb-6">
                Our caregivers provide compassionate assistance with the essential activities that are fundamental to independent living. We help maintain dignity and comfort while supporting physical needs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={dailyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                    <ShowerHead className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Personal Hygiene</h3>
                    <p className="text-sm text-foreground/70">
                      Bathing, grooming, oral care, and other personal hygiene needs
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={dailyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                    <Utensils className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Eating Assistance</h3>
                    <p className="text-sm text-foreground/70">
                      Help with eating and maintaining proper nutrition
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={dailyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                    <PersonStanding className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Mobility Assistance</h3>
                    <p className="text-sm text-foreground/70">
                      Support with walking, transfers, and positioning
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={dailyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                    <PillIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Medication Reminders</h3>
                    <p className="text-sm text-foreground/70">
                      Gentle reminders to take medications as prescribed
                    </p>
                  </div>
                </motion.div>
              </div>

              <Link href="/contact" className="btn-primary">
                Discuss Your Needs <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={dailyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://www.nia.nih.gov/sites/default/files/inline-images/aging-in-place-inline_1.jpg"
                    alt="Daily living assistance"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full -z-10" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instrumental Activities Section */}
      <section id="instrumental" className="py-20 bg-muted" ref={instrumentalRef}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={instrumentalInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://bethesdahealth.org/wp-content/uploads/2022/02/iStock-1364071475.jpg"
                    alt="Instrumental activities assistance"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-full -z-10" />
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full -z-10" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={instrumentalInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-medium mb-4">
                <Home className="h-5 w-5" />
                <span>Instrumental Activities of Daily Living (IADLs)</span>
              </div>
              <h2 className="section-title">Instrumental Activities</h2>
              <p className="text-foreground/80 mb-6">
                Beyond basic personal care, we help with the activities that allow your loved one to maintain an independent household and stay connected to their community.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={instrumentalInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                    <Utensils className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Meal Preparation</h3>
                    <p className="text-sm text-foreground/70">
                      Preparing nutritious meals according to preferences and dietary needs
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={instrumentalInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                    <Brush className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Light Housekeeping</h3>
                    <p className="text-sm text-foreground/70">
                      Maintaining a clean, safe, and comfortable living environment
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={instrumentalInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                    <Car className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Transportation</h3>
                    <p className="text-sm text-foreground/70">
                      Accompaniment to appointments, social events, and other outings
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={instrumentalInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                    <ShoppingBag className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Errands & Shopping</h3>
                    <p className="text-sm text-foreground/70">
                      Assistance with grocery shopping, pharmacy visits, and other errands
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={instrumentalInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Appointment Management</h3>
                    <p className="text-sm text-foreground/70">
                      Help with scheduling and keeping track of important appointments
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={instrumentalInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Companionship</h3>
                    <p className="text-sm text-foreground/70">
                      Meaningful conversation, activities, and emotional support
                    </p>
                  </div>
                </motion.div>
              </div>

              <Link href="/contact" className="btn-primary">
                Discuss Your Needs <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialized Care Section */}
      <section id="specialized" className="py-20 bg-white dark:bg-background" ref={specializedRef}>
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={specializedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-medium mb-4">
              <Sparkles className="h-5 w-5" />
              <span>Specialized Care Add-Ons</span>
            </div>
            <h2 className="section-title">Specialized Care Services</h2>
            <p className="section-description">
              For clients with specific health conditions or needs, we offer specialized care services provided by caregivers with additional training.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Specialized Care 1 */}
            <motion.div
              className="card group"
              initial={{ opacity: 0, y: 30 }}
              animate={specializedInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-primary-dark dark:text-primary-light">Dementia & Alzheimer's Care</h3>
              <p className="text-foreground/70 mb-4">
                Specialized support for individuals with memory impairment, including safety monitoring, engagement activities, and techniques to minimize confusion and anxiety.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground/70">Specialized memory care techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground/70">Redirection and validation approaches</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground/70">Meaningful engagement activities</span>
                </li>
              </ul>
              <Link 
                href="/contact" 
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            {/* Specialized Care 2 */}
            <motion.div
              className="card group"
              initial={{ opacity: 0, y: 30 }}
              animate={specializedInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Stethoscope className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-primary-dark dark:text-primary-light">Post-Surgery & Recovery Care</h3>
              <p className="text-foreground/70 mb-4">
                Temporary support during recovery from surgery, illness, or hospitalization, focusing on comfort, safety, and following care instructions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground/70">Medication reminders and monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground/70">Assistance with recovery exercises</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground/70">Transportation to follow-up appointments</span>
                </li>
              </ul>
              <Link 
                href="/contact" 
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            {/* Specialized Care 3 */}
            <motion.div
              className="card group"
              initial={{ opacity: 0, y: 30 }}
              animate={specializedInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-primary-dark dark:text-primary-light">End-of-Life Comfort Care</h3>
              <p className="text-foreground/70 mb-4">
                Compassionate support for individuals and families during end-of-life care, working alongside hospice services to provide comfort and dignity.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground/70">Comfort-focused personal care</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground/70">Respite for family caregivers</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-foreground/70">Emotional support and companionship</span>
                </li>
              </ul>
              <Link 
                href="/contact" 
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
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
              Personalized Care Tailored to Your Needs
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Every care plan is customized to meet your specific needs and preferences. Contact us today to discuss how we can support you or your loved one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary">
                Schedule a Free Consultation
              </Link>
              <Link href="/how-it-works" className="btn-outline border-white text-white hover:bg-white/20">
                Learn How It Works
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}