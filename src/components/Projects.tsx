import { projectTexts } from "@/lib/texts";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { Separator } from "./ui/separator";

interface Props {
  ProjectsRef: React.MutableRefObject<null>;
}

const Projects = ({ ProjectsRef }: Props) => {
  return (
    <section className="padding overflow-hidden bg-[#0a1220] py-24 text-white lg:py-36">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="space-y-3">
            <span className="section-kicker">Selected work</span>
            <h1
              className="text-4xl font-black tracking-[-0.07em] sm:text-6xl"
              id="Projects"
              ref={ProjectsRef}
            >
              {projectTexts.h1}
            </h1>
          </div>
          <div className="flex flex-col items-start gap-2 sm:items-end">
            <p className="text-2xl font-black tracking-[-0.06em]">
              {String(projectTexts.projects.length).padStart(2, "0")} projects
            </p>
            <p className="max-w-xs text-sm leading-6 text-white/60 sm:text-right">
              A small selection of products, experiments, and systems I have
              helped bring to life.
            </p>
          </div>
        </div>
        <Separator className="bg-white/15" />

        <div className="grid gap-5 md:grid-cols-2">
          {projectTexts.projects.map((project, index) => (
            <article
              key={project.name}
              className={`group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] ${index === 0 ? "md:col-span-2" : ""}`}
              data-aos="fade-up"
            >
              <Link
                href={project.links.web}
                target="_blank"
                className={`relative block overflow-hidden ${index === 0 ? "aspect-[16/8]" : "aspect-[4/3]"}`}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes={
                    index === 0
                      ? "(max-width: 768px) 100vw, 1200px"
                      : "(max-width: 768px) 100vw, 600px"
                  }
                  className="object-cover object-top transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1220] via-[#0a1220]/10 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-8">
                  <div>
                    <span className="text-xs font-mono text-accent">
                      0{index + 1} / case study
                    </span>
                    <h2 className="mt-2 text-2xl font-black tracking-[-0.05em] sm:text-4xl">
                      {project.name}
                    </h2>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#0a1220] transition duration-300 group-hover:-translate-y-1 group-hover:bg-accent">
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      width={16}
                      height={16}
                      className=""
                    />
                  </span>
                </div>
              </Link>
              <div className="flex flex-col gap-4 p-5 sm:p-8">
                <p className="max-w-2xl text-sm leading-6 text-white/65">
                  {project.description}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {project.used.map((icon) => (
                      <Image
                        key={icon}
                        width={26}
                        height={26}
                        src={icon}
                        alt=""
                        className="rounded-full"
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="h-10 rounded-md border-white/15 bg-white/[0.04] px-4 text-white/75 hover:border-white/30 hover:bg-white/10 hover:text-white"
                    >
                      <Link
                        target="_blank"
                        href={project.links.github}
                        className="flex items-center gap-1.5"
                      >
                        <FontAwesomeIcon icon={faCode} width={13} height={13} className="" />{" "}
                        <p>Source</p>
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="h-10 rounded-md bg-accent px-4 font-semibold text-[#0a1220] shadow-lg shadow-accent/20 hover:bg-accent/90"
                    >
                      <Link
                        target="_blank"
                        href={project.links.web}
                        className="flex items-center gap-1.5"
                      >
                        <p>Visit</p>
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          width={13}
                          height={13}
                          className=""
                        />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
