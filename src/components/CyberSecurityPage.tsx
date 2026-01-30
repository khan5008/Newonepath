"use client";

import ServicePageTemplate from "./ServicePageTemplate";

export default function CyberSecurityPage() {
  const processItems = [
    {
      id: "security-assessment",
      title: "Security Assessment & Audit",
      content: "Comprehensive security assessments including vulnerability scanning, penetration testing, and security audits to identify potential threats and weaknesses in your systems."
    },
    {
      id: "threat-analysis",
      title: "Threat Analysis & Risk Management",
      content: "Advanced threat intelligence and risk analysis to understand your security landscape and develop targeted protection strategies against emerging cyber threats."
    },
    {
      id: "security-implementation",
      title: "Security Implementation",
      content: "Implementation of robust security measures including firewalls, intrusion detection systems, encryption, access controls, and multi-factor authentication."
    },
    {
      id: "compliance-management",
      title: "Compliance Management",
      content: "Ensuring compliance with industry standards and regulations such as GDPR, HIPAA, PCI DSS, SOX, and other relevant security frameworks and requirements."
    },
    {
      id: "incident-response",
      title: "Incident Response & Recovery",
      content: "24/7 security monitoring, incident response planning, and disaster recovery procedures to quickly address security breaches and minimize business impact."
    },
    {
      id: "security-training",
      title: "Security Training & Awareness",
      content: "Employee security training programs and awareness campaigns to build a security-conscious culture and reduce human-related security risks."
    }
  ];

  const relatedIndustries = [
    {
      title: "Finance",
      description: "Advanced cybersecurity solutions for financial institutions protecting against fraud, data breaches, and regulatory compliance",
      image: "/assets/Rectangle 88.png"
    },
    {
      title: "Healthcare",
      description: "HIPAA-compliant security solutions protecting patient data and medical systems from cyber threats and breaches",
      image: "/assets/Rectangle 88 (1).png"
    },
    {
      title: "Government",
      description: "High-security solutions for government agencies with classified data protection and national security requirements",
      image: "/assets/Rectangle 88 (2).png"
    },
    {
      title: "E-commerce",
      description: "Comprehensive security for online businesses protecting customer data, payment information, and transaction security",
      image: "/assets/Rectangle 88 (3).png"
    }
  ];

  const caseStudies = [
    {
      title: "Banking Security: Multi-layered cybersecurity implementation for a major financial institution",
      category: "Finance / Cybersecurity",
      image: "/assets/Rectangle 84.png"
    },
    {
      title: "Healthcare Protection: HIPAA-compliant security framework for a healthcare network",
      category: "Healthcare / Data Protection",
      image: "/assets/Rectangle 84 (1).png"
    },
    {
      title: "Enterprise Security: Complete security transformation for a multinational corporation",
      category: "Enterprise / Security Audit",
      image: "/assets/Rectangle 85.png"
    }
  ];

  const relatedServices = [
    {
      title: "Cloud Services",
      description: "Secure cloud infrastructure with advanced security controls, monitoring, and compliance frameworks",
      image: "/assets/Rectangle 88.png"
    },
    {
      title: "Web Development",
      description: "Secure web development practices with built-in security features and vulnerability protection",
      image: "/assets/Rectangle 88 (1).png"
    },
    {
      title: "Mobile App Development",
      description: "Mobile application security including secure coding, data encryption, and app security testing",
      image: "/assets/Rectangle 88 (2).png"
    },
    {
      title: "Quality Assurance & Testing",
      description: "Security testing and vulnerability assessments as part of comprehensive quality assurance processes",
      image: "/assets/Rectangle 88 (3).png"
    },
    {
      title: "Data Analytics",
      description: "Secure data analytics platforms with privacy protection and compliance with data protection regulations",
      image: "/assets/Rectangle 88 (4).png"
    },
    {
      title: "Network Infrastructure",
      description: "Secure network design and implementation with advanced threat detection and prevention systems",
      image: "/assets/Rectangle 88 (5).png"
    }
  ];

  const faqs = [
    {
      id: "faq1",
      question: "What cybersecurity services do you provide?",
      answer: "We provide comprehensive cybersecurity services including security assessments, penetration testing, vulnerability management, incident response, compliance consulting, security training, and 24/7 security monitoring and support."
    },
    {
      id: "faq2",
      question: "How do you help with regulatory compliance?",
      answer: "We help organizations achieve and maintain compliance with various regulations such as GDPR, HIPAA, PCI DSS, SOX, and industry-specific standards through gap analysis, implementation of controls, documentation, and ongoing compliance monitoring."
    },
    {
      id: "faq3",
      question: "What is your incident response process?",
      answer: "Our incident response process includes immediate threat containment, forensic analysis, damage assessment, system recovery, and post-incident review. We provide 24/7 emergency response and work to minimize business disruption while preserving evidence."
    },
    {
      id: "faq4",
      question: "How do you stay updated with emerging cyber threats?",
      answer: "We maintain active threat intelligence feeds, participate in security communities, conduct regular security research, and continuously update our security tools and methodologies to protect against the latest cyber threats and attack vectors."
    }
  ];

  return (
    <ServicePageTemplate
      title="Cyber Security"
      videoSrc="/assets/bg.mp4"
      subtitle="Advanced Cybersecurity Solutions for Digital Protection"
      description="Our comprehensive cybersecurity services protect your organization from evolving cyber threats and ensure the security of your digital assets. We provide end-to-end security solutions including threat assessment, security implementation, compliance management, and incident response. Our expert security team uses cutting-edge tools and methodologies to safeguard your business against cyberattacks, data breaches, and security vulnerabilities."
      processVideo="/assets/services.mp4"
      processItems={processItems}
      relatedIndustries={relatedIndustries}
      caseStudies={caseStudies}
      relatedServices={relatedServices}
      faqs={faqs}
      managerName="Abdul Hameed"
      managerTitle="Cybersecurity Specialist"
      managerImage="/assets/Manager.jpeg"
    />
  );
}