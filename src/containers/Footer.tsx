import { GitHubSimpleIcon, LinkedInIcon } from "@/components/icons";

const socilaLinks = [
    {
        id: 1,
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/nikola-lesko",
        icon: LinkedInIcon,
        iconClassName: "h-6 w-6 pl-[0.2rem]"
    },
    {
        id: 2,
        name: "GitHub",
        href: "https://github.com/nlesko",
        icon: GitHubSimpleIcon,
    }
]

const Footer = () => {
    return (
        <footer className="w-full pt-40 pb-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center">
                <p className="text-2xl">
                    Bringing ideas to life, one line of code at a time.
                </p>
                <div className="my-7" />
                <ul className="flex flex-row gap-5">
                    {socilaLinks.map((link) => (
                    <li key={link.id} className="flex items-center">
                        <a href={link.href} target="_blank  " className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-slate-500 hover:bg-white hover:border-white hover:text-black transition-all duration-300">
                            <link.icon className={`h-5 w-5 ${link.iconClassName}`} />
                        </a>
                    </li>
                    ))}                    
                </ul>
                <div className="my-7" />
                <p className="">
                Web development for unique and innovative projects.
                </p>
                <div className="my-1" />
                <p className="text-xs">
                    © {new Date().getFullYear()} Nikola Leško
                </p>
            </div>
          </div>
        </footer>
    )
}

export default Footer;