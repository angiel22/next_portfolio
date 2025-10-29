export type Project = {
    id: string
    name: string
    description: string
    link: string
    image: string
    tools: string[]

    // new / required-for-page fields
    slug: string            // URL slug (e.g. 'birdbox-cellular-dashboard')
    date?: string            // human-readable date (e.g. 'June 2025' or '2025-06-12')
    teamSize?: number
    hero?: string
    overview?: string
    features?: string[]
    samples?: string[]       // sample photos for carousel (array of image paths)
    challenges?: string
    outcome?: string
    related?: string[]     // array of related project IDs (for clickable links)
}


type WorkExperience = {
    company: string
    title: string
    description: string
    start: string
    end: string
    id: string
    tools: string[]
}

type Skill = {
    name: string
    description: string
    id: string
}

type Version = {
    time: string
    name: string
    link: string
    id: string
}


export const PROJECTS: Project[] = [
  {
    id: 'project1',
    slug: 'a-note-to-you',
    name: 'A Note To You',
    description:
      'An online platform developed in partnership with a local arts organization featuring anonymous notes written by students. The project blends thoughtful content with community outreach.',
    link: 'https://anotetoyou.cad.rit.edu/',
    image: '/images/anotetoyou-mockup.png',
    hero: '/images/anotetoyou-mockup.png',
    tools: ['JavaScript', 'Bootstrap', 'HTML/CSS'],
    date: 'Spring 2024',
    teamSize: 8,
    overview:
      'The project was designed to give students a safe, creative outlet to share their emotions and experiences through anonymous notes. The whole project thinking about how to make art accessible for everyone. Our team collaborated with a local arts organization to ensure accessibility and inclusivity, while also focusing on a simple UI for desktop viewing.',
    features: [
      'Infinite schrolling',
      'Moderated content review',
      'Community events',
    ],
    // samples: [
    //   '/images/anotetoyou-1.png',
    //   '/images/anotetoyou-2.png',
    //   '/images/anotetoyou-3.png',
    // ],
    challenges:
      'Balancing anonymity and moderation was a challenge in deciding what content to include.',
    outcome:
      'The site successfully launched on a CAD (College of Art and Design) site with hundreds of student submissions and was recognized in the RIT Newsmaker section.',
    related: ['project2', 'project3'],
  },
  {
    id: 'project2',
    slug: 'forme',
    name: 'forME',
    description:
      'M&T Best UI/UX Winning Project: Developed a mobile application within a 24-hour timeframe with a specific focus on educating women about the latest mental health medications and birth control options available in the market.',
    link: 'https://devpost.com/software/forme-5h8m20',
    image: '/images/forme-mockup.png',
    hero: '/images/forme-mockup.png',
    tools: ['HTML', 'CSS', 'JavaScript', 'API'],
    date: 'Fall 2023',
    teamSize: 4,
    overview:
      'forME is a hackathon project created in under 24 hours to provide an accessible mobile platform for women seeking reliable health information. The app integrates mental health components and reproductive health Open FDA APIs, with a focus on simplicity and credibility.',
    features: [
      'Searchable database of medications and birth control options',
      'Personalized content recommendations',
      'Clean, calming interface with color psychology considerations',
    ],
    samples: [
      '/images/forme-mockup.png',
      '/images/forme-1.png',
    ],
    challenges:
      'Time constraints and information accuracy were major challenges. We worked rapidly to design a user-centered flow while ensuring data sources accessed properly.',
    outcome:
      'The project won the M&T “Best UI/UX” award for its intuitive design and educational impact. The experience highlighted the importance of designing for accessibility and purpose.',
    related: ['project3', 'project1'],
  },
  {
    id: 'project3',
    slug: 'rit-ischool-site',
    name: 'RIT iSchool Site',
    description:
      'Worked to enhance the user experience on the iSchool website by incorporating UI components, be they downloaded React components or self-created ones.',
    link: 'https://people.rit.edu/al2231/ISTE340/project2/',
    image: '/images/ischool-mockup.png',
    hero: '/images/ischool-mockup.png',
    tools: ['React', 'Web API', 'CSS'],
    date: 'Spring 2024',
    teamSize: 1,
    overview:
      'This project focused on improving the usability and visual design of the RIT iSchool website based on the old API containing information. The work involved modernizing the interface and implementing reusable React components to streamline future development.',
    features: [
      'Modular React component design',
      'Improved navigation and accessibility',
      'Custom styling with consistent branding',
    ],
    samples: [
      '/images/ischool-1.png',
      '/images/ischool-2.png',
    ],
    challenges:
      'Tasked with using a variety of different components to communicate and consume all of the data available on the API.',
    outcome:
      'The new interface received positive feedback and functioned well. Was a great introduction and learning experience to frameworks and libraries as well as implementing them with non-local data.',
    related: ['project1', 'project2'],
  },
]

export const WORK_EXPERIENCES: WorkExperience[] = [
    {
        company: 'RIT Software Engineering',
        title: 'Course Assistant',
        description: 'Provide timely and constructive feedback for over 600 assignments, and support the grading process by maintaining accurate records and inputting into the university grading system. Offer additional academic support to 30 students during class and with clarification of Python course topics.',
        start: '2023',
        end: 'Present',
        id: 'work1',
        tools: ['Python', 'Peer Tutoring', 'Instructional Support'],
    },
    {
        company: 'Charles River Development',
        title: 'SWE Intern',
        description: 'Worked with the Engineering QA team on converting over 25 automated test cases from front-end-based Silk4Net testing to back-end-based in-house API system tests. Utilized systems such as Jira/Confluence, TeamCity, and Perforce to stay updated with information, software, and files. Advanced financial domain knowledge familiarizing with software products produced and their interfaces.',
        start: '2024',
        end: '2024',
        id: 'work2',
        tools: ['Software Testing', 'Silk4Net', 'Cucumber'],
    },
    {
        company: 'Protomatica CTE',
        title: 'Project Intern',
        description: 'Worked on a functional robotic arm; designed in Autodesk Inventor, 3D printed on Makerbot Replicator, coded and circuited with Arduino software in a collaborative team of three. Managed the project process with documentation and effective communication with employers throughout the year-long process.',
        start: '2021',
        end: '2022',
        id: 'work3',
        tools: ['Arduino', '3D Printing', 'Autodesk Inventor'],
    },
]

export const SKILLS: Skill[] = [
    {
        name: 'Frontend Development',
        description: 'building responsive, accessible interfaces with modern frameworks and tools.',
        id: 'skill1'
    },
    {
        name: 'Mobile Application Development',
        description: 'developing mobile apps with tools such as Swift and Kotlin, for both IOS and Android',
        id: 'skill2'
    },
    {
        name: 'Backend Work',
        description: 'creating and using SQL databases, connected to Java.',
        id: 'skill3'
    },
    {
        name: 'API Development & Integration',
        description: 'utilitizing REST APIs to advance applications.',
        id: 'skill4'
    },
    {
        name: 'Mechatronics',
        description: 'machinery, laser/plasma cutters, 3D printers, and 3D modeling.',
        id: 'skill5'
    },
]

export const VERSIONS: Version[] = [
    // {
    //     time: '2023',
    //     name: 'React Portfolio 1.0',
    //     link: '/p_v1/index.html',
    //     id: 'v1'
    // },
    {
        time: '2024',
        name: 'Vanilla Portfolio 0.5',
        link: '/p_v2/index.html',
        id: 'v2'
    },
    {
        time: '2024',
        name: 'Vanilla Portfolio 1.0',
        link: '/p_v3/index.html',
        id: 'v3'
    },
    {
        time: '03.2025',
        name: 'Vanilla Portfolio 2.0',
        link: '/p_v4/index.html',
        id: 'v4'
    },
    {
        time: '07.2025',
        name: 'Vanilla Portfolio 2.5',
        link: '/p_v5/index.html',
        id: 'v5'
    },
]