"use client";

import type { SidebarNavItem } from "~/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Icons } from "~/components/icons";
import { cn } from "@/lib/utils";

interface PreApprovedNavProps {
  items: SidebarNavItem[];
  role: "USER" | "ADMIN";
}

export function PreApprovedNav({ items, role }: PreApprovedNavProps) {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <section className="sticky top-20 ">
      <nav className="mb-4 grid items-start gap-2">
        {items.map((item: SidebarNavItem, index) => {
          const Icon = Icons[item.icon ?? "arrowRight"];

          if (item.role && item.role !== role) {
            return null;
          }

          return (
            item.href && (
              <Link key={index} href={item.disabled ? "/" : item.href}>
                <span
                  className={cn(
                    "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    path.endsWith(item.href) ? "bg-accent" : "transparent",
                    item.disabled && "cursor-not-allowed opacity-80",
                  )}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  <span>{item.title}</span>
                </span>
              </Link>
            )
          );
        })}
      </nav>

      <Button className="w-full">Continuar</Button>
    </section>
  );
}
