import { Body } from '../components/templates/Body';

export default function Index() {
    return (
        <Body>
            <main className="space-y-40 mb-60">
                <section
                    className="flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:mt-40 lg:mb-60 lg:space-x-16"
                    role="banner">
                    <div className="flex flex-col justify-center w-[250px] rounded-full shadow-xl">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            className="aspect-square rounded-full bg-gray-900"
                            src="https://pbs.twimg.com/media/D9769dRW4AMs1Bh?format=jpg&name=large"
                            alt="headshot"
                        />
                    </div>

                    <div className="flex flex-col justify-center max-w-2xl space-y-4 text-xl">
                        <p>
                            I’m <strong>Alex</strong> — a Senior Software Engineer.
                        </p>

                        <p>
                            I help cross-functional engineering teams solve real-world problems and deliver impactful
                            web applications.
                        </p>

                        <p>
                            Currently building: a world-class Digital Adoption Platform at{' '}
                            <a
                                className="inline group link-underline"
                                href="https://www.g2.com/products/applearn/reviews"
                                target="_blank"
                                rel="noreferrer">
                                AppLearn
                            </a>
                            .
                        </p>

                        <p>Currently working: remotely from Dubai. 🇦🇪</p>
                    </div>
                </section>

                <section className="space-y-6" role="list">
                    <p className="text-sm font-medium uppercase">Public Work</p>

                    <div className="inline-grid gap-4 grid-cols-2 w-full">
                        <a
                            className="relative block overflow-hidden bg-center bg-no-repeat bg-cover rounded-xl"
                            href="">
                            <span className="absolute z-10 inline-flex items-center px-3 py-1 text-xs font-semibold text-white bg-black rounded-full right-4 top-4">
                                45
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 ml-1.5 text-yellow-300"
                                    viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </span>

                            <div className="relative p-8 pt-40 text-white bg-black bg-opacity-40">
                                <h5 className="text-2xl font-bold">bragger</h5>

                                <p className="text-sm">
                                    A Chrome Extension to help keep track of your daily achievements
                                </p>
                            </div>
                        </a>

                        <a
                            className="relative block overflow-hidden bg-center bg-no-repeat bg-cover rounded-xl"
                            href="">
                            <span className="absolute z-10 inline-flex items-center px-3 py-1 text-xs font-semibold text-white bg-black rounded-full right-4 top-4">
                                45
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 ml-1.5 text-yellow-300"
                                    viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </span>

                            <div className="relative p-8 pt-40 text-white bg-black bg-opacity-40">
                                <h5 className="text-2xl font-bold">Ionic Angular CQRS Starter</h5>

                                <p className="text-sm">
                                    A CQRS pattern hybrid-mobile app starter, featuring Angular, Ionic, and NGXS
                                </p>
                            </div>
                        </a>
                    </div>
                </section>

                <section className="space-y-6" role="list">
                    <p className="text-sm font-medium uppercase">Blog</p>

                    <div className="inline-grid gap-4 grid-cols-2 w-full">
                        <article className="p-1 shadow-2xl rounded-2xl bg-gradient-to-br from-link-700 to-link-900">
                            <a
                                className="flex flex-col justify-end h-full p-6 bg-gray-800 sm:p-8 rounded-xl hover:bg-opacity-90"
                                href="">
                                <div className="mt-16">
                                    <p className="text-xs font-medium text-gray-500">26/05/2021</p>
                                    <h5 className="mt-2 text-xl font-bold text-white">
                                        Custom Helper to Improve the Rails phone_to Helper
                                    </h5>
                                    <div className="flex items-center justify-between mt-6">
                                        <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-link-400 to-link-600">
                                            Rails
                                        </p>
                                        <ul className="flex space-x-1">
                                            <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-700">
                                                Snippet
                                            </li>
                                            <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-700">
                                                Info
                                            </li>
                                            <li className="inline-block rounded-full text-white text-xs font-medium px-3 py-1.5 bg-gray-700">
                                                Tip
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </a>
                        </article>
                    </div>
                </section>
            </main>
        </Body>
    );
}
