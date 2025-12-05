# Manual Setup Instructions for Team HK Portfolio

## 🎨 Logo Setup
1. **Add Your Logo**: Place your logo file as `/public/logo.png`
   - Recommended size: 200x200px or larger (square format)
   - Format: PNG with transparent background preferred
   - The site will automatically detect and use your logo
   - If no logo is found, it falls back to "HK" text logo

## 📸 Project Screenshots
1. **Add Project Images**: Place project screenshots in `/public/projects/`
   - `bold-gym.png` - Bold Gym project screenshot
   - `cafeluxe.png` - CafeLuxe project screenshot  
   - `craft-store.png` - Craft Store project screenshot
   - Recommended size: 1200x800px (3:2 aspect ratio)
   - Format: PNG or JPG, optimized for web (under 500KB each)

## ⚙️ Content Customization
Edit `/src/config/siteConfig.ts` to customize:

### Company Information
- Company name, tagline, description
- Contact email, phone, WhatsApp
- Response time

### Hero Section
- Badge text, title, subtitle
- Statistics (projects, clients, experience, support)

### About Section  
- Description, stats, skills with percentages
- Highlight points

### Portfolio Projects
- **Real Projects**: Update with your actual project details
  - Title, description, category
  - Technologies used
  - Live URLs
  - Image paths
- **Placeholder Projects**: Future projects for display

### Testimonials
- Client names, companies, roles
- Testimonial content and ratings

### Social Links
- Email, WhatsApp, and other social media links

## 🎨 Styling Customization
- **Colors**: Edit gradient colors in Tailwind classes throughout components
- **Fonts**: Modify font families in `/src/index.css`
- **Animations**: Adjust transition durations and effects in component classes

## 📝 Content Management
The site uses Convex database for:
- **Contact Form Submissions**: Automatically stored and manageable
- **Blog Posts**: Add/edit through Convex dashboard
- **FAQs**: Manage through database or fallback to hardcoded ones
- **Testimonials**: Can be managed through database

## 🚀 Deployment Checklist
1. ✅ Add your logo to `/public/logo.png`
2. ✅ Add project screenshots to `/public/projects/`
3. ✅ Update `/src/config/siteConfig.ts` with your information
4. ✅ Test contact form functionality
5. ✅ Verify all links work correctly
6. ✅ Check responsive design on mobile devices
7. ✅ Test dark/light mode toggle

## 🔧 Advanced Customization
- **Navigation**: Edit `/src/components/Navigation.tsx`
- **Footer**: Edit `/src/components/Footer.tsx`  
- **Color Scheme**: Modify Tailwind config in `/tailwind.config.js`
- **Add New Pages**: Create in `/src/pages/` and add to routing in `/src/App.tsx`

## 📊 Analytics & SEO
- Add Google Analytics ID to track visitors
- Update meta tags in `/index.html`
- Add structured data for better SEO
- Optimize images for faster loading

## 🛠️ Maintenance
- Regularly update project portfolio
- Add new blog posts for SEO
- Monitor contact form submissions
- Update testimonials with new client feedback
- Keep technology stack information current

## 📞 Support
For technical support or customization help:
- Email: hoverxhk007@gmail.com
- WhatsApp: +91 62666 02150
- Response time: 2-4 hours
