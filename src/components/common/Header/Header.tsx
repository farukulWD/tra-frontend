"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Container from "../Container/Container";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const menuItems = [
    {
      title: "Home",
      route: "/",
    },
    {
      title: "About",
      route: "/about",
    },
    {
      title: "History",
      route: "/history",
    },
    {
      title: "Products",
      route: "/products",
    },
  ];
  return (
    <nav className="dark:bg-foreground shadow-sm ">
      <Container>
        <div className="flex justify-between px-2 h-16 items-center">
          <div className="block md:hidden relative">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <GiHamburgerMenu />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {menuItems?.map((menu) => (
                  <DropdownMenuItem>
                    <Link key={menu?.route} href={menu.route}>
                      {menu?.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div>
            <Link href={"/"}>Trade Asia</Link>
          </div>

          <div className="hidden md:flex justify-between gap-3">
            {menuItems?.map((menu) => (
              <Link key={menu?.route} href={menu.route}>
                {menu?.title}
              </Link>
            ))}
          </div>
          <div>user menu</div>
        </div>
      </Container>
    </nav>
  );
}
