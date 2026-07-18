import type { ProjectCaseStudy } from "@/types/project";

export const projects = [
  {
    slug: "ai-ip-camera",
    emoji: "📷",
    title: "AI IP Camera Platform",
    company: "Honeywell",
    summary:
      "A secure Embedded Linux surveillance platform supporting ONVIF interoperability, edge AI, remote management, and regulatory certification.",
    seoDescription:
      "Case study of a secure Embedded Linux AI surveillance camera platform with ONVIF, RTSP, secure boot, OTA updates, and certification readiness.",
    overview: [
      "The platform was designed as a reusable foundation for multiple surveillance camera variants rather than as a one-off device.",
      "It combined video streaming, device management, cybersecurity, edge intelligence, and manufacturing requirements in a single production architecture.",
    ],
    facts: [
      { label: "Domain", value: "AI Surveillance" },
      { label: "Platform", value: "Embedded Linux" },
      { label: "Focus", value: "Security & Interoperability" },
      { label: "Lifecycle", value: "Architecture to Production" },
    ],
    problemStatement: [
      "Create one maintainable camera platform that could support multiple hardware variants without fragmenting the firmware baseline.",
      "Meet performance, cybersecurity, interoperability, certification, and manufacturing needs while preserving a practical product roadmap.",
    ],
    role: [
      "Led cross-functional engineering planning and technical reviews.",
      "Defined the Embedded Linux platform architecture and subsystem boundaries.",
      "Coordinated firmware, hardware, cloud, test, certification, and manufacturing activities.",
      "Drove roadmap execution, risk reviews, and production-readiness decisions.",
    ],
    technologies: [
      "Embedded Linux",
      "Buildroot",
      "ONVIF",
      "RTSP",
      "H.265",
      "Edge AI",
      "Secure Boot",
      "HTTPS",
      "OTA",
    ],
    architecture: {
      description:
        "The platform separates hardware adaptation, Linux services, media processing, device security, and remote management so variants can share a stable product core.",
      components: [
        "Camera Hardware",
        "Linux BSP",
        "Media & AI Services",
        "Security Layer",
        "ONVIF / Device APIs",
        "Cloud Management",
      ],
    },
    engineeringChallenges: [
      {
        title: "Multi-variant platform",
        description:
          "Hardware differences had to be isolated without creating independent firmware branches for every camera.",
      },
      {
        title: "Video performance",
        description:
          "Streaming, encoding, analytics, and management services competed for constrained CPU and memory resources.",
      },
      {
        title: "Security and certification",
        description:
          "Security controls needed to be designed into boot, update, network, and manufacturing flows rather than added late.",
      },
    ],
    keyDecisions: [
      {
        title: "Platform-first architecture",
        description:
          "Kept a common product core and moved board-specific behavior behind explicit hardware abstraction boundaries.",
      },
      {
        title: "Security by design",
        description:
          "Treated secure boot, authenticated updates, hardened services, and protected communication as platform capabilities.",
      },
      {
        title: "Standards-led interfaces",
        description:
          "Used ONVIF and well-defined service APIs to reduce integration risk and improve ecosystem compatibility.",
      },
    ],
    results: [
      "Established a reusable technical foundation for multiple camera variants.",
      "Aligned engineering, certification, and manufacturing work around one platform roadmap.",
      "Improved design review quality by making subsystem ownership and interfaces explicit.",
      "Created a clearer path for security updates and long-term product maintenance.",
    ],
    lessonsLearned: [
      "Variant management is an architecture concern, not only a build-system concern.",
      "Certification risks should influence platform design from the first architecture review.",
      "Resource budgets for video and AI workloads must be measured continuously on target hardware.",
    ],
    relatedProjects: ["industrial-iot", "smart-patch", "fire-alarm-panel"],
  },
  {
    slug: "smart-patch",
    emoji: "❤️",
    title: "Wearable Smart Patch",
    company: "Honeywell",
    summary:
      "A connected medical wearable platform for continuous monitoring, secure communication, and reliable cloud-assisted product operation.",
    seoDescription:
      "Case study of a connected medical wearable using embedded firmware, BLE, secure communications, and cloud integration.",
    overview: [
      "The smart patch combined low-power sensing, embedded firmware, wireless connectivity, and cloud integration in a wearable form factor.",
      "The product architecture emphasized dependable data acquisition, power efficiency, secure communication, and traceable engineering decisions.",
    ],
    facts: [
      { label: "Domain", value: "Medical Devices" },
      { label: "Connectivity", value: "Bluetooth Low Energy" },
      { label: "Focus", value: "Low Power & Reliability" },
      { label: "Lifecycle", value: "Product Development" },
    ],
    problemStatement: [
      "Provide continuous monitoring from a compact wearable while balancing battery life, signal quality, comfort, and connectivity.",
      "Create a dependable device-to-cloud data path suitable for a product with strong quality and security expectations.",
    ],
    role: [
      "Supported product architecture and cross-functional engineering planning.",
      "Reviewed embedded firmware structure, connectivity behavior, and product risks.",
      "Aligned device, mobile, cloud, verification, and manufacturing stakeholders.",
      "Drove design reviews focused on reliability, security, and product readiness.",
    ],
    technologies: [
      "Embedded C",
      "ESP32",
      "Bluetooth LE",
      "Sensors",
      "Secure Communication",
      "IoT",
      "Cloud APIs",
      "OTA",
    ],
    architecture: {
      description:
        "The architecture separates sensing and signal acquisition from device control, secure BLE transport, companion connectivity, and cloud services.",
      components: [
        "Sensors",
        "Acquisition Firmware",
        "Device Services",
        "Secure BLE",
        "Companion Gateway",
        "Cloud Platform",
      ],
    },
    engineeringChallenges: [
      {
        title: "Power budget",
        description:
          "Sampling, processing, radio activity, and user experience all had to fit within a constrained wearable battery profile.",
      },
      {
        title: "Data integrity",
        description:
          "Temporary connectivity loss could not result in silent gaps or ambiguous device state.",
      },
      {
        title: "Cross-system verification",
        description:
          "Firmware, mobile connectivity, and cloud behavior needed one traceable end-to-end test strategy.",
      },
    ],
    keyDecisions: [
      {
        title: "Event-driven firmware",
        description:
          "Used explicit operating states and scheduled radio activity to make power behavior measurable and testable.",
      },
      {
        title: "Store-and-forward data",
        description:
          "Buffered important records locally so intermittent connectivity did not compromise continuity.",
      },
      {
        title: "End-to-end observability",
        description:
          "Defined identifiers and diagnostics that allowed device events to be traced through the connected system.",
      },
    ],
    results: [
      "Created a clearer platform boundary between sensing, connectivity, and cloud concerns.",
      "Made battery and connectivity behavior measurable through explicit engineering budgets.",
      "Improved cross-functional reviews with end-to-end data-flow and failure-mode analysis.",
      "Established a scalable basis for future wearable variants.",
    ],
    lessonsLearned: [
      "Power optimization works best when every subsystem owns a measurable budget.",
      "Connected medical products need end-to-end traceability, not isolated component tests.",
      "Offline behavior should be treated as a normal operating mode rather than an exception.",
    ],
    relatedProjects: ["ai-ip-camera", "industrial-iot", "fire-alarm-panel"],
  },
  {
    slug: "fire-alarm-panel",
    emoji: "🔥",
    title: "Fire Alarm Panel",
    company: "Honeywell",
    summary:
      "A cost-conscious intelligent fire safety platform designed for dependable operation, certification, and manufacturing scale.",
    seoDescription:
      "Case study of an intelligent fire alarm panel designed with Embedded C, RTOS, DFMEA, certification, and manufacturing readiness.",
    overview: [
      "The fire panel required deterministic embedded behavior, clear fault handling, serviceability, and rigorous verification.",
      "The architecture balanced safety-oriented engineering with cost targets and practical manufacturing constraints.",
    ],
    facts: [
      { label: "Domain", value: "Fire Safety" },
      { label: "Platform", value: "MCU + RTOS" },
      { label: "Focus", value: "Reliability & Certification" },
      { label: "Lifecycle", value: "Design to Manufacturing" },
    ],
    problemStatement: [
      "Deliver reliable alarm, supervision, and fault behavior on cost-optimized hardware.",
      "Build certification evidence and manufacturing diagnostics into the product lifecycle without compromising maintainability.",
    ],
    role: [
      "Led architecture, firmware planning, and cross-functional design reviews.",
      "Coordinated hardware, firmware, verification, certification, and manufacturing needs.",
      "Applied DFMEA and risk-based prioritization to critical product behavior.",
      "Drove production-readiness and serviceability discussions.",
    ],
    technologies: [
      "Embedded C",
      "RTOS",
      "MCU",
      "Diagnostics",
      "DFMEA",
      "Watchdog",
      "Manufacturing Test",
      "Certification",
    ],
    architecture: {
      description:
        "Safety inputs feed deterministic control and event-processing services, with independent diagnostics, annunciation, communication, and persistent logging.",
      components: [
        "Detection Loops",
        "Input Supervision",
        "Safety Logic",
        "Alarm Outputs",
        "Diagnostics",
        "Event Storage",
      ],
    },
    engineeringChallenges: [
      {
        title: "Deterministic behavior",
        description:
          "Alarm and fault processing needed predictable timing under normal, degraded, and stress conditions.",
      },
      {
        title: "Cost versus resilience",
        description:
          "Hardware optimization could not weaken supervision, diagnostics, or essential product behavior.",
      },
      {
        title: "Verification scope",
        description:
          "The state space included many combinations of faults, operating modes, and recovery sequences.",
      },
    ],
    keyDecisions: [
      {
        title: "Explicit state machines",
        description:
          "Modelled critical behavior as reviewable states and transitions rather than scattered conditional logic.",
      },
      {
        title: "Layered diagnostics",
        description:
          "Separated power-on, runtime, communication, and manufacturing diagnostics for clearer fault isolation.",
      },
      {
        title: "Risk-led verification",
        description:
          "Used DFMEA outcomes to prioritize test depth and design evidence for critical paths.",
      },
    ],
    results: [
      "Established a maintainable architecture for safety and diagnostic behavior.",
      "Connected design risks directly to verification and certification evidence.",
      "Improved manufacturing fault isolation through purpose-built diagnostics.",
      "Created a stronger basis for product variants and future feature growth.",
    ],
    lessonsLearned: [
      "Safety behavior should be represented in models that every discipline can review.",
      "Manufacturing diagnostics are most effective when designed with the hardware and firmware.",
      "Cost optimization should be evaluated against system-level failure modes.",
    ],
    relatedProjects: ["smart-patch", "industrial-iot", "ai-ip-camera"],
  },
  {
    slug: "industrial-iot",
    emoji: "🏭",
    title: "Industrial IoT Platform",
    company: "SaiAgrotel",
    summary:
      "An industrial automation platform connecting embedded controllers, edge gateways, and cloud services for dependable remote operation.",
    seoDescription:
      "Case study of an Industrial IoT platform using embedded controllers, Linux gateways, MQTT, device management, and cloud services.",
    overview: [
      "The platform connected field devices and industrial controllers to gateway and cloud services across variable network conditions.",
      "Its design prioritized protocol adaptation, offline operation, secure fleet management, and maintainable deployment.",
    ],
    facts: [
      { label: "Domain", value: "Industrial Automation" },
      { label: "Connectivity", value: "MQTT & Field Protocols" },
      { label: "Focus", value: "Edge-to-Cloud Reliability" },
      { label: "Lifecycle", value: "Platform Delivery" },
    ],
    problemStatement: [
      "Unify heterogeneous controllers and field protocols behind a consistent device and cloud model.",
      "Maintain safe local operation and trustworthy data delivery when internet connectivity is intermittent.",
    ],
    role: [
      "Led firmware, hardware, gateway, and cloud engineering teams.",
      "Defined platform boundaries, interfaces, and delivery priorities.",
      "Reviewed device-management, telemetry, diagnostics, and update strategies.",
      "Coordinated field feedback with product and engineering roadmaps.",
    ],
    technologies: [
      "Embedded C",
      "ESP32",
      "Linux",
      "MQTT",
      "Modbus",
      "Edge Gateway",
      "Cloud APIs",
      "OTA",
      "Telemetry",
    ],
    architecture: {
      description:
        "Controllers retain local responsibility while an edge gateway normalizes protocols, buffers telemetry, manages devices, and connects securely to cloud services.",
      components: [
        "Field Sensors",
        "Embedded Controllers",
        "Protocol Adapters",
        "Linux Gateway",
        "MQTT Services",
        "Cloud Applications",
      ],
    },
    engineeringChallenges: [
      {
        title: "Protocol diversity",
        description:
          "Products and sites used different field interfaces, data models, and timing expectations.",
      },
      {
        title: "Intermittent networks",
        description:
          "The system needed to preserve local operation and reconcile data after extended outages.",
      },
      {
        title: "Fleet maintenance",
        description:
          "Diagnostics and updates had to work across devices with different capabilities and deployment histories.",
      },
    ],
    keyDecisions: [
      {
        title: "Edge autonomy",
        description:
          "Kept essential control and fallback behavior local so cloud availability was not a safety dependency.",
      },
      {
        title: "Canonical data model",
        description:
          "Normalized device data at the gateway instead of exposing protocol-specific details to every cloud service.",
      },
      {
        title: "Managed update lifecycle",
        description:
          "Designed staged deployment, version visibility, and recovery into the fleet-management approach.",
      },
    ],
    results: [
      "Created a reusable connection model across multiple industrial solutions.",
      "Improved resilience through local control and buffered edge operation.",
      "Reduced cloud integration complexity with normalized device data.",
      "Made deployed-system diagnostics and version state more visible.",
    ],
    lessonsLearned: [
      "Industrial IoT architectures should assume the cloud will sometimes be unavailable.",
      "A canonical data model is essential when product families span many protocols.",
      "Field diagnostics need to be designed before fleets reach production scale.",
    ],
    relatedProjects: ["ai-ip-camera", "automotive-test", "custom-embedded-systems"],
  },
  {
    slug: "automotive-test",
    emoji: "🚗",
    title: "Automotive Test Systems",
    company: "Precise Technology",
    summary:
      "Embedded data-acquisition systems for automobile durability testing, structural analysis, and dependable engineering measurement.",
    seoDescription:
      "Case study of embedded automotive test systems using sensors, CAN, synchronized data acquisition, and rugged data logging.",
    overview: [
      "The systems acquired synchronized sensor and vehicle data during durability and structural tests in demanding environments.",
      "Engineering priorities included signal integrity, deterministic sampling, rugged operation, and usable field diagnostics.",
    ],
    facts: [
      { label: "Domain", value: "Automotive Testing" },
      { label: "Platform", value: "Embedded DAQ" },
      { label: "Focus", value: "Measurement Integrity" },
      { label: "Lifecycle", value: "Custom Product Delivery" },
    ],
    problemStatement: [
      "Capture trustworthy multi-channel measurements under vibration, electrical noise, and long-duration test conditions.",
      "Synchronize sensor and vehicle-bus data while giving test engineers practical setup and diagnostic tools.",
    ],
    role: [
      "Designed embedded electronics, firmware, and system integration.",
      "Translated test-engineering needs into acquisition and storage requirements.",
      "Led prototyping, calibration, field validation, and customer delivery.",
      "Supported diagnostics and iterative improvements from real test campaigns.",
    ],
    technologies: [
      "Embedded C",
      "CAN",
      "Sensors",
      "ADC",
      "Signal Conditioning",
      "Data Logger",
      "Time Synchronization",
      "Calibration",
    ],
    architecture: {
      description:
        "Sensor and CAN inputs are timestamped through deterministic acquisition services, validated, buffered, and committed to durable storage for later analysis.",
      components: [
        "Sensors",
        "Signal Conditioning",
        "Synchronized Sampling",
        "CAN Acquisition",
        "Data Buffering",
        "Storage & Export",
      ],
    },
    engineeringChallenges: [
      {
        title: "Signal integrity",
        description:
          "Low-level sensor signals had to remain useful in noisy electrical and mechanical environments.",
      },
      {
        title: "Synchronization",
        description:
          "Independent acquisition sources needed consistent timestamps for engineering analysis.",
      },
      {
        title: "Long-duration reliability",
        description:
          "Power events, storage limits, and transient faults could not invalidate an expensive test run.",
      },
    ],
    keyDecisions: [
      {
        title: "Deterministic acquisition path",
        description:
          "Separated time-critical sampling from storage and user-interface workloads.",
      },
      {
        title: "Buffered durable logging",
        description:
          "Used bounded buffers and recoverable file structures to reduce data loss during faults.",
      },
      {
        title: "Built-in calibration",
        description:
          "Made channel configuration and calibration metadata part of each recorded dataset.",
      },
    ],
    results: [
      "Delivered dependable data acquisition for demanding automotive test workflows.",
      "Improved correlation between sensor and vehicle-bus measurements.",
      "Reduced setup ambiguity by preserving configuration and calibration context.",
      "Made field issues easier to diagnose without specialized firmware tools.",
    ],
    lessonsLearned: [
      "Measurement metadata is as important as the raw measurement.",
      "Recoverability should be designed for every boundary where data can be lost.",
      "Field usability strongly influences the value of technically accurate instrumentation.",
    ],
    relatedProjects: ["industrial-iot", "custom-embedded-systems", "ai-ip-camera"],
  },
  {
    slug: "custom-embedded-systems",
    emoji: "⚙️",
    title: "Custom Embedded Systems",
    company: "NESD Labs",
    summary:
      "Purpose-built electronics and firmware platforms developed for startups and industrial customers from concept through working prototypes.",
    seoDescription:
      "Case study of custom embedded product development using ARM microcontrollers, Embedded C, PCB design, sensors, and rapid prototyping.",
    overview: [
      "These engagements converted early product ideas and operational problems into testable embedded-system architectures.",
      "The work covered requirements, electronics, firmware, prototypes, diagnostics, and practical handover for further productization.",
    ],
    facts: [
      { label: "Domain", value: "Embedded Consulting" },
      { label: "Platform", value: "ARM & Custom Electronics" },
      { label: "Focus", value: "Concept to Prototype" },
      { label: "Lifecycle", value: "Rapid Product Development" },
    ],
    problemStatement: [
      "Customers needed technically sound prototypes without carrying unnecessary production complexity into the first iteration.",
      "Architecture choices had to support learning quickly while preserving a credible path to manufacturable products.",
    ],
    role: [
      "Converted customer needs into product and engineering requirements.",
      "Designed electronics, firmware architecture, interfaces, and diagnostics.",
      "Built and validated prototypes with sensors, actuators, and communication interfaces.",
      "Documented risks, trade-offs, and next steps for productization.",
    ],
    technologies: [
      "Embedded C",
      "ARM",
      "MCU",
      "PCB Design",
      "Sensors",
      "UART",
      "SPI",
      "I²C",
      "Prototyping",
    ],
    architecture: {
      description:
        "A modular hardware and firmware core isolates application behavior from drivers and communication interfaces, allowing prototypes to evolve without wholesale rewrites.",
      components: [
        "Sensors & Actuators",
        "Custom PCB",
        "Device Drivers",
        "Application Logic",
        "Communications",
        "Diagnostics",
      ],
    },
    engineeringChallenges: [
      {
        title: "Incomplete requirements",
        description:
          "Early product ideas required rapid experiments to convert assumptions into engineering decisions.",
      },
      {
        title: "Prototype debt",
        description:
          "Fast delivery had to avoid shortcuts that would block later reliability or manufacturing work.",
      },
      {
        title: "Component constraints",
        description:
          "Cost, availability, power, interfaces, and development support all influenced hardware selection.",
      },
    ],
    keyDecisions: [
      {
        title: "Risk-first prototypes",
        description:
          "Used each prototype to answer the highest-impact technical uncertainty rather than maximize feature count.",
      },
      {
        title: "Modular firmware",
        description:
          "Separated drivers, services, and application logic so hardware changes remained manageable.",
      },
      {
        title: "Diagnostics from day one",
        description:
          "Included observable states and test interfaces before field troubleshooting became expensive.",
      },
    ],
    results: [
      "Turned ambiguous product concepts into demonstrable embedded prototypes.",
      "Reduced technical uncertainty before larger product investments.",
      "Provided reusable firmware and interface foundations for subsequent iterations.",
      "Improved handover quality through documented architecture and engineering risks.",
    ],
    lessonsLearned: [
      "The best prototype validates a decision, not merely a feature list.",
      "Simple architectural boundaries pay off even in short consulting engagements.",
      "A credible production path should be visible before prototype choices harden.",
    ],
    relatedProjects: ["automotive-test", "industrial-iot", "fire-alarm-panel"],
  },
] satisfies ProjectCaseStudy[];

export type ProjectSlug = (typeof projects)[number]["slug"];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
