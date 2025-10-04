// projects/

import { IoIosArrowBack } from "react-icons/io";

export default function ProjectsTable() {
    return (
        <div className="m-8">
            <div className="flex mb-4">
                <IoIosArrowBack size={24} />
                <a href="../"> Back to Main Page</a>
            </div>
            <table className="table-auto border-collapse border border-gray-400 w-full text-left">
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
                        <td className="border px-4 py-2"></td>
                        <td className="border px-4 py-2"></td>
                        <td className="border px-4 py-2"></td>
                        <td className="border px-4 py-2"></td>
                    </tr>

                    {/* Past */}
                    <tr>
                        <td colSpan="4" className="text-center font-bold py-2">
                            Past
                        </td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">2025</td>
                        <td className="border px-4 py-2">GreenSphere</td>
                        <td className="border px-4 py-2">ISTE 454/456</td>
                        <td className="border px-4 py-2">IOS/Android Sustainability App</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">* 2025</td>
                        <td className="border px-4 py-2">
                            <a href="https://anotetoyou.cad.rit.edu/" className="text-blue-600 hover:underline">
                                A Note To You
                            </a>
                        </td>
                        <td className="border px-4 py-2">Art Leadership</td>
                        <td className="border px-4 py-2">Info</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">2024 (Academic)</td>
                        <td className="border px-4 py-2">
                            <a href="https://www.figma.com/design/AwR10EsKteJGjsMn6dUN06/Birdfeed?node-id=0-1&t=h7S7xOybNfxrrwHd-1" className="text-blue-600 hover:underline">
                                BirdFeed
                            </a>
                        </td>
                        <td className="border px-4 py-2">ISTE 252</td>
                        <td className="border px-4 py-2">Utilized: Swift, Figma <br/> Mobile app development</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">2024 (Academic)</td>
                        <td className="border px-4 py-2">
                            <a href="https://www.figma.com/proto/jBZjzbMAcKbbaNTiYJNYgF/260-RIT-Parking-App?node-id=104-58&t=brlvQiUTg1vCie2P-1&starting-point-node-id=104%3A58" className="text-blue-600 hover:underline">
                                RIT Parking App
                            </a>
                        </td>
                        <td className="border px-4 py-2">ISTE 260</td>
                        <td className="border px-4 py-2">Design process walkthrough. Prototyped with Figma</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">2023</td>
                        <td className="border px-4 py-2">WOREO</td>
                        <td className="border px-4 py-2">Personal [Discontinued]</td>
                        <td className="border px-4 py-2">Info</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">2023</td>
                        <td className="border px-4 py-2">BHASE</td>
                        <td className="border px-4 py-2">UX Club [Discontinued]</td>
                        <td className="border px-4 py-2">Info</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">* 2023 (Academic)</td>
                        <td className="border px-4 py-2">
                            <a href="https://people.rit.edu/al2231/ISTE340/project2/" className="text-blue-600 hover:underline">
                                RIT iSchool Page
                            </a>
                        </td>
                        <td className="border px-4 py-2">ISTE 340</td>
                        <td className="border px-4 py-2">Utilized: React</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">2023 (Academic)</td>
                        <td className="border px-4 py-2">
                            <a href="https://people.rit.edu/al2231/ISTE340/project1/iste340p1.html" className="text-blue-600 hover:underline">
                                Dynamic Menu Ordering
                            </a>
                        </td>
                        <td className="border px-4 py-2">ISTE 340</td>
                        <td className="border px-4 py-2">Utilized: JS, HTML, CSS <br /> Dynamic page population with created data</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">* 2023</td>
                        <td className="border px-4 py-2">
                            <a href="https://devpost.com/software/forme-5h8m20" className="text-blue-600 hover:underline">
                                forMe
                            </a>
                        </td>
                        <td className="border px-4 py-2">WiCHacks</td>
                        <td className="border px-4 py-2">Utilized: HTML, CSS, JS, APIs, Figma</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">2023 (Academic)</td>
                        <td className="border px-4 py-2">
                            <a href="https://people.rit.edu/al2231/ISTE240/projects/group/index.php" className="text-blue-600 hover:underline">
                                Ultimate UNIX Guide
                            </a>
                        </td>
                        <td className="border px-4 py-2">ISTE 240</td>
                        <td className="border px-4 py-2">Utilized: php, phpMyAdmin, CSS</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">2021 - 2022</td>
                        <td className="border px-4 py-2">Robotic Arm</td>
                        <td className="border px-4 py-2">Internship</td>
                        <td className="border px-4 py-2">Utilized: Arduino, Autodesk Inventor, 3D Printing</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}