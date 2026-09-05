"use client";

import { useEffect, useRef, useState } from "react";
import { faCheck, faCopy, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { email } from "@/lib/texts";
import { Icon } from "./ui/icon";

export default function CopyEmail() {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const address = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (status !== "copied") return;
    const timer = window.setTimeout(() => setStatus("idle"), 3000);
    return () => window.clearTimeout(timer);
  }, [status]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("error");
      // Leave the address selected for manual copying if clipboard access is denied.
      const selection = window.getSelection();
      if (selection && address.current) {
        const range = document.createRange();
        range.selectNodeContents(address.current);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={copyEmail}
        aria-label={`Copy email address: ${email}`}
        aria-describedby="copy-email-status"
        className="inline-flex max-w-full items-center gap-4 border-b border-border pb-3 text-left text-sm transition-colors hover:border-accent hover:text-accent"
      >
        <Icon
          icon={faEnvelope}
          width={16}
          height={16}
          aria-hidden="true"
          className="shrink-0"
        />
        <span ref={address} className="break-all select-text">
          {email}
        </span>
        <Icon
          icon={status === "copied" ? faCheck : faCopy}
          width={14}
          height={14}
          aria-hidden="true"
          className={`shrink-0 ${status === "copied" ? "text-accent" : ""}`}
        />
      </button>
      <p
        id="copy-email-status"
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className={`mt-4 text-xs leading-5 ${status === "copied" ? "text-accent" : "text-muted-foreground"}`}
      >
        {status === "copied"
          ? "Email copied to clipboard!"
          : status === "error"
            ? "Couldn’t copy automatically. Select and copy the address above."
            : "Click the email address to copy it."}
      </p>
    </div>
  );
}
