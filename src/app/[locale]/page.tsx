import { redirect } from "next/navigation";

import { getCurrentUser } from "~/lib/session";
import { DashboardHeader } from "~/components/header";
import { DashboardShell } from "~/components/shell";
import { UserNameForm } from "~/components/user-name-form";
import { api } from "~/trpc/server";

export const metadata = {
  title: "Pre Aprovado",
  description: "Pre Aprovado - Analítica de Datos Financieros",
};

export default async function SettingsPage() {
  const userSession = await getCurrentUser();

  const user = await api.user.getUserByEmail.query({
    email: userSession?.email ?? "",
  });

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
