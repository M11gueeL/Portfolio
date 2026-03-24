import { FaReact, FaServer } from 'react-icons/fa';
import { SiTailwindcss, SiGooglecloud, SiOdoo, SiBinance } from 'react-icons/si';

export const experienceData = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Technical Digital TD C.A.",
    period: "Noviembre 2025 - Febrero 2026",
    description: "Desarrollo e implementación completa del frontend para la plataforma de e-commerce AurorasPro. Construcción de una interfaz interactiva enfocada en la conversión para la venta de cursos de marketing digital. Integración exitosa de pasarela de pagos descentralizada usando Binance Pay API.",
    link: "https://auroraspro.com",
    linkText: "Visitar AurorasPro.com",
    technologies: [
      { name: "React", icon: FaReact, color: "text-sky-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
      { name: "Binance Pay", icon: SiBinance, color: "text-yellow-500" }
    ]
  },
  {
    id: 2,
    role: "Desarrollador Odoo & Consultor",
    company: "Consultores Pluss",
    period: "Enero 2024 - Septiembre 2024",
    description: "Personalización y desarrollo de módulos a medida para el ERP Odoo 17. Responsable del despliegue, configuración y administración avanzada de las instancias de Odoo alojadas en máquinas virtuales sobre la infraestructura de Google Cloud Platform (GCP).",
    technologies: [
      { name: "Odoo 17", icon: SiOdoo, color: "text-purple-600" },
      { name: "Google Cloud", icon: SiGooglecloud, color: "text-blue-500" },
      { name: "SysAdmin", icon: FaServer, color: "text-zinc-500" }
    ]
  }
];
