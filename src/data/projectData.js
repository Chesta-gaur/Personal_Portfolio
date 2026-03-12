import authTaskApi from "../assets/images/auth-task-api.png";
import adminDashboard from "../assets/images/admin-dashboard.png";
import virtualAssistant from "../assets/images/virtual-assistant.png";
import ecommerceWebsite from "../assets/images/ecommerce-website.png";
import dentalWebsite from "../assets/images/dental-website.png";
import expenseTracker from "../assets/images/expense-tracker.png";

export const projectData = [
  {
    id: 1,
    image: authTaskApi,
    name: "Auth Task API",
    desc: "JWT-secured task management API built with FastAPI.",
    tech: ["Python", "FastAPI", "JWT", "PostgreSQL"],
    github: "https://github.com/Chesta-gaur/auth-task-api.git",
    demo: "#",
  },
  {
    id: 2,
    image: adminDashboard,
    name: "Admin Dashboard",
    desc: "Interactive admin dashboard for analytics and user management.",
    tech: ["React", "Bootstrap", "API", "Chart.js"],
    github: "https://github.com/Chesta-gaur/admin-dashboard-react-.git",
    demo: "#",
  },
  {
    id: 3,
    image: virtualAssistant,
    name: "NOVA - Virtual Assistant ",
    desc: "AI-powered assistant for handling queries and automation tasks.",
    tech: ["Python", "OpenAI API", "Automation"],
    github:
      "https://github.com/Chesta-gaur/NOVA---Voice-Text-Virtual-Assistant.git",
    demo: "#",
  },
  {
    id: 4,
    image: expenseTracker,
    name: "Expense Tracker App",
    desc: "Simple expense manager for tracking and analyzing daily spending.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    github: "https://github.com/Chesta-gaur/expense_tracker_app.git",
    demo: "https://chesta-gaur.github.io/expense_tracker_app/",
  },
  {
    id: 5,
    image: dentalWebsite,
    name: "Dental Website Template",
    desc: "Modern dental clinic website showcasing services and appointments.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    github: "https://github.com/Chesta-gaur/dental-clinic-website.git",
    demo: "https://chesta-gaur.github.io/dental-clinic-website/",
  },
  {
    id: 6,
    image: ecommerceWebsite,
    name: "Ecommerce Template",
    desc: "Responsive online store with product listing and cart system.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    github: "https://github.com/Chesta-gaur/E-Commerce-Website.git",
    demo: "https://chesta-gaur.github.io/E-Commerce-Website/",
  },
];
