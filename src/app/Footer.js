

export default function Footer() {
    return (
        <footer className="mt-10  w-full">
            <div className="relative flex items-center justify-center my-8">
                <div className="flex-[3] h-px bg-gray-600 border border-gray-600"></div>
                {/* <span className="mx-4 text-gray-500 tracking-widest text-sm">COMING SOON</span> */}
                {/* <span className="mx-4 text-gray-500 tracking-widest text-sm sm:font-aksara sm:font-light sm:text-[26px] sm:leading-[44px] sm:tracking-[22px] sm:text-gray-600">
            COMING SOON
          </span> */}
                <span className="mx-4 font-aksara font-light text-[16px] leading-[44px] tracking-[12px] text-gray-600 flex items-center sm:text-[26px] sm:tracking-[22px] sm:leading-[44px]">
                    COMING SOON
                </span>
                <div className="flex-[3] h-px bg-gray-600 border border-gray-600"></div>
            </div>
            {/* <div className="flex flex-cols justify-center items-center gap-x-2">
                <div>
                    <a
                        target="_blank"
                        href="https://www.instagram.com/qzensdesign/"
                    >
                        <img
                            src="/instagram-logo.png"
                            className="h-[28px] w-[28px]"
                            alt="qzens Logo"
                            href="https://www.instagram.com/qzensdesign/"
                        />
                    </a>
                </div>
                <div>
                    <a
                        target="_blank"
                        href="https://www.facebook.com/qzensfurniture"
                    >
                        <img
                            src="/facebook-logo.png"
                            className="h-[28px] w-[28px]"
                            alt="qzens Logo"
                        />
                    </a>
                </div>
                <div>
                    <a target="_blank" href="https://vimeo.com/qzens">
                        <img
                            src="/vector.png"
                            className="h-[28px] w-[28px]"
                            alt="qzens Logo"
                        />
                    </a>
                </div>
                <div>
                    <a target="_blank" href="https://www.youtube.com/@QZENSDESIGN">
                        <img
                            src="/youtube-logo.png"
                            className="h-[28px] w-[28px]"
                            alt="qzens Logo"
                        />
                    </a>
                </div>
                <div> <a
                    target="_blank"
                    href="https://www.linkedin.com/company/qzens"
                >
                    <img
                        src="/linkedin-logo.png"
                        className="h-[28px] w-[28px]"
                        alt="qzens Logo"
                    />
                </a>
                </div>
                <div>
                    <p className="ml-4 font-aksara font-light text-2xl leading-5 flex items-center text-center tracking-wide text-gray-500">
                        info@qzens.com
                    </p>
                </div>
            </div> */}
            {/* <div className="grid grid-cols-3 gap-2 justify-center items-center sm:grid-cols-5">
                <div className="flex items-center justify-center">
                    <a target="_blank" href="https://www.instagram.com/qzensdesign/">
                        <img src="/instagram-logo.png" className="h-[28px] w-[28px]" alt="qzens Logo" />
                    </a>
                </div>
                <div className="flex items-center justify-center">
                    <a target="_blank" href="https://www.facebook.com/qzensfurniture">
                        <img src="/facebook-logo.png" className="h-[28px] w-[28px]" alt="qzens Logo" />
                    </a>
                </div>
                <div className="flex items-center justify-center">
                    <a target="_blank" href="https://vimeo.com/qzens">
                        <img src="/vector.png" className="h-[28px] w-[28px]" alt="qzens Logo" />
                    </a>
                </div>
                <div className="flex items-center justify-center">
                    <a target="_blank" href="https://www.youtube.com/@QZENSDESIGN">
                        <img src="/youtube-logo.png" className="h-[28px] w-[28px]" alt="qzens Logo" />
                    </a>
                </div>
                <div className="flex items-center justify-center">
                    <a target="_blank" href="https://www.linkedin.com/company/qzens">
                        <img src="/linkedin-logo.png" className="h-[28px] w-[28px]" alt="qzens Logo" />
                    </a>
                </div>
            </div> */}
            <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-4">
                <div className="flex justify-center gap-8 sm:gap-4">
                    <div>
                        <a target="_blank" href="https://www.instagram.com/qzensdesign/">
                            <img src="/instagram-logo.png" className="h-[28px] w-[28px]" alt="Instagram Logo" />
                        </a>
                    </div>
                    <div>
                        <a target="_blank" href="https://www.facebook.com/qzensfurniture">
                            <img src="/facebook-logo.png" className="h-[28px] w-[28px]" alt="Facebook Logo" />
                        </a>
                    </div>
                    <div>
                        <a target="_blank" href="https://vimeo.com/qzens">
                            <img src="/vector.png" className="h-[28px] w-[28px]" alt="Vimeo Logo" />
                        </a>
                    </div>
                </div>
                <div className="flex justify-center gap-8 sm:gap-4">
                    <div>
                        <a target="_blank" href="https://www.youtube.com/@QZENSDESIGN">
                            <img src="/youtube-logo.png" className="h-[28px] w-[28px]" alt="YouTube Logo" />
                        </a>
                    </div>
                    <div>
                        <a target="_blank" href="https://www.linkedin.com/company/qzens">
                            <img src="/linkedin-logo.png" className="h-[28px] w-[28px]" alt="LinkedIn Logo" />
                        </a>
                    </div>
                </div>

                <div className="flex justify-center">
                    <p className="font-aksara font-light text-2xl leading-5 text-gray-500">info@qzens.com</p>
                </div>
            </div>


        </footer>
    );
}
