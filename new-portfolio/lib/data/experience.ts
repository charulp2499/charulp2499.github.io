export interface Experience {
  id: string;
  role: string;
  company: string;
  companyDetail?: string;
  period: string;
  achievements: string[];
  type: "industry" | "research" | "academic";
}

export const experiences: Experience[] = [
  {
    id: "radin-health",
    role: "AI Engineer",
    company: "Radin Health",
    period: "Sep 2025 — Present",
    type: "industry",
    achievements: [
      "Deployed intelligent agents integrating with existing systems to automate order creation, generate patient report summaries, and suggest follow-up dates",
      "Fine-tuned and deployed Vision-Language Models (VLMs) for medical document data extraction and quality classification",
      "Designed AI-powered APIs with FastAPI for seamless integration into production healthcare workflows",
    ],
  },
  {
    id: "hubbroker",
    role: "AI Developer",
    company: "HubBroker ApS",
    period: "Jan 2025 — Aug 2025",
    type: "industry",
    achievements: [
      "Developed AI models (LLMs & VLMs) for multilingual document data extraction, classification, and garbage document identification",
      "Designed and deployed AI-powered APIs for production automation, enhancing intelligence in business workflows",
    ],
  },
  {
    id: "isro",
    role: "Junior Research Fellow",
    company: "ISRO / Nirma University",
    companyDetail: "Indian Space Research Organisation",
    period: "Nov 2024 — Jan 2025",
    type: "research",
    achievements: [
      "Worked with ISRO scientists at SAC to develop calibration and validation algorithms for the MOSDAC web portal",
      "Analyzed satellite data including raster, multispectral, and multiband imagery for environmental monitoring",
    ],
  },
  {
    id: "iitb",
    role: "AI Researcher",
    company: "KCDH, IIT Bombay",
    companyDetail: "Koita Centre for Digital Health",
    period: "Aug 2023 — Apr 2024",
    type: "research",
    achievements: [
      "Participated in diverse medical AI projects including medical imaging and EEG signal analysis",
      "Developed FESS Loss — a novel loss function improving medical image segmentation accuracy by 6–8%",
      "Published at A-tier conference ISBI 2024 and contributed to peer-review processes",
    ],
  },
  {
    id: "iith",
    role: "AI Research Intern",
    company: "IIT Hyderabad",
    companyDetail: "Indian Institute of Technology",
    period: "Jun 2023 — Apr 2024",
    type: "research",
    achievements: [
      "Worked on brain tumor segmentation using federated learning approaches",
      "Implemented contrastive learning for heterogeneous data sources, achieving 5–12% improvement in segmentation accuracy",
    ],
  },
  {
    id: "pdeu-ta",
    role: "Teaching Assistant (Research)",
    company: "Pandit Deendayal Energy University",
    period: "Sep 2022 — May 2023",
    type: "academic",
    achievements: [
      "Conducted research in machine learning, statistical data modeling, and computer vision",
      "Authored or co-authored 5+ publications across medical imaging, thermal imaging, and computer vision",
    ],
  },
];
