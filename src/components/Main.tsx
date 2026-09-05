import { Icon } from "@/components/ui/icon";
import {
  faArrowUpRightFromSquare,
  faArrowDown,
  faTurnUp,
  faAsterisk,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import AmbientBackground from "./AmbientBackground";
import { Button } from "./ui/button";
import { projectTexts } from "@/lib/texts";

export default function Main() {
  return (
    <section className="relative isolate" id="Home" aria-labelledby="hero-title">
      <AmbientBackground variant="hero" />
      <div className="grid items-center gap-x-20 gap-y-16 pb-0 pt-20 md:grid-cols-[1.35fr_0.8fr] [&_h1]:text-[clamp(48px,5.4vw,78px)] [&_h1]:leading-[1.03] [&_h1]:tracking-[-0.065em] [&_h1]:font-medium [&_h1_>_span]:text-accent max-lg:gap-x-10 max-md:pt-12 max-md:gap-y-10 max-md:[&_h1]:text-[clamp(44px,10vw,68px)] w-[min(1184px,calc(100%-96px))] mx-auto max-md:w-[calc(100%-40px)]">
        <div>
          <p className="mb-9 flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent ring-4 ring-accent/[0.08]" /> Available for select projects
          </p>
          <p className="mb-5 text-sm [&_span]:text-muted-foreground max-lg:[&_span]:block max-lg:[&_span]:mt-[5px] max-md:[&_span]:inline">
            Hey, I’m Arnold. <span>Full stack developer.</span>
          </p>
          <h1 id="hero-title">
            Good ideas.
            <br />
            Thoughtful code.
            <br />
            <span>Useful things.</span>
          </h1>
          <p className="mb-8 mt-6 max-w-[440px] text-sm leading-7 text-muted-foreground">
            I turn ideas into websites, applications, and tools that make life a
            little easier. Built with care, from the first pixel to the last API.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="h-12 px-6">
              <a href="#Projects">
                Explore my work{" "}
                <span aria-hidden="true" className="ml-5">
                  <Icon
                    icon={faArrowDown}
                    width={14}
                    height={14}
                    aria-hidden="true"
                  />
                </span>
              </a>
            </Button>
            <Button asChild variant="outline" className="h-12 px-6">
              <a href="#Contact">
                Let’s talk{" "}
                <span aria-hidden="true" className="ml-5">
                  <Icon
                    icon={faArrowUpRightFromSquare}
                    width={14}
                    height={14}
                    aria-hidden="true"
                  />
                </span>
              </a>
            </Button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[360px] pt-5 max-md:max-w-[300px] max-md:pt-0">
          <div className="relative aspect-[4/5] rounded-t-[160px] rounded-b-xl border border-border bg-[#2d3229] [&_>_img]:rounded-t-[160px] [&_>_img]:rounded-b-xl [&::after]:content-[''] [&::after]:absolute [&::after]:inset-0 [&::after]:rounded-[inherit] [&::after]:bg-[linear-gradient(transparent_60%,rgb(0_0_0/0.8))] [&::after]:pointer-events-none">
            <Image
              src="/icons/avatar.png"
              alt="Pixel-art portrait of Arnold Nillas"
              fill
              preload
              sizes="(max-width: 767px) 85vw, 420px"
              className="object-cover"
            />
            <span className="absolute -right-5 top-5 z-10 text-[110px] leading-none text-accent" aria-hidden="true">
              <Icon icon={faAsterisk} width={90} height={90} aria-hidden="true" />
            </span>
            <div className="absolute bottom-7 left-7 z-10 flex flex-col gap-1 text-sm [&_span:last-child]:text-[10px] [&_span:last-child]:uppercase [&_span:last-child]:tracking-widest [&_span:last-child]:text-white/60">
              <span>Arnold Nillas</span>
              <span>Developer & problem solver</span>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-3 text-[11px] text-muted-foreground [&_>_span]:text-xl [&_>_span]:text-accent">
            <span aria-hidden="true">
              <Icon
                icon={faTurnUp}
                width={14}
                height={14}
                aria-hidden="true"
                className="rotate-90"
              />
            </span>{" "}
            A curious mind. A hands-on approach.
          </div>
        </div>
        <div className="col-span-full flex items-center justify-between gap-5 border-b border-t py-6 text-[10px] uppercase tracking-[0.12em] text-muted-foreground [&_i]:mx-3 [&_i]:not-italic [&_i]:text-border [&_a]:flex [&_a]:shrink-0 [&_a]:gap-5 [&_a]:text-foreground [&_a:hover]:text-accent max-lg:[&_>_span]:max-w-[55%] max-lg:[&_>_span]:leading-[1.8] max-md:text-[9px] max-md:[&_>_span]:max-w-[55%] max-md:[&_i]:mx-[5px]">
          <span>
            Web development <i>/</i> Software <i>/</i> Creative problem solving
          </span>
          <a href="#Projects">
            {String(projectTexts.projects.length).padStart(2, "0")} selected
            projects{" "}
            <span aria-hidden="true">
              <Icon
                icon={faArrowDown}
                width={14}
                height={14}
                aria-hidden="true"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
