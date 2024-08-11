
export default function Footer() {
    return (
        <footer className="mt-auto bg-white dark:bg-stone-900">
            <div className="w-full mx-auto max-w-screen-xl p-4 py-5 lg:py-6 ">
                <hr className="my-6 stone-200 sm:mx-auto dark:stone-700" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-stone-600 dark:text-stone-300">
                        &copy; {new Date().getFullYear()} <a href="https://stephyang.xyz" className="hover:underline">Stephen Yang</a>
                    </span>
                    <div className="flex mt-4 sm:justify-between sm:mt-0">
                        <a href="/resume.pdf" className="text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
                                <g>
                                    <path d="M227.6,58.3L179,9.6c-2.6-2.6-6.1-4-9.8-4H45.1c-11.5,0-20.8,9.3-20.8,20.8v203.3c0,11.5,9.3,20.8,20.8,20.8h165.8   c11.5,0,20.8-9.3,20.8-20.8V68C231.7,64.3,230.3,60.9,227.6,58.3z M221.5,229.6c0,5.8-4.8,10.6-10.6,10.6H45.1   c-5.8,0-10.6-4.8-10.6-10.6V26.4c0-5.8,4.8-10.6,10.6-10.6h124.2c1,0,1.9,0.4,2.6,1.1l48.6,48.6c0.7,0.7,1.1,1.6,1.1,2.6V229.6z" />

                                    <path d="M209.2,71.7h-32.9c-5.8,0-10.6-4.8-10.6-10.6V28.1c0-2.8-2.3-5.1-5.1-5.1c-2.8,0-5.1,2.3-5.1,5.1v32.9   c0,11.5,9.3,20.8,20.8,20.8h32.9c2.8,0,5.1-2.3,5.1-5.1S212,71.7,209.2,71.7z" />

                                    <path d="M105,143.5L105,143.5c2.2,11.1,12,19.2,23.3,19.2c11.3,0,21.1-8.1,23.3-19.2l2.9-14.9c1-7.1-1.2-14.2-5.9-19.6   c-4.7-5.4-11.5-8.5-18.6-8.5h-3.4c-7.1,0-13.9,3.1-18.6,8.5c-4.7,5.4-6.8,12.5-5.8,19.9L105,143.5z M115.6,115.7   c2.8-3.2,6.7-5,10.9-5h3.4c4.2,0,8.2,1.8,10.9,5c2.8,3.2,4,7.4,3.5,11.2l-2.8,14.7c-1.2,6.3-6.8,10.9-13.3,10.9   c-6.5,0-12-4.6-13.3-10.9l-2.8-14.4C111.6,123,112.9,118.8,115.6,115.7z" />

                                    <path d="M168.8,177.7l-22.9-8.1l-17.7,17.7l-17.7-17.7l-22.9,8.1c-3.5,1.2-6.1,4.2-6.8,7.8l-8.1,38.1h111l-8.1-38.1   C174.9,182,172.3,179,168.8,177.7z M85.3,213.4l5.5-25.8c0-0.2,0.1-0.3,0.3-0.3l16.8-6l20.4,20.4l20.4-20.4l16.8,6   c0.1,0.1,0.3,0.2,0.3,0.3l5.5,25.8H85.3z" />
                                </g>
                            </svg>
                        </a>
                        <a href="https://github.com/Stepheny755" className="text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </a>
                        <a href="https://www.linkedin.com/in/stepheny755/" className="text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path>
                            </svg>
                        </a>
                        <a href="https://www.researchgate.net/profile/Stephen_Yang8" className="text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" viewBox="0 0 24 24" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" rx="15%">
                                <path fillRule="nonzero" d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.123 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82c0-.095-.047-.142-.14-.142h-3.064c-.094 0-.14.047-.14.141v.956c0 .094.046.14.14.14h1.666c.056 0 .084.03.084.086 0 .36 0 .62-.036.865-.038.244-.1.447-.147.606-.108.385-.348.664-.638.876-.29.212-.738.35-1.227.35-.545 0-.901-.15-1.21-.353-.306-.203-.517-.454-.67-.915a3.136 3.136 0 0 1-.147-.762 17.366 17.367 0 0 1-.034-.656c-.01-.26-.014-.572-.014-.939a26.401 26.403 0 0 1 .014-.938 15.821 15.822 0 0 1 .035-.656 3.19 3.19 0 0 1 .148-.76 1.89 1.89 0 0 1 .742-1.01c.344-.244.593-.352 1.137-.352.508 0 .815.096 1.144.303.33.207.528.492.764.925.047.094.111.118.198.07l1.044-.43c.075-.048.09-.115.042-.199a3.549 3.549 0 0 0-.466-.742 3 3 0 0 0-.679-.607 3.313 3.313 0 0 0-.903-.41A4.068 4.068 0 0 0 19.586 0zM8.217 5.836c-1.69 0-3.036.086-4.297.086-1.146 0-2.291 0-3.007-.029v.831l1.088.2c.744.144 1.174.488 1.174 2.264v11.288c0 1.777-.43 2.12-1.174 2.263l-1.088.2v.832c.773-.029 2.12-.086 3.465-.086 1.29 0 2.951.057 3.667.086v-.831l-1.49-.2c-.773-.115-1.174-.487-1.174-2.264v-4.784c.688.057 1.29.057 2.206.057 1.748 3.123 3.41 5.472 4.355 6.56.86 1.032 2.177 1.691 3.839 1.691.487 0 1.003-.086 1.318-.23v-.744c-1.031 0-2.063-.716-2.808-1.518-1.26-1.376-2.95-3.582-4.355-6.074 2.32-.545 4.04-2.722 4.04-4.9 0-3.208-2.492-4.698-5.758-4.698zm-.515 1.29c2.406 0 3.839 1.26 3.839 3.552 0 2.263-1.547 3.782-4.097 3.782-.974 0-1.404-.03-2.063-.086v-7.19c.66-.059 1.547-.059 2.32-.059z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">ResearchGate page</span>
                        </a>
                        <a href="https://scholar.google.ca/citations?user=_0xralQAAAAJ" className="text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>Google Scholar icon</title><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" /></svg>
                            <span className="sr-only">Google Scholar page</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer >
    );
}