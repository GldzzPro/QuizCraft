import React from 'react'
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
    LogOutIcon,
    MenuIcon,
    Package2Icon,
    PackageIcon,
    SettingsIcon,
    ShoppingCartIcon,
    UsersIcon,
} from "lucide-react"
import Link from 'next/link';
const NavbarMobile = () => {
  return (
    <Sheet>
    <SheetTrigger asChild>
      <Button size="icon" variant="outline" className="sm:hidden">
        <MenuIcon className="h-5 w-5" />
        <span className="sr-only">Toggle Menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="sm:max-w-xs">
      <nav className="grid gap-6 text-lg font-medium">
        <Link
          href="#"
          className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
          prefetch={false}
        >
          <Package2Icon className="h-5 w-5 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          <UsersIcon className="h-5 w-5" />
          Users
        </Link>
        <Link
          href="#"
          className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          <PackageIcon className="h-5 w-5" />
          Products
        </Link>
        <Link
          href="#"
          className="flex items-center gap-4 px-2.5 text-foreground"
          prefetch={false}
        >
          <ShoppingCartIcon className="h-5 w-5" />
          Orders
        </Link>
        <Link
          href="#"
          className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          <SettingsIcon className="h-5 w-5" />
          Settings
        </Link>
      </nav>
    </SheetContent>
  </Sheet>
  )
}

export default NavbarMobile