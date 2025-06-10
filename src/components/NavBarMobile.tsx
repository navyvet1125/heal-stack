"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {NavLink} from "../lib/nav-links"; // Adjust the import path as necessary

interface NavMobileProps {
  links: NavLink[];
}

export default function NavMobile( { links }: NavMobileProps) {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="sm:hidden">
          <Menu size={48} className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="sm:hidden w-svw bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500"
      >
        <SheetTitle className="text-2xl font-bold text-center mt-6 text-white">
          Evan Washington
        </SheetTitle>
        <SheetDescription className="text-center text-xl text-amber-400 mb-4">
            Heal-stack developer & holistic facilitator
        </SheetDescription>
        <nav className="flex flex-col gap-4 mt-8 mx-6">
          {links
            .filter(({ href }) => href !== "/contact") // Exclude contact link from main nav
            .map(({ href, label }) => (
              <SheetClose asChild key={href}>
                {pathname === href ? (
                  <span
                    className="text-xl text-amber-400 font-semibold bg-transparent cursor-default pointer-events-none"
                  >
                    {label}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="text-xl text-white bg-transparent transition-colors hover:text-amber-300"
                  >
                    {label}
                  </Link>
                )}
              </SheetClose>
            ))}
          <hr className="border-t border-amber-400/30 my-4" />
          {pathname === "/contact" ? (
            <span
              className="text-xl text-amber-400 font-semibold bg-transparent cursor-default pointer-events-none"
            >
              Contact
            </span>
          ) : (
            <SheetClose asChild>
              <Link
                href="/contact"
                className="text-xl text-white hover:text-yellow-300"
              >
                Contact
              </Link>
            </SheetClose>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
}