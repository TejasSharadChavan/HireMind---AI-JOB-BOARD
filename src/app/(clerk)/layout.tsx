export default function ClerkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex w-screen h-screen items-center justify-center">
    <div>{children}</div>
  </div>;
}
