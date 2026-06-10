import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Calendar, User } from 'lucide-react';
const FALLBACK_BLOGS = [
  {
    id: "1",
    title: "Decoupling The Monolith",
    author: "Sarah Chen",
    date: "Feb 22, 2026",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800",
    description:
      "How we migrated a legacy system to a Go based event driven architecture.",
    content:
      "Scaling a monolithic application eventually hits a ceiling. We share how we moved to event driven microservices using Go and Kafka, reducing API latency by 43%.",
  },
  {
    id: "2",
    title: "WebAssembly & Rust: The Frontend Frontier",
    author: "Marcus Johnson",
    date: "Mar 17, 2026",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
    description:
      "Using Rust and WebAssembly for compute heavy browser tasks.",
    content:
      "By compiling Rust to WebAssembly, we improved performance for browser video processing and 3D rendering.",
  },
  {
    id: "3",
    title: "Security In Deployment Pipelines",
    author: "Elena Rodriguez",
    date: "Apr 30, 2026",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800",
    description:
      "Improving access control across deployments.",
    content:
      "Supply chain attacks affect the whole delivery path. We share how temporary runners and OIDC tokens improved our GitHub Actions setup.",
  },
  {
    id: "4",
    title: "RAG vs Fine Tuning For Enterprise LLMs",
    author: "Dr. Alan Turing",
    date: "May 05, 2026",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800",
    description:
      "Evaluating AI architecture choices for B2B SaaS.",
    content:
      "We compare cost, latency, and response quality for RAG and fine tuning approaches.",
  },
  {
    id: "5",
    title: "Mastering React Server Components",
    author: "David Kim",
    date: "Jun 12, 2026",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800",
    description:
      "Reducing bundle sizes without sacrificing interactivity.",
    content:
      "React Server Components change how rendering is planned. We reduced initial load times by 60%.",
  },
];
interface Blog {
  id: number;
  title: string;
  description: string;
  imageName: string;
}
const BlogPage: React.FC = () => {
const [blogs, setBlogs] = useState<any[]>(FALLBACK_BLOGS);
  const [selected, setSelected] =
  useState<Blog | null>(null);
useEffect(() => {
  fetch("https://temporary-backend-rrqn.onrender.com/api/images")
    .then((res) => res.json())
    .then((data) => {
      console.log("API Response:", data);

      if (!Array.isArray(data) || data.length === 0) {
        console.log("Using fallback blogs");
        return;
      }

      const formattedBlogs = data.map((item: any) => ({
        id: item.id?.toString(),
        title: item.title,
        description: item.description,
        content: item.description,
        image:
          item.imageUrl ||
          item.image ||
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800",
        author: "Nebo Team",
        date: "Recent",
      }));

      setBlogs(formattedBlogs);
    })
    .catch((err) => {
      console.error("API Error:", err);
      console.log("Using fallback blogs");
    });
}, []);
  return (
    <main className="pt-28 pb-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-16">
          <span className="section-label">Engineering Log</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Insights & <span className="gradient-text">Technical Writings</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">Deep dives into our engineering process, architecture decisions, and the technologies shaping the future.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post, i) => ( 
            <motion.div key={post.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              onClick={() => setSelected(post)} className="nebo-card overflow-hidden group cursor-pointer flex flex-col">
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute inset-0 bg-purple-500/5 group-hover:bg-transparent transition-colors z-10" />
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-purple-400 mb-3">{post.date}</span>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors leading-tight">{post.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow line-clamp-2">{post.description}</p>
                <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold uppercase tracking-wider">
                  Read More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)} className="absolute inset-0 bg-[#06060e]/90 backdrop-blur-md" />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0c0c1d] rounded-2xl shadow-2xl border border-purple-500/10 flex flex-col md:flex-row">
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-all">
                <X size={20} />
              </button>
              <div className="w-full md:w-5/12 min-h-[250px] relative border-b md:border-b-0 md:border-r border-white/5">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c1d] to-transparent z-10 md:bg-gradient-to-r md:from-transparent md:to-[#0c0c1d]" />
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-7/12 p-8 md:p-10 space-y-5 flex flex-col justify-center">
                <div className="flex flex-wrap gap-3 text-xs font-semibold text-purple-400 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5 bg-purple-500/10 px-3 py-1 rounded-full"><Calendar size={12} />{selected.date}</span>
                  <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full"><User size={12} />{selected.author}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">{selected.title}</h2>
                <div className="h-1 w-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500" />
                <p className="text-gray-300 leading-relaxed">{selected.content}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default BlogPage;
