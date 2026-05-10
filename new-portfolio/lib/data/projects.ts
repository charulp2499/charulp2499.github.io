export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  metrics?: string;
  github?: string;
  demo?: string;
  paper?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "genai-playground",
    title: "Generative AI Playground",
    description:
      "Interactive platform for experimenting with various GANs and VAEs. Supports image generation, data augmentation, compression, and reconstruction — deployed on Hugging Face Spaces.",
    category: "Generative AI",
    tags: ["GANs", "VAEs", "PyTorch", "Hugging Face", "Gradio"],
    metrics: "Live on HF Spaces",
    github: "https://github.com/charulp2499/Generative_playground",
    demo: "https://huggingface.co/spaces/charulp2499/Generative_playground",
  },
  {
    id: "depth-estimation",
    title: "Real-Time Depth Estimation & 3D Reconstruction",
    description:
      "Real-time depth estimation system leveraging MiDaS for depth maps and YOLOv5 for object detection. Generates point clouds for 3D reconstruction from webcam input.",
    category: "Computer Vision",
    tags: ["MiDaS", "YOLOv5", "OpenCV", "3D Vision", "Real-time"],
    metrics: "Real-time inference",
    github:
      "https://github.com/charulp2499/openCV/blob/main/Testing-Real-Time-Depth-Estimation.py",
    demo: "https://www.linkedin.com/posts/charulp2499_3dcomputervision-depthestimation-objectdetection-activity-7227187124444233729-bd4R",
  },
  {
    id: "gaze-tracing",
    title: "Gaze-Based Mouse Control System",
    description:
      "Gaze-tracking system that translates eye gaze direction into precise mouse pointer movements. Enables hands-free computer interaction for accessibility.",
    category: "Computer Vision",
    tags: ["Eye Tracking", "OpenCV", "dlib", "HCI", "Accessibility"],
    metrics: "Real-time control",
    github: "https://github.com/charulp2499/Gaze-Tracing-/blob/main/main.py",
    demo: "https://github.com/charulp2499/Gaze-Tracing-/blob/main/output.mp4",
  },
  {
    id: "medical-segmentation",
    title: "Medical Image Segmentation with Novel Loss Function",
    description:
      "3D medical image segmentation across MRI and CT modalities. Developed FESS Loss — a novel loss function improving segmentation accuracy by 6–8%. Published at ISBI 2024.",
    category: "Healthcare AI",
    tags: [
      "Medical Imaging",
      "Segmentation",
      "FESS Loss",
      "3D CNNs",
      "ISBI 2024",
    ],
    metrics: "+6–8% accuracy",
    github: "https://github.com/charulp2499/FeSS_Loss",
    paper: "https://ieeexplore.ieee.org/abstract/document/10635209/",
  },
  {
    id: "cityscape-segmentation",
    title: "Urban Scene Semantic Segmentation",
    description:
      "Semantic segmentation models for classifying urban street scenes. Achieved 88–94% accuracy through optimized architectures and advanced data augmentation techniques.",
    category: "Computer Vision",
    tags: ["Semantic Segmentation", "Cityscapes", "CNNs", "Data Augmentation"],
    metrics: "88–94% accuracy",
  },
  {
    id: "night-vision",
    title: "Night Vision Face Detection via Thermal Imaging",
    description:
      "Face detection in extreme low-light using thermal IR images. Combined Haar-cascade, Dlib, and YOLOv8 for robust detection. Won Best Practical Paper Award at AIxPAC 2023.",
    category: "Computer Vision",
    tags: ["Thermal Imaging", "YOLOv8", "dlib", "Night Vision", "Award Winner"],
    metrics: "Best Paper Award",
    paper:
      "https://apeiron.iulm.it/bitstream/10808/54068/1/paper_1%20%283%29.pdf",
  },
  {
    id: "palm-print",
    title: "Palm Print Detection & Biometric Identification",
    description:
      "Built proprietary palm print dataset with manual annotation. Applied transfer learning with YOLO v5 and v8 — YOLOv8 outperformed v5 by 9–13% on biometric identification.",
    category: "Computer Vision",
    tags: [
      "Biometrics",
      "YOLOv8",
      "Transfer Learning",
      "Object Detection",
      "Custom Dataset",
    ],
    metrics: "+9–13% improvement",
    github: "https://github.com/charulp2499/Plam-Print",
  },
  {
    id: "solar-prediction",
    title: "Solar Power Forecasting & Predictive Maintenance",
    description:
      "Deep learning and time series models for solar power generation prediction and maintenance scheduling. Multi-model ensemble for accurate forecasting.",
    category: "AI Infrastructure",
    tags: [
      "Time Series",
      "LSTM",
      "TensorFlow",
      "Forecasting",
      "Predictive Maintenance",
    ],
    metrics: "Multi-model ensemble",
    github:
      "https://github.com/charulp2499/Solar-Power-Forcasting-And-Predict-its-maintenance-activitiy",
  },
];

export const projectCategories = [
  "All",
  "Computer Vision",
  "Healthcare AI",
  "Generative AI",
  "AI Infrastructure",
];
