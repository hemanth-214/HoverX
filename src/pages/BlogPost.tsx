import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = useQuery(api.blogPosts.getBySlug, { slug: slug || '' });

  if (!post) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-3xl">📄</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Post Not Found
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="pt-16">
      {/* Article Header */}
      <section className="py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 dark:from-slate-900 dark:via-violet-900 dark:to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Link
              to="/blog"
              className="inline-flex items-center text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors duration-300"
            >
              ← Back to Blog
            </Link>
            
            <div className="space-y-4">
              <span className="px-4 py-2 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 text-sm font-medium rounded-full">
                {post.category}
              </span>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                {post.title}
              </h1>
              
              <div className="flex items-center justify-center space-x-6 text-slate-600 dark:text-slate-400">
                <span>By {post.author}</span>
                <span>•</span>
                <span>{post.publishedAt ? formatDate(post.publishedAt) : 'Draft'}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          {post.imageUrl && (
            <div className="mb-12">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          )}

          {/* Article Body */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              {post.excerpt}
            </div>
            
            <div 
              className="text-slate-700 dark:text-slate-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
            />
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Back to Blog CTA */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Enjoyed this article?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Check out more insights and tutorials from Team HK.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-bold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Read More Articles
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
