"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, useClerk, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useAudio } from "@/providers/AudioProvider";

const LeftSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { signOut } = useClerk();
  const { user } = useUser();
  const { audio } = useAudio();

  return (
    <section
      className={cn("left_sidebar h-[calc(100vh-5px)]", {
        "h-[calc(100vh-140px)]": audio?.audioUrl,
      })}
    >
      <nav className="flex flex-col gap-6">
        <Link
          href={"/"}
          className="flex items-center gap-1 pb-10 cursor-pointer max-lg:justify-center"
        >
          <Image src={"/icons/logo.png"} alt="Podifyr" width={35} height={35} />
          <h1 className="text-4xl font-extrabold max-lg:hidden text-orange-1">
            Podifyr
          </h1>
        </Link>

        {sidebarLinks.map(({ route, label, imgURL }) => {
          const isActive =
            pathname === route || pathname.startsWith(`${route}/`);

          return (
            <Link
              href={route}
              key={label}
              className={cn(
                "flex items-center justify-center gap-3 py-4  max-lg:px-4 lg:justify-start",
                { "bg-nav-focus border-r-4 border-orange-1": isActive }
              )}
            >
              <Image src={imgURL} alt={label} width={24} height={24} />
              <p>{label}</p>
            </Link>
          );
        })}
        {user && (
          <Link
            href={`/profile/${user.id}`}
            className={cn(
              "flex items-center justify-center gap-3 py-4 max-lg:px-4 lg:justify-start",
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
      <SignedOut>
        <div className="flex-center w-full pb-14 max-lg:px-4 lg:pr-8">
          <Button
            asChild
            className="text-16 w-full bg-orange-1 font-extrabold rounded-md"
          >
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="flex-center w-full pb-14 max-lg:px-4 lg:pr-8">
          <Button
            onClick={() => signOut(() => router.push("/"))}
            className="text-16 w-full bg-orange-1 font-extrabold rounded-md"
          >
            Sign Out
          </Button>
        </div>
      </SignedIn>
    </section>
  );
};

export default LeftSidebar;
