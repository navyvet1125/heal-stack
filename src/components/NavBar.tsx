"use client";

// import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
//   NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
//   NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavLink } from "../lib/nav-links"

interface SiteNavProps {
  links: NavLink[];
}

export default function SiteNav({ links }: SiteNavProps) {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {links.map(({ href, label }) => (
          <NavigationMenuItem key={href}>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              {pathname === href ? (
                <span
                  className="text-xl text-amber-400 font-semibold bg-transparent cursor-default pointer-events-none"
                >
                  {label}
                </span>
              ) : (
                <Link
                  href={href}
                  className="text-xl text-white bg-transparent transition-colors hover:text-yellow-300 hover:bg-black/20 focus:outline-none focus:text-amber-400 focus:bg-transparent focus-visible:ring-0"
                >
                  {label}
                </Link>
              )}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
