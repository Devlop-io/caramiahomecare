"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  FileText, 
  Download,
  Clock,
  Calendar
} from "lucide-react";

// Mock blog post data - in a real app, this would come from the database
const blogPosts = [
  {
    id: "1",
    title: "What is Non-Medical Home Care?",
    slug: "what-is-non-medical-home-care",
    summary: "Understanding the difference between medical and non-medical care options and how to determine what's right for your loved one.",
    content: `
      <p>Non-medical home care provides essential support for daily living activities while allowing individuals to remain in the comfort of their own homes. Unlike medical home health, which is prescribed by a physician and focuses on skilled nursing and therapy services, non-medical care addresses the practical and personal aspects of daily life.</p>
      
      <h3>What Non-Medical Home Care Includes:</h3>
      <ul>
        <li>Personal care assistance (bathing, grooming, dressing)</li>
        <li>Meal preparation and nutrition support</li>
        <li>Light housekeeping and laundry</li>
        <li>Medication reminders (not administration)</li>
        <li>Transportation and errands</li>
        <li>Companionship and social engagement</li>
        <li>Safety supervision</li>
      </ul>
      
      <h3>Benefits of Non-Medical Home Care:</h3>
      <ul>
        <li>Maintains independence and dignity</li>
        <li>Provides personalized one-on-one support</li>
        <li>Offers flexibility in scheduling and services</li>
        <li>Creates peace of mind for family members</li>
        <li>Delays or prevents the need for facility-based care</li>
        <li>Supports aging in place</li>
      </ul>
      
      <p>When considering care options, it's important to assess your loved one's specific needs, preferences, and health status. Many families use a combination of medical and non-medical services to create a comprehensive care plan.</p>
      
      <p>At Cara Mia Companions, we work closely with your healthcare providers to ensure our non-medical care complements any medical services your loved one receives, creating a seamless care experience.</p>
    `,
    publishedAt: "2023-06-15T10:00:00Z",
  },
  {
    id: "2",
    title: "ADLs vs. IADLs: Understanding Care Needs",
    slug: "adls-vs-iadls",
    summary: "Learn the difference between Activities of Daily Living (ADLs) and Instrumental Activities of Daily Living (IADLs) and why they matter in care planning.",
    content: `
      <p>When assessing care needs for yourself or a loved one, understanding the difference between ADLs and IADLs is essential for creating an effective care plan.</p>
      
      <h3>Activities of Daily Living (ADLs)</h3>
      <p>ADLs are the basic self-care tasks that are fundamental to independent living:</p>
      <ul>
        <li><strong>Bathing:</strong> Maintaining personal hygiene</li>
        <li><strong>Dressing:</strong> Selecting and putting on appropriate clothing</li>
        <li><strong>Eating:</strong> Feeding oneself</li>
        <li><strong>Transferring:</strong> Moving from bed to chair, or chair to standing</li>
        <li><strong>Toileting:</strong> Managing bathroom needs independently</li>
        <li><strong>Continence:</strong> Controlling bladder and bowel functions</li>
      </ul>
      
      <h3>Instrumental Activities of Daily Living (IADLs)</h3>
      <p>IADLs are more complex activities that support independent living within a community:</p>
      <ul>
        <li><strong>Meal preparation:</strong> Planning, shopping for, and cooking meals</li>
        <li><strong>Medication management:</strong> Taking medications as prescribed</li>
        <li><strong>Financial management:</strong> Paying bills and managing finances</li>
        <li><strong>Transportation:</strong> Driving or arranging transportation</li>
        <li><strong>Communication:</strong> Using telephone or other communication devices</li>
        <li><strong>Housekeeping:</strong> Maintaining a clean living environment</li>
        <li><strong>Laundry:</strong> Washing and managing clothing</li>
        <li><strong>Shopping:</strong> Purchasing necessities</li>
      </ul>
      
      <h3>Why This Distinction Matters</h3>
      <p>Understanding which ADLs and IADLs your loved one needs assistance with helps determine:</p>
      <ul>
        <li>The appropriate level of care needed</li>
        <li>Whether home care is a viable option</li>
        <li>How many hours of caregiving support might be required</li>
        <li>Which specific services would be most beneficial</li>
      </ul>
      
      <p>At Cara Mia Companions, we conduct a thorough assessment of both ADLs and IADLs to create a personalized care plan that addresses your loved one's specific needs while maximizing their independence and dignity.</p>
    `,
    publishedAt: "2023-07-22T10:00:00Z",
  },
  {
    id: "3",
    title: "5 Signs Your Loved One Needs Support",
    slug: "signs-loved-one-needs-support",
    summary: "Recognizing the subtle (and not-so-subtle) indicators that it might be time to consider home care assistance.",
    content: `
      <p>Knowing when to seek additional support for an aging loved one can be challenging. Often, changes happen gradually, making them difficult to notice. Here are five key signs that might indicate it's time to consider home care:</p>
      
      <h3>1. Changes in Personal Appearance and Hygiene</h3>
      <p>Look for:</p>
      <ul>
        <li>Unwashed or unkempt hair</li>
        <li>Wearing the same clothes repeatedly</li>
        <li>Body odor or bad breath</li>
        <li>Neglected nail care</li>
      </ul>
      <p>These changes often indicate difficulty managing personal care routines independently.</p>
      
      <h3>2. Home Environment Issues</h3>
      <p>Be aware of:</p>
      <ul>
        <li>Unusual clutter or disorganization</li>
        <li>Expired food in the refrigerator</li>
        <li>Piling mail or unpaid bills</li>
        <li>Neglected housekeeping</li>
        <li>Safety hazards (cords, loose rugs)</li>
      </ul>
      
      <h3>3. Nutrition and Weight Changes</h3>
      <p>Watch for:</p>
      <ul>
        <li>Noticeable weight loss</li>
        <li>Empty refrigerator or pantry</li>
        <li>Simplified diet (relying on few, easy-to-prepare foods)</li>
        <li>Burned pots or cooking mishaps</li>
      </ul>
      
      <h3>4. Cognitive Changes</h3>
      <p>Notice if your loved one is:</p>
      <ul>
        <li>Missing appointments</li>
        <li>Forgetting to take medications</li>
        <li>Showing confusion with time or place</li>
        <li>Having difficulty following conversations</li>
        <li>Making unusual financial decisions</li>
      </ul>
      
      <h3>5. Social Withdrawal</h3>
      <p>Be concerned if you observe:</p>
      <ul>
        <li>Declining invitations</li>
        <li>Giving up long-enjoyed hobbies</li>
        <li>Reduced communication with friends and family</li>
        <li>Expressing feelings of loneliness or isolation</li>
      </ul>
      
      <p>If you notice several of these signs, it may be time to have a conversation about additional support. Remember that introducing care early often leads to better outcomes and can actually help maintain independence longer.</p>
      
      <p>At Cara Mia Companions, we understand these conversations can be difficult. Our care coordinators can help guide you through the process of assessing needs and exploring care options with sensitivity and compassion.</p>
    `,
    publishedAt: "2023-08-10T10:00:00Z",
  },
  {
    id: "4",
    title: "How to Talk to Your Parents About Home Care",
    slug: "talking-to-parents-about-home-care",
    summary: "Practical advice for navigating difficult conversations about care needs with aging parents.",
    content: `
      <p>Discussing home care with aging parents can be one of the most challenging conversations families face. Many older adults resist the idea of care because they fear losing independence or becoming a burden. Here's how to approach this important conversation with sensitivity and respect:</p>
      
      <h3>Prepare Before the Conversation</h3>
      <ul>
        <li><strong>Research options:</strong> Understand the types of care available so you can discuss specific services rather than vague concepts.</li>
        <li><strong>Choose the right time:</strong> Select a moment when everyone is calm and there's plenty of time to talk.</li>
        <li><strong>Involve key family members:</strong> Decide who should participate, but avoid overwhelming your parent with too many people.</li>
      </ul>
      
      <h3>During the Conversation</h3>
      <ul>
        <li><strong>Lead with empathy:</strong> Acknowledge that this is a difficult topic and that you respect their feelings.</li>
        <li><strong>Focus on independence:</strong> Frame home care as a way to maintain independence longer, not lose it.</li>
        <li><strong>Use "I" statements:</strong> Say "I'm concerned about..." rather than "You can't handle..."</li>
        <li><strong>Be specific:</strong> Mention concrete examples of challenges you've noticed, rather than generalizations.</li>
        <li><strong>Introduce care gradually:</strong> Suggest starting with a few hours of help with specific tasks.</li>
      </ul>
      
      <h3>Addressing Common Objections</h3>
      <ul>
        <li><strong>"I don't need help":</strong> Acknowledge their perspective, then suggest a professional assessment or trial period.</li>
        <li><strong>"It's too expensive":</strong> Discuss the value compared to alternatives and explore financial options together.</li>
        <li><strong>"I don't want a stranger in my home":</strong> Explain the caregiver matching process and how relationships develop over time.</li>
        <li><strong>"This means I'm giving up":</strong> Reframe care as a tool for maintaining quality of life and continuing favorite activities.</li>
      </ul>
      
      <h3>After the Initial Conversation</h3>
      <ul>
        <li>Give them time to process the idea</li>
        <li>Offer to include them in interviewing caregivers</li>
        <li>Suggest a trial period with no long-term commitment</li>
        <li>Consider having a trusted doctor or friend reinforce the recommendation</li>
      </ul>
      
      <p>Remember that this is rarely a one-time conversation. Be patient and persistent, while always respecting your parent's dignity and autonomy in the decision-making process.</p>
      
      <p>At Cara Mia Companions, we're happy to participate in family discussions and provide information that helps everyone feel comfortable with the care plan.</p>
    `,
    publishedAt: "2023-09-05T10:00:00Z",
  },
  {
    id: "5",
    title: "Home Safety Checklist for Aging in Place",
    slug: "home-safety-checklist",
    summary: "Essential modifications and precautions to make a home safer for seniors who wish to remain independent.",
    content: `
      <p>Creating a safe home environment is essential for seniors who wish to age in place. This comprehensive checklist will help you identify and address common safety concerns throughout the home:</p>
      
      <h3>General Home Safety</h3>
      <ul>
        <li>Install smoke and carbon monoxide detectors on every level</li>
        <li>Ensure adequate lighting in all areas, especially hallways and stairs</li>
        <li>Secure or remove loose rugs and cords</li>
        <li>Arrange furniture to create clear pathways</li>
        <li>Keep emergency numbers visible near all phones</li>
        <li>Consider a medical alert system</li>
      </ul>
      
      <h3>Bathroom Safety</h3>
      <ul>
        <li>Install grab bars near the toilet and in the shower/tub</li>
        <li>Use non-slip mats in the shower and on bathroom floors</li>
        <li>Consider a shower chair and handheld showerhead</li>
        <li>Install a raised toilet seat if needed</li>
        <li>Set water heater temperature to 120°F to prevent scalding</li>
      </ul>
      
      <h3>Kitchen Safety</h3>
      <ul>
        <li>Move frequently used items to easily accessible shelves</li>
        <li>Consider automatic shut-off devices for stove/oven</li>
        <li>Use contrasting colors for countertop edges</li>
        <li>Replace glass items with plastic when practical</li>
        <li>Ensure good lighting over cooking and prep areas</li>
      </ul>
      
      <h3>Bedroom Safety</h3>
      <ul>
        <li>Arrange for a clear path from bed to bathroom</li>
        <li>Install nightlights or motion-sensor lighting</li>
        <li>Keep a phone and lamp within reach of the bed</li>
        <li>Consider bed rails if there's a fall risk</li>
        <li>Ensure the bed is at an appropriate height for easy transfers</li>
      </ul>
      
      <h3>Stairway Safety</h3>
      <ul>
        <li>Install handrails on both sides of stairs</li>
        <li>Mark the edges of steps with contrasting tape</li>
        <li>Ensure adequate lighting with switches at top and bottom</li>
        <li>Consider a stairlift for those with mobility challenges</li>
      </ul>
      
      <h3>Outdoor Safety</h3>
      <ul>
        <li>Repair uneven walkways and steps</li>
        <li>Install handrails on outdoor steps</li>
        <li>Ensure adequate lighting at entrances</li>
        <li>Consider a ramp if there are mobility issues</li>
        <li>Keep walkways clear of snow, leaves, and debris</li>
      </ul>
      
      <p>Remember that home safety needs evolve over time. We recommend reassessing the home environment every six months or after any health changes.</p>
      
      <p>At Cara Mia Companions, our care coordinators can conduct a professional home safety assessment and recommend specific modifications based on your loved one's unique needs and living situation.</p>
    `,
    publishedAt: "2023-10-18T10:00:00Z",
  },
];

// Accordion component for FAQ-style content
const Accordion = ({ title, content }: { title: string; content: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-lg overflow-hidden mb-4">
      <button
        className="w-full flex items-center justify-between p-4 text-left bg-muted hover:bg-muted/80 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium">{title}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-primary" />
        ) : (
          <ChevronDown className="h-5 w-5 text-primary" />
        )}
      </button>
      {isOpen && (
        <div 
          className="p-4 bg-white dark:bg-background"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </div>
  );
};

export default function ResourcesPage() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [articlesRef, articlesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [guidesRef, guidesInView] = useInView({
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
              Empowering You with Knowledge, <br />
              <span className="text-primary">One Gentle Step at a Time</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Explore our collection of resources designed to help you navigate the caregiving journey with confidence and compassion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-20 bg-white dark:bg-background" ref={articlesRef}>
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={articlesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Educational Articles</h2>
            <p className="section-description">
              Helpful information to guide you through the caregiving journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post, index) => (
              <motion.div
                key={post.id}
                className="card group"
                initial={{ opacity: 0, y: 30 }}
                animate={articlesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-3 text-primary-dark dark:text-primary-light">
                  {post.title}
                </h3>
                <p className="text-foreground/70 mb-4">
                  {post.summary}
                </p>
                <div className="flex items-center text-sm text-foreground/60 mb-4">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <Link 
                  href={`/resources/${post.slug}`} 
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  Read Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {blogPosts.slice(3, 5).map((post, index) => (
              <motion.div
                key={post.id}
                className="card group"
                initial={{ opacity: 0, y: 30 }}
                animate={articlesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + (0.2 * index) }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-medium mb-2 text-primary-dark dark:text-primary-light">
                      {post.title}
                    </h3>
                    <p className="text-foreground/70 text-sm mb-3">
                      {post.summary}
                    </p>
                    <div className="flex items-center text-xs text-foreground/60 mb-3">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <Link 
                      href={`/resources/${post.slug}`} 
                      className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                    >
                      Read Article <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={articlesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Link href="/resources/articles" className="btn-primary">
              View All Articles
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-muted" ref={guidesRef}>
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={guidesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Quick Reference Guides</h2>
            <p className="section-description">
              Expand each section to learn more about important caregiving topics.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={guidesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={guidesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + (0.1 * index) }}
                >
                  <Accordion title={post.title} content={post.content} />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-12 bg-white dark:bg-background p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={guidesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-xl font-serif font-medium mb-4 text-primary-dark dark:text-primary-light flex items-center">
                <FileText className="h-6 w-6 mr-2 text-primary" />
                Downloadable Resources
              </h3>
              <p className="text-foreground/80 mb-6">
                Access our printable guides and checklists to help you stay organized and informed.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-border rounded-md bg-muted/50 hover:bg-muted transition-colors">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-primary mr-3" />
                    <span>Home Safety Assessment Checklist</span>
                  </div>
                  <button className="btn-outline py-1 px-3 text-sm">
                    <Download className="h-4 w-4 mr-1" /> Download
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 border border-border rounded-md bg-muted/50 hover:bg-muted transition-colors">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-primary mr-3" />
                    <span>Caregiver Communication Guide</span>
                  </div>
                  <button className="btn-outline py-1 px-3 text-sm">
                    <Download className="h-4 w-4 mr-1" /> Download
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 border border-border rounded-md bg-muted/50 hover:bg-muted transition-colors">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-primary mr-3" />
                    <span>Medication Management Tracker</span>
                  </div>
                  <button className="btn-outline py-1 px-3 text-sm">
                    <Download className="h-4 w-4 mr-1" /> Download
                  </button>
                </div>
              </div>
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
              Have Questions About Caregiving?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our care experts are here to provide personalized guidance and support for your unique situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary">
                Contact Our Care Team
              </Link>
              <Link href="/how-it-works" className="btn-outline border-white text-white hover:bg-white/20">
                Learn How We Can Help
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}