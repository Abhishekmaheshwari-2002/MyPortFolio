import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `
// Hey, I’m Abhishek — a Web Developer with a Passion for Clean Code & Smart Solutions
I bring ideas to life with React, Next.js, and JavaScript, crafting sleek, responsive web apps that put users first. Backed by a Master’s in Computer Science and strong skills in HTML, CSS, Java, and OOP, I turn complex problems into simple, elegant solutions. I also love exploring data with Python, Advanced Excel, and Power BI to drive better decisions.
`;

export const ABOUT_TEXT = `I am a dedicated and versatile Software developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, and Node.js. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding`;

export const EXPERIENCES = [
  {
    year: "2023 - 2025",
    role: "Master of Computer Science and Application (MCA)",
    company: "",
    description: `Pimpri Chinchwad University, Pune
`,
    technologies: ["JavaScript", "React.js", "Next.js", "Python"],
  },
  {
    year: "2020 - 2023",
    role: "Bachelor of Computer Science and Application (BCA)",
    company: "",
    description: `Jiwaji University of Gwalior
`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2018 - 2019",
    role: "High Secondary",
    company: "",
    description: `MP High Secondary Board `,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2016 - 2017",
    role: "High School",
    company: "",
    description: `MP High School Board`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    link: "https://ems-brown.vercel.app/",
    title: "Employee Management System (EMS)",
    image: project1,
    description:
      "A streamlined solution to manage employee data, track attendance, and organise tasks efficiently, enhancing overall workforce productivity         Use for admin dashboard: admin@me.com, User Dashboard : e@e.com and Password : 123",
    technologies: ["HTML", "Tailwind CSS", "React.js", "Node.js", "Express.js", "Mongodb"],
  },
  {
    link: "https://roll-dice-ten.vercel.app/",
    title: "Roll Dice Game",
    image: project2,
    description:
      "Roll Dice Game is an interactive web application that simulates the classic dice-rolling experience. Users can roll virtual dice to generate random outcomes, making it a fun and engaging tool for games or decision-making.",
    technologies: ["HTML", "Tailwind CSS", "React.js", "JavaScript"],
  },
  {
    link: "https://text-util-sigma.vercel.app/",
    title: "TextUtils",
    image: project3,
    description:
      "TextUtils is a versatile web tool designed to simplify text processing tasks. It allows users to easily manipulate and format text, including features like case conversion, word count, and more, all in an intuitive and user-friendly interface.",
    technologies: ["HTML", "CSS", "React", "Bootstrap", "JavaScript"],
  },
  {
    link: "https://brand-page-service.vercel.app/",
    title: "Contact Page",
    image: project4,
    description:
      "A user-friendly contact page designed to help visitors easily get in touch. Features a clean layout with a form for sending messages and additional contact details.",
    technologies: ["HTML", "Tailwind CSS", "React.js"],
  },
  {
    link: "https://thief-detect.vercel.app/",
    title: "Thief Detection",
    image: project3,
    description:
      "Developed a system to detect and prevent theft using Next.js(React Framework),coco-ssd(Object detection model), and react-webcam(NPM package).Achieved high accuracy in object detection and real-time anomaly detection.",
    technologies: ["HTML", "CSS", "Next.js", "Tailwind CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "Pune, Maharashtra",
  email: "abhishek20602@gmail.com",
};
