import Sidebar from "@/src/components/sidebar";

export default function DashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 lg:flex-row">
      <Sidebar />
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}