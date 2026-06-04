import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 border-t border-b border-[var(--it-border)]">
      <div className="container mx-auto px-6 text-center">
        <h4 className="font-bold mb-8 text-sm uppercase tracking-widest text-cyan-400">About Us</h4>
        <div className="max-w-4xl mx-auto text-[var(--it-text-muted)] text-lg md:text-xl leading-relaxed space-y-6">
          <p>NEBO IT Solutions builds practical IT systems for businesses, public bodies, and industrial teams that need dependable digital operations.</p>
          <p>We study the workflow first, find the cause of the problem, and then build a solution that is useful, maintainable, and ready for daily use.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
