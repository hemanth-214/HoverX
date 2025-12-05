import { mutation } from "./_generated/server";

export const initializeDatabase = mutation({
  args: {},
  handler: async (ctx) => {
    // Check if initialization has already been done
    const existingPosts = await ctx.db.query("blogPosts").collect();
    const existingFaqs = await ctx.db.query("faqs").collect();
    
    if (existingPosts.length > 0 && existingFaqs.length > 0) {
      return "Database already initialized";
    }

    let results = [];

    // Initialize blog posts if empty
    if (existingPosts.length === 0) {
      const blogPosts = [
        {
          title: "The Future of Web Development in 2024",
          slug: "future-of-web-development-2024",
          excerpt: "Exploring the latest trends and technologies shaping the web development landscape, from AI integration to new frameworks.",
          content: `The web development landscape is evolving rapidly, and 2024 promises to be an exciting year for developers and businesses alike.

**Key Trends to Watch:**

1. **AI-Powered Development Tools**
   - GitHub Copilot and similar tools are revolutionizing how we write code
   - AI-assisted debugging and optimization
   - Automated testing and deployment

2. **Modern JavaScript Frameworks**
   - React Server Components gaining traction
   - Svelte and SvelteKit growing popularity
   - Vue 3 with Composition API becoming mainstream

3. **Performance-First Approach**
   - Core Web Vitals as ranking factors
   - Edge computing and CDN optimization
   - Progressive Web Apps (PWAs) evolution

4. **Developer Experience (DX)**
   - Better tooling and faster build times
   - Improved debugging capabilities
   - Seamless deployment workflows

At Team HK, we stay ahead of these trends to deliver cutting-edge solutions for our clients. Whether you're looking to modernize your existing application or build something new from scratch, we're here to help you navigate the ever-changing web development landscape.`,
          category: "Technology",
          tags: ["web development", "trends", "2024", "AI", "frameworks"],
          published: true,
          readTime: "5 min read",
          author: "Team HK",
          featured: true,
          publishedAt: Date.now() - 86400000, // 1 day ago
        },
        {
          title: "Building Scalable React Applications",
          slug: "building-scalable-react-applications",
          excerpt: "Best practices for creating maintainable and scalable React applications that can grow with your business needs.",
          content: `Building scalable React applications requires careful planning and adherence to best practices. Here's our comprehensive guide to creating applications that can grow with your business.

**Architecture Principles:**

1. **Component Structure**
   - Keep components small and focused
   - Use composition over inheritance
   - Implement proper prop drilling alternatives

2. **State Management**
   - Choose the right state management solution
   - Context API for simple state
   - Redux Toolkit for complex applications
   - Zustand for lightweight solutions

3. **Code Organization**
   - Feature-based folder structure
   - Consistent naming conventions
   - Proper separation of concerns

4. **Performance Optimization**
   - React.memo for expensive components
   - useMemo and useCallback hooks
   - Code splitting and lazy loading
   - Bundle size optimization

5. **Testing Strategy**
   - Unit tests with Jest and React Testing Library
   - Integration tests for user flows
   - End-to-end tests with Playwright or Cypress

**Tools We Recommend:**
- TypeScript for type safety
- ESLint and Prettier for code quality
- Husky for git hooks
- Storybook for component documentation

Following these practices ensures your React application remains maintainable and performant as it scales.`,
          category: "Development",
          tags: ["react", "scalability", "best practices", "architecture"],
          published: true,
          readTime: "8 min read",
          author: "Team HK",
          featured: false,
          publishedAt: Date.now() - 172800000, // 2 days ago
        }
      ];

      for (const post of blogPosts) {
        await ctx.db.insert("blogPosts", post);
      }
      results.push(`Seeded ${blogPosts.length} blog posts`);
    }

    // Initialize FAQs if empty
    if (existingFaqs.length === 0) {
      const faqs = [
        {
          question: "How long does it take to build a website?",
          answer: "Timeline depends on project complexity. Simple landing pages take 2-3 days, business websites take 5-10 days, and full-stack applications take 10-30 days. We provide detailed timelines during consultation.",
          category: "General",
          order: 1,
          active: true,
        },
        {
          question: "What technologies do you use?",
          answer: "We use modern technologies like React, Next.js, Node.js, Tailwind CSS, Convex, and more. We choose the best tech stack based on your project requirements and scalability needs.",
          category: "Technical",
          order: 2,
          active: true,
        },
        {
          question: "Do you provide hosting and domain services?",
          answer: "Yes, we can help set up hosting and domain registration. We work with reliable providers like Vercel, Netlify, and others to ensure your website is fast and secure.",
          category: "Services",
          order: 3,
          active: true,
        },
        {
          question: "Can you redesign my existing website?",
          answer: "Absolutely! We can redesign and rebuild your existing website with modern design, better performance, and new features while maintaining your brand identity and improving user experience.",
          category: "Services",
          order: 4,
          active: true,
        },
        {
          question: "Do you offer ongoing maintenance and support?",
          answer: "Yes, we provide ongoing maintenance, updates, security monitoring, and technical support. We offer different maintenance packages based on your needs and budget.",
          category: "Support",
          order: 5,
          active: true,
        }
      ];

      for (const faq of faqs) {
        await ctx.db.insert("faqs", faq);
      }
      results.push(`Seeded ${faqs.length} FAQs`);
    }

    return results.length > 0 ? results.join(", ") : "No initialization needed";
  },
});
