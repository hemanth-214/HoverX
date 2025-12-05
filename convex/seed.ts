import { mutation } from "./_generated/server";

export const seedBlogPosts = mutation({
  args: {},
  handler: async (ctx) => {
    // Check if we already have blog posts
    const existingPosts = await ctx.db.query("blogPosts").collect();
    if (existingPosts.length > 0) {
      return "Blog posts already exist";
    }

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
      },
      {
        title: "UI/UX Design Principles That Convert",
        slug: "ui-ux-design-principles-that-convert",
        excerpt: "How good design principles can significantly improve your conversion rates and user engagement.",
        content: `Great design isn't just about aesthetics—it's about creating experiences that guide users toward their goals while achieving your business objectives.

**Core Design Principles:**

1. **Clarity and Simplicity**
   - Clear visual hierarchy
   - Minimal cognitive load
   - Intuitive navigation patterns

2. **User-Centered Design**
   - Understand your target audience
   - Create user personas and journey maps
   - Test with real users regularly

3. **Conversion Optimization**
   - Strategic placement of CTAs
   - Reduce friction in user flows
   - A/B test design elements

4. **Accessibility First**
   - WCAG compliance
   - Keyboard navigation support
   - Screen reader compatibility
   - Color contrast standards

5. **Mobile-First Approach**
   - Responsive design principles
   - Touch-friendly interfaces
   - Performance on mobile devices

**Design Tools We Use:**
- Figma for design and prototyping
- Adobe Creative Suite for graphics
- Principle for animations
- Maze for user testing

**Measuring Success:**
- Conversion rate tracking
- User engagement metrics
- Heat mapping analysis
- User feedback collection

Remember, good design is invisible—users should be able to accomplish their goals without thinking about the interface.`,
        category: "Design",
        tags: ["ui", "ux", "conversion", "design principles"],
        published: true,
        readTime: "6 min read",
        author: "Team HK",
        featured: false,
        publishedAt: Date.now() - 259200000, // 3 days ago
      }
    ];

    for (const post of blogPosts) {
      await ctx.db.insert("blogPosts", post);
    }

    return `Seeded ${blogPosts.length} blog posts`;
  },
});

export const seedFAQs = mutation({
  args: {},
  handler: async (ctx) => {
    // Check if we already have FAQs
    const existingFaqs = await ctx.db.query("faqs").collect();
    if (existingFaqs.length > 0) {
      return "FAQs already exist";
    }

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
      },
      {
        question: "What is your payment structure?",
        answer: "We typically work with a 50% advance payment to start the project and 50% upon completion. For larger projects, we can arrange milestone-based payments to ensure transparency and trust.",
        category: "Pricing",
        order: 6,
        active: true,
      },
      {
        question: "Can you integrate third-party services and APIs?",
        answer: "Yes, we specialize in API integrations including payment gateways (Stripe, Razorpay), CRM systems, email services, social media platforms, and custom APIs based on your business needs.",
        category: "Technical",
        order: 7,
        active: true,
      },
      {
        question: "Do you provide SEO optimization?",
        answer: "Yes, all our websites come with basic SEO optimization including meta tags, structured data, fast loading speeds, and mobile responsiveness. We can also provide advanced SEO services if needed.",
        category: "Services",
        order: 8,
        active: true,
      },
      {
        question: "What if I need changes after the project is completed?",
        answer: "We provide free minor revisions for 30 days after project completion. For major changes or new features, we offer competitive rates and quick turnaround times.",
        category: "Support",
        order: 9,
        active: true,
      },
      {
        question: "Do you work with international clients?",
        answer: "Yes, we work with clients globally. We use modern communication tools and can adapt to different time zones to ensure smooth project collaboration and delivery.",
        category: "General",
        order: 10,
        active: true,
      }
    ];

    for (const faq of faqs) {
      await ctx.db.insert("faqs", faq);
    }

    return `Seeded ${faqs.length} FAQs`;
  },
});
