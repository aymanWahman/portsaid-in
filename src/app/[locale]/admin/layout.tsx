import { Locale } from "@/i18n.config";
// import getTrans from "@/lib/translation";
import AdminTabs from "./_components/AdminTabs";

async function AdminLayout({
  // params,
  children,
}: {
  params: Promise<{ locale: Locale }>;
  children: React.ReactNode;
}) {
  // const locale = (await params).locale;
  // const translations = await getTrans(locale);
  return (
    <div className="pt-14">
      <AdminTabs  />
      {children}
    </div>
  );
}

export default AdminLayout;
