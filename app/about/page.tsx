"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { Heart, Users, Leaf, Shield, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [storyRef, storyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [teamRef, teamInView] = useInView({
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
              Companionship You Can Feel. <br />
              <span className="text-primary">Care You Can Trust.</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              At Cara Mia Companions, we believe that exceptional care begins with exceptional caregivers. Our approach is rooted in compassion, dignity, and a deep understanding of each client's unique needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white dark:bg-background" ref={storyRef}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h2 className="section-title">Our Story</h2>
              <p className="text-foreground/80 mb-6">
                Cara Mia Companions was born from a deeply personal experience. Our founder, after navigating the challenges of finding compassionate care for her own grandmother, recognized the need for a different kind of home care agency—one that truly understood the emotional journey of families and prioritized heart-centered connections alongside professional care.
              </p>
              <p className="text-foreground/80 mb-6">
                The name "Cara Mia" means "my beloved" in Italian, reflecting our belief that every person deserves to be cared for as a beloved family member. This philosophy guides everything we do, from how we select our caregivers to how we develop our care plans.
              </p>
              <p className="text-foreground/80 mb-6">
                Today, we're proud to be a boutique agency that maintains the personal touch and attention to detail that families deserve during vulnerable times. Our team brings together decades of experience in healthcare, senior services, and compassionate caregiving.
              </p>
              <p className="text-foreground/80 italic">
                "We don't just provide care; we nurture connections that honor the dignity, independence, and unique spirit of each person we serve."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://img.freepik.com/premium-photo/smiling-senior-woman-caregiver-walking-together-garden_1193327-4227.jpg"
                    alt="Cara Mia Companions caring relationship"
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

      {/* Our Values Section */}
      <section className="py-20 bg-muted" ref={valuesRef}>
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-description">
              These principles guide every interaction, decision, and moment of care we provide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Value 1 */}
            <motion.div
              className="card group"
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-primary-dark dark:text-primary-light">Compassionate Presence</h3>
              <p className="text-foreground/70 mb-2">
                We believe in the power of being fully present with our clients, offering not just physical assistance but emotional companionship that nurtures the spirit.
              </p>
              <p className="text-foreground/70 italic">
                "Care from the heart, not just the hands."
              </p>
            </motion.div>

            {/* Value 2 */}
            <motion.div
              className="card group"
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-primary-dark dark:text-primary-light">Dignity & Respect</h3>
              <p className="text-foreground/70 mb-2">
                We honor each client's unique life journey, preferences, and independence, ensuring care that respects their dignity and autonomy.
              </p>
              <p className="text-foreground/70 italic">
                "Honoring who you are, not just what you need."
              </p>
            </motion.div>

            {/* Value 3 */}
            <motion.div
              className="card group"
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-primary-dark dark:text-primary-light">Family Partnership</h3>
              <p className="text-foreground/70 mb-2">
                We work alongside families as true partners, providing not just care for their loved ones but support, education, and peace of mind for the entire family.
              </p>
              <p className="text-foreground/70 italic">
                "Supporting the whole family, not just the client."
              </p>
            </motion.div>

            {/* Value 4 */}
            <motion.div
              className="card group"
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-primary-dark dark:text-primary-light">Growth & Joy</h3>
              <p className="text-foreground/70 mb-2">
                We believe that life's later chapters can be filled with meaning, growth, and joy. Our care focuses not just on assistance but on enriching daily life.
              </p>
              <p className="text-foreground/70 italic">
                "Finding moments of joy in every day."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-white dark:bg-background" ref={teamRef}>
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Our Leadership Team</h2>
            <p className="section-description">
              Meet the dedicated professionals who guide our mission of compassionate care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <motion.div
              className="card text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="https://static.vecteezy.com/system/resources/previews/046/162/930/non_2x/a-mature-woman-in-her-50s-with-beautiful-skin-smiles-warmly-photo.jpeg"
                  alt="Maria Rossi, Founder & CEO"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-medium mb-1 text-primary-dark dark:text-primary-light">Maria Rossi</h3>
              <p className="text-primary/80 mb-4">Founder & CEO</p>
              <p className="text-foreground/70 text-sm">
                With over 20 years in healthcare and a personal caregiving journey with her grandmother, Maria founded Cara Mia to create the compassionate care experience she wished her own family had found.
              </p>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              className="card text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="https://i.pinimg.com/originals/9d/06/5b/9d065bc4e5956bbe1544bf92c754913e.jpg"
                  alt="David Chen, Director of Care Services"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-medium mb-1 text-primary-dark dark:text-primary-light">David Chen</h3>
              <p className="text-primary/80 mb-4">Director of Care Services</p>
              <p className="text-foreground/70 text-sm">
                A registered nurse with specialized training in geriatric care, David oversees our care planning and caregiver training programs, ensuring the highest standards of compassionate service.
              </p>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div
              className="card text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="https://img.freepik.com/premium-photo/confident-successful-businesswoman-her-30s-with-warm-smile-friendly-demeanor-she-is-wearing-business-suit-has-long-wavy-hair_14117-168505.jpg"
                  alt="Sophia Williams, Client Relations Manager"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-medium mb-1 text-primary-dark dark:text-primary-light">Sophia Williams</h3>
              <p className="text-primary/80 mb-4">Client Relations Manager</p>
              <p className="text-foreground/70 text-sm">
                With a background in social work and family counseling, Sophia guides families through the care journey, ensuring seamless communication and support every step of the way.
              </p>
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
              Experience the Cara Mia Difference
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We'd love to meet you and learn how we can support your family's unique needs with our compassionate care services.
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