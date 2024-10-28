import SCMS from "../../../../assets/Enrollments-SCMS.png";
import CrossFitProject from "../../../../assets/CrossFitProject.png";

interface Project{
  id: number;
  img: string;
  title: string;
  text: string;
  deployed: string;
  github: string;
}

export const projects:Project[] = [
  {
    id: 1,
    img: `${CrossFitProject}`,
    title: "CrossFit web",
    text: "My CrossFit website offers detailed information, including a video and images, and features a shop showcasing essential CrossFit products.",
    deployed: "https://crossfit-web.onrender.com/",
    github: "https://github.com/danieltovbin/CrossFit-web",
  },
  {
    id: 2,
    img: `${SCMS}`,
    title: "SCMS",
    text: "The Student Course Management System simplifies course enrollment and management for students and administrators.",
    deployed: "",
    github: "https://github.com/danieltovbin/SCMS",
  },
];
