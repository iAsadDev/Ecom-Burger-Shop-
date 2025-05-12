import React from 'react';
import './Blog.css';
import { FaCalendarAlt, FaUser, FaComment, FaHeart, FaShare } from 'react-icons/fa';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Secret Behind Our Signature Burger Sauce',
      excerpt: 'Discover what makes our special sauce so irresistible to burger lovers everywhere.',
      date: 'May 15, 2023',
      author: 'Chef Michael',
      comments: 12,
      likes: 45,
      category: 'Recipes',
      image: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=800&auto=format&fit=crop&q=60'
    },
    {
      id: 2,
      title: '10 Tips for Grilling the Perfect Burger at Home',
      excerpt: 'Learn professional techniques to elevate your backyard BBQ burger game.',
      date: 'April 28, 2023',
      author: 'Grill Master Sarah',
      comments: 8,
      likes: 32,
      category: 'Tips',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=60'
    },
    {
      id: 3,
      title: 'Sustainable Beef: Our Commitment to Quality',
      excerpt: 'How we source ethical, environmentally-friendly beef without compromising taste.',
      date: 'March 10, 2023',
      author: 'Owner David',
      comments: 15,
      likes: 52,
      category: 'Sustainability',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=60'
    },
    {
      id: 4,
      title: 'The History of the American Burger',
      excerpt: 'Tracing the evolution of this iconic dish from its origins to modern variations.',
      date: 'February 22, 2023',
      author: 'Food Historian Emily',
      comments: 6,
      likes: 28,
      category: 'History',
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&auto=format&fit=crop&q=60'
    },
    {
      id: 5,
      title: 'Vegetarian Options That Even Meat Lovers Enjoy',
      excerpt: 'Our plant-based burgers that satisfy all types of customers.',
      date: 'January 18, 2023',
      author: 'Chef Michael',
      comments: 10,
      likes: 37,
      category: 'Vegetarian',
      image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&auto=format&fit=crop&q=60'
    },
    {
      id: 6,
      title: 'Behind the Scenes: A Day in Our Kitchen',
      excerpt: 'Photographic journey showing how we prepare 500+ burgers daily.',
      date: 'December 5, 2022',
      author: 'Manager Jessica',
      comments: 18,
      likes: 64,
      category: 'Behind Scenes',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=60'
    }
  ];

  const categories = [
    { name: 'All', count: 24 },
    { name: 'Recipes', count: 6 },
    { name: 'Tips', count: 5 },
    { name: 'Sustainability', count: 4 },
    { name: 'History', count: 3 },
    { name: 'Vegetarian', count: 4 },
    { name: 'Behind Scenes', count: 2 }
  ];

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <div className="blog-hero">
        <div className="hero-content">
          <h1>Burger Blog</h1>
          <p>News, recipes, and stories from our kitchen</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container blog-container">
        <div className="row">
          {/* Blog Posts */}
          <div className="col-lg-8">
            <div className="blog-posts">
              {blogPosts.map(post => (
                <article key={post.id} className="blog-post">
                  <div className="post-image">
                    <img src={post.image} alt={post.title} />
                    <span className="post-category">{post.category}</span>
                  </div>
                  <div className="post-content">
                    <h2>{post.title}</h2>
                    <div className="post-meta">
                      <span><FaCalendarAlt /> {post.date}</span>
                      <span><FaUser /> {post.author}</span>
                      <span><FaComment /> {post.comments} comments</span>
                    </div>
                    <p className="post-excerpt">{post.excerpt}</p>
                    <div className="post-footer">
                      <button className="read-more">Read More</button>
                      <div className="post-actions">
                        <span><FaHeart /> {post.likes}</span>
                        <span><FaShare /> Share</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="blog-pagination">
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              <button>Next →</button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="blog-sidebar">
              {/* Search */}
              <div className="sidebar-widget">
                <h3>Search</h3>
                <div className="search-box">
                  <input type="text" placeholder="Search articles..." />
                  <button>Search</button>
                </div>
              </div>

              {/* Categories */}
              <div className="sidebar-widget">
                <h3>Categories</h3>
                <ul className="category-list">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a href="#">{category.name} <span>({category.count})</span></a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Posts */}
              <div className="sidebar-widget">
                <h3>Popular Posts</h3>
                <div className="popular-posts">
                  {blogPosts.slice(0, 3).map(post => (
                    <div key={post.id} className="popular-post">
                      <img src={post.image} alt={post.title} />
                      <div>
                        <h4>{post.title}</h4>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="sidebar-widget newsletter-widget">
                <h3>Newsletter</h3>
                <p>Subscribe to get our latest recipes and tips</p>
                <form>
                  <input type="email" placeholder="Your email address" />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;