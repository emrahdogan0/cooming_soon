

export default function Footer() {
    return (
        <footer className="mt-10 w-full">
            <div className="relative flex items-center justify-center my-8">
                <div className="flex-[3] h-px bg-gray-600 border border-gray-600"></div>
                <span className="mx-4 font-aksara font-light text-[16px] leading-[44px] tracking-[8px] text-gray-600 flex items-center sm:text-[26px] sm:tracking-[12px] sm:leading-[44px]">
                    COMING  SOON
                </span>
                <div className="flex-[3] h-px bg-gray-600 border border-gray-600"></div>
            </div>
            <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:items-end sm:gap-4">
                <div className="flex justify-center gap-8 sm:gap-4">
                    <div className="flex items-end">
                        <a target="_blank" href="https://www.instagram.com/qzensdesign/">
                            <img src="/instagram-logo.png" alt="Instagram Logo" />
                        </a>
                    </div>
                    <div className="flex items-end">
                        <a target="_blank" href="https://www.facebook.com/qzensfurniture">
                            <img src="/facebook-logo.png" alt="Facebook Logo" />
                        </a>
                    </div>
                    <div className="flex items-end">
                        <a target="_blank" href="https://vimeo.com/qzens">
                            <img src="/vector.png" alt="Vimeo Logo" />
                        </a>
                    </div>
                </div>
                <div className="flex justify-center gap-8 sm:gap-4">
                    <div className="flex items-end">
                        <a target="_blank" href="https://www.youtube.com/@QZENSDESIGN">
                            <img src="/youtube-logo.png" alt="YouTube Logo" />
                        </a>
                    </div>
                    <div className="flex items-end">
                        <a target="_blank" href="https://www.linkedin.com/company/qzens">
                            <img src="/linkedin-logo.png" alt="LinkedIn Logo" />
                        </a>
                    </div>
                </div>
                <div className="flex justify-center items-end">
                    <p className="font-aksara font-light text-2xl leading-5 text-gray-500">info@qzens.com</p>
                </div>
            </div>
        </footer>
    );
}
