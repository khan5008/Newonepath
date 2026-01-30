"use client";

import ServicePageTemplate from "./ServicePageTemplate";

export default function QualityAssurancePage() {
  const processItems = [
    {
      id: "test-planning",
      title: "Test Planning & Strategy",
      content: "Comprehensive test planning including test strategy development, scope definition, resource allocation, and timeline establishment to ensure thorough quality assurance."
    },
    {
      id: "manual-testing",
      title: "Manual Testing",
      content: "Detailed manual testing processes including functional testing, usability testing, exploratory testing, and user acceptance testing to identify issues from a user perspective."
    },
    {
      id: "automation-testing",
      title: "Test Automation",
      content: "Implementation of automated testing frameworks and scripts for regression testing, performance testing, and continuous integration to improve efficiency and coverage."
    },
    {
      id: "performance-testing",
      title: "Performance Testing",
      content: "Load testing, stress testing, and scalability testing to ensure your applications perform optimally under various conditions and user loads."
    },
    {
      id: "security-testing",
      title: "Security Testing",
      content: "Comprehensive security assessments including vulnerability testing, penetration testing, and security code reviews to protect against threats and breaches."
    },
    {
      id: "reporting-analysis",
      title: "Reporting & Analysis",
      content: "Detailed test reporting with defect analysis, test coverage metrics, and quality insights to support informed decision-making and continuous improvement."
    }
  ];

  const relatedIndustries = [
    {
      title: "Healthcare",
      description: "Specialized QA testing for healthcare applications ensuring compliance with medical standards and patient data security",
      image: "/assets/Rectangle 88.png"
    },
    {
      title: "Finance",
      description: "Rigorous testing protocols for financial applications with focus on security, accuracy, and regulatory compliance",
      image: "/assets/Rectangle 88 (1).png"
    },
    {
      title: "E-commerce",
      description: "Comprehensive testing for online stores including payment processing, inventory management, and user experience",
      image: "/assets/Rectangle 88 (2).png"
    },
    {
      title: "Education",
      description: "Quality assurance for educational platforms ensuring accessibility, performance, and seamless learning experiences",
      image: "/assets/Rectangle 88 (3).png"
    }
  ];

  const caseStudies = [
    {
      title: "FinTech Platform: Comprehensive QA testing for a secure financial services application",
      category: "Finance / QA Testing",
      image: "/assets/Rectangle 84.png"
    },
    {
      title: "Healthcare Portal: End-to-end testing ensuring HIPAA compliance and patient data security",
      category: "Healthcare / QA Testing",
      image: "/assets/Rectangle 84 (1).png"
    },
    {
      title: "E-learning Platform: Performance and usability testing for scalable educational technology",
      category: "Education / QA Testing",
      image: "/assets/Rectangle 85.png"
    }
  ];

  const relatedServices = [
    {
      title: "Web Development",
      description: "Quality-driven web development with integrated testing throughout the development lifecycle",
      image: "/assets/Rectangle 88.png"
    },
    {
      title: "Mobile App Development",
      description: "Mobile app development with comprehensive testing across devices, platforms, and operating systems",
      image: "/assets/Rectangle 88 (1).png"
    },
    {
      title: "Cyber Security",
      description: "Security testing and vulnerability assessments to protect your applications from threats",
      image: "/assets/Rectangle 88 (2).png"
    },
    {
      title: "Cloud Services",
      description: "Cloud-based testing environments and infrastructure for scalable quality assurance processes",
      image: "/assets/Rectangle 88 (3).png"
    },
    {
      title: "DevOps",
      description: "Integration of QA processes into DevOps pipelines for continuous testing and deployment",
      image: "/assets/Rectangle 88 (4).png"
    },
    {
      title: "Performance Optimization",
      description: "Performance testing and optimization services to ensure applications meet speed and scalability requirements",
      image: "/assets/Rectangle 88 (5).png"
    }
  ];

  const faqs = [
    {
      id: "faq1",
      question: "What types of testing do you provide?",
      answer: "We provide comprehensive testing services including functional testing, performance testing, security testing, usability testing, compatibility testing, regression testing, and automated testing. Our approach covers both manual and automated testing methodologies."
    },
    {
      id: "faq2",
      question: "How do you ensure the quality of your testing process?",
      answer: "We follow industry-standard testing methodologies and best practices, maintain detailed test documentation, use proven testing tools and frameworks, and provide comprehensive reporting with metrics and insights to ensure the highest quality standards."
    },
    {
      id: "faq3",
      question: "Can you integrate with our existing development workflow?",
      answer: "Yes, we can seamlessly integrate our QA processes into your existing development workflow, including Agile, DevOps, and CI/CD pipelines. We work with popular tools like Jira, Jenkins, Git, and various testing frameworks."
    },
    {
      id: "faq4",
      question: "What is your approach to test automation?",
      answer: "Our test automation approach focuses on identifying the right test cases for automation, selecting appropriate tools and frameworks, creating maintainable test scripts, and integrating automated tests into your CI/CD pipeline for continuous quality assurance."
    }
  ];

  return (
    <ServicePageTemplate
      title="Quality Assurance & Testing"
      videoSrc="/assets/QualityAssurance.mp4"
      subtitle="Comprehensive QA Testing Services for Reliable Software"
      description="Our quality assurance and testing services ensure your software applications meet the highest standards of quality, performance, and security. We provide end-to-end testing solutions including manual testing, test automation, performance testing, and security testing. Our experienced QA team uses industry-leading tools and methodologies to identify issues early, reduce costs, and deliver exceptional user experiences."
      processVideo="/assets/dataanalytics.mp4"
      processItems={processItems}
      relatedIndustries={relatedIndustries}
      caseStudies={caseStudies}
      relatedServices={relatedServices}
      faqs={faqs}
      managerName="Abdul Hameed"
      managerTitle="QA Testing Manager"
      managerImage="/assets/Manager.jpeg"
    />
  );
}