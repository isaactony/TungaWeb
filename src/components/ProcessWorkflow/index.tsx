import React from 'react';
import { motion } from 'framer-motion';
import ProcessStep from './ProcessStep';
import ProcessAnimation from './ProcessAnimation';

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discovery & Planning',
    description: 'We start with understanding your vision, goals, and requirements through detailed consultation and research.'
  },
  {
    number: '02',
    title: 'Design & Wireframing',
    description: 'Our designers create stunning mockups and wireframes in Figma, ensuring a perfect visual representation of your vision.'
  },
  {
    number: '03',
    title: 'Development',
    description: 'Our expert developers transform the designs into a fully functional website with clean, optimized code.'
  },
  {
    number: '04',
    title: 'Testing & Refinement',
    description: 'Rigorous testing across devices and browsers ensures your website works flawlessly for all users.'
  },
  {
    number: '05',
    title: 'Launch & Support',
    description: 'We handle the deployment process and provide ongoing support to ensure your website stays perfect.'
  }
];

const ProcessWorkflow = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.1),transparent)]" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-sm uppercase tracking-wider text-purple-400 mb-4">HOW IT WORKS</h2>
              <h3 className="text-4xl font-bold text-white mb-6">
                Our Process Workflow{' '}
                <span className="text-purple-500">✧</span>
              </h3>
              <p className="text-gray-400">
                From concept to launch, our proven development process ensures your website
                is delivered with precision and excellence.
              </p>
            </motion.div>

            <div className="space-y-12">
              {PROCESS_STEPS.map((step, index) => (
                <ProcessStep
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  delay={index}
                />
              ))}
            </div>
          </div>

          <div className="lg:h-[600px] relative">
            <ProcessAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessWorkflow;