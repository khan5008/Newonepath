// Navigation utility functions for consistent routing across the website

export const getServiceRoute = (serviceName: string): string => {
  const serviceRoutes: { [key: string]: string } = {
    // Branding Services
    "Brand Consulting": "/brandconsulting",
    "Logo Design": "/logo",
    "Product Design": "/product",
    "Graphic Design": "/graphicdesign",
    "2D Visualization": "/2dvisualization",
    "2D / 3D Visualization": "/2dvisualization",
    "Video Creation & Editing": "/videocreation",
    "Video Creation": "/videocreation",
    
    // Intuitive Design Services
    "UI/UX Design": "/uiuxdesign",
    "Website Design": "/websitedesign",
    "Mobile Experience": "/mobileexperience",
    "Commerce Experience": "/commerceexperience",
    "Prototypes": "/prototype",
    "Prototype Development": "/prototype",
    
    // Technology Services
    "AI & Machine Learning": "/aiml",
    "Data & Analytics": "/dataanalytics",
    "Web Development": "/webdevelopment",
    "Mobile App Development": "/mobileappdevelopment",
    "E-Commerce": "/ecommerce",
    "Quality Assurance & Testing": "/quality-assurance",
    "Quality Assurance": "/quality-assurance",
    "Cloud Services": "/cloud-services",
    "Cyber Security": "/cyber-security",
    
    // Digital Marketing Services
    "Search Engine Optimization": "/searchengine",
    "SEO": "/searchengine",
    "Social Media Management": "/socialmedia",
    "Performance Marketing": "/performancemarketing",
    "Content Marketing": "/contentmarketing",
    "Marketing Automation": "/marketingautomation",
    "Analytics": "/analytics",
    
    // ERP Services
    "Microsoft Dynamics": "/microsoftdynamics",
    "Odoo": "/odoo",
    "Odoo Custom Development": "/odoo",
    "Odoo Implementation": "/odoo",
    "Odoo Integration": "/odoo",
    
    // Main Service Categories
    "Design": "/design",
    "Build": "/build",
    "Market": "/market",
    "Services": "/services",
    "Solutions": "/solutions",
    "Industries": "/industries",
    "Portfolio": "/portfolio",
    "About": "/about",
    "Contact": "/contact",
    "Careers": "/career2"
  };

  return serviceRoutes[serviceName] || "/services";
};

export const getBlogRoute = (blogId: number): string => {
  return `/blog/${blogId}`;
};

export const getInsightsRoute = (): string => {
  return "/insights";
};

// Blog post mapping for insights sections
export const getInsightsBlogMapping = () => {
  return [
    {
      id: 1,
      title: "The Future of AI-Native Engineering: Transforming Software Development",
      category: "Technology",
      readTime: "12 min read"
    },
    {
      id: 2,
      title: "NodeJS vs Python: Choosing the Right Backend Technology in 2026",
      category: "Development", 
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Complete Guide to Mobile App Development in 2026",
      category: "Development",
      readTime: "15 min read"
    },
    {
      id: 4,
      title: "Design Systems: Building Consistent User Experiences",
      category: "Design",
      readTime: "10 min read"
    },
    {
      id: 5,
      title: "The Rise of Micro-Frontends: Architecture for Scale",
      category: "Technology",
      readTime: "11 min read"
    },
    {
      id: 6,
      title: "Digital Marketing Trends That Will Define 2026",
      category: "Marketing",
      readTime: "9 min read"
    }
  ];
};