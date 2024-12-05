import { SideBar } from "@/components";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full flex pt-[90px]">
      <SideBar />
      <div className="p-4 w-full">{children}</div>
    </div>
  );
}
