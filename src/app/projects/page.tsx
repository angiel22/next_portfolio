// projects/

import BackButton from "../../components/BackButton"
import Link from "next/link";

type Project = {
    year: string
    project: string
    href?: string
    internal?: boolean
    context: string
    info: string
}

function ProjectName({ project, href, internal }: Pick<Project, "project" | "href" | "internal">) {
    if (!href) return <span>{project}</span>
    if (internal) return <Link href={href} className="text-blue-400 hover:underline">{project}</Link>
    return <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{project}</a>
}

function ProjectRow({ year, project, href, internal, context, info }: Project) {
    return (
        <>
            {/* Mobile card */}
            <tr className="md:hidden">
                <td colSpan={4} className="px-2 py-2">
                    <div className="bg-gray-800 rounded-lg p-3 space-y-1">
                        <div className="text-xs text-gray-400">{year} · {context}</div>
                        <div className="font-semibold text-white">
                            <ProjectName project={project} href={href} internal={internal} />
                        </div>
                        <div className="text-sm text-gray-300">{info}</div>
                    </div>
                </td>
            </tr>
            {/* Desktop row */}
            <tr className="hidden md:table-row">
                <td className="border border-gray-400 px-4 py-2">{year}</td>
                <td className="border border-gray-400 px-4 py-2">
                    <ProjectName project={project} href={href} internal={internal} />
                </td>
                <td className="border border-gray-400 px-4 py-2">{context}</td>
                <td className="border border-gray-400 px-4 py-2">{info}</td>
            </tr>
        </>
    )
}

function SectionHeader({ label, className }: { label: string; className: string }) {
    return (
        <tr>
            <td colSpan={4} className={`text-center font-bold py-2 ${className}`}>
                {label}
            </td>
        </tr>
    )
}

export default function ProjectsTable() {

    const IN_DEV: Project[] = [
        {
            year: "2025",
            project: "BirdBox Monitor",
            context: "Senior Capstone",
            info: "Building a bird box monitor for occupation and nesting data collection. Full project process from requirements gathering to hardware and software integration for sponsor.",
        },
        {
            year: "2025",
            project: "You're the Hamster",
            href: "/hamster",
            internal: true,
            context: "Personal",
            info: "Based on facial and pose tracking, the program maps unto a set of \"hamster\" images. Built using TouchDesigner, still working on the facial bounds for accuracy.",
        },
        // <tr>
        //     <td className="border px-4 py-2">2025</td>
        //     <td className="border px-4 py-2">
        //         <a href="https://www.figma.com/design/VokTLGHSGJlxVVPd6M9UbV/Shark-Buddy--Make-a-thon?node-id=2001-2&t=jKpvBlEVTMZRaiX3-1" className="text-blue-600 hover:underline" target="_blank">
        //             Shark Buddy
        //         </a>
        //     </td>
        //     <td className="border px-4 py-2">Personal - New Media</td>
        //     <td className="border px-4 py-2">Use of new Figma Make feature to create an AR app for the playground.</td>
        // </tr>
    ]

    const PAST: Project[] = [
        {
            year: "2025",
            project: "GreenSphere",
            context: "ISTE 454/456",
            info: "IOS/Android Sustainability App built with Swift and Kotlin.",
        },
        {
            year: "* 2025",
            project: "A Note To You",
            href: "https://anotetoyou.cad.rit.edu/",
            context: "Art Leadership",
            info: "Platform for community arts using Bootstrap, JS, etc.",
        },
        {
            year: "2024 (Academic)",
            project: "BirdFeed",
            href: "https://www.figma.com/design/AwR10EsKteJGjsMn6dUN06/Birdfeed?node-id=0-1&t=h7S7xOybNfxrrwHd-1",
            context: "ISTE 252",
            info: "Mobile app development with Flutter/Figma, birdwatching social app.",
        },
        {
            year: "2024 (Academic)",
            project: "RIT Parking App",
            href: "https://www.figma.com/proto/jBZjzbMAcKbbaNTiYJNYgF/260-RIT-Parking-App?node-id=104-58&t=brlvQiUTg1vCie2P-1&starting-point-node-id=104%3A58",
            context: "ISTE 260",
            info: "Design process walkthrough of a parking assistance app for the RIT campus. Prototyped with Figma.",
        },
        {
            year: "2023",
            project: "WOREO [Discontinued]",
            context: "Personal",
            info: "2D platforming game built in Unity, using Bitbucket.",
        },
        {
            year: "2023",
            project: "BHASE [Discontinued]",
            context: "UX Club",
            info: "Budgeting webapp catered to college students, focused on UX design process, such as user interviews, etc.",
        },
        {
            year: "* 2023 (Academic)",
            project: "RIT iSchool Page",
            href: "https://people.rit.edu/al2231/ISTE340/project2/",
            context: "ISTE 340",
            info: "Built with React, redesigning frontend with data from web API, prioritizing components.",
        },
        {
            year: "2023 (Academic)",
            project: "Dynamic Menu Ordering",
            href: "https://people.rit.edu/al2231/ISTE340/project1/iste340p1.html",
            context: "ISTE 340",
            info: "Dynamic page population with sample data using JS, HTML, CSS.",
        },
        {
            year: "* 2023",
            project: "forMe",
            href: "https://devpost.com/software/forme-5h8m20",
            context: "WiCHacks",
            info: "Health mobile app built with HTML, CSS, JS, APIs. Prototyped with Figma.",
        },
        {
            year: "2023 (Academic)",
            project: "Ultimate UNIX Guide",
            href: "https://people.rit.edu/al2231/ISTE240/projects/group/index.php",
            context: "ISTE 240",
            info: "The ultimate guide for students covering UNIX topics. Built with php, phpMyAdmin, CSS, and JS.",
        },
        {
            year: "2021 - 2022",
            project: "Robotic Arm",
            context: "Internship",
            info: "Building a functional robotic arm from scratch to then use in instructional material. Utilized Arduino, Autodesk Inventor, and 3D Printing.",
        },
    ]

    return (
        <div className="my-8 mx-6 md:m-8">
            <BackButton />

            <header className="flex flex-col md:flex-row md:justify-between items-start gap-4 mb-6 md:p-6">
                <div>
                    <h1 className="text-xl font-semibold text-zinc-100">Project Archives</h1>
                    <p className="text-sm text-zinc-400 mt-1">Full list of projects I've worked on for record keeping</p>
                </div>
            </header>
            <table className="table-auto border border-gray-400 text-left md:mx-6 w-full md:w-auto">
                <thead className="hidden md:table-header-group">
                    <tr className="bg-gray-700">
                        <th className="border border-gray-400 px-4 py-2">Year</th>
                        <th className="border border-gray-400 px-4 py-2">Project</th>
                        <th className="border border-gray-400 px-4 py-2">Context</th>
                        <th className="border border-gray-400 px-4 py-2">Info</th>
                    </tr>
                </thead>
                <tbody>
                    <SectionHeader label="In Development" className="bg-green-700" />
                    {IN_DEV.map((p) => <ProjectRow key={p.project} {...p} />)}
                    <SectionHeader label="Past" className="bg-gray-600" />
                    {PAST.map((p) => <ProjectRow key={p.project} {...p} />)}
                </tbody>
            </table>
        </div>
    )
}