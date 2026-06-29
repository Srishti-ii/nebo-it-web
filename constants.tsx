import { Code, Figma, Aperture, LineChart } from 'lucide-react';
import { Service, TeamMember, Project, OrgMember } from './types';

export const LEADERSHIP_DATA = [
  {
    name: "Vir Bhan Sood",
    image: '/img/Sood.jpg',
    description: "25 years’ experience in Quality Assurance and inspection with RITES Limited, premier Third Party Inspection & Consultancy Organization. Conducted inspection of apprx.16000 tons of 60 Kg UIC Rails in China and wheels & wheel sets in Romania besides inspection of Wheels, Axles, Tyres & Wheel sets and other M&P items in foreign countries. Organized and supervised Quality Assurance and inspection of machinery Plant and equipment procured against World Bank funded projects of Health System Corporation of different State Governments on behalf of Oil Sector Clients such as Indian Oil Corporation Limited and IBP Co Ltd. Etc. Upgraded the RITES Northern Region Laboratory for testing of Metals. Surveillance of private and other Government testing laboratories. Vendor assessment prior to their approval .Construction supervision of Retail Outlets of IBP Company in Northern and Eastern Regions for assuring the Quality of works. Trained Lead Assessor in ISO 9001 and ISO 14001, worked as Management Representative Northern Region, RITES for.ISO 9001 from Aug 97 to Feb. 2004.Changed ISO Manual from 1994 version to 2000 version. In 2005 prepared Manual for ISO 17020 for RITES QA Division for its certification as Inspection agency. Consultancy works. Conducted ISO audits in different Divisions of RITES. Freelance Empanelled Assessor for National Accreditation Board for certifying Bodies, for assessment of Certification Bodies and inspection bodies for 08 years. . Member of NABCB Accreditation Committee From August 2021 to July 2023."
  },
  {
    name: "Rajesh Khare",
    image: '/img/rajesh.png',
    description: "Mr. Khare is a seasoned Chartered Civil Engineering Professional with 45+ years of experience in planning, design, and execution of infrastructure projects including roads, water supply, sewerage, wastewater systems, and smart city developments. He brings proven expertise in project management, structural design, quality compliance, and public infrastructure leadership. He gained this experience while working in different capacities in Govt. departments and is associated with us as Country Head."
  },
  {
    name: "Indu Kumar Srivastava",
    image: '/img/indu.png',
    description: "Mr. Indu Kant Srivastava is a Civil Engineering graduate with 39 years of dedicated service at U.P. Jal Nigam. He has deep experience across the full lifecycle of Water Supply Projects, from concept and design to field execution and supervision. His work also includes Building and Road projects, regulatory coordination, quality compliance, and leadership of multidisciplinary engineering teams. His career reflects a long commitment to public utility systems."
  },
  {
    name: "Arun Kumar Tyagi",
    image: '/img/Arun.jpeg',
    description: "Mr. Arun Kumar Tyagi brings a strong background in engineering and management (BE, MBA, FIE). He served as Chief Project Officer for UREDA (Uttarakhand Renewable Energy Development Agency) and as an Advisor to the Planning Department for the Government of Uttarakhand. His experience covers large scale project implementation, strategic planning, and public sector delivery."
  },
];

export const CERTIFICATION_LOGOS = [
  { id: 1, src: '/img/iso_9001.svg', alt: 'ISO Certification' },
  { id: 2, src: '/img/iso_27001.svg', alt: 'Quality Standard' },
  { id: 3, src: '/img/startup_india.png', alt: 'Safety Accreditation' },
];
export const SERVICES: Service[] = [
  {
    id: 'soft-dev',
    title: 'Custom Software Development',
    description: 'We build reliable web and mobile systems that match the way your business works. From planning and architecture to launch and support, our focus stays on clean delivery and measurable value.',
    icon: 'Code2',
  },
  {
    id: 'ai',
    title: 'Generative AI & LLM Integration',
    description: 'We design useful LLM tools for support, search, document handling, and internal knowledge access. Each build is grounded in your data, tested against real questions, and shaped for safe day to day use.',
    icon: 'Brain',
  },
  {
    id: 'ml',
    title: 'Machine Learning & Predictive AI',
    description: 'We help teams turn scattered data into clear forecasts, alerts, and operating insights. Our work covers predictive models, computer vision, reporting pipelines, and practical decision support.',
    icon: 'Cpu',
  },
  {
    id: 'ui-ux',
    title: 'Intelligent UI/UX Design',
    description: 'We design interfaces that are clear, fast, and easy to use. Every screen is planned around the people using it, the tasks they repeat, and the information they need at the right moment.',
    icon: 'Figma',
  },
  {
    id: 'motion',
    title: 'Motion Graphics & AI Visualization',
    description: 'We create motion graphics, product visuals, and data animations that explain complex ideas without clutter. The result is polished communication for dashboards, demos, presentations, and campaigns.',
    icon: 'Aperture',
  },
  {
    id: 'consulting',
    title: 'AI Strategy & Transformation',
    description: 'We help you choose the right technology path before money is spent on the wrong build. Our team reviews your process, data, risks, and goals, then creates a practical adoption plan.',
    icon: 'LineChart',
  },
  {
    id: 'cloud',
    title: 'Cloud Infrastructure',
    description: 'We set up cloud systems that are secure, scalable, and easy to operate. This includes deployment pipelines, monitoring, cost control, backup planning, and performance tuning across AWS, Azure, and GCP.',
    icon: 'Cloud',
  },
  {
    id: 'cybersecurity',
    title: 'Cyber Security',
    description: 'We strengthen applications, infrastructure, and data flows through access control, monitoring, vulnerability review, secure configuration, and incident ready practices.',
    icon: 'ShieldCheck',
  },
  {
    id: 'data-analytics',
    title: 'Autonomous Data Intelligence',
    description: 'We build analytics systems that make business data easier to trust and act on. Teams get clean dashboards, searchable records, clear reports, and timely insights from the data they already have.',
    icon: 'BarChart3',
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    description: 'We build mobile apps in React Native and Flutter for field teams, customers, and internal users. When needed, we add offline use, device level processing, secure sync, and fast performance on iOS and Android.',
    icon: 'Smartphone',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'We help businesses reach the right audience through SEO, social media, paid advertising, and content marketing. Every campaign is planned around your goals, measured with real data, and refined to generate sustainable growth and stronger customer engagement.',
    icon: 'Megaphone',
  },
];

export const TEAM: TeamMember[] = [
  { id: '1', name: 'Pranav Srivastava', role: 'Director IT', image: '/img/dir_IT.png' },
  { id: '2', name: 'Shubham Singh', role: 'Technical Lead', image: 'https://picsum.photos/seed/sarah/200' },
  { id: '3', name: 'Satyam Gupta', role: 'Frontend Lead', image: 'https://picsum.photos/seed/marcus/200' },
  { id: '4', name: 'Navajit Mishra', role: 'Backend Lead', image: 'https://picsum.photos/seed/elena/200' },
];

export const ORG_MEMBERS: Record<string, OrgMember> = {
  chairperson: {
    id: "chairperson",
    role: "Chairperson",
    name: "J. P. Srivastava",
    image: '/img/chairperson.png',
    details: "Provides strategic vision and governance. Oversees board operations, guides the long term business trajectory, and ensures the company's objectives align with its core values and stakeholder interests.",
    experiences: ["30+ years of industry experience.", "Expert in Third Party Inspection and Quality Assurance.", "Former leadership roles in Govt/PSUs (Ministry of Railways, RDSO, RITES).", "Proven expertise in tendering, marketing, and project management."]
  },

  managingdirector: {
    id: "managingdirector",
    role: "Managing Director",
    name: "Rekha Srivastava",
    image: '/img/managing_dir.png',
    details: "Directs overall daily business operations and executes the company's strategic vision. Acts as the primary bridge between the board of directors and executive leadership to drive organizational growth, operational excellence, and market expansion.",
    experiences: ["15+ years of experience in the trading, manufacturing, and service sectors.", "Directs daily business operations and executes long term organizational strategy.", "Fosters a strong corporate culture and team development, backed by a PG in Psychology.", "Oversees financial health, business growth, and administrative excellence."]
  },
  directorSales: {
    id: "dir-hr-marketing",
    role: "Director Marketing",
    name: "Anant Srivastava",
    image: 'img/dir_sales.png',
    details: "Drives revenue growth by leading business development initiatives and client acquisition strategies. Cultivates key enterprise partnerships, expands market reach, and manages the full sales pipeline.",
    experiences: ["Driving revenue growth and B2B tech sales.", "Establishing global client networks.", "Over 12 years of executive sales leadership.", "Conducts in situ testing, risk analysis, and material assessments.", "Leads structural design deliverables and concept development."]
  },

  directorProject: {
    id: "joint-md",
    role: "Joint Managing Director",
    name: "Rita Kumari",
    image: '/img/dir_project.jpeg',
    details: "Ensures the flawless execution and delivery of all client projects. Oversees project management frameworks, agile methodologies, and resource allocation to guarantee digital solutions are delivered on time, strictly within budget, and up to quality standards.",
    experiences: ["12+ years of industry experience as a Mechanical Engineer.", "Project lifecycle management and Agile methodologies.", "Delivered 50+ enterprise IT projects.", "Expertise in risk and resource management.", "Management Representative for ISO 17020 compliance and NABCB audits."]
  },
  directorFinance: {
    id: "dir-finance",
    role: "Director Finance",
    name: "Akash Srivastava",
    image: '/img/dir_finance.jpeg',
    details: "Manages the company's financial health, including budgeting, forecasting, and capital optimization. Provides strategic financial insights and risk management to support sustainable organizational scaling.",
    experiences: ["Financial planning & analysis.", "Budget management and forecasting.", "10+ years of engineering experience with EliTes India.", "Specializes in consultancy, project monitoring, and vendor assessment."]
  },
  financeTeam: {
    id: "finance-team",
    role: "Finance Team",
    name: "Finance Ops",
    image: '/img/finance_ops.jpg',
    details: "Handles daily financial operations including invoicing, accounts payable/receivable, payroll processing, and financial compliance reporting to maintain accurate records.",
    experiences: ["Accounting, taxation, and auditing.", "Quarterly financial reporting.", "Ensuring regulatory financial compliance.", "Maintains accurate financial forecasting, budget tracking, and cost benefit reporting."]
  },
  directorTech: {
    id: "dir-tech",
    role: "Director IT",
    name: "Pranav Srivastava",
    image: '/img/dir_IT.png',
    details: "Leads technology strategy, engineering practices, and product development. Oversees technical architecture and guides the engineering teams to deliver scalable software solutions.",
    experiences: ["Cloud architecture and scalable system design.", "Full stack development leadership.", "5+ years in software engineering.", "Led frontend architecture, UI/UX execution, sprint planning and stakeholder coordination"]
  },
  teamLeader: {
    id: "vp",
    role: "VP",
    name: "VP",
    image: '/img/tech_lead.webp',
    details: "Manages daily engineering operations. Mentors developers, supports code quality and architecture practices, and connects technical execution with project requirements.",
    experiences: ["Full stack engineering and technical leadership.", "Drives agile sprint execution and actively mentors development teams.", "Code reviews, systems architecture, debugging."]
  },
  teamSales: {
    id: "sales-team",
    role: "Sales Team",
    name: "Sales Ops",
    image: '/img/sales_ops.jpeg',
    details: "Supports the overarching sales strategy by analyzing market data, managing CRM tools, generating leads, and optimizing the client onboarding process to maximize conversion rates.",
    experiences: ["Manages CRM workflows and sales pipeline optimization.", "Conducts targeted market research to drive lead generation strategies.", "Analyzes core sales metrics to forecast revenue and scale growth."]
  },
  teamProject: {
    id: "project-team",
    role: "Project Team",
    name: "Project Ops",
    image: '/img/project_ops.webp',
    details: "Coordinates daily project tasks, tracks sprint milestones, and facilitates seamless communication between internal engineering teams and external clients to ensure a smooth development lifecycle.",
    experiences: ["Coordinates cross functional teams to support timely delivery within budget.", "Manages resource allocation, risk mitigation, and daily project tracking.", "Maintains continuous, transparent communication with key internal and external stakeholders."]
  },
  architects: {
    id: "architects",
    role: "Architects/Managers & SEs",
    name: "Engineering Team",
    image: '/img/team.jpg',
    details: "The core builders of the company’s digital products. Responsible for writing robust code, designing scalable system architectures, and implementing practical technologies to solve complex engineering challenges.",
    experiences: ["Building rich scalable software solutions.", "React, Node.js, Python, AWS, Azure.", "Performance optimization & AI integrations."]
  }
};

export const PROJECTS: Project[] = [
  {
    id: 'ai-1',
    title: 'CogniFlow Predictive Maintenance',
    category: 'AI / IoT Analytics',
    image: '/img/nebosense.jpg',
    shortDescription: 'CogniFlow helps industrial teams monitor sensor data and spot equipment risk early, giving maintenance teams time to act before downtime begins.',
    description: 'CogniFlow collects live readings from machinery and turns them into clear maintenance signals. Teams can view failure risk, remaining useful life, sensor trends, and suggested work orders from one dashboard. The system supports planned maintenance, faster response, and better visibility across critical equipment.',
    points: [
      'Models for multivariate time series anomaly detection.',
      'Predicts equipment failures up to 72 hours in advance with 94% accuracy.',
      'Live ingestion of 10,000+ IoT sensor streams via MQTT and Kafka.',
      'Device level inference for faster alerts.',
      'Maintenance work orders routed to field teams.',
      'Delivered 68% reduction in unplanned downtime across industrial clients.',
      'Continuous learning loop improves accuracy after deployment.',
    ]
  },
  {
    id: 'ai-2',
    title: 'FluentAI Multilingual Government Assistant',
    category: 'Conversational AI',
    image: '/img/nebochat.jpg',
    shortDescription: 'FluentAI helps government portals answer citizen questions in 12 Indian languages and route complex cases to the right team.',
    description: 'FluentAI connects citizen questions with approved government documents, service rules, and live status systems. Citizens can ask about applications, documents, appointments, and service steps in their preferred language. When a case needs an officer, the conversation history and context are passed along for faster handling.',
    points: [
      'LLM with retrieval over approved government policy documents.',
      'Supports 12 Indian languages with live language switching.',
      'Resolves 84% of citizen queries autonomously without human escalation.',
      'Live integration with government backends for service status.',
      'Context notes for officer escalations.',
      'Deployed across 3 state portals serving 50,000+ daily active users.',
      'Encrypted flow with full audit trail for compliance.',
    ]
  },
  {
    id: 'ai-3',
    title: 'OpticSight Computer Vision Quality Inspector',
    category: 'Computer Vision / ML',
    image: '/img/nebovision.jpg',
    shortDescription: 'OpticSight checks manufacturing line images for defects at high speed and gives quality teams a clearer way to track recurring issues.',
    description: 'OpticSight uses cameras on the production line to detect surface defects, measurement issues, label errors, and contamination. A dashboard shows where defects are appearing most often so teams can correct the process, not only reject the product. In pilot use, the system reached 99.2% detection accuracy across 47 defect classes.',
    points: [
      'YOLOv8 and Vision Transformer models for multi class defect detection.',
      '99.2% detection accuracy across 47 defect categories at 120fps.',
      'Uncertain predictions flagged for expert review.',
      'Spatial analytics dashboard maps defect hotspots for root cause review.',
      'Processes 6× faster than human visual inspection at 5% of the cost.',
      'Reduced client quality related product recalls by 91% in pilot deployment.',
      'Edge deployment on NVIDIA Jetson hardware for low latency.',
    ]
  },
  {
    id: 'elites-hrms',
    title: 'EliTes India HRMS',
    category: 'Enterprise SaaS',
    shortDescription: 'Human Resource Management System for large scale enterprise operations.',
    description: 'A comprehensive HRMS designed to streamline workforce management for EliTes India. Features include automated payroll, retention risk reporting, and employee feedback analysis.',
    image: '/img/elites_hrms.png',
    points: [
      'Attrition prediction using ML models to identify retention risks.',
      'Automated Payroll Reconciliation with 99.9% accuracy.',
      'Live employee sentiment analysis through feedback loops.',
      'Intelligent Resource Allocation & Leave Management.'
    ]
  },
  {
    id: 'p4',
    title: 'UPYOG/DIGIT Platform',
    category: 'Software Architecture',
    image: '/img/upyog.jpg',
    shortDescription: "The DIGIT Platform based UPYOG Platform is an open source digital governance framework designed to help municipal bodies deliver efficient and transparent public services. It enables government departments to digitize workflows and manage services through a unified platform. The system supports multiple modules for different administrative functions and allows citizens to access municipal services online.",
    points: [
      "Built on the open source DIGIT Platform framework.",
      "Designed for digital governance of municipal corporations and ULBs.",
      "Provides a modular architecture for different government departments.",
      "Supports modules such as:Property management, Trade licensing, Planning permissions, Inventory management, Grievance systems",
      "Helps digitize workflows and reduce manual paperwork.",
      "Ensures scalability, interoperability, and service standardization.",
      "Provides citizens with online access to municipal services.",
      "Improves transparency, efficiency, and data based decision making."
    ]
  },
  {
    id: 'p5',
    title: 'GMR',
    category: 'Web App Selfie Kiosk',
    image: '/img/gmr.avif',
    shortDescription: "The Selfie Kiosk System developed for **GMR Group at Indira Gandhi International Airport provides an interactive digital experience where visitors can capture selfies with themed backgrounds and download them instantly using a QR code.",
    description: 'The Selfie Kiosk System was developed as an interactive digital solution for visitors at Indira Gandhi International Airport, with GMR Group as the client. The kiosk allows travelers to capture personalized selfies and enhance them with digitally generated backgrounds, creating a memorable airport experience. The system provides a simple interface where visitors can take a selfie using the kiosk camera and select from multiple predefined background themes. After capturing the photo, the application processes the image and merges it with the selected background. Once the final image is generated, the system creates a QR code that users can scan with their smartphones to download the image instantly. This contactless download method ensures convenience and speed in busy airport environments.',
    points: [
      "Installed at Indira Gandhi International Airport.",
      "Allows users to capture selfies through a digital kiosk.",
      "Users can select themed digital backgrounds.",
      "System performs image processing and background compositing.",
      "Generates a QR code for instant image download.",
      "Designed for busy public locations.",
      "Provides contactless and engaging visitor experience."
    ]
  },
];

export const CLIENT_LOGOS = [
  'GMR Group', 'EliTes India Pvt. Ltd.', 'UPYOG(Urban Platform for delivery of Online Governance)', 'Nebo Engineering India Pvt. Ltd.'
];

import { Testimonial, Stat, ProcessStep } from './types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Rajiv Mehta',
    role: 'Program Director',
    company: 'Government Digital Initiative',
    quote: 'Nebo IT Solutions delivered a digital governance platform that transformed how our municipal services operate. Their team understood the complexity of government workflows and built a system that is both powerful and intuitive. The platform now serves thousands of citizens daily.',
    rating: 5,
    projectType: 'Digital Governance Platform'
  },
  {
    id: 't2',
    name: 'Vikas Gupta',
    role: 'HR Director',
    company: 'EliTes India Pvt. Ltd.',
    quote: 'The HRMS platform built by Nebo IT Solutions has made workforce management much easier for our team. Payroll reconciliation is faster, and the retention reports give us a clearer view of employee engagement.',
    rating: 5,
    projectType: 'Enterprise SaaS'
  },
  {
    id: 't3',
    name: 'Arjun Kapoor',
    role: 'VP of Technology',
    company: 'Airport Operations Group',
    quote: 'The selfie kiosk system Nebo built for our airport terminal exceeded all expectations. The image processing is lightning fast, and the QR download feature works seamlessly even during peak hours with thousands of daily users.',
    rating: 5,
    projectType: 'Interactive Kiosk System'
  },
  {
    id: 't4',
    name: 'Dr. Sunita Sharma',
    role: 'VP of Quality Control',
    company: 'Apex Industrial Group',
    quote: 'OpticSight gave our quality team a faster way to find defects and review patterns on the line. It reduced manual inspection errors and helped us bring down quality related recalls.',
    rating: 5,
    projectType: 'Computer Vision Inspection'
  },
  {
    id: 't5',
    name: 'Vikram Singh',
    role: 'CTO',
    company: 'Enterprise Solutions Firm',
    quote: 'Working with Nebo IT gave our digital transformation a clear direction. Their cloud and automation work helped us reduce operating costs while improving reliability and performance.',
    rating: 5,
    projectType: 'Cloud & AI Solutions'
  },
];

export const STATS: Stat[] = [
  { id: 's1', value: 6, suffix: '+', label: 'Years of Excellence', icon: 'Calendar' },
  { id: 's2', value: 50, suffix: '+', label: 'Projects Delivered', icon: 'Rocket' },
  { id: 's3', value: 15, suffix: '+', label: 'Clients Served', icon: 'Users' },
  { id: 's4', value: 20, suffix: '+', label: 'Team Members', icon: 'UserCheck' },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'ps1',
    step: 1,
    title: 'Discovery',
    description: 'We study your business challenge, review the workflow, and define a digital strategy that fits the problem.',
    icon: 'Search'
  },
  {
    id: 'ps2',
    step: 2,
    title: 'Design',
    description: 'Our team designs clear interfaces, wireframes, and prototypes tailored to your users and brand.',
    icon: 'Palette'
  },
  {
    id: 'ps3',
    step: 3,
    title: 'Develop',
    description: 'We build robust, scalable applications using modern tech stacks with agile methodologies, rigorous testing, and continuous integration.',
    icon: 'Code2'
  },
  {
    id: 'ps4',
    step: 4,
    title: 'Deploy And Scale',
    description: 'We launch your solution carefully, provide support, and improve performance as your business grows.',
    icon: 'Rocket'
  },
];
