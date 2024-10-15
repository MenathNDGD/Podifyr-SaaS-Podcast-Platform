import LeftSidebar from "@/components/LeftSidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      <main className="relative flex bg-black-3">
        <LeftSidebar />

        <section>
          <div>
            <div>
              <Image />
              {/* TODO: Mobile Nav */}
            </div>
            <div>
              {/* TODO: Wrap with Toaster */}
              {children}
            </div>
          </div>
        </section>
        {/* TODO: Right Sidebar */}
      </main>
    </div>
  );
}
