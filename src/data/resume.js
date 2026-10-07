const img = (name) => `${import.meta.env.BASE_URL}images/${name}`

export const profile = {
  name: 'Yun-Ting (John) Lo',
  tagline: 'Solution Architect · Business Systems · Data Analytics',
  photo: img('profile.jpg'),
  location: 'Madison, WI',
  email: 'john840117@gmail.com',
  linkedin: 'https://linkedin.com/in/white840117/',
  github: 'https://github.com/white840117',
  summary:
    'Strategic professional with 4+ years of experience bridging the gap between technical engineering teams and business stakeholders at global enterprises like HPE. Proven track record in requirement elicitation, process optimization, and stakeholder management, successfully translating complex business needs into detailed technical specifications.',
  highlights: [
    { value: '4+', label: 'Years of experience' },
    { value: '25+', label: 'Companies supported' },
    { value: '10+', label: 'Solutions & systems delivered' },
  ],
  languages: ['Mandarin (Native)', 'English (Fluent)'],
}

export const experience = [
  {
    company: 'IBM', title: 'Associate Application Consultant (Intern)', location: 'Taipei City, Taiwan', period: '07/2026 – 08/2026',
    bullets: [
      'Managed the complete Software Development Life Cycle (SDLC) for a cross-border MES integration project, bridging US and Taiwan teams to align requirements and execute UAT, achieving 100% of targeted project objectives.',
      'Ensured data integrity for a live enterprise environment by executing System Integration Testing (SIT) and PostgreSQL queries via DBeaver, intercepting 5+ system bugs and missing data records prior to production.',
      'Accelerated UI prototype development from 1-2 weeks to 1-2 days by leveraging AI tools (Google Gemini and IBM Bob) to build interactive prototypes and draft training documentation.',
      'Created a Train-The-Trainer (TTT) Guide and MES system operation Manual Guide, enabling 30+ stakeholders to independently execute system workflows and reducing support escalations.',
      'Authored an External Design document specifying 1 module and 4+ functions for the engineering team, and wrote 20+ test cases for SIT/UAT.',
    ],
  },
  {
    company: 'The Information School, UW-Madison', title: 'Project Assistant (Reader/Grader)', location: 'Madison, WI, U.S.', period: '01/2026 – 12/2026',
    bullets: [
      'Evaluated and audited technical assignments and database schemas for 80+ students across graduate and undergraduate-level courses, including Securing Information Networks and Applied Database Design.',
      'Assessed code quality, network security implementations, and relational database models, providing structured, actionable feedback.',
      'Collaborated closely with primary instructors to align evaluation metrics, resolve grading anomalies, and translate complex technical rubrics into consistent assessment standards.',
      'Managed and synchronized large-scale student performance datasets in Canvas LMS, achieving 100% data accuracy.',
    ],
  },
  {
    company: 'HPE', title: 'Solution Architect', location: 'Taipei City, Taiwan', period: '06/2020 – 02/2024',
    bullets: [
      'Directed cross-functional engineering and business teams to define product requirements and technical specifications, delivering $500k+ in customer value across 20+ enterprise initiatives.',
      'Analyzed operational performance metrics using data-driven methodologies, driving a 20% increase in product adoption and over $5M in annual revenue.',
      'Spearheaded end-to-end project management, defining operational standards that reduced system downtime by 30%.',
      'Led the end-to-end deployment for a leading semiconductor manufacturer, resolving legacy bottlenecks to reduce operational time by 50% through automated workflow integration.',
      'Presented Aruba networking solutions and led hands-on training as a workshop speaker to 50+ attendees across 12 channel partners and resellers, and as a seminar speaker to audiences of 200+.',
      'Co-presented 10+ Quarterly Business Reviews (QBRs) alongside Sales teams from a technical perspective, contributing to at least 10% YoY growth following each review.',
      'Built and maintained 10+ lab, POC, and demo environments across wireless, wired, and data center solutions.',
      'Troubleshot and resolved 30+ customer issues in collaboration with vendor R&D, the Technical Assistance Center (TAC), and distribution partners.',
      'Led POCs, customer presentations, and issue resolution for ClearPass, Network Access Control (NAC), firewalls, and SD-WAN.',
      'Planned and assessed the migration of network management (NMS) from on-premises infrastructure to the cloud-based Aruba Central platform.',
    ],
  },
  {
    company: 'SYSTEX Corporation', title: 'Pre-sales Consultant', location: 'Taipei City, Taiwan', period: '09/2019 – 05/2020',
    bullets: [
      'Led product planning and implementation for financial services projects at a major Taiwanese financial institution (170+ branches, 7,000+ users), partnering with engineers and third-party vendors to achieve a projected 15%+ time savings.',
      'Designed standardized POC documentation and interactive data presentations using Tableau and Excel, illustrating a 20% system efficiency improvement to secure executive buy-in.',
      'Analyzed stakeholder feedback to optimize integration strategies, shortening the project lifecycle by 15%.',
      'Partnered with cross-functional teams to define project requirements and manage the RFP process, ensuring 100% on-time submission.',
    ],
  },
  {
    company: 'Microsoft Taiwan', title: 'Marketing Assistant (Intern)', location: 'Taipei City, Taiwan', period: '07/2015 – 06/2016',
    bullets: [
      'Orchestrated 5+ promotional campaigns for Microsoft Surface via social media, engaging 500+ potential customers and driving a 10% increase in regional brand awareness.',
      'Coordinated logistics and booth design for Computex, attracting 1,000+ visitors and generating 50+ qualified business leads.',
      'Facilitated 3 internal workshops and brainstorming sessions, driving the adoption of 2 key marketing strategies by management.',
    ],
  },
]

export const education = [
  { school: 'University of Wisconsin-Madison', degree: 'Master of Science in Information', gpa: '4.0/4.0', period: '09/2025 – 12/2026', location: 'Madison, WI, U.S.', note: 'Relevant Coursework: Systems Analysis & PM, Data Analytics for Decisions, Data Viz & Communication' },
  { school: 'National Taiwan University of Science and Technology', degree: 'Master of Information Management', gpa: '3.92/4.3', period: '09/2017 – 06/2019', location: 'Taipei City, Taiwan' },
  { school: 'Tamkang University', degree: 'Bachelor of Business Administration in Information Management', period: '09/2013 – 06/2017', location: 'New Taipei City, Taiwan' },
]

export const certifications = [
  { name: 'HPE Certified Networking Professional', issuer: 'HPE', date: '10/2021' },
  { name: 'Enterprise Design Thinking Practitioner', issuer: 'IBM', date: '07/2026' },
]

export const skills = {
  Technical: ['SQL', 'NoSQL', 'Python (Pandas, NumPy, Scikit-Learn, spaCy)', 'PostgreSQL', 'DBeaver', 'Cloud Services (AWS, GCP - BigQuery)', 'Azure DevOps', 'System Design', 'SDLC', 'Agent AI', 'Vibe Coding', 'Claude Code', 'Model Context Protocol (MCP)', 'Networking (Cisco, Aruba)', 'SD-WAN', 'Firewall', 'Excel VBA'],
  'Data Analytics': ['Tableau', 'Power BI', 'Quantitative Analysis', 'Statistical Modeling', 'Data Cleansing', 'Text Mining', 'Data Visualization'],
  'Product & Management': ['Product Strategy & Roadmaps', 'Stakeholder Management', 'Agile/Scrum', 'Requirements Gathering', 'Cross-functional Collaboration', 'Design Thinking', 'Project Management'],
  'Business & Domain': ['Market Research', 'Competitive Analysis', 'RFP Process Management', 'Process Standardization'],
}

export const projects = [
  {
    id: 'ado-to-word', title: 'ADO to Word Test Report Automation', period: '08/2026', tags: ['Vue 3', 'Flask', 'Azure DevOps API', 'LLM'],
    links: [{ label: 'GitHub: ADO_2_WORD', url: 'https://github.com/shaneliu-zf/ADO_2_WORD' }],
    bullets: [
      'Co-designed and co-built a full-stack automation tool with a colleague, implementing frontend (Vue 3) and backend (Flask) components, using Agent AI (IBM Bob) to accelerate code generation.',
      'Integrated Azure DevOps REST API to fetch work items and applied LLM-assisted grouping to generate structured Word test reports, cutting report turnaround from 2 hours to under 5 minutes.',
      'Deployed to a 30-person IBM project team, enabling non-technical stakeholders to produce test documentation through a no-code web interface.',
    ],
  },
  {
    id: 'resume-generator', title: 'LLM Agent-Driven Resume Customization Platform', period: '09/2026 – Present', tags: ['Vue 3', 'TypeScript', 'Flask', 'python-docx'],
    links: [],
    bullets: [
      'Designed and built a full-stack resume automation platform (Vue 3, TypeScript, Flask) integrating an LLM agent (Cursor SDK) to match job descriptions to resumes across four weighted dimensions and flag content gaps.',
      'Automated ATS-compliant, format-locked one-page resume generation via python-docx with a real-time SSE progress pipeline, reducing manual customization time by over 60% across 10+ processed job descriptions.',
    ],
  },
  {
    id: 'aws-cloud-resume', title: 'Serverless Cloud Portfolio & Automated CI/CD Pipeline', period: '04/2026 – Present', tags: ['AWS S3', 'CloudFront', 'GitHub Actions'],
    links: [{ label: 'GitHub: cloud-resume-vue', url: 'https://github.com/white840117/cloud-resume-vue' }],
    bullets: [
      'Architected a highly available serverless portfolio using AWS (S3, CloudFront) and Claude AI for rapid infrastructure-as-code (IaC) deployment.',
      'Implemented a fully automated CI/CD pipeline using GitHub Actions to achieve deployment under 20 seconds, ensuring enterprise-level security via HTTPS and OAC.',
    ],
  },
  {
    id: 'squad-builder', title: 'National Team Squad Builder Database', period: '01/2026 – 03/2026', tags: ['SQL', 'MySQL', 'Excel', 'Google Gemini'],
    links: [],
    bullets: [
      'Engineered a relational database to assist stakeholders in optimizing 26-man World Cup rosters, importing real-world EA Sports FC 24 datasets via Excel into structured SQL tables (Players, Clubs, Tournaments).',
      'Leveraged AI tools (Google Gemini) to accelerate SQL query formulation (JOINs, aggregations, VIEWs), evaluating player market values and tracking performance.',
    ],
  },
  {
    id: 'workflow-dashboard', title: 'Operational Workflow Optimization & Dashboard', period: '09/2025 – 12/2025', tags: ['Dashboard', 'Cross-team Collaboration'],
    links: [],
    bullets: [
      'Resolved communication delays by developing a real-time shared feedback dashboard, achieving 100% issue visibility within 5 minutes.',
      'Established standardized resolution criteria to mitigate metric gaming, ensuring >80% resolution accuracy.',
    ],
  },
  {
    id: 'urban-park', title: 'Urban Park Accessibility & Public Health Dashboard', period: '09/2025 – 12/2025', tags: ['Tableau', 'Excel', 'AI-assisted analysis'],
    links: [],
    bullets: [
      'Transformed and cleansed raw public health data across 900+ cities using Excel, integrating AI-assisted analysis.',
      'Synthesized the datasets into a Tableau dashboard with a quadrant-based matrix to drive data-informed decisions for priority interventions.',
    ],
  },
  {
    id: 'network-automation', title: 'Network Automation Deployment (Ansible)', period: '06/2022 – 12/2022', tags: ['Ansible', 'AOS-CX', 'Automation', 'Networking'],
    links: [{ label: 'Reference: aoscx-ansible-workflows', url: 'https://github.com/aruba/aoscx-ansible-workflows' }],
    note: 'Customer-specific details are covered by an NDA and are not shared. The solution was prototyped from the open-source aoscx-ansible-workflows repository.',
    bullets: [
      'Architected and implemented a microservice automation environment using Ansible to modernize legacy networking workflows and streamline deployment cycles.',
      'Orchestrated the transition from manual configuration to automated product rollout for high-scale semiconductor manufacturing environments.',
    ],
  },
]

const photos = (prefix, items) =>
  items.map(([n, caption]) => ({ src: img(`${prefix}-${String(n).padStart(2, '0')}.jpg`), caption }))

export const interests = [
  {
    id: 'sports', title: 'Sports — Badminton & Golf',
    text: 'Badminton and golf are my favorite ways to stay active (and pickleball once in a while).',
    photos: photos('sport', [[1, 'Golf'], [2, 'Golf with friends'], [3, 'Golf day'], [4, 'Badminton'], [5, 'Pickleball']]),
  },
  {
    id: 'travel', title: 'Road Trips, Games & Sightseeing',
    text: 'I enjoy road trips, catching live games, and exploring new places with friends and family.',
    photos: photos('trip', [[1, 'Grand Teton road trip'], [2, 'Baseball game'], [3, 'Disney'], [4, 'Japan'], [5, 'Japan'], [6, 'Riding'], [7, 'Friends'], [8, 'Wizarding World'], [9, 'City trip'], [10, 'Night lights'], [11, 'Friends outing']]),
  },
  {
    id: 'ntust', title: 'NTUST Graduate School Days',
    text: 'Memories from my Master of Information Management at National Taiwan University of Science and Technology.',
    photos: photos('school', [[3, 'Graduation'], [1, 'NTUST'], [2, 'NTUST']]),
  },
  {
    id: 'events', title: 'Work Events',
    text: 'Moments from events I joined at SYSTEX, HPE/Aruba, and IBM.',
    photos: photos('work', [[1, 'Company party 2020'], [2, 'Aruba seminar'], [3, 'Aruba seminar audience'], [4, 'Team event'], [6, 'Team dinner'], [8, 'Office'], [9, 'IBM'], [10, 'Aruba SE Bootcamp']]),
  },
]
