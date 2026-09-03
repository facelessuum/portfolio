"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowUpRightFromSquare,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink } from "react-scroll";
import { email, headerLinks, logoText, socialLinks } from "@/lib/texts";
import { toast } from "sonner";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#050a13] text-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-10 xl:px-0 lg:py-32">
        <div className="grid items-start gap-16 border-b border-white/10 pb-24 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)] lg:gap-24">
          <div className="max-w-2xl">
            <span className="section-kicker">Next step</span>
            <h2 className="mt-6 text-5xl font-black leading-[0.94] tracking-[-0.08em] sm:text-7xl">
              Have an idea?
              <br />
              <span className="text-white/40">Let&apos;s make it useful.</span>
            </h2>
            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-4">
              <Button asChild className="rounded-md px-5">
                <ScrollLink
                  to="Contact"
                  href="#Contact"
                  smooth={true}
                  duration={1000}
                  className="gap-2"
                >
                  Start a conversation
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    width={13}
                    height={13}
                    className=""
                  />
                </ScrollLink>
              </Button>
              <span className="hidden text-xs uppercase tracking-[0.2em] text-white/30 sm:inline">
                Available for select work
              </span>
            </div>
          </div>

          <div className="grid gap-10 border-t border-white/10 pt-8 sm:grid-cols-2 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-2">
            <nav aria-label="Footer navigation">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/35">
                Explore
              </p>
              <div className="flex flex-col items-start gap-4 text-sm text-white/60">
                {headerLinks.map((link) => (
                  <ScrollLink
                    key={link}
                    to={link}
                    href={`#${link}`}
                    smooth={true}
                    duration={1000}
                    className="transition hover:text-cyan-300"
                  >
                    {link}
                  </ScrollLink>
                ))}
              </div>
            </nav>

            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/35">
                Connect
              </p>
              <div className="flex items-center gap-1 sm:flex-col sm:items-start">
                {socialLinks.map((link) => (
                  <Button
                    asChild
                    aria-label="Social link"
                    variant="ghost"
                    className="h-10 w-10 rounded-full p-0 text-white/60 hover:text-cyan-300"
                    key={link.link}
                  >
                    <Link href={link.link} target="_blank">
                      <FontAwesomeIcon
                        icon={link.icon}
                        width={16}
                        height={16}
                        className=""
                      />
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 pt-8 text-sm text-white/40 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
          <div className="flex items-center gap-3">
            <span className="font-black tracking-[-0.08em] text-white">
              {logoText}
            </span>
            <span>© Arnold Nillas {new Date().getFullYear()}</span>
          </div>
          <button
            onClick={() => {
              navigator.clipboard.writeText(email);
              toast.success("Email copied", { position: "bottom-center" });
            }}
            className="transition hover:text-cyan-300 sm:justify-self-center"
          >
            {email}
          </button>
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-md self-start text-white/60 hover:text-cyan-300 sm:self-auto"
          >
            <ScrollLink
              to="Home"
              href="#Home"
              smooth={true}
              duration={1000}
              aria-label="Back to top"
            >
              <FontAwesomeIcon
                icon={faArrowUp}
                width={14}
                height={14}
                className=""
              />
            </ScrollLink>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
