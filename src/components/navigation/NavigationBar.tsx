import Link from 'next/link';

export const NavigationBar = () => (
    <div className="layout">
        <nav className="flex flex-col space-y-8 justify-between my-20 sm:flex-row sm:space-y-0">
            <Link href="/">
                <a className="w-fit group">
                    <div className="relative flex items-center h-full">
                        <div className="transition-transform transform group-hover:translate-x-8">
                            <p className="text-transparent bg-clip-text bg-gradient-to-br from-primary-100 to-primary-400 text-2xl font-semibold">
                                Alex Salmon
                            </p>
                        </div>

                        <div className="absolute pl-0.5 text-primary-100 transition-opacity opacity-0 group-hover:opacity-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                        </div>
                    </div>
                </a>
            </Link>

            <ul className="flex items-center space-x-8 text-sm font-medium text-muted">
                <li className="group cursor-pointer">
                    <Link href="/work">
                        <a className="bg-clip-text bg-gradient-to-r from-link-200 to-link-400 group-hover:text-transparent">
                            Work
                        </a>
                    </Link>
                </li>

                <li className="group cursor-pointer">
                    <Link href="/blog">
                        <a className="bg-clip-text bg-gradient-to-r from-link-200 to-link-400 group-hover:text-transparent">
                            Blog
                        </a>
                    </Link>
                </li>

                <li className="group cursor-pointer">
                    <a
                        className="inline-flex items-center bg-clip-text bg-gradient-to-r from-link-200 to-link-400 group-hover:text-transparent"
                        href="https://news.ycombinator.com/"
                        target="_blank"
                        rel="noreferrer">
                        External
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="ml-1.5 w-4 h-4 group-hover:text-link-400">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
);
