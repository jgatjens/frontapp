import { redirect } from "next/navigation";

import { getCurrentUser } from "~/lib/session";
import { DashboardHeader } from "~/components/header";
import { DashboardShell } from "~/components/shell";
import { api } from "~/trpc/server";
// import { UserNameForm } from "~/components/user-name-form";

export const metadata = {
  title: "Settings",
  description: "Manage account and website settings.",
};

export default async function SettingsPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Users" text="Add or remove users." />
      <div className="grid gap-10">
        {/* <UserNameForm user={{ id: user.id, name: user.name || "" }} /> */}
      </div>
    </DashboardShell>
  );
}
