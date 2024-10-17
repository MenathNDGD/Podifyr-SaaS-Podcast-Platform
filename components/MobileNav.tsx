"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  const { user } = useUser();

  return (
    <section>
      <Sheet>
        <SheetTrigger>
          <Image
            src={"/icons/hamburger.svg"}
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side={"left"} className="border-none bg-black-1">
          <Link
            href={"/"}
            className="flex items-center gap-1 pb-10 cursor-pointer pl-4"
          >
            <Image
              src={"/icons/logo.png"}
              alt="Podifyr"
              width={35}
              height={35}
            />
            <h1 className="text-4xl font-extrabold text-orange-1 ml-2">
              Podifyr
            </h1>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 text-white-1">
                {sidebarLinks.map(({ route, label, imgURL }) => {
                  const isActive =
                    pathname === route || pathname.startsWith(`${route}/`);

                  return (
                    <SheetClose asChild key={route}>
                      <Link
                        href={route}
                        className={cn(
                          "flex items-center gap-3 py-4  max-lg:px-4 justify-start",
                          {
                            "bg-nav-focus border-r-4 border-orange-1": isActive,
                          }
                        )}
                      >
                        <Image
                          src={imgURL}
                          alt={label}
                          width={24}
                          height={24}
                        />
                        <p>{label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
                {user && (
                  <Link
                    href={`/profile/${user.id}`}
                    className={cn(
                      "flex items-center gap-3 py-4  max-lg:px-4 justify-start",
                      {
                        "bg-nav-focus border-r-4 border-orange-1":
                          pathname === `/profile/${user.id}`,
                      }
                    )}
                  >
                    <Image
                      src="/icons/profile.svg"
                      alt="My Profile"
                      width={24}
                      height={24}
                    />
                    <p>My Profile</p>
                  </Link>
                )}
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
