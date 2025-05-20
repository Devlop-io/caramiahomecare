"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { Star, Quote, ArrowRight, Send } from "lucide-react";

// Mock testimonial data - in a real app, this would come from the database
const testimonials = [
  {
    id: "1",
    name: "Sarah T.",
    role: "Daughter",
    content: "The caregivers from Cara Mia have become like family. Their gentle approach and genuine care have made all the difference for my mother. What sets them apart is how they truly listen and adapt to her changing needs. I finally have peace of mind knowing she's in such good hands.",
    featured: true,
  },
  {
    id: "2",
    name: "Michael J.",
    role: "Son",
    content: "After trying several agencies, we found Cara Mia. The difference is night and day. Their caregivers are truly exceptional and have a gift for connecting with my father. They've brought joy back into his daily life through thoughtful activities and genuine companionship. I'm grateful beyond words.",
    featured: true,
  },
  {
    id: "3",
    name: "Dr. Rebecca L.",
    role: "Geriatrician",
    content: "As a healthcare professional, I'm particular about who I refer my patients to. Cara Mia Companions consistently provides exceptional care that I can trust. Their attention to detail, proactive communication, and heart-centered approach sets them apart in the home care industry.",
    featured: true,
  },
  {
    id: "4",
    name: "Jennifer M.",
    role: "Granddaughter",
    content: "When my grandmother needed care, we were overwhelmed with options. Cara Mia made the process so simple and reassuring. Their care coordinator took the time to understand not just her needs but her personality and preferences. The caregiver they matched her with is absolutely perfect.",
    featured: false,
  },
  {
    id: "5",
    name: "Robert K.",
    role: "Husband",
    content: "My wife's dementia diagnosis was devastating. The team at Cara Mia has been our lifeline. Their specialized memory care approach has helped maintain her dignity and independence while giving me essential respite. Their training and compassion are evident in everything they do.",
    featured: false,
  },
  {
    id: "6",
    name: "Patricia S.",
    role: "Client",
    content: "I was resistant to having a 'stranger' in my home, but my Cara Mia caregiver quickly became a trusted friend. She respects my independence while providing just the right amount of support. I appreciate how she encourages me to do what I can while helping with what I can't.",
    featured: false,
  },
  {
    id: "7",
    name: "David W.",
    role: "Nephew",
    content: "Living across the country from my aunt was stressful until we found Cara Mia. Their regular updates, photos, and video calls have kept me connected to her care. Their proactive approach to communication has been invaluable for our long-distance family situation.",
    featured: false,
  },
  {
    id: "8",
    name: "Maria G.",
    role: "Social Worker",
    content: "I've referred numerous clients to Cara Mia and have received consistently positive feedback. Their care coordinators are responsive, their caregivers are well-trained, and their approach is truly person-centered. They're my go-to recommendation for families seeking quality home care.",
    featured: false,
  },
];

export default function TestimonialsPage() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [featuredRef, featuredInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [allRef, allInView] = useInView({
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
    relationship: "",
    testimonial: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to the database
    alert("Thank you for sharing your story! After review, it may be featured on our website.");
    setFormData({
      name: "",
      email: "",
      relationship: "",
      testimonial: "",
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
              Testimonials & Love Notes
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Hear from families who have experienced the Cara Mia difference. These stories reflect our commitment to compassionate, personalized care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonials Section */}
      <section className="py-20 bg-white dark:bg-background" ref={featuredRef}>
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={featuredInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Featured Stories</h2>
            <p className="section-description">
              These testimonials highlight the heart of our care philosophy and the meaningful connections we create.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.filter(t => t.featured).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="card relative"
                initial={{ opacity: 0, y: 30 }}
                animate={featuredInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                whileHover={{ y: -5 }}
              >
                <Quote className="h-12 w-12 text-primary/20 absolute top-4 right-4" />
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="italic text-foreground/80 mb-6">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials Section */}
      <section className="py-20 bg-muted" ref={allRef}>
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={allInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">More Client Experiences</h2>
            <p className="section-description">
              Read more stories from families and professionals who have experienced our compassionate care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.filter(t => !t.featured).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                animate={allInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="italic text-foreground/80 mb-4 text-sm">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold mr-3 text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{testimonial.name}</p>
                    <p className="text-xs text-foreground/60">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story Section */}
      <section className="py-20 bg-white dark:bg-background" ref={formRef}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Share Your Story</h2>
              <p className="text-foreground/80 mb-6">
                Has Cara Mia Companions made a difference in your life or the life of a loved one? We'd be honored to hear your experience. Your story may inspire others who are considering home care for their family members.
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-serif font-medium mb-4 text-primary-dark dark:text-primary-light">Why Share Your Experience?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full flex-shrink-0 mt-0.5">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-foreground/70">Help other families who are navigating similar care decisions</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full flex-shrink-0 mt-0.5">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-foreground/70">Recognize caregivers who have made a difference</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full flex-shrink-0 mt-0.5">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-foreground/70">Contribute to our community of care and support</p>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="card">
                <h3 className="text-xl font-serif font-medium mb-6 text-primary-dark dark:text-primary-light">Submit Your Testimonial</h3>
                
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
                    <label htmlFor="relationship" className="block text-sm font-medium mb-1">Relationship to Client</label>
                    <select
                      id="relationship"
                      name="relationship"
                      value={formData.relationship}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">Select your relationship</option>
                      <option value="Client">I am the client</option>
                      <option value="Family Member">Family Member</option>
                      <option value="Friend">Friend</option>
                      <option value="Healthcare Professional">Healthcare Professional</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="testimonial" className="block text-sm font-medium mb-1">Your Experience</label>
                    <textarea
                      id="testimonial"
                      name="testimonial"
                      value={formData.testimonial}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="pt-2">
                    <button type="submit" className="btn-primary w-full">
                      <Send className="h-5 w-5 mr-2" />
                      Submit Your Story
                    </button>
                  </div>
                </div>
                
                <p className="text-xs text-foreground/60 mt-4">
                  By submitting this form, you grant Cara Mia Companions permission to share your testimonial on our website and other marketing materials. We may edit for length or clarity while preserving the essence of your message.
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
              Experience the Cara Mia Difference
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join the many families who have found peace of mind and exceptional care with Cara Mia Companions.
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