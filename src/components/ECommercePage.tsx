"use client";

import ServicePageTemplate from "./ServicePageTemplate";

export default function ECommercePage() {
  const processItems = [
    {
      id: "platform-analysis",
      title: "Platform Analysis & Strategy",
      content: "We analyze your business requirements and recommend the best e-commerce platform that aligns with your goals, scalability needs, and budget constraints."
    },
    {
      id: "store-design",
      title: "Store Design & Development",
      content: "Creating visually appealing and user-friendly online stores with intuitive navigation, responsive design, and optimized checkout processes."
    },
    {
      id: "payment-integration",
      title: "Payment Gateway Integration",
      content: "Seamless integration of secure payment gateways supporting multiple payment methods including cards, digital wallets, and local payment options."
    },
    {
      id: "inventory-management",
      title: "Inventory Management",
      content: "Advanced inventory management systems with real-time stock tracking, automated reorder points, and multi-location inventory support."
    },
    {
      id: "performance-optimization",
      title: "Performance Optimization",
      content: "Optimizing site speed, implementing CDN, database optimization, and ensuring fast loading times for better user experience and SEO."
    },
    {
      id: "security-compliance",
      title: "Security & Compliance",
      content: "Implementing robust security measures including SSL certificates, PCI DSS compliance, and data protection protocols to ensure customer trust."
    }
  ];

  const relatedIndustries = [
    {
      title: "Retail",
      description: "Comprehensive e-commerce solutions for retail businesses to expand their digital presence and reach global markets",
      image: "/assets/Rectangle 88.png"
    },
    {
      title: "Fashion",
      description: "Stylish and modern e-commerce platforms designed specifically for fashion brands and clothing retailers",
      image: "/assets/Rectangle 88 (1).png"
    },
    {
      title: "Electronics",
      description: "Advanced e-commerce solutions for electronics retailers with complex product configurations and specifications",
      image: "/assets/Rectangle 88 (2).png"
    },
    {
      title: "Food & Beverage",
      description: "Specialized e-commerce platforms for food delivery, restaurant chains, and beverage companies",
      image: "/assets/Rectangle 88 (3).png"
    }
  ];

  const caseStudies = [
    {
      title: "Lulu Hypermarket: Building a one-click path for a search-intensive, high volume big brand store",
      category: "Retail / E-commerce",
      image: "/assets/Rectangle 84.png"
    },
    {
      title: "Fashion Forward: Complete e-commerce transformation for a leading fashion retailer",
      category: "Fashion / E-commerce",
      image: "/assets/Rectangle 84 (1).png"
    },
    {
      title: "TechMart: Scalable e-commerce platform for electronics and gadgets marketplace",
      category: "Electronics / E-commerce",
      image: "/assets/Rectangle 85.png"
    }
  ];

  const relatedServices = [
    {
      title: "Web Development",
      description: "Custom web development solutions that power your e-commerce platform with robust functionality",
      image: "/assets/Rectangle 88.png"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps to extend your e-commerce reach to mobile users",
      image: "/assets/Rectangle 88 (1).png"
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to drive traffic and increase conversions for your online store",
      image: "/assets/Rectangle 88 (2).png"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design approaches that create intuitive and engaging shopping experiences",
      image: "/assets/Rectangle 88 (3).png"
    },
    {
      title: "Data Analytics",
      description: "Advanced analytics and reporting tools to track performance and optimize your e-commerce operations",
      image: "/assets/Rectangle 88 (4).png"
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud infrastructure solutions to ensure your e-commerce platform performs under any load",
      image: "/assets/Rectangle 88 (5).png"
    }
  ];

  const faqs = [
    {
      id: "faq1",
      question: "What e-commerce platforms do you work with?",
      answer: "We work with all major e-commerce platforms including Shopify, WooCommerce, Magento, BigCommerce, and custom-built solutions. We help you choose the right platform based on your specific business needs, budget, and scalability requirements."
    },
    {
      id: "faq2",
      question: "How long does it take to develop an e-commerce website?",
      answer: "The timeline varies depending on the complexity and features required. A basic e-commerce store typically takes 4-6 weeks, while more complex platforms with custom features can take 8-12 weeks. We provide detailed timelines during the planning phase."
    },
    {
      id: "faq3",
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes, we offer comprehensive maintenance and support packages including security updates, performance monitoring, backup management, and technical support to ensure your e-commerce platform runs smoothly."
    },
    {
      id: "faq4",
      question: "Can you integrate third-party services and APIs?",
      answer: "Absolutely! We can integrate various third-party services including payment gateways, shipping providers, inventory management systems, CRM tools, email marketing platforms, and analytics tools to enhance your e-commerce functionality."
    }
  ];

  return (
    <ServicePageTemplate
      title="E-Commerce"
      videoSrc="/assets/Eommerce.mp4"
      subtitle="Complete E-Commerce Solutions for Digital Success"
      description="Our comprehensive e-commerce development services help businesses establish and grow their online presence. From custom online stores to marketplace integrations, we create scalable e-commerce solutions that drive sales and enhance customer experience. Whether you're a startup looking to launch your first online store or an established business seeking to optimize your e-commerce platform, we have the expertise to deliver results."
      processVideo="/assets/brandconsulting (2).mp4"
      processItems={processItems}
      relatedIndustries={relatedIndustries}
      caseStudies={caseStudies}
      relatedServices={relatedServices}
      faqs={faqs}
      managerName="Abdul Hameed"
      managerTitle="E-Commerce Solutions Lead"
      managerImage="/assets/Manager.jpeg"
    />
  );
}