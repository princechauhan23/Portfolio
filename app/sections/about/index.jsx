"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
							My name is Prince. I am a Computer Science graduate from the IMS Engineering College,
							with a strong passion for web and mobile development. My programming journey commenced
							in 2020 as a Frontend developer, where I honed my skills in creating dynamic and
							user-friendly websites.
						</p>
						<p>
							During my university years, I developed a deep passion for web programming, and I
							consistently engaged in learning new concepts and techniques in this field.
						</p>
						<p>
							Driven by a desire to explore new technologies, I delved into React, captivated by
							its efficiency in building and maintaining modern web applications.
							This exploration naturally led me to Next.js, which I utilized in collaborative projects,
							working seamlessly with backend developers to deliver comprehensive solutions.</p>
						<p className="my-3.5">
							I enjoy learning technologies that interest me, which is why I dedicated a significant
							amount of time working on MERN Stack.
						</p>
						<p>
							In July 2023, I embarked on my journey as a Software Developer, tackling real-world
							challenges and immersing myself in learning Next.js alongside various
							front-end and back-end technologies. Subsequently, I contributed significantly
							to a healthcare startup, delivering fast, scalable, and robust solutions that
							added substantial value to the company.
						</p>
						<p className="my-3.5">
							My journey reflects a commitment to continuous learning and adaptability,
							always eager to embrace emerging technologies and methodologies to enhance my
							development expertise.
						</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
