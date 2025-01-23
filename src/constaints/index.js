import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `
I am a passionate Front-End Developer with a strong foundation in HTML, CSS, JavaScript, and responsive design principles. With a Master's degree in Computer Science and hands-on experience developing dynamic, user-focused web applications,I have honed my skills in front-end technologies like React.js,Next.js and Javascript as well as Good Command in JAVA and OOPS Concept and Basic knowledge of back-end technologies like Node.js,Express.js and MongoDB.
`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Master of Computer Science and application(MCA)",
    company: "8.0 CGPA",
    description: `Pimpri Chinchwad University, Pune
`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2020 - 2023",
    role: "Bachelor of Computer Science and application(BCA)",
    company: "80%",
    description: `Jiwaji University of Gwalior
`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2018 - 2019",
    role: "High Secondary",
    company: "75%",
    description: `MP High Secondary Board `,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2016 - 2017",
    role: "High School",
    company: "82%",
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
      "A streamlined solution to manage employee data, track attendance, and organize tasks efficiently, enhancing overall workforce productivity         use for admin dashboard : admin@me.com, User Dashboard : e@e.com and Password : 123",
    technologies: ["HTML", "Tailwind CSS", "React.js", "Node.js", "Express.js", "MongoDB"],
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
      "Developed a system to detect and prevent theft using Next.js(React Framework),coco-ssd(Object detection model),react-webcam(NPM package).Achieved high accuracy in object detection and real-time anomaly detection.",
    technologies: ["HTML", "CSS", "Next.js", "Tailwind CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "Pune,Maharashtra",
  email: "abhishek20602@gmail.com",
};
