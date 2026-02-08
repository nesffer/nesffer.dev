"use client";

import { Moon02Icon, Sun02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTheme } from "next-themes";

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="text-muted-foreground hover:text-foreground transition-colors"
      aria-label="테마 전환"
    >
      <HugeiconsIcon icon={Sun02Icon} className="hidden dark:block" size={18} />
      <HugeiconsIcon
        icon={Moon02Icon}
        className="block dark:hidden"
        size={18}
      />
    </button>
  );
}

export { ThemeToggle };
