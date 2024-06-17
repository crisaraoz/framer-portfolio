import Link from "next/link";

import {
  RiInstagramLine,
  RiMailLine,
  RiGithubLine,
  RiLinkedinLine
} from "react-icons/ri";

export const socialData = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/cris-araoz/",
    Icon: RiLinkedinLine,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/cris.araozz/",
    Icon: RiInstagramLine,
  },
  {
    name: "Gmail",
    link: "mailto:araozcristian@gmail.com",
    Icon: RiMailLine,
  },
  {
    name: "Github",
    link: "https://github.com/crisaraoz",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
