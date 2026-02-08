import { GithubIcon, Mail01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

function SocialLinks() {
  return (
    <div className="mt-6 flex items-center gap-3">
      <a
        href="https://github.com/nesffer"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground transition-colors"
        aria-label="GitHub"
      >
        <HugeiconsIcon icon={GithubIcon} size={20} />
      </a>
      <a
        href="mailto:contact@nesffer.dev"
        className="text-muted-foreground hover:text-foreground transition-colors"
        aria-label="이메일"
      >
        <HugeiconsIcon icon={Mail01Icon} size={20} />
      </a>
    </div>
  );
}

export { SocialLinks };
