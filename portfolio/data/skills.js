import { Code2, Palette, Wrench, Database } from "lucide-react";

// No percentages or ratings on purpose - they can't be measured honestly.
export const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js"],
  },
  {
    title: "Styling",
    icon: Palette,
    skills: ["Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "Backend Familiarity",
    icon: Database,
    skills: ["MongoDB", "Basic API Integration"],
  },
];
