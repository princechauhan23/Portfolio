const author = "Prince Chauhan";
const description =
	"Software developer from India, who loves to develop beautiful websites, single page applications, customer relationship management or code from scratch using React and Next.js";
const url = "";
export const AppMetadata = {
	metadataBase: new URL(""),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"Prince Chauhan",
		"Prince Chauhan - software developer",
		"Frontend developer",
		"Portfolio website",
		"Software Developer Portfolio"
	],
	creator: author,
	authors: [{ name: author, url: url }],
	colorScheme: "dark",
	openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		images: [
			{
				url: "",
				width: 800,
				height: 600,
				alt: "My personal portfolio website"
			},
			{
				url: "",
				width: 1800,
				height: 1600,
				alt: "My personal portfolio website"
			}
		],
		locale: "en-US",
		type: "website"
	}
};
