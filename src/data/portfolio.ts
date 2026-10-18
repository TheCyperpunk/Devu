export const personalInfo = {
  name: 'Devika TD',
  title: 'BTech Computer Science Engineering Student',
  tagline: 'Computer Science graduate with a strong foundation in Python and SQL, applying them to full-stack development. Motivated to grow as a software professional.',
  location: 'Thrissur, Kerala',
  phone: '+91 98956 71783',
  email: 'devikatd61@gmail.com',
  linkedin: 'https://linkedin.com/in/devika-td',
  github: 'https://github.com/devikatd',
} as const;

export const projects = [
  { title: 'Revolutionizing Crypto Investment', description: 'Built an on-chain Systematic Investment Plan (SIP) platform enabling automated decentralized investments. Integrated wallet authentication and smart contract execution for transparent asset management.', technologies: ['Solidity', 'Hardhat', 'React.js', 'Node.js', 'Ethers.js', 'Web3.js'], liveLink: undefined },
  { title: 'Artificial Intelligence Based Chatbot', description: 'Built a local AI assistant interface supporting multimodal LLMs with vision and chat capabilities. Integrated local models via Ollama with support for RAG, STT, TTS, and web search APIs.', technologies: ['Svelte.js', 'Node.js', 'Docker', 'Ollama', 'TypeScript', 'Python', 'REST APIs', 'LLMs'], liveLink: undefined },
  { title: 'Manual Testing of ShopperStack Website', description: 'Performed manual UI testing on the ShopperStack e-commerce website to identify usability issues. Tested buttons, forms, navigation menus, images, search bars, and page layouts.', technologies: ['Manual UI Testing', 'Quality Assurance'], liveLink: undefined },
  { title: 'FileSense Scanner', description: 'Developed a hybrid search engine that combines semantic vector search and keyword-based BM25 retrieval to return contextually relevant results from natural-language queries.', technologies: ['Python', 'FastAPI', 'FAISS', 'BM25', 'Sentence Transformers', 'PostgreSQL'], liveLink: undefined },
] as const;

export const internships = [
  { title: 'Fullstack Web Development in Python', company: 'Q-Spiders', duration: 'Present', description: 'Currently undergoing internship in Python full-stack development, covering core concepts of Python and Django.', current: true },
  { title: 'Python & Django Development Internship', company: 'Devtown', duration: '3 Months', description: 'Completed internship focused on Python and Django development concepts.', current: false },
  { title: 'MERN Stack Development Internship', company: 'Edunet Foundation', duration: '1 Month', description: 'Completed a one-month internship focused on MERN stack development.', current: false },
] as const;

export const education = [
  { degree: 'Bachelor of Technology in Computer Science and Engineering', institution: 'IES College of Engineering, Thrissur, Kerala', detail: 'APJ Abdul Kalam Technological University', duration: '2022 – 2026', score: 'CGPA: 8.13' },
  { degree: 'Higher Secondary Education', institution: 'GMGHSS Kunnamkulam', detail: 'Science Stream', duration: '2020 – 2022', score: 'Percentage: 93%' },
] as const;

export const skills = ['HTML', 'CSS', 'JavaScript', 'Python', 'SQL', 'Django'] as const;
