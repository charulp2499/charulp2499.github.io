export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  link: string;
  award?: string;
  venueTag: string;
}

export const publications: Publication[] = [
  {
    id: "fess-loss",
    title:
      "FESS Loss: Feature-Enhanced Spatial Segmentation Loss for Optimizing Medical Image Analysis",
    authors: "C Chodvadiya*, N Mahala*, KG Singh, KS Jadhav",
    venue: "2024 IEEE International Symposium on Biomedical Imaging (ISBI)",
    year: 2024,
    link: "https://ieeexplore.ieee.org/abstract/document/10635209/",
    venueTag: "ISBI 2024",
  },
  {
    id: "metaverse-survey",
    title:
      "Intelligent Virtual Worlds: A Survey of the Role of AI in the Metaverse",
    authors: "C Chodvadiya*, V Solanki, KG Singh",
    venue:
      "2024 3rd International Conference for Innovation in Technology (INOCON)",
    year: 2024,
    link: "https://ieeexplore.ieee.org/abstract/document/10511825/",
    venueTag: "IEEE INOCON",
  },
  {
    id: "night-vision-face",
    title:
      "Seeing in the Dark: A Different Approach to Night Vision Face Detection with Thermal IR Images",
    authors: "KG Singh, C Chodvadiya, C Bhatt, P Shah, A Bruno",
    venue: "AIxPAC under AIxIA 2023",
    year: 2023,
    link: "https://apeiron.iulm.it/bitstream/10808/54068/1/paper_1%20%283%29.pdf",
    award: "Best Practical Paper Award",
    venueTag: "AIxPAC 2023",
  },
];
