
const Navbar = ({ }) => {
    return (
        <nav className="fixed z-50 bg-white opacity-100 w-full">
            <div className="flex items-center justify-between 2xl:mt-0 w-full">
                <div className="ml-1 flex h-[50px] items-center justify-center 2xl:ml-10">
                    <a href="/">
                        <img
                            src="/qzens-logo.jpg"
                            alt="Qzens Logo"
                            className="2xl:transition-opacity 2xl:duration-[1000ms] 2xl:ease-in-out object-contain h-[30px] md:h-[50px]"
                        />
                    </a>
                </div>

                <div className="md:flex md:justify-between">
                    <div
                        className="ml-3 md:ml-10  md:transition-opacity md:duration-[2000ms] md:ease-in-out "
                    >
                        <img
                            src="/qzens_logo_blackandwhite_right.jpg"
                            className="h-[75px] w-[75px] 2xl:transition-opacity 2xl:duration-[2000ms] 2xl:ease-in-out"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
