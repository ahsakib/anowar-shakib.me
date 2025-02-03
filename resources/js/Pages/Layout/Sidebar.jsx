import { FaGithub, FaLinkedin, FaTwitter, FaMedium, FaCodepen } from "react-icons/fa";
const Sidebar = () => {
    return (

        <div className="flex flex-col items-center left-0">
            {/* Icons Section */}
            <div className="flex flex-col space-y-4 text-white">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="hover:scale-125 transition-transform" size={24} />
                </a>
                <a href="https://codepen.io" target="_blank" rel="noopener noreferrer">
                    <FaCodepen className="hover:scale-125 transition-transform" size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="hover:scale-125 transition-transform" size={24} />
                </a>
                <a href="https://medium.com" target="_blank" rel="noopener noreferrer">
                    <FaMedium className="hover:scale-125 transition-transform" size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="hover:scale-125 transition-transform" size={24} />
                </a>
            </div>

            {/* Divider */}
            <div className="w-[2px] h-20 bg-white mt-5"></div>

            {/* Follow Me Section */}
            <div className="flex items-center">
                <p className="p-1.5 font-black uppercase bg-[#1d293a] text-white origin-center rotate-[-90deg] rounded">
                    Follow Me
                </p>
            </div>
        </div>
    );
  };

  export default Sidebar;
