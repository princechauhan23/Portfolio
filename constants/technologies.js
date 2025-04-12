import { AiFillHtml5, AiOutlineAntDesign, AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { DiCss3, DiVisualstudio } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaFigma } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { SiPassport } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { TbBrandFirebase } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPycharm } from "react-icons/si";
import JiraIcon from "public/assets/svg/jira.svg";
import MuiIcon from "public/assets/svg/mui.svg";
import StyledIcon from "public/assets/svg/styledcomponents.svg";

export const TECHNOLOGIES = [
	{
		category: "Front-end",
		items: [
			{ name: "HTML", icon: <AiFillHtml5 size={32} /> },
			{ name: "CSS", icon: <DiCss3 size={32} /> },
			{ name: "JS", icon: <IoLogoJavascript size={32} /> },
			{ name: "TS", icon: <SiTypescript size={32} /> },
			{ name: "React", icon: <FaReact size={32} /> },
			{ name: "Next", icon: <TbBrandNextjs size={32} /> },
			{ name: "Tailwind CSS", icon: <TbBrandTailwind size={32} /> },
			{ name: "MUI", icon: <MuiIcon width={32} /> },
			{ name: "AntD", icon: <AiOutlineAntDesign size={32} /> },
			{ name: "Bootstrap", icon: <BsBootstrap size={32} /> },
			// { name: "Chakra", icon: <ChakraIcon width={32} /> },
			{ name: "styled components", icon: <StyledIcon width={32} /> },
		]
	},
	{
		category: "Backend",
		items: [
			{ name: "Node.js", icon: <TbBrandNodejs size={32} /> },
			{ name: "Express.js", icon: <SiExpress size={32} /> },
			{ name: "Passport.js", icon: <SiPassport size={30} /> }
		]
	},
	{
		category: "Database and ORM",
		items: [
			{ name: "MongoDB", icon: <SiMongodb size={32} /> },
			{ name: "MySQL", icon: <SiMysql size={34} /> },
			{ name: "Firebase", icon: <TbBrandFirebase size={32} /> },
		]
	},
	{
		category: "Other tools",
		items: [
			{ name: "Jira", icon: <JiraIcon width={32} /> },
			{ name: "Figma", icon: <FaFigma size={32} /> },
			{ name: "Github", icon: <AiFillGithub size={32} /> },
			{ name: "Gitlab", icon: <AiFillGitlab size={32} /> },
			{ name: "VsCode", icon: <DiVisualstudio size={32} /> },
			{ name: "PyCharm", icon: <SiPycharm size={28} /> },
		]
	}
];
