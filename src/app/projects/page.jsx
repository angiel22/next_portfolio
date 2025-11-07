// projects/

import BackButton from "../../components/BackButton"
import Link from "next/link";

export default function ProjectsTable() {
    return (
        <div className="m-8">
            {/* <div className="flex mb-4">
                <IoIosArrowBack size={24} />
                <a href="../"> Back to Main Page</a>
            </div> */}
            <BackButton />

            <header className="flex flex-col md:flex-row md:justify-between items-start gap-4 p-6">
                <div>
                    <h1 className="text-xl font-semibold text-zinc-100">Project Archives</h1>
                    <p className="text-sm text-zinc-400 mt-1">Full list of projects I've worked on for record keeping</p>
                </div>
            </header>
            <table className="table-auto border border-gray-400 text-left mx-6">
                <thead>
                    {/* bg-zinc-300 */}
                    <tr className="bg-gray-700">
                        <th className="border border-gray-400 px-4 py-2">Year</th>
                        <th className="border border-gray-400 px-4 py-2">Project</th>
                        <th className="border border-gray-400 px-4 py-2">Context</th>
                        <th className="border border-gray-400 px-4 py-2">Info</th>
                    </tr>
                </thead>
                <tbody>
                    {/* In Development */}
                    <tr>
                        <td colSpan="4" className="text-center font-bold bg-green-700 py-2">
                            In Development
                        </td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">2025</td>
                        <td className="border px-4 py-2">BirdBox Monitor</td>
                        <td className="border px-4 py-2">Senior Capstone</td>
                        <td className="border px-4 py-2">Building a bird box monitor for occupation and nesting data collection. Full project process from requirements gathering to hardware and software integration for sponsor.</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">2025</td>
                        <td className="border px-4 py-2">
                            <Link href="/hamster" className="text-blue-600 hover:underline">
                                You're the Hamster
                            </Link>
                        </td>
                        <td className="border px-4 py-2">Personal</td>
                        <td className="border px-4 py-2">Based on facial and pose tracking, the program maps unto a set of "hamster" images. Built using TouchDesigner, still working on the facial bounds for accuracy.</td>
                    </tr>
                    {/* <tr>
                        <td className="border px-4 py-2">2025</td>
                        <td className="border px-4 py-2">
                            <a href="https://www.figma.com/design/VokTLGHSGJlxVVPd6M9UbV/Shark-Buddy--Make-a-thon?node-id=2001-2&t=jKpvBlEVTMZRaiX3-1" className="text-blue-600 hover:underline" target="_blank">
                                Shark Buddy
                            </a>
                        </td>
                        <td className="border px-4 py-2">Personal - New Media</td>
                        <td className="border px-4 py-2">Use of new Figma Make feature to create an AR app for the playground.</td>
                    </tr> */}

                    {/* Past */}
                    <tr>
                        <td colSpan="4" className="text-center font-bold bg-gray-600 py-2">
                            Past
                        </td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">2025</td>
                        <td className="border px-4 py-2">GreenSphere</td>
                        <td className="border px-4 py-2">ISTE 454/456</td>
                        <td className="border px-4 py-2">IOS/Android Sustainability App built with Swift and Kotlin.</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">* 2025</td>
                        <td className="border px-4 py-2">
                            <a href="https://anotetoyou.cad.rit.edu/" className="text-blue-600 hover:underline" target="_blank">
                                A Note To You
                            </a>
                        </td>
                        <td className="border px-4 py-2">Art Leadership</td>
                        <td className="border px-4 py-2">Platform for community arts using Bootstrap, JS, etc.</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">2024 (Academic)</td>
                        <td className="border px-4 py-2">
                            <a href="https://www.figma.com/design/AwR10EsKteJGjsMn6dUN06/Birdfeed?node-id=0-1&t=h7S7xOybNfxrrwHd-1" className="text-blue-600 hover:underline" target="_blank">
                                BirdFeed
                            </a>
                        </td>
                        <td className="border px-4 py-2">ISTE 252</td>
                        <td className="border px-4 py-2">Mobile app development with Flutter/Figma, birdwatching social app.</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">2024 (Academic)</td>
                        <td className="border px-4 py-2">
                            <a href="https://www.figma.com/proto/jBZjzbMAcKbbaNTiYJNYgF/260-RIT-Parking-App?node-id=104-58&t=brlvQiUTg1vCie2P-1&starting-point-node-id=104%3A58" className="text-blue-600 hover:underline" target="_blank">
                                RIT Parking App
                            </a>
                        </td>
                        <td className="border px-4 py-2">ISTE 260</td>
                        <td className="border px-4 py-2">Design process walkthrough of a parking assistance app for the RIT campus. Prototyped with Figma.</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">2023</td>
                        <td className="border px-4 py-2">WOREO [Discontinued]</td>
                        <td className="border px-4 py-2">Personal</td>
                        <td className="border px-4 py-2">2D platforming game built in Unity, using Bitbucket.</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">2023</td>
                        <td className="border px-4 py-2">BHASE [Discontinued]</td>
                        <td className="border px-4 py-2">UX Club</td>
                        <td className="border px-4 py-2">Budgeting webapp catered to college students, focused on UX design process, such as user interviews, etc.</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">* 2023 (Academic)</td>
                        <td className="border px-4 py-2">
                            <a href="https://people.rit.edu/al2231/ISTE340/project2/" className="text-blue-600 hover:underline" target="_blank">
                                RIT iSchool Page
                            </a>
                        </td>
                        <td className="border px-4 py-2">ISTE 340</td>
                        <td className="border px-4 py-2">Built with React, redesigning frontend with data from web API, prioritizing components.</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">2023 (Academic)</td>
                        <td className="border px-4 py-2">
                            <a href="https://people.rit.edu/al2231/ISTE340/project1/iste340p1.html" className="text-blue-600 hover:underline" target="_blank">
                                Dynamic Menu Ordering
                            </a>
                        </td>
                        <td className="border px-4 py-2">ISTE 340</td>
                        <td className="border px-4 py-2">Dynamic page population with sample data using JS, HTML, CSS.</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">* 2023</td>
                        <td className="border px-4 py-2">
                            <a href="https://devpost.com/software/forme-5h8m20" className="text-blue-600 hover:underline" target="_blank">
                                forMe
                            </a>
                        </td>
                        <td className="border px-4 py-2">WiCHacks</td>
                        <td className="border px-4 py-2">Health mobile app built with HTML, CSS, JS, APIs. Prototyped with Figma.</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">2023 (Academic)</td>
                        <td className="border px-4 py-2">
                            <a href="https://people.rit.edu/al2231/ISTE240/projects/group/index.php" className="text-blue-600 hover:underline" target="_blank">
                                Ultimate UNIX Guide
                            </a>
                        </td>
                        <td className="border px-4 py-2">ISTE 240</td>
                        <td className="border px-4 py-2">The ultimate guide for students covering UNIX topics. Built with php, phpMyAdmin, CSS, and JS.</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">2021 - 2022</td>
                        <td className="border px-4 py-2">Robotic Arm</td>
                        <td className="border px-4 py-2">Internship</td>
                        <td className="border px-4 py-2">Building a functional robotic arm from scratch to then use in instructional material. Utilized Arduino, Autodesk Inventor, and 3D Printing.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}