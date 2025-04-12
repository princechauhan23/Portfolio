import { Suspense, useRef } from "react";
import { domAnimation, LazyMotion, useInView } from "framer-motion";
import Link from "next/link";
import useSWR from "swr";
import { HeadingDivider, Loader } from "components";
import { fetcher } from "utils/fetcher";
import Error from "../../error";
import { ErrorBoundary } from "react-error-boundary";
import { Projects } from "../../projects/components/Projects";
import { SITE_ROUTES } from "../../../constants";

export function ProjectsSection() {
	const btnRef = useRef(null);
	const isBtnInView = useInView(btnRef, { once: true });

	const projects = [
		{
			_id: "1",
			title: "Next Portfolio",
			description: "Sometimes it is quite normal to renew the design of a website. That's why I've decided to refresh my portfolio website using the new Next.js 13 . Now it looks better than old one. Framer motion animation while scrolling through the page, persisting dark mode, sanity backend for projects and filter. Finally I make my wishes come true!",
			createdAt: "2025-04-10",
			updatedAt: "2025-04-10",
			stack: ["Next.js", "Framer Motion", "Sanity", "Error Boundary", "Emotion CSS"],
			images: ["./Prince-portfolio.png"],
			liveUrl: "https://prince-next-portfolio.vercel.app/",
			repoUrl: "https://github.com/princechauhan23/Portfolio"
		},
		{
			_id: "2",
			title: "WhatsApp Web",
			description: "Created a real-time chatting application with Phone Number Authentication and multi-user support. component-based react UI, fully responsive, reCAPTCHA validation, along with user search functionality",
			createdAt: "2023-06-18",
			updatedAt: "2023-06-18",
			stack: ["React", "Firebase", "Tailwind CSS", "Context API", "Framer Motion"],
			images: ["./whatsAppProfile.png", "whatsAppChat.png", "./whatsAppWebHome.png"],
			liveUrl: "https://whatsapp-web-nqqf.onrender.com/",
			repoUrl: "https://github.com/princechauhan23/WhatsApp-web"
		},
		{
			_id: "3",
			title: "FitPeo",
			description: "In my previous role, I led the development of FitPeo, a remote patient monitoring platform that connects healthcare providers with patients both at home and in facilities. This project enhanced my skills in creating scalable and secure web applications within the healthcare technology sector.",
			createdAt: "2024-03-01",
			updatedAt: "2024-03-01",
			stack: ["Next.js", "Tailwind CSS", "MUI", "Calendly", "SEO"],
			images: ["./fitpeoHome.png", "fitpeoProvider.png", "./fitpeoKit.png"],
			liveUrl: "https://fitpeo.com/",
			repoUrl: ""
		}
	];

	if (!projects) {
		return null;
	}

	return (
		<LazyMotion features={domAnimation}>
			<section id="projects" className="section">
				<HeadingDivider title="Latest projects" />
				<div className="h-10 md:h-14" />

				<div className="flex flex-col items-center gap-8 md:gap-14">
					<Suspense
						fallback={
							<div className="flex-center">
								<Loader />
							</div>
						}
					>
						<ErrorBoundary FallbackComponent={Error}>
							<Projects projects={projects} />
						</ErrorBoundary>
					</Suspense>

					{/* <Link
						href={SITE_ROUTES.projects}
						tabIndex={-1}
						aria-label="Go to projects page"
						ref={btnRef}
						className="btn"
						style={{
							transform: btnRef ? "none" : "translateX(-50px)",
							opacity: isBtnInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<button aria-label="See more projects">More projects</button>
					</Link> */}
				</div>
			</section>
		</LazyMotion>
	);
}
