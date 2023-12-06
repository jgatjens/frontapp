import { redirect } from "next/navigation";

import { getCurrentUser } from "~/lib/session";
import { DashboardHeader } from "~/components/header";
import { DashboardShell } from "~/components/shell";

export const metadata = {
  title: "Pre Aprovado",
  description: "Pre Aprovado - Analítica de Datos Financieros",
};

export default async function SettingsPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="FRONTAPP"
        text="Analítica de Datos Financieros"
      />
      <div className="grid gap-10">
        {/* <UserNameForm user={{ email: user.email, name: user.name ?? "" }} /> */}
      </div>
    </DashboardShell>
  );
}
