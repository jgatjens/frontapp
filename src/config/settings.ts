import { UserRole } from "~/constans";
import type { SiteNavConfig } from "~/types";

export const siteConfig: SiteNavConfig = {
  mainNav: [
    {
      title: "Formulario",
      href: "/new/pre-approved",
    },
  ],
  sidebarPreApproved: [
    {
      title: "Datos Personales",
      href: "/new/pre-approved",
      icon: "settings",
    },
    {
      title: "Actividad Económica",
      href: "/new/pre-approved/economic-activity",
      icon: "user",
    },
    {
      title: "Verificación de Normativa",
      href: "/new/pre-approved/regulatory-verification",
      icon: "post",
    },
    {
      title: "Detalles de pasivos",
      href: "/new/pre-approved/pasive-detail",
      icon: "media",
    },
    {
      title: "Escenario Preliminar",
      href: "/new/pre-approved/preliminary-scenario",
      icon: "post",
    },
    {
      title: "Detalles de pasivos",
      href: "/new/pre-approved/preliminary-scenario",
      icon: "media",
    },
    {
      title: "Capacidad de Pago",
      href: "/new/pre-approved/payment-capacity",
      icon: "help",
    },
    {
      title: "Estructura de Financiamiento",
      href: "/new/pre-approved/financing-structure",
      icon: "pizza",
    },
  ],
  sidebarNav: [
    {
      title: "Perfil",
      href: "/settings",
      icon: "settings",
    },
    {
      title: "Usuarios",
      role: UserRole.Admin,
      href: "/settings/users",
      icon: "post",
    },
  ],
};
