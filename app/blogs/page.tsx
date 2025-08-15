'use client';

import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronRight, ChevronLeft, Search, Clock, Calendar, User, Tag } from 'lucide-react';
import Link from 'next/link';
import NeoPopButton from '@/components/ui/NeoPopButton';
import SectionHeader from '@/components/SectionHeader';

// Types
type BlogCategory = 'all' | 'startups' | 'technology' | 'funding' | 'growth' | 'product';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: BlogCategory[];
  image: string;
  slug: string;
}

// Mock data for blog posts
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Startup Ecosystems',
    excerpt: 'Exploring how artificial intelligence is transforming the way startups operate and scale in today\'s competitive landscape.',
    author: 'Sarah Johnson',
    date: '2023-10-15',
    readTime: '8 min read',
    category: ['technology', 'startups'],
    image: '/blog/ai-startup.jpg',
    slug: 'future-ai-startup-ecosystems'
  },
  {
    id: '2',
    title: 'Raising Your First $1M: A Founder\'s Guide',
    excerpt: 'Practical tips and strategies for early-stage founders looking to secure their first major funding round.',
    author: 'Michael Chen',
    date: '2023-10-10',
    readTime: '12 min read',
    category: ['funding', 'startups'],
    image: '/blog/funding-guide.jpg',
    slug: 'raising-first-million-guide'
  },
  {
    id: '3',
    title: 'Growth Hacking 2023: What\'s Working Now',
    excerpt: 'The most effective growth strategies that are delivering results for startups in the current market conditions.',
    author: 'Priya Patel',
    date: '2023-10-05',
    readTime: '10 min read',
    category: ['growth', 'startups'],
    image: '/blog/growth-hacking.jpg',
    slug: 'growth-hacking-2023'
  },
  {
    id: '4',
    title: 'Building Products Users Love',
    excerpt: 'Key principles for creating products that not only solve problems but also create passionate user bases.',
    author: 'David Kim',
    date: '2023-09-28',
    readTime: '9 min read',
    category: ['product', 'technology'],
    image: '/blog/product-love.jpg',
    slug: 'building-products-users-love'
  },
  {
    id: '5',
    title: 'The Rise of Web3 Startups',
    excerpt: 'How blockchain technology is enabling a new wave of decentralized applications and business models.',
    author: 'Alex Rivera',
    date: '2023-09-20',
    readTime: '11 min read',
    category: ['technology', 'startups'],
    image: '/blog/web3-startups.jpg',
    slug: 'rise-of-web3-startups'
  },
  {
    id: '6',
    title: 'From Zero to Unicorn: Lessons from 10 Successful Startups',
    excerpt: 'Analyzing the common patterns and strategies that helped these companies reach billion-dollar valuations.',
    author: 'Emily Zhang',
    date: '2023-09-15',
    readTime: '15 min read',
    category: ['startups', 'growth'],
    image: '/blog/unicorn-lessons.jpg',
    slug: 'zero-to-unicorn-lessons'
  },
];

const categories: { value: BlogCategory; label: string }[] = [
  { value: 'all', label: 'All Articles' },
  { value: 'startups', label: 'Startups' },
  { value: 'technology', label: 'Technology' },
  { value: 'funding', label: 'Funding' },
  { value: 'growth', label: 'Growth' },
  { value: 'product', label: 'Product' },
];

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter posts based on search query and selected category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || post.category.includes(selectedCategory);
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Get current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Matching Builders Circle */}
      <section className="min-h-[calc(100vh-6rem)] flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
          <div className="text-center max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-medium mb-6 backdrop-blur-sm">
              <span>INSIGHTS & STORIES</span>
            </div>
            
            {/* Title and Description - Matching Builders Circle */}
            <SectionHeader
              title="Builders Blog"
              description="Discover stories, insights, and expert advice from founders, investors, and industry leaders."
              className="mb-8"
              titleClassName="text-4xl md:text-5xl font-bold text-white"
            />
            
            {/* Search Bar */}
            <div className="w-full max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-6 py-4 pl-14 bg-gray-900/50 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-500 backdrop-blur-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => {
                    setSelectedCategory(category.value);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.value
                      ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-800'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
            
            <NeoPopButton
              as="button"
              variant="primary"
              size="lg"
              onClick={() => {
                const blogSection = document.getElementById('blog-posts');
                if (blogSection) {
                  blogSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Explore Articles
              <ArrowRight className="w-5 h-5 ml-2" />
            </NeoPopButton>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section id="blog-posts" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentPosts.map((post) => (
                  <div key={post.id} className="group relative overflow-hidden rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10">
                    <div className="relative h-48 bg-gray-900 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <div className="flex flex-wrap gap-2">
                          {post.category.map((cat) => (
                            <span 
                              key={cat} 
                              className="px-2.5 py-1 text-xs font-medium rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                            >
                              {categories.find(c => c.value === cat)?.label || cat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-400 mb-3">
                        <span className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </span>
                        <span className="mx-2">•</span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(post.date)}
                        </span>
                        <span className="mx-2">•</span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
                      <Link 
                        href={`/blogs/${post.slug}`}
                        className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium group transition-colors"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-12">
                  <nav className="flex items-center space-x-2">
                    <button
                      onClick={() => paginate(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="p-2 rounded-full border border-gray-800 text-gray-400 hover:bg-gray-800/50 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      // Show first page, last page, and pages around current page
                      let pageNumber;
                      if (totalPages <= 5) {
                        pageNumber = i + 1;
                      } else if (currentPage <= 3) {
                        pageNumber = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNumber = totalPages - 4 + i;
                      } else {
                        pageNumber = currentPage - 2 + i;
                      }
                      
                      if (pageNumber > totalPages) return null;
                      
                      return (
                        <button
                          key={pageNumber}
                          onClick={() => paginate(pageNumber)}
                          className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium ${
                            currentPage === pageNumber
                              ? 'bg-yellow-500 text-black'
                              : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                          }`}
                        >
                          {pageNumber}
                        </button>
                      );
                    })}
                    
                    <button
                      onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className="p-2 rounded-full border border-gray-800 text-gray-400 hover:bg-gray-800/50 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </nav>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/10 text-yellow-500 mb-4">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
              <p className="text-gray-400 max-w-md mx-auto">
                We couldn&apos;t find any articles matching your search. Try adjusting your filters or search term.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setCurrentPage(1);
                }}
                className="mt-6 px-6 py-2.5 bg-yellow-500 text-black font-medium rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to share your insights with our community?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for experienced founders and industry experts to contribute to our blog.
            </p>
            <NeoPopButton
              as="link"
              href="/contact?subject=Guest%20Blog%20Post"
              variant="primary"
              className="text-lg px-8 py-3"
            >
              Write for Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </NeoPopButton>
          </div>
        </div>
      </section>
    </div>
  );
}
