import { DiAngularSimple } from '@react-icons/all-files/di/DiAngularSimple';
import { DiNodejsSmall } from '@react-icons/all-files/di/DiNodejsSmall';
import { DiReact } from '@react-icons/all-files/di/DiReact';
import { SiAmazonaws } from '@react-icons/all-files/si/SiAmazonaws';
import { SiTypescript } from '@react-icons/all-files/si/SiTypescript';
import { Body } from '../components/templates/Body';

export default function About() {
    return (
        <Body>
            <main className="mt-32 mb-60 space-y-10">
                <section className="prose" role="banner">
                    <h1>Hey, I’m Alex 👋</h1>
                    <h3 className="leading-3">Senior Software Engineer from the UK, working from Dubai.</h3>
                </section>

                <section>
                    <ul
                        className="flex items-center space-x-6
                                   text-xs font-bold uppercase tracking-wide text-gray-400">
                        <li className="flex items-center space-x-2">
                            <SiTypescript className="w-6 h-6" />
                            <span>Typescript</span>
                        </li>

                        <li className="flex items-center space-x-0.5">
                            <DiAngularSimple className="w-8 h-8" />
                            <span>Angular</span>
                        </li>

                        <li className="flex items-center space-x-1">
                            <DiReact className="w-8 h-8" />
                            <span>React</span>
                        </li>

                        <li className="flex items-center space-x-1">
                            <DiNodejsSmall className="w-8 h-8" />
                            <span>Node.js</span>
                        </li>

                        <li className="flex items-center space-x-3">
                            <SiAmazonaws className="w-8 h-8" />
                            <span>AWS</span>
                        </li>
                    </ul>
                </section>

                <section className="prose">
                    <p>
                        I’m a user-experience enthusiast, and for the past 10 years I’ve been professionally creating
                        websites, applications and SaaS used by global organisations of all sizes.
                    </p>

                    <p>
                        I’m passionate about quality code written for humans, unlocking developer productivity, and
                        creating delightful user-experiences.
                    </p>

                    <p>
                        Early in my career, I developed cutting-edge Employee Engagement Portals, working with amazing
                        clients including Mercedes-Benz, Gaggenau, Siemens, Bosch, and Vauxhall Motors.
                    </p>

                    <p>
                        Recently, I’m focused on JavaScript frameworks and Single Page Applications built in React and
                        Angular. I’m currently working as a Senior Software Engineer at AppLearn, building a Digital
                        Adoption Platform to help global companies and their users get the most out of their software
                        suites.
                    </p>

                    <p>
                        I’m capable of working full-stack, with the aim of delivering value across all aspects of the
                        development cycle. I value trust, honesty and inclusion - and I strive to support teams based on
                        these values.
                    </p>
                </section>
            </main>
        </Body>
    );
}
