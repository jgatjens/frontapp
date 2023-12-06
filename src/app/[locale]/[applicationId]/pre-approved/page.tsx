import { redirect } from "next/navigation";

import { getCurrentUser } from "~/lib/session";
import { DashboardShell } from "~/components/shell";
import { SearchClientForm } from "./(personal-info)/search-client-form";
import { CampainForm } from "./(personal-info)/campain-form";
import { DashboardHeader } from "~/components/header";
import { PersonalInfoForm } from "./(personal-info)/personal-info-form";

export const metadata = {
  title: "Pre Aprovado - Datos Personales",
  description: "Pre Aprovado - Analítica de Datos Financieros",
};

export default async function SettingsPage() {
  const userSession = await getCurrentUser();

  if (!userSession?.email) {
    redirect("/login");
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Datos Personales"
        text="Analítica de Datos Financieros"
      />
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <SearchClientForm />
        <CampainForm />
        <PersonalInfoForm className="lg:col-span-2" />
      </div>
    </DashboardShell>
  );
}
