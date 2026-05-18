export default function PageShell({
  sidebar,
  children,
  columns = "content",
}: {
  sidebar?: React.ReactNode;
  children: React.ReactNode;
  columns?: "content" | "marketing";
}) {
  const grid =
    columns === "marketing"
      ? "lg:grid-cols-[1fr_420px]"
      : "lg:grid-cols-[260px_1fr]";

  return (
    <main className={`mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:px-6 ${grid} lg:px-8`}>
      {sidebar}
      {children}
    </main>
  );
}
