import { IJob } from "../models/IJob";

export const JOBS: IJob[] = [
  // universal logistics
  {
    id: "4B136A3D-6F37-457B-8692-2DDE8FC2312B",
    occupationId: "7078AFDD-5BC8-4831-90B5-E427273D583E",
    description: "Develop, unit test, and maintain features across a C# ASP.Net Core REST back-end, modern Angular and Angular Material front-end, and Microsoft SQL database for an internal logistics ERP web app."
  },
  {
    id: "4B136A3D-6F37-457B-8692-2DDE8FC2312B",
    occupationId: "7078AFDD-5BC8-4831-90B5-E427273D583E",
    description: "Developed code adhering to design patterns such as MVC, CQRS, Repository, dependency injection, and pub/sub"
  },
  {
    id: "4B136A3D-6F37-457B-8692-2DDE8FC2312B",
    occupationId: "7078AFDD-5BC8-4831-90B5-E427273D583E",
    description: "Debugged full-stack issues with tools such as Postman, Chrome Devtools/VS Code debugger, Storybook, and Serilog"
  },
  {
    id: "D4179F3E-C254-4989-BA3E-EA9E11AF8909",
    occupationId: "7078AFDD-5BC8-4831-90B5-E427273D583E",
    description: "Re-architected the applications legacy payment system reducing technical debt by 50%."
  },
  {
    id: "3C5570AE-3A93-4EB8-AA92-CA9DA003C3B6",
    occupationId: "7078AFDD-5BC8-4831-90B5-E427273D583E",
    description: "Created a SQL migrations change tracker to automate deploying migrations, saving 4 hours/dev/week."
  },
  {
    id: "AA19EB59-45F3-4E19-A5F5-96D6A54C0643",
    occupationId: "7078AFDD-5BC8-4831-90B5-E427273D583E",
    description: "Architected the CI/CD pipeline for deploying with Docker containers that reduced deployment time by 90%."
  },
  {
    id: "CFBEF422-BA25-48C7-86FA-900E28BA8075",
    occupationId: "7078AFDD-5BC8-4831-90B5-E427273D583E",
    description: "Lead code reviews and mentored junior developers."
  },
  {
    id: "A0099304-21A5-46F1-8E82-970FE589A725",
    occupationId: "7078AFDD-5BC8-4831-90B5-E427273D583E",
    description: "Took part in technical debt review, refinement, and code etiquette enforcement."
  },
  // general motors - signal validation
  {
    id: "E2113BAE-9B52-4E8D-883A-44E612EC3CD0",
    occupationId: "F0B86406-B303-4DE2-9F58-F384C54B9329",
    description: "Architected, developed, and documented a validation and reporting application in Python for J2534 (CAN) signals. The application saved validation engineers 8 hours per week of testing."
  },
  {
    id: "9C4E4105-7B95-492F-BEEA-7CA8ECB05C23",
    occupationId: "F0B86406-B303-4DE2-9F58-F384C54B9329",
    description: "Worked directly with validation engineers to understand and develop business requirements"
  },
  // general motors - localization engineer
  {
    id: "F5E33D93-ACD1-470D-9C33-265FA084E5E0",
    occupationId: "7B9CD2A8-F374-4CF3-871A-EEEBDA326C14",
    description: "Integrated and unit tested an existing platform-level performance testing Python framework into the teams codebase and Jenkins CI/CD pipeline. Using the existing framework saved the team 6 months of development time."
  },
  // general motors - technical project manager
  {
    id: "10ABC141-C638-4D9C-BEE3-787685D19845",
    occupationId: "85DA0D72-94C4-4A0D-A224-CAEF40ED6B09",
    description: "Collaborated with management across the Ultra Cruise project to analyze and report gaps in current and expected operational design domains."
  },
  // Mahle
  {
    id: "9E830D7A-74AC-408E-84A7-6BDBA3E93F23",
    occupationId: "1B14C1B3-469B-4E97-A371-F359A6F96670",
    description: "Worked directly with test engineers to understand and develop business requirements"
  },
  {
    id: "9E830D7A-74AC-408E-84A7-6BDBA3E93F23",
    occupationId: "1B14C1B3-469B-4E97-A371-F359A6F96670",
    description: "Processed carbon canister GWC/BWC test data with a C# Windows Forms application, saving engineers 20 hours/week."
  },
  {
    id: "171F43AA-AF86-4B4F-BBE9-D95A776B19F1",
    occupationId: "1B14C1B3-469B-4E97-A371-F359A6F96670",
    description: "Automated, analyzed, and reported employee key performance indicator (KPI) data using Visual Basic and Microsoft SQL. Results went to prove the high performance of the team to upper management."
  },
  {
    id: "71636935-EE2C-4D8C-BE41-963EFC58C30D",
    occupationId: "1B14C1B3-469B-4E97-A371-F359A6F96670",
    description: "Created proof of concepts for a new work request handling application with Reactjs."
  },
  // Personal Projects
  {
    id: "328F8A20-8A7C-4BB0-9E91-9160268B7A55",
    occupationId: "9B397841-00AE-4CB0-99C6-A18090904F42",
    description: "A web app for slicing images into different layers based on the presence of colors in the image. Built with Angular v19, Angular Material, and TailwindCss. Hosted with Github Pages and Squarespace."
  },
  {
    id: "51C7EB29-EEAD-4934-AF90-DA31048D8A25",
    occupationId: "74C56F46-0DA6-4372-8E28-0CBE64A3F172",
    description: "A Web app containing a dashboard displaying time related info on Bitbucket PRs, and a Git commit graph similar to Githubs. Built with Bitbuckets REST API, Angular v19, Angular Material, and TailwindCss. Hosted with Github Pages and Squarespace."
  },
  {
    id: "BCDBDF65-5671-40C0-9B56-9A4D51399EC0",
    occupationId: "2A64DECE-E5A8-476B-89BD-5C67BFB8144E",
    description: "A Web app that displays spending over time, and projected future spending based on known costs and income. Built with Airtables developer API, Angular v19, Angular Material, and TailwindCss. Hosted with Github Pages and Squarespace."
  },
  {
    id: "D24AA061-8AA6-444F-A6A6-0282DFFB8C7A",
    occupationId: "29254BEF-4991-4BD3-BCCB-0F123893F4F3",
    description: "My resume! Built in Angular v19 and styled to be viewed and printable like a normal letter sized PDF document. Hosted with Github Pages and Squarespace."
  },
  {
    id: "797AE482-0232-475D-AB41-16040C52F7C4",
    occupationId: "429616D7-8BCA-43A2-BA3A-C817728F7905",
    description: "A prototype full-stack space shooter game built with its own game engine with the browsers canvas API, Angular v17, Angular Material, a C# ASP.Net Core back-end, and Microsoft SQL database."
  },
  {
    id: "67F4B72A-14B4-4DA6-84EA-F921F8A14ED8",
    occupationId: "FFEA4FF4-1801-4A92-8A8C-1975E8E90261",
    description: "A city building game with simulation traffic and pedestrians that gives the player feedback on their city's efficiency. Built in Unity with C# and using Google maps REST API."
  },
  {
    id: "1901A9D6-3733-42B0-BB95-D1DD75B05F42",
    occupationId: "59C0B158-7068-45F1-A437-0D7BE1BE34ED",
    description: "Software Engineering, Computer Architecture, Operating Systems, Algorithms, Data Structures, Database Management, Artificial Intelligence, Advanced Systems Administration."
  },
  {
    id: "86826EFD-23FB-467C-8F7B-078A76B1B796",
    occupationId: "E695D3BA-87A8-4FEE-A492-0E3F9767B7A0",
    description: "A web app for a local cafe that displays their menu, hours, and location. Built with Angular v19, Angular Material, and TailwindCss. Hosted with Github Pages and Squarespace."
  },
  {
    id: "817AF3FD-140B-4075-98EE-C5A1C86290CA",
    occupationId: "5F030AD0-3BB9-4777-9DC8-A0157FB91911",
    description: "My portfolio site! This website is a showcase of my work and skills. Built with Angular v19, Angular Material, and TailwindCss. Hosted with Github Pages and Squarespace."
  }
];
