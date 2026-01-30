"use client";

import ServicePageTemplate from "./ServicePageTemplate";

export default function CloudServicesPage() {
  const processItems = [
    {
      id: "cloud-assessment",
      title: "Cloud Readiness Assessment",
      content: "Comprehensive evaluation of your current infrastructure, applications, and business requirements to determine the best cloud migration strategy and architecture."
    },
    {
      id: "architecture-design",
      title: "Cloud Architecture Design",
      content: "Design of scalable, secure, and cost-effective cloud architectures tailored to your specific needs, including multi-cloud and hybrid cloud solutions."
    },
    {
      id: "migration-planning",
      title: "Migration Planning & Execution",
      content: "Detailed migration planning with minimal downtime, including data migration, application modernization, and seamless transition to cloud infrastructure."
    },
    {
      id: "devops-automation",
      title: "DevOps & Automation",
      content: "Implementation of CI/CD pipelines, infrastructure as code, automated deployment processes, and monitoring solutions for efficient cloud operations."
    },
    {
      id: "security-compliance",
      title: "Security & Compliance",
      content: "Implementation of cloud security best practices, compliance frameworks, identity management, and continuous security monitoring to protect your cloud assets."
    },
    {
      id: "optimization-monitoring",
      title: "Optimization & Monitoring",
      content: "Continuous monitoring, performance optimization, cost management, and scaling strategies to ensure optimal cloud resource utilization and performance."
    }
  ];

  const relatedIndustries = [
    {
      title: "Healthcare",
      description: "HIPAA-compliant cloud solutions for healthcare organizations with secure data storage and processing capabilities",
      image: "/assets/Rectangle 88.png"
    },
    {
      title: "Finance",
      description: "Secure and compliant cloud infrastructure for financial institutions with high availability and disaster recovery",
      image: "/assets/Rectangle 88 (1).png"
    },
    {
      title: "E-commerce",
      description: "Scalable cloud solutions for e-commerce platforms to handle traffic spikes and ensure optimal performance",
      image: "/assets/Rectangle 88 (2).png"
    },
    {
      title: "Manufacturing",
      description: "Industrial IoT and cloud solutions for manufacturing processes, supply chain management, and predictive maintenance",
      image: "/assets/Rectangle 88 (3).png"
    }
  ];

  const caseStudies = [
    {
      title: "Enterprise Migration: Complete cloud transformation for a multinational corporation",
      category: "Enterprise / Cloud Migration",
      image: "/assets/Rectangle 84.png"
    },
    {
      title: "Startup Scaling: Cloud-native architecture enabling rapid growth and global expansion",
      category: "Technology / Cloud Native",
      image: "/assets/Rectangle 84 (1).png"
    },
    {
      title: "Healthcare Platform: HIPAA-compliant cloud infrastructure for patient data management",
      category: "Healthcare / Cloud Security",
      image: "/assets/Rectangle 85.png"
    }
  ];

  const relatedServices = [
    {
      title: "Web Development",
      description: "Cloud-native web applications built for scalability, performance, and global accessibility",
      image: "/assets/Rectangle 88.png"
    },
    {
      title: "Mobile App Development",
      description: "Mobile applications with cloud backend services for seamless data synchronization and scalability",
      image: "/assets/Rectangle 88 (1).png"
    },
    {
      title: "Cyber Security",
      description: "Comprehensive cloud security solutions including threat detection, compliance, and data protection",
      image: "/assets/Rectangle 88 (2).png"
    },
    {
      title: "Data Analytics",
      description: "Cloud-based analytics platforms for big data processing, machine learning, and business intelligence",
      image: "/assets/Rectangle 88 (3).png"
    },
    {
      title: "DevOps",
      description: "DevOps practices and tools for automated cloud deployment, monitoring, and infrastructure management",
      image: "/assets/Rectangle 88 (4).png"
    },
    {
      title: "AI & Machine Learning",
      description: "Cloud-powered AI and ML solutions for intelligent automation and data-driven insights",
      image: "/assets/Rectangle 88 (5).png"
    }
  ];

  const faqs = [
    {
      id: "faq1",
      question: "Which cloud platforms do you work with?",
      answer: "We work with all major cloud platforms including Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), and other specialized cloud providers. We help you choose the right platform based on your specific requirements and existing technology stack."
    },
    {
      id: "faq2",
      question: "How do you ensure data security during cloud migration?",
      answer: "We implement comprehensive security measures including data encryption in transit and at rest, secure migration protocols, access controls, and compliance with industry standards. Our migration process includes thorough security assessments and validation at each step."
    },
    {
      id: "faq3",
      question: "What is your approach to cloud cost optimization?",
      answer: "Our cost optimization approach includes right-sizing resources, implementing auto-scaling, using reserved instances, monitoring usage patterns, and providing ongoing recommendations for cost reduction while maintaining performance and reliability."
    },
    {
      id: "faq4",
      question: "Do you provide ongoing cloud management and support?",
      answer: "Yes, we offer comprehensive managed cloud services including 24/7 monitoring, performance optimization, security management, backup and disaster recovery, and ongoing support to ensure your cloud infrastructure operates efficiently."
    }
  ];

  return (
    <ServicePageTemplate
      title="Cloud Services"
      videoSrc="/assets/network.mp4"
      subtitle="Scalable Cloud Solutions for Modern Businesses"
      description="Our comprehensive cloud services help organizations leverage the power of cloud computing to achieve greater scalability, flexibility, and cost-efficiency. From cloud migration and architecture design to ongoing management and optimization, we provide end-to-end cloud solutions. Whether you're looking to migrate to the cloud, optimize existing cloud infrastructure, or build cloud-native applications, our expert team delivers reliable and secure cloud solutions."
      processVideo="/assets/bg.mp4"
      processItems={processItems}
      relatedIndustries={relatedIndustries}
      caseStudies={caseStudies}
      relatedServices={relatedServices}
      faqs={faqs}
      managerName="Abdul Hameed"
      managerTitle="Cloud Solutions Architect"
      managerImage="/assets/Manager.jpeg"
    />
  );
}