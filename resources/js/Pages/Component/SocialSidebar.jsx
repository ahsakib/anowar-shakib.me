import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Codepen } from "lucide-react";
import { SOCIAL_LINKS } from "../lib/constants";
// import ReactTooltip from 'react-tooltip';  // Corrected import

const socialIcons = [
    { Icon: Github, href: SOCIAL_LINKS.github, label: "GitHub" },
    { Icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
    { Icon: Twitter, href: SOCIAL_LINKS.twitter, label: "Twitter" },
    { Icon: Mail, href: `mailto:${SOCIAL_LINKS.email}`, label: "Email" },
    { Icon: Codepen, href: SOCIAL_LINKS.codepen, label: "CodePen" },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
};

const SocialSidebar = () => {
    return (
        <>
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="fixed left-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 items-center"
            >
                {socialIcons.map(({ Icon, href, label }) => (
                    <motion.div key={label} variants={item}>
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                            data-tip={label}  // Add this line to show the tooltip
                            data-for="social-tooltip" // Add unique identifier for tooltip
                        >
                            <Icon size={20} />
                        </a>
                    </motion.div>
                ))}

                {/* Divider */}
                <motion.div variants={item} className="w-[2px] h-16 bg-white mt-5" />

                <motion.div variants={item}>
                    <p className="p-2 font-black uppercase bg-[#1d293a] text-white origin-center rotate-[-90deg] rounded">
                        Follow Me
                    </p>
                </motion.div>

            </motion.div>
        </>



    );
};

export default SocialSidebar;
