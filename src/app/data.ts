type Project = {
    name: string
    description: string
    link: string
    image: string
    id: string
    tools: string[]
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
        name: 'A Note To You',
        description:
            'An online platform developed in partnership with a local arts organization featuring anonymous notes written by students. The project blends thoughtful content with community outreach.',
        link: 'https://anotetoyou.cad.rit.edu/',
        image: '/images/anotetoyou-mockup.png',
        id: 'project1',
        tools: ['JavaScript', 'Bootstrap', 'PHP'],
    },
    {
        name: 'forME',
        description: 'M&T Best UI/UX Winning Project: Developed a mobile application within a 24-hour timeframe with a specific focus on educating women about the latest mental health medications and birth control options available in the market.',
        link: 'https://devpost.com/software/forme-5h8m20',
        image: '/images/forme-mockup.png',
        id: 'project2',
        tools: ['HTML', 'CSS', 'JavaScript', 'Web API'],
    },
    {
        name: 'RIT iSchool Site',
        description: 'Worked to enhance the user experience on the iSchool website by incorporating UI components, be they downloaded React components or self-created ones.',
        link: 'https://people.rit.edu/al2231/ISTE340/project2/',
        image: '/images/ischool-mockup.png',
        id: 'project3',
        tools: ['React', 'Web API', 'CSS'],
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
        name: 'Vanilla Portfolio 1.0 *',
        link: '/p_v3/index.html',
        id: 'v3'
    },
    {
        time: '03.2025',
        name: 'Vanilla Portfolio 2.0 *',
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