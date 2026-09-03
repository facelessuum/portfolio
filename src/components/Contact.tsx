"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { contactTexts, email, socialLinks } from "@/lib/texts";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faClockFour,
  faEnvelope,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [cooldownTick, setCooldownTick] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(
      () => setCooldownTick((previous) => previous + 1),
      6000,
    );
    return () => window.clearInterval(interval);
  }, []);

  const cooldownMinutes = () => {
    const sentAt = localStorage.getItem("timer");
    if (!sentAt) return null;
    const remaining =
      60 * 60 * 1000 - (Date.now() - new Date(sentAt).getTime());
    return remaining > 0 ? Math.ceil(remaining / (60 * 1000)) : null;
  };

  const sendButton = () => {
    void cooldownTick;
    const minutesLeft =
      typeof window !== "undefined" ? cooldownMinutes() : null;
    return (
      <Button
        type="submit"
        className="h-11 w-full rounded-md sm:w-36"
        disabled={loading || minutesLeft !== null}
      >
        {loading ? (
          <FontAwesomeIcon
            icon={faSpinner}
            width={16}
            height={16}
            className="animate-spin"
          />
        ) : minutesLeft !== null ? (
          <>
            <FontAwesomeIcon icon={faClockFour} width={15} className="" />{" "}
            {minutesLeft} min
          </>
        ) : (
          <>
            Send message{" "}
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              width={13}
              height={13}
              className=""
            />
          </>
        )}
      </Button>
    );
  };

  const sendEmail = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );
      if (response.text === "OK") {
        toast.success(
          "Thank you for reaching out! I'll get back to you as soon as possible.",
          { position: "bottom-center" },
        );
        setFormData({ name: "", email: "", message: "" });
        localStorage.setItem("timer", new Date().toISOString());
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        position: "bottom-center",
      });
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  return (
    <section
      className="padding relative overflow-hidden bg-[#050a13] py-24 text-white lg:py-36"
      id="Contact"
    >
      <div className="pointer-events-none absolute right-[-12rem] top-1/4 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="flex flex-col justify-between gap-10">
          <div className="space-y-5">
            <span className="section-kicker">Have a project in mind?</span>
            <h1 className="max-w-md text-5xl font-black leading-[0.95] tracking-[-0.08em] sm:text-6xl">
              {contactTexts.div.h1}
            </h1>
            <p className="max-w-md text-base leading-7 text-white/55">
              {contactTexts.div.p}
            </p>
          </div>
          <div className="space-y-5">
            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(email);
                toast.success("Email copied", { position: "bottom-center" });
              }}
              className="group flex w-full max-w-md items-center gap-4 border-b border-white/15 pb-4 text-left text-sm text-white/75 transition hover:border-cyan-300"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-300 text-[#050a13]">
                <FontAwesomeIcon icon={faEnvelope} className="" />
              </span>
              <span className="flex-1">{email}</span>
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-white/40 transition group-hover:-translate-y-1 group-hover:text-cyan-300"
              />
            </button>
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <Link href={link.link} target="_blank" key={link.link}>
                  <Button
                    aria-label="Social link"
                    variant="ghost"
                    className="h-10 w-10 rounded-full p-0 text-white/60 hover:text-cyan-300"
                  >
                    <FontAwesomeIcon icon={link.icon} className="" />
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Card className="rounded-xl border-white/10 bg-white/[0.04] text-white shadow-2xl shadow-black/20 backdrop-blur">
          <CardHeader className="border-b border-white/10 p-6 sm:p-8">
            <CardTitle className="text-2xl font-black tracking-[-0.05em]">
              {contactTexts.form.h1}
            </CardTitle>
            <CardDescription className="text-white/50">
              {contactTexts.form.p}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 sm:p-8">
            <form onSubmit={sendEmail} className="flex flex-col gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name" className="text-white/70">
                    Name
                  </Label>
                  <Input
                    id="name"
                    aria-label="Name"
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border-white/10 bg-white/[0.04] text-white placeholder:text-white/30"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email" className="text-white/70">
                    Email
                  </Label>
                  <Input
                    id="email"
                    aria-label="Email address"
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-white/10 bg-white/[0.04] text-white placeholder:text-white/30"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="message" className="text-white/70">
                  Message
                </Label>
                <Textarea
                  id="message"
                  aria-label="Message"
                  name="message"
                  required
                  placeholder="Tell me a little about your idea..."
                  value={formData.message}
                  onChange={handleChange}
                  className="border-white/10 bg-white/[0.04] text-white placeholder:text-white/30"
                />
              </div>
              <div className="flex justify-end pt-2">{sendButton()}</div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
