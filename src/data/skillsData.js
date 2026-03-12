import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiFastapi,
  SiGit,
  SiGithub,
} from "react-icons/si";

import { FaCode, FaReact, FaDatabase, FaPlug } from "react-icons/fa";

export const aboutSkills = [
  {
    id: 1,
    icon: <SiPython color="#3776AB" />,
    name: "Python",
    proficiency: 90,
  },
  {
    id: 2,
    icon: <FaReact color="#61DBFB" />,
    name: "React",
    proficiency: 85,
  },
  {
    id: 3,
    icon: <SiJavascript color="#F7DF1E" />,
    name: "JavaScript",
    proficiency: 85,
  },
  { id: 4, icon: <SiHtml5 color="#E34F26" />, name: "HTML", proficiency: 90 },
  { id: 5, icon: <SiCss color="#1572B6" />, name: "CSS", proficiency: 80 },
  {
    id: 6,
    icon: <SiBootstrap color="#7952B3" />,
    name: "Bootstrap",
    proficiency: 85,
  },
  {
    id: 7,
    icon: <FaCode color="#22c55e" />,
    name: "REST API",
    proficiency: 80,
  },
  { id: 8, icon: <FaDatabase color="#f59e0b" />, name: "SQL", proficiency: 80 },
  {
    id: 9,
    icon: <SiFastapi color="#009688" />,
    name: "FastAPI",
    proficiency: 85,
  },
  { id: 10, icon: <SiGit color="#F05032" />, name: "Git", proficiency: 80 },
  {
    id: 11,
    icon: <SiGithub color="#ffffff" />,
    name: "Github",
    proficiency: 85,
  },
  {
    id: 12,
    icon: <FaPlug color="#a855f7" />,
    name: "API Integration",
    proficiency: 80,
  },
];
