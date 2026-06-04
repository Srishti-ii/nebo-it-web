import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lightbulb, Users, Award, Target, Cpu } from 'lucide-react';
import OrganizationalChart from '../components/OrganizationalChart';

const whyChooseUs = [
  { icon: Lightbulb, title: 'Practical Innovation', description: 'We design technology around the work it has to support. The goal is simple: useful systems that fit your process and keep improving with your team.' },
  { icon: Shield, title: 'Enterprise Security', description: 'We build with secure access, encrypted data flows, monitoring, and regular review so your digital systems are prepared for real business risk.' },
  { icon: Target, title: 'Measured Outcomes', description: 'We focus on results you can track, such as uptime, accuracy, response time, cost reduction, and better service delivery.' },
  { icon: Users, title: 'Experienced Team', description: 'Our team brings together software engineers, data specialists, cloud architects, and design leads who understand both product delivery and daily operations.' },
  { icon: Cpu, title: 'Complete Technical Capability', description: 'From mobile apps and web platforms to data pipelines, cloud systems, and intelligent automation, we handle the full build lifecycle.' },
  { icon: Award, title: 'Certified & Trusted', description: 'ISO 9001 & ISO 27001 certified, Startup India recognized. Our processes and models meet the strictest standards for quality, security, and regulatory compliance.' },
];

const AboutPage: React.FC = () => {
  return (
    <main className="pt-28 pb-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-24">
          <span className="section-label">Who We Are</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8" style={{ fontFamily: 'var(--font-display)' }}>
            Building Reliable <span className="gradient-text">Digital Infrastructure</span>
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                NEBO IT Solutions is the IT Division of
                <strong className="text-purple-300"> Nebo Engineering India Pvt. Ltd.</strong> We build practical software, data, and automation systems for teams that need dependable digital operations.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our work includes government service platforms, quality inspection systems, predictive maintenance tools, enterprise dashboards, and custom applications used across India.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-gray-400 leading-relaxed">
                As part of Nebo Industries, with experience across Civil, Electrical, Mechanical, IT, and Renewable Energy, we bring an engineering view to every project. We study the real operating environment before we recommend a solution.
              </p>
              <div className="flex flex-wrap gap-3">
                {['ISO 9001', 'ISO 27001', 'Startup India', 'Automation', 'Data Systems', 'Cloud Delivery'].map((b) => (
                  <span key={b} className="px-4 py-2 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/10">{b}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="section-label justify-center">Our Advantages</span>
            <h2 className="section-title text-center mx-auto">Why Choose Nebo IT?</h2>
            <p className="section-subtitle text-center mx-auto mt-4">
              We work like a delivery partner, not a vendor passing over a folder of code.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="nebo-card p-8 group hover:border-purple-500/30"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/10 flex items-center justify-center text-purple-400 mb-5 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300">
                  <item.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* <OrganizationalChart /> */}
      </div>
    </main>
  );
};

export default AboutPage;
