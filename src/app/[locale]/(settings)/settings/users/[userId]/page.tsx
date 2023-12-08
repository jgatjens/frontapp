import { redirect } from "next/navigation";
import { getCurrentUser } from "~/lib/session";
import { DashboardHeader } from "~/components/header";
import { DashboardShell } from "~/components/shell";
import { api } from "~/trpc/server";
import { UserRole } from "~/constans";
import { UserAdminForm } from "~/components/user-admin-form";

export const metadata = {
  title: "New User",
  description: "New user.",
};

export default async function NewUserPage() {
  const userSession = await getCurrentUser();

  if (userSession?.role !== UserRole.Admin) {
    redirect("/settings");
  }

  const organizations = await api.organization.getAll.query();

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Usuario"
        text="Actualizar o crear nuevo usuario."
      ></DashboardHeader>
      <div className="grid gap-10">
        <UserAdminForm organizations={organizations} />
      </div>
    </DashboardShell>
  );
}
