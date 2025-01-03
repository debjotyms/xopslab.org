"use client";

import {Button} from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {MenuIcon} from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center py-4 px-4 md:container w-full">
      <div className="w-full justify-start items-center">
        <Link href="/" className="flex items-center">
          <Image src="/images/xops-logo.jpg" alt="Logo"  width={100} height={100} />
        </Link>
      </div>
      <div className="w-full justify-end items-center hidden md:flex">
        <NavigationMenu className="w-full items-center justify-center hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/">Blog</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/">Team</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Link href="https://www.youtube.com/@debjotyms/playlists">
          <Button className="ml-5 rounded-full">
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            Free Courses
          </Button>
        </Link>
      </div>
      <Sheet>
        <SheetTrigger asChild className="w-full flex justify-end items-center">
          <div className="w-full md:hidden">
            <Button variant="outline" size="icon">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </div>
        </SheetTrigger>

        <SheetContent>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
          <Link href="https://www.youtube.com/@debjotyms/playlists">
            <Button className="rounded-full">
              <span className="relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
              Free Courses
            </Button>
          </Link>
          <ul className="flex flex-col gap-3 mt-4">
            <li>
              <SheetTrigger asChild>
                <Link href="/">Blog</Link>
              </SheetTrigger>
            </li>
            <li>
              <SheetTrigger asChild>
                <Link href="/">Team</Link>
              </SheetTrigger>
            </li>
            <li></li>
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
}
