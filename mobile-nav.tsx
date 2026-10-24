import { Link } from "@tanstack/react-router";
import { CalendarDays, Plus, Camera } from "lucide-react";

/**
 * Bottom navigation for the host app. Thumb-reachable, safe-area aware, and
 * pinned inside the phone-width app frame.
 */
export function MobileNav() {
  const items = [
    { to: "/dashboard", label: "Events", icon: CalendarDays },
    { to: "/events/new", label: "Create", icon: Plus },
    { to: "/camera-check", label: "Camera", icon: Camera },
  ] as const;

  return (
    <nav
      aria-label="Main"
      className="fixed bottom-0 left-1/2 z-40 w-full max-w-[430px] -translate-x-1/2 border-t border-border bg-card/95 backdrop-blur"
    >
      <ul className="flex items-stretch pb-[env(safe-area-inset-bottom)]">
        {items.map(({ to, label, icon: Icon }) => (
          <li key={to} className="flex-1">
            <Link
              to={to}
              activeProps={{ className: "text-primary", "aria-current": "page" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="flex min-h-[60px] flex-col items-center justify-center gap-1 text-[11px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
            >
              <Icon className="h-6 w-6" aria-hidden="true" />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
