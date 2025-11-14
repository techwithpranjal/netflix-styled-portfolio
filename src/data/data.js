import hungryMonkeyGame from "../assets/images/hungry-monkey-game.png";
import designScoringProject from "../assets/images/design-scoring-tool.avif";
import customerSurveyAnalytics from "../assets/images/customer-survey-analytics.jpeg";
import DocumentImageDenoising from "../assets/images/document-image-denoising.jpeg";
import DocImageRestoration from "../assets/images/doc-img-restoration.jpeg";
import PatchEncoderDocImg from "../assets/images/patch-encoder-doc-img.png";
import VerzeoCertification from "../assets/images/verzeo-internship-certificate.jpg";
import CCNACert from "../assets/images/CCNA-cert.png";

export const projects = [
  {
    id: 1,
    title: "Hungry Monkey Game",
    subtitle: "A flexbox learning game with Tailwind CSS",
    description:
      "Interactive Tailwind CSS learning game inspired by Flexbox Froggy, featuring animated characters, levels, hints, and real-time code validation.",
    longDescription:
      "Designed and built a gamified learning experience using Tailwind CSS to teach concepts interactively. The game features animated characters and themed levels that progressively introduce Tailwind utilities. Players type Tailwind classes in a built-in code editor to match a target layout, with instant visual feedback, custom animations, sound effects, and a progress system. Implemented dynamic class evaluation, level-based components, contextual hints, and in-game documentation mapping CSS properties to Tailwind utility classes.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "JavaScript",
      "Custom Hooks",
    ],
    categories: ["Frontend", "Personal"],
    image: hungryMonkeyGame + "?w=800&h=600&fit=crop",
    demoUrl: "https://techwithpranjal.github.io/hungry-monkey-game/",
    githubUrl: "https://github.com/techwithpranjal/hungry-monkey-game",
    type: "highlighted",
    completedDate: "2025-06-01",
  },
  {
    id: 2,
    title: "Design Scoring Tool",
    description:
      "Automated scoring tool that evaluates UI designs using accessibility, readability, and design-metric analysis to improve overall experience quality.",
    longDescription:
      "Developed an automated web application to assess UI designs based on WCAG accessibility standards, readability factors, and cognitive load metrics. The on demand tool is powered by a large-scale Python scraping pipeline to analyze 4M+ web pages, extracting 100+ design attributes per page to correlate UI quality with customer lifetime value. Delivered insights are used to refine design decisions and improve overall user experience across 100+ product UI layouts.",
    technologies: [
      "React",
      "Python",
      "Flask",
      "MySQL",
      "Pandas",
      "Web Scraping",
      "Axe-core",
      "Selenium",
      "WCAG Standards",
      "UI/UX Design",
    ],
    categories: ["Full Stack", "Professional"],
    image: designScoringProject + "?w=800&h=600&fit=crop",
    demoUrl: "",
    githubUrl: "",
    summaryUrl: "https://example.com/design-scoring-tool-summary.pdf",
    type: "highlighted",
    completedDate: "2024-09-10",
  },
  {
    id: 3,
    title: "CSAT Survey Analytics",
    description:
      "Unified Voice-of-Customer-as-a-Service (VoCaaS) platform for customer satisfaction (CSAT) survey analytics, driving actionable customer insights.",
    longDescription:
      "Built a unified analytics experience for Voice-of-Customer-as-a-Service (VoCaaS) insights by standardizing UI/UX across CSAT survey applications. Migrated legacy systems to DDS 2.0, integrated 15+ CSAT tools using Flask-based microservices and REST APIs, and delivered an interactive React dashboard for customer sentiment analysis. The platform improved user adoption by 60% and reduced operational effort by 50%, enabling data-driven improvements in customer experience strategy.",
    technologies: [
      "React",
      "Flask",
      "Python",
      "MySQL",
      "REST APIs",
      "Microservices Architecture",
      "Machine Learning",
    ],
    categories: ["Full Stack", "Professional"],
    image: customerSurveyAnalytics + "?w=800&h=600&fit=crop",
    demoUrl: "",
    githubUrl: "",
    summaryUrl: "https://example.com/customer-survey-analytics-summary.pdf",
    type: "highlighted",
    completedDate: "2024-08-15",
  },
  {
    id: 4,
    title: "API Gateway Service",
    description:
      "Microservices API gateway with rate limiting, authentication, load balancing, and monitoring capabilities.",
    longDescription:
      "Designed and implemented a robust API gateway service to manage microservices communication. The gateway handles authentication, rate limiting, request routing, load balancing, and provides comprehensive monitoring and logging capabilities. Built with Node.js and Redis for caching, it supports both REST and GraphQL APIs. The service includes circuit breaker patterns for fault tolerance and integrates with monitoring tools like Prometheus and Grafana for observability.",
    technologies: [
      "Node.js",
      "Redis",
      "Docker",
      "Kubernetes",
      "Prometheus",
      "GraphQL",
    ],
    categories: ["Backend"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    demoUrl: null,
    githubUrl: "https://github.com/username/api-gateway",
    type: "regular",
    completedDate: "2024-04-05",
  },
  {
    id: 5,
    title: "Real-time Chat Application",
    description:
      "Multi-room chat application with file sharing, emoji reactions, user presence indicators, and message encryption.",
    longDescription:
      "Built a feature-rich real-time chat application supporting multiple chat rooms, private messaging, and group conversations. The application includes advanced features like file sharing, emoji reactions, typing indicators, user presence status, and end-to-end message encryption. The frontend is built with React and TypeScript, while the backend uses Node.js with Socket.io for real-time communication. MongoDB stores chat history and user data with proper indexing for optimal performance.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "Crypto-js",
    ],
    categories: ["Full Stack"],
    image:
      "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop",
    demoUrl: "https://demo-chat.example.com",
    githubUrl: "https://github.com/username/chat-app",
    type: "regular",
    completedDate: "2023-12-18",
  },
  {
    id: 6,
    title: "Machine Learning Model API",
    description:
      "RESTful API serving trained ML models for image classification with automated model versioning and A/B testing.",
    longDescription:
      "Developed a production-ready API service for deploying and serving machine learning models. The service supports multiple model versions, A/B testing capabilities, and automated model updates. Built with Flask and integrated with TensorFlow Serving, it provides endpoints for image classification, sentiment analysis, and recommendation systems. The API includes comprehensive monitoring, logging, and performance metrics collection. Docker containerization ensures consistent deployment across environments.",
    technologies: [
      "Python",
      "Flask",
      "TensorFlow",
      "Docker",
      "PostgreSQL",
      "Redis",
    ],
    categories: ["Backend"],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
    demoUrl: null,
    githubUrl: "https://github.com/username/ml-api",
    type: "regular",
    completedDate: "2024-01-25",
  },
  {
    id: 7,
    title: "Overview of Document Image Denoising and Restoration Techniques",
    description:
      "Presented at the World Research Forum for Engineers and Researchers (2022) and featured in IJEEDC.",
    longDescription:
      "Presented a comprehensive survey of traditional and deep learning-based document image denoising and restoration techniques. The paper highlights comparative analyses, challenges, and potential research directions in document enhancement. Presented at the World Research Forum for Engineers and Researchers (2022) and featured in IJEEDC.",
    technologies: ["Python", "OpenCV", "Pandas"],
    categories: ["Research"],
    image: DocImageRestoration + "?w=800&h=600&fit=crop",
    linkUrl:
      "http://iraj.in/journal/IJEEDC/paper_detail.php?paper_id=18570&name=Overview_of_Document_Image_Denoising_and_Restoration_Techniques",
    type: "publication",
    publication: "IJEEDC",
    year: "2022",
  },
  {
    id: 8,
    title: "Pix2Pix GAN with ResNet for Document Image Denoising",
    description:
      "Presented at the 4th International Conference on Inventive Research in Computing (2022) and published in IEEE.",
    longDescription:
      "Proposed a hybrid GAN-based approach combining Pix2Pix and ResNet architectures for document image denoising. The model achieved significant improvement in restoring degraded text documents by preserving structural consistency and reducing background noise. Presented at the 4th International Conference on Inventive Research in Computing (2022) and published in IEEE Xplore.",
    technologies: [
      "Computer Vision",
      "OCR",
      "Deep Learning",
      "GANs",
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "NumPy",
      "Matplotlib",
    ],
    categories: ["Research"],
    image: DocumentImageDenoising + "?w=800&h=600&fit=crop",
    linkUrl: "https://ieeexplore.ieee.org/document/9985695",
    type: "publication",
    publication: "IEEE Xplore",
    year: "2022",
  },
  {
    id: 9,
    title:
      "Patch Based Autoencoder for Document Image Denoising with Smoothening",
    description:
      "Exhibited at ICT for Sustainable Development (2022) and published in Springer.",
    longDescription:
      "Developed a patch-based convolutional autoencoder for denoising and smoothening of scanned document images. The model enhances readability and maintains text sharpness while minimizing artifacts. Exhibited at ICT for Sustainable Development (2022) and published in Springer.",
    technologies: [
      "Autoencoders",
      "Image Processing",
      "Deep Learning",
      "PyTorch",
      "OpenCV",
      "NumPy",
      "Matplotlib",
      "Scikit-image",
    ],
    categories: ["Research"],
    image: PatchEncoderDocImg + "?w=800&h=600&fit=crop",
    linkUrl: "https://link.springer.com/chapter/10.1007/978-981-19-5331-6_62",
    type: "publication",
    publication: "Springer",
    year: "2022",
  },
];

export const skillCategories = {
  "Frontend Development": [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Redux Toolkit",
    "Tailwind CSS",
    "Material UI",
    "Responsive Web Design",
  ],
  "Backend Development": [
    "Python",
    "Flask",
    "RESTful APIs",
    "Microservices Architecture",
    "OAuth2",
    "JWT",
    "RBAC",
  ],
  Databases: ["PostgreSQL", "MySQL"],
  "DevOps & Cloud": [
    "Docker",
    "Podman",
    "Kubernetes",
    "GitLab CI/CD",
    "Pivotal Cloud Foundry",
    "AWS (S3)",
  ],
  "Testing & Quality": [
    "Jest",
    "Vitest",
    "PyTest",
    "Postman (API Testing)",
    "Test-Driven Development (TDD)",
  ],
  "Software Practices": [
    "GitHub",
    "Agile Methodologies",
    "Jira",
    "Pair Programming",
    "CI/CD Workflows",
    "System Design",
  ],
};

export const experience = [
  {
    id: 1,
    company: "Dell Technologies",
    team: "Behavioral Science",
    position: "Software Developer 2",
    location: "Bangalore",
    duration: "Feb 2024 - Present",
    type: "work",
    description:
      "Built automated UI scoring tools improving WCAG compliance. Deployed Flask APIs on Kubernetes, increasing uptime by 40%. Led NLP-driven chat analytics cutting manual effort by 50%, and introduced TDD with Jest & Vitest for full CI/CD maturity.",
  },
  {
    id: 2,
    company: "Dell Technologies",
    team: "Customer Sentiment",
    position: "Software Developer 1",
    location: "Hyderabad",
    duration: "Aug 2022 - Jan 2024",
    type: "work",
    description:
      "Migrated CSAT apps to DDS 2.0 and built a unified VoCaaS platform with React & Flask, boosting adoption by 60%. Automated issue tracking reduced stakeholder effort by 50%, with secure RBAC via OAuth2 & JWT.",
  },
  {
    id: 3,
    company: "Dell Technologies",
    position: "Software Intern",
    location: "Bangalore",
    team: "Employee Lifecycle",
    duration: "Jun 2021 - Jul 2021",
    type: "work",
    description:
      "Built Grafana dashboards for real-time Workday monitoring, reducing troubleshooting time by one-third weekly.",
  },
  {
    id: 4,
    company: "Cummins College of Engineering for Women",
    position: "BTech in Information Technology",
    location: "Pune",
    duration: "Aug 2018 - May 2022",
    type: "education",
    description:
      "Thesis on “Document Image Restoration Techniques using Generative Neural Networks.” Graduated with CGPA 8.8. Relevant coursework: Data Structures, Algorithms, Database Management, Computer Networks, Machine Learning, Web Development.",


  }
];

export const categories = [
  "All",
  "Full Stack",
  "Frontend",
  "Backend",
  "Research",
  "Professional",
  "Personal",
];

export const links = {
  gitHubLink: "https://github.com/techwithpranjal",
  linkedInLink: "https://www.linkedin.com/in/pranjal-jadhav851/",
  mailLink: "pranjaljadhav851@gmail.com",
};

export const certifications = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description: "Completed a project-driven course on frontend and backend web development.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    year: "2021",
    linkUrl: VerzeoCertification,
  },
  {
    id: 2,
    title: "ReactJS, Routers & Redux",
    description: "Comprehensive hands-on course covering React Hooks, Redux Toolkit, and React Router.",
    skills: ["React", "Redux", "Routing", "Hooks", "SPAs"],
    year: "2024",
    courseUrl: "https://www.udemy.com/course/react-the-complete-guide-incl-redux"
  },
  {
    id: 3,
    title: "REST APIs with Flask & Python",
    description: "Built RESTful APIs with authentication, database models, and deployment best practices.",
    skills: ["Flask", "Python", "REST APIs", "JWT"],
    year: "2023",
    courseUrl: "https://www.udemy.com/course/rest-api-flask-and-python/",
  },
  {
    id: 4,
    title: "Deep Learning",
    description: "Mastered neural networks, CNNs, and sequence models with TensorFlow and Keras.",
    skills: ["Deep Learning", "TensorFlow", "Keras", "CNN"],
    year: "2023",
    linkUrl: "https://www.coursera.org/account/accomplishments/verify/MQQJQMZD9G5H"
  },
  {
    id: 5,
    title: "Machine Learning",
    description: "Learned ML algorithms including regression, SVM, and clustering using Python.",
    skills: ["Machine Learning", "Python", "Scikit-learn"],
    year: "2022",
    linkUrl: "https://www.coursera.org/account/accomplishments/verify/6JGSYZAB4PVM",
  },
  {
    id: 6,
    title: "Data Science",
    description: "Gained skills in data analysis, visualization, and statistical modeling using Python.",
    skills: ["Data Science", "Python", "Pandas", "Matplotlib"],
    year: "2021",
    linkUrl: "https://trainings.internshala.com/verify-certificate/D5C76B35-4325-F8DB-72C7-9ECE6FCB78F1/",
  },
  {
    id: 7,
    title: "Cisco Certified Network Associate Routing and Switching (CCNA)",
    description: "Validated knowledge of networking fundamentals, IP connectivity, and security.",
    skills: ["Networking", "Routing", "Switching", "Security"],
    year: "2020",
    linkUrl: CCNACert

  }
];
