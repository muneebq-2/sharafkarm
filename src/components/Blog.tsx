import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { blogPosts } from '../data/blog';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="section-padding bg-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Insights"
          title="Engineering notes & project learnings"
          description="Practical articles on estimation, contracts, and structural delivery — written for developers, contractors, and project teams."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article key={post.id} className="card card-hover flex flex-col overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-primary-500 to-primary-700" />
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-bold uppercase tracking-wider text-primary-700 mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-dark-900 mb-3 leading-snug">{post.title}</h3>
                <p className="text-dark-600 text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-dark-500 mb-4">
                  <span>{post.date}</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <button className="inline-flex items-center text-sm font-semibold text-primary-700 hover:text-primary-800 transition-colors">
                  Read article
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-sm text-dark-500 mt-8">
          Full articles coming soon. Contact us if you would like a topic covered.
        </p>
      </div>
    </section>
  );
};

export default Blog;
