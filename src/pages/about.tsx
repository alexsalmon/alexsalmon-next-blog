import { DiAngularSimple } from '@react-icons/all-files/di/DiAngularSimple';
import { DiNodejsSmall } from '@react-icons/all-files/di/DiNodejsSmall';
import { IoLogoIonic } from '@react-icons/all-files/io/IoLogoIonic';
import { MdExtension } from '@react-icons/all-files/md/MdExtension';
import { SiAmazonaws } from '@react-icons/all-files/si/SiAmazonaws';
import { SiDocker } from '@react-icons/all-files/si/SiDocker';
import { SiGraphql } from '@react-icons/all-files/si/SiGraphql';
import { SiJavascript } from '@react-icons/all-files/si/SiJavascript';
import { SiReact } from '@react-icons/all-files/si/SiReact';
import { SiSass } from '@react-icons/all-files/si/SiSass';
import { SiTerraform } from '@react-icons/all-files/si/SiTerraform';
import { SiTypescript } from '@react-icons/all-files/si/SiTypescript';
import { Body } from '../components/templates/Body';
import NoteSvg from '../../public/notes/tech-ive-used-recently.svg';

export default function About() {
    return (
        <Body>
            <main className="grid grid-cols-2 gap-y-8 mt-32 mb-60">
                <div className="space-y-12">
                    <section className="prose" role="banner">
                        <h1>Hey, I’m Alex 👋</h1>
                        <h3 className="leading-3">Senior Software Engineer from the UK, working from Dubai</h3>
                    </section>

                    <section className="relative space-y-10 text-xs font-bold uppercase tracking-wide text-muted">
                        <div className="space-y-3">
                            <p className="opacity-50">Languages</p>
                            <div className="flex items-center space-x-6">
                                <div className="flex items-center space-x-2">
                                    <SiTypescript className="w-6 h-6" />
                                    <span>TypeScript</span>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <SiJavascript className="w-6 h-6" />
                                    <span>JavaScript (ES9)</span>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <SiGraphql className="w-6 h-6" />
                                    <span>GraphQL</span>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <SiSass className="w-6 h-6" />
                                    <span>Sass</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <p className="opacity-50">Frameworks</p>
                            <div className="flex items-center space-x-6">
                                <div className="flex items-center -ml-[5px] space-x-1">
                                    <DiAngularSimple className="w-8 h-8" />
                                    <span>Angular</span>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <SiReact className="w-8 h-8" />
                                    <span>React</span>
                                </div>

                                <div className="flex items-center space-x-1">
                                    <IoLogoIonic className="w-8 h-8" />
                                    <span>Ionic</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <p className="opacity-50">Environments</p>
                            <div className="flex items-center space-x-6">
                                <div className="flex items-center -ml-[6px] space-x-1">
                                    <DiNodejsSmall className="w-8 h-8" />
                                    <span>Node.js</span>
                                </div>

                                <div className="flex items-center space-x-1">
                                    <SiDocker className="w-8 h-8" />
                                    <span>Docker</span>
                                </div>

                                <div className="flex items-center space-x-1">
                                    <MdExtension className="w-8 h-8" />
                                    <span>Browser Extensions</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <p className="opacity-50">Serverless</p>
                            <div className="flex items-center space-x-6">
                                <div className="flex items-center space-x-3">
                                    <SiAmazonaws className="w-8 h-8" />
                                    <span>AWS</span>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <SiTerraform className="w-8 h-8" />
                                    <span>Terraform</span>
                                </div>
                            </div>
                        </div>

                        <NoteSvg
                            className="absolute right-8 bottom-8 transform -rotate-6 w-1/2 opacity-30 text-muted"
                            alt="Tech I've used recently"
                        />
                    </section>
                </div>

                <div>
                    <section className="prose">
                        <p className="first-letter:text-4xl first-letter:font-bold first-letter:font-serif">
                            I’m a user-experience enthusiast, and for the past 10 years I’ve been professionally
                            creating websites, applications and SaaS used by global organisations of all sizes.
                        </p>

                        <p>
                            I’m passionate about quality code written for humans, unlocking developer productivity, and
                            creating delightful user-experiences.
                        </p>

                        <p>
                            Early in my career, I developed cutting-edge Employee Engagement Portals, working with
                            amazing clients including Mercedes-Benz, Gaggenau, Siemens, Bosch, and Vauxhall Motors.
                        </p>

                        <p>
                            Recently, I’m focused on JavaScript frameworks and Single Page Applications built in React
                            and Angular. I’m currently working as a Senior Software Engineer at AppLearn, building a
                            Digital Adoption Platform to help global companies and their users get the most out of their
                            software suites.
                        </p>

                        <p>
                            I’m capable of working full-stack, with the aim of delivering value across all aspects of
                            the development cycle. I value trust, honesty and inclusion - and I strive to support teams
                            based on these values.
                        </p>
                    </section>
                </div>
            </main>
        </Body>
    );
}
