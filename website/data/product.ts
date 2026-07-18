import { Product } from "@/types/product";

export const products: Product[] = [
  {
    emoji: "📷",
    title: "AI IP Camera Platform",
    company: "Honeywell",
    description:
      "Embedded Linux surveillance platform with AI capabilities, ONVIF support, cloud connectivity and STQC compliance.",
    technologies: ["Linux", "ONVIF", "H.265", "AI", "Yocto"],
    href: "/projects/ai-ip-camera",
  },
  {
    emoji: "❤️",
    title: "Wearable Smart Patch",
    company: "Honeywell",
    description:
      "Connected medical wearable for continuous monitoring using embedded firmware, cloud connectivity and secure communication.",
    technologies: ["ESP32", "BLE", "IoT", "Firmware"],
    href: "/projects/smart-patch",
  },
  {
    emoji: "🔥",
    title: "Fire Alarm Panel",
    company: "Honeywell",
    description:
      "Cost-optimized intelligent fire panel designed for certification, reliability and manufacturing scalability.",
    technologies: ["Embedded C", "RTOS", "DFMEA"],
    href: "/projects/fire-alarm-panel",
  },
  {
    emoji: "🏭",
    title: "Industrial IoT",
    company: "SaiAgrotel",
    description:
      "Industrial automation solutions integrating embedded controllers, gateways and cloud platforms.",
    technologies: ["MQTT", "ESP32", "Linux"],
    href: "/projects/industrial-iot",
  },
  {
    emoji: "🚗",
    title: "Automotive Test Systems",
    company: "Precise Technology",
    description:
      "Embedded data acquisition systems for automobile durability testing and structural analysis.",
    technologies: ["CAN", "Sensors", "Data Logger"],
    href: "/projects/automotive-test",
  },
  {
    emoji: "⚙️",
    title: "Custom Embedded Systems",
    company: "NESD Labs",
    description:
      "Designed custom electronics and firmware solutions for startups and industrial customers.",
    technologies: ["Embedded C", "ARM", "PCB"],
  },
];
