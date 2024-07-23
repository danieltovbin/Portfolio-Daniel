import DogsGallery from "../../../../assets/DogsGallery.png";
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
    img: `${DogsGallery}`,
    title: "Dogs Gallery",
    text: "Dogs gallery website offers detailed about dogs breed, including images,search input that search by a letter and a page of chating with a dog you chose.",
    deployed: "https://dogs-gallery.onrender.com/",
    github: "https://github.com/danieltovbin/dogs_gallery",
  },
];
