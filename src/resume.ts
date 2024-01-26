import env from "./config/env"

interface SkillCategory {
  name: string
  values: string[]
}

export type Skills = SkillCategory[]

interface Award {
  name: string
  presenter: string
  date: string
  blurb: string
  quote?: string
}

interface Education {
  award: string
  school: string
  startDate?: string
  endDate?: string
  blurb?: string
}

interface Experience {
  title: string
  company: string
  description: string
  skills: string[]
  bullets: string[]

  startDate: string
  endDate?: string
}

interface Project {
  name: string
  topic: string
  description: string
  skills: string[]
  bullets: string[]

  startDate: string
  endDate?: string
}

interface Contact {
  phone: string
  email: string
  website: string
  github: string
}

interface ResumeData {
  contact: Contact,
  skills: Skills
  experience: Experience[]
  projects: Project[]
  education: Education[]
  awards: Award[]
}

const resumeData: ResumeData = {
  contact: env.contact,
  skills: [
    {
      name: "Full Stack Development",
      values: [
        "Vue.JS",
        "React",
        "JQuery",
        "Javascript and Typescript",
        "Node.js",
        "Python",
        "CSS / SASS"
      ]
    }, {
      name: "Software",
      values: [
        "OmniCMS",
        "Docker",
        "Linux Server Administration",
        "Dell CMC & iDRAC",
        "Figma"
      ]
    }
  ],
  education: [
    {
      award: "Bachelor of Computer Science",
      school: "University of Alaska Fairbanks",
      startDate: "2019",
      blurb: "Covers the fundamentals of programming, hardware, and theory; with an emphasis on real-world application."
    }, {
      award: "High School Diploma",
      school: "Frederick High School",
      endDate: "2018"
    }
  ],
  experience: [
    {
      title: "Full Stack Engineer - Student Position",
      company: "University of Alaska, OIT Platforms, Applications, & Web Services Team",
      startDate: "Nov 2019",
      description: "Support staff, faculty, and student requests through web development and server administration.",
      skills: [
        "OmniCMS",
        "Javascript",
        "Typescript",
        "Python",
        "API Development"
      ],
      bullets: [
        "Architecture, design, and implementation of a web application for internal use in managing data relevant to the UA Scholars scholarship.",
        "Facilitate research of teacher retention in rural Alaska through maintenance of K-12 Platform, a Django application allowing mentors to better prepare incoming education staff for their positions.",
        // "Creation of tools to facilitate semi-automated migration of web content into the University's content management system.",
        // "Implementation of front-end tooling to allow data from Google Sheets to be easily displayed within web pages.",
        "Maintenance and expansion of the University website to increase usability and accessibility."
      ]
    }
  ],
  projects: [
    {
      name: "UAF Students Discord",
      topic: "Education community management",
      skills: [
        "TypeScript",
        "Ruby",
        "Docker"
      ],
      description: "Moderation and maintenance of a Discord group and associated tools that provides communication tools for UAF students and professors",
      bullets: [
        "Completed the migration of a Ruby-based chat bot to TypeScript running within Docker",
        "Created a web interface that allows students to select courses they are participating in and would like receive updates for.",
        "Communicated with departments and faculty across UAF to determine and satisfy user needs and wants."
      ],
      startDate: "Oct 2019"
    }, {
      name: "UAF Cyber Security Club",
      topic: "Education",
      skills: [
        "VMware vSphere",
        "ESXi",
        "Dell CMC",
        "Networking",
        "Communication"
      ],
      description: "Creation and presentation of lectures regarding cyber Security, as well as maintenance of club infrastructure.",
      bullets: [
        "Configuration of a Dell M1000e and associated blade servers.",
        "Configuration of VMware software for a virtual machine cluster.",
        "Creation instructional material on how to secure and maintain business critical services and applications.",
        "Participate in competitions, such as the Collegiate Cyber Defense Competition.",
        "Plan and lead events to educate club members on Cyber Security."
      ],
      startDate: "Aug 2019",
      endDate: "Dec 2022"
    }
  ],
  awards: [
    {
      name: "Outstanding Student Employee",
      presenter: "University of Alaska",
      date: "2023",
      blurb: "Awarded to one student each year in recognition of their contributions and effort put towards their position.",
      quote: "[Katlyn's] highly valuable and much-needed web programming and systems administration skills and can-do attitude have been a great asset to the University."
    }
  ]
}

export default resumeData
