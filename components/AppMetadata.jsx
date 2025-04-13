const author = "Prince Chauhan";
const description =
	"Software developer from India, who loves to develop beautiful websites, single page applications, customer relationship management or code from scratch using React and Next.js";
const url = "https://prince-next-portfolio.vercel.app/";
export const AppMetadata = {
	metadataBase: new URL("https://prince-next-portfolio.vercel.app/"),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.ico"
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
				url: "https://prince-next-portfolio.vercel.app/Prince-portfolio.png",
				width: 800,
				height: 600,
				alt: "My personal portfolio website"
			},
			{
				url: "https://prince-next-portfolio.vercel.app/Prince-portfolio.png",
				width: 1800,
				height: 1600,
				alt: "My personal portfolio website"
			}
		],
		locale: "en-US",
		type: "website"
	}
};
