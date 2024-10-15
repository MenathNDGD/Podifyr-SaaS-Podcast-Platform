export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>
        {/* TODO: Left Sidebar */}
        {children}
        {/* TODO: Right Sidebar */}
      </main>
    </div>
  );
}
