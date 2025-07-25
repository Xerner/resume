import { ISkill } from "../models/ISkill";
import { SkillType } from "../models/SkillType";

export const DEFAULT_LANGUAGE_COLOR = "#DDDDDD";
export const SKILLS: ISkill[] = [  
  { name: "SASS",                type: SkillType.Language, icon: "assets/icons/sass.png"               , color: "#CF649A", },
  { name: "SCSS",                type: SkillType.Language, icon: "assets/icons/sass.png"               , color: "#CF649A", },
  { name: "SQL",                 type: SkillType.Language, icon: "assets/icons/sql-server.png"         , color: "#0078D4", },
  { name: "TypeScript",          type: SkillType.Language, icon: "assets/icons/typescript.png"         , color: "#2b7489", },
  { name: "Jupyter Notebook",    type: SkillType.Language, icon: "assets/icons/Jupyter Notebook.png"   , color: "#DA5B0B", },
  { name: "Shell",               type: SkillType.Language, icon: "assets/icons/bash.png"               , color: "#89e051", },
  { name: "Bash",                type: SkillType.Language, icon: "assets/icons/bash.png"               , color: "#89e051", },
  { name: "Visual Basic",        type: SkillType.Language, icon: "assets/icons/visual-basic.png"       , color: "#945db7", },
  { name: "Java",                type: SkillType.Language, icon: "assets/icons/java.png"               , color: "#b07219", },
  { name: "HTML",                type: SkillType.Language, icon: "assets/icons/html.png"               , color: "#e44b23", },
  { name: "C",                   type: SkillType.Language, icon: "assets/icons/c.png"                  , color: "#555555", },
  { name: "Arduino",             type: SkillType.Language, icon: "assets/icons/arduino.png"            , color: "#bd79d1", },
  { name: "C#",                  type: SkillType.Language, icon: "assets/icons/c-sharp.png"            , color: "#178600", },
  { name: "CSS",                 type: SkillType.Language, icon: "assets/icons/css.png"                , color: "#563d7c", },
  { name: "LaTeX",               type: SkillType.Language, icon: "assets/icons/tex.png"                , color: "#3D6117", },
  { name: "JavaScript",          type: SkillType.Language, icon: "assets/icons/javascript.png"         , color: "#f1e05a", },
  { name: "Python",              type: SkillType.Language, icon: "assets/icons/python.png"             , color: "#3572A5", },
  { name: "Game Maker Language", type: SkillType.Language, icon: "assets/icons/game-maker-language.png", color: "#8fb200", },

  { name: "Angular",              type: SkillType.Framework, icon: "assets/icons/angular.png" },
  { name: "React",                type: SkillType.Framework, icon: "assets/icons/react.png" },
  { name: "Storybook",            type: SkillType.Framework, icon: "assets/icons/storybook.png" },
  { name: "TailwindCss",          type: SkillType.Framework, icon: "assets/icons/tailwindcss.png" },
  { name: ".Net",                 type: SkillType.Framework, icon: "assets/icons/dotnet.png" },
  { name: "ASP.Net",              type: SkillType.Framework, icon: "assets/icons/net-core.png" },
  { name: "NUnit",                type: SkillType.Framework, icon: "assets/icons/nunit.png" },
  { name: "SignalR",              type: SkillType.Framework, icon: "assets/icons/signalr.png" },
  { name: "Entity Framework",     type: SkillType.Framework, icon: "assets/icons/net-core.png" },
  { name: "J2534",                type: SkillType.Framework, icon: "assets/icons/signal-icon.png" },
  { name: "Service Workers",      type: SkillType.Framework },
  { name: "ABP.io",               type: SkillType.Framework },
  { name: "FastAPI",              type: SkillType.Framework },
  { name: "Django", type: SkillType.Framework },

  { name: "Docker",                      type: SkillType.Tool, icon: "assets/icons/docker.png" },
  { name: "Git",                         type: SkillType.Tool, icon: "assets/icons/git.png" },
  { name: "Jira",                        type: SkillType.Tool, icon: "assets/icons/jira.png" },
  { name: "Unity",                       type: SkillType.Tool, icon: "assets/icons/unity.png" },
  { name: "Microsoft Office",            type: SkillType.Tool, icon: "assets/icons/msoffice.png" },
  { name: "GoCD",                        type: SkillType.Tool, icon: "assets/icons/go-cd.png" },
  { name: "Blender",                     type: SkillType.Tool, icon: "assets/icons/blender.webp" },
  { name: "Linux",                       type: SkillType.Tool, icon: "assets/icons/linux.png" },
  { name: "Bitbucket",                   type: SkillType.Tool, icon: "assets/icons/bitbucket.svg" },
  { name: "Github",                      type: SkillType.Tool },
  { name: "Github Actions",              type: SkillType.Tool },
  { name: "Visual Studio",               type: SkillType.Tool, icon: "assets/icons/visual-studio.png" },
  { name: "VS Code",                     type: SkillType.Tool, icon: "assets/icons/vs-code.png" },
  { name: "SSMS",                        type: SkillType.Tool, icon: "assets/icons/ssms.png" },
  { name: "Chart.js",                    type: SkillType.Tool },
  { name: "MSSQL",                       type: SkillType.Tool },
  { name: "MySQL",                       type: SkillType.Tool },
  { name: "PostgreSQL",                  type: SkillType.Tool },
  { name: "MongoDB",                     type: SkillType.Tool },
  { name: "Google Cloud Platform (GCP)", type: SkillType.Tool },
  { name: "Postman",                     type: SkillType.Tool },
  { name: "Hoppscotch",                  type: SkillType.Tool },
  { name: "GCP BigQuery",                type: SkillType.Tool, icon: "assets/icons/sass.png", color: "#CF649A", },
  { name: "Tekton",                      type: SkillType.Tool, icon: "assets/icons/sass.png", color: "#CF649A", },
  { name: "Swagger UI",                  type: SkillType.Tool },
  { name: "PrimeNG",                     type: SkillType.Tool },
  { name: "Apache ECharts",              type: SkillType.Tool },

  { name: "Communication",                type: SkillType.Social },
  { name: "Leadership",                   type: SkillType.Social },
  { name: "Teamwork",                     type: SkillType.Social },
  { name: "Project Management",           type: SkillType.Social },
  { name: "Cross-functional Integration", type: SkillType.Social },
  { name: "Critical Thinking",            type: SkillType.Social },
  { name: "Time Management",              type: SkillType.Social },
  { name: "Adaptability",                 type: SkillType.Social },

  { name: "Machine Learning",      type: SkillType.Concept },
  { name: "Kmeans",                type: SkillType.Concept },
  { name: "Domain Driven Design",  type: SkillType.Concept },
  { name: "MVC",                   type: SkillType.Concept },
  { name: "Dependency Injection",  type: SkillType.Concept },
  { name: "Unit Testing",          type: SkillType.Concept },
  { name: "Integration Testing",   type: SkillType.Concept },
]
