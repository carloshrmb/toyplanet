"use client";

import { useState } from "react";
import Astronaut from "@/components/ui/Astronaut";
import SectionHeading from "@/components/ui/SectionHeading";
import { business, calculatorPackages, pricing } from "@/data/site";

/* Tipos de visita (tabs) */
type VisitType = "paquete" | "sin-paquete" | "acceso";

const VISIT_TABS: { id: VisitType; label: string; emoji: string }[] = [
  { id: "paquete", label: "Evento con paquete", emoji: "🎉" },
  { id: "sin-paquete", label: "Festeja sin paquete", emoji: "🎂" },
  { id: "acceso", label: "Solo acceso", emoji: "🎟️" },
];

/** Formatea un número como precio en pesos: 14800 -> "$14,800" */
const money = (n: number) => `$${n.toLocaleString("es-MX")}`;

type Line = { label: string; amount: number };

/**
 * Calculadora interactiva de cotización. Calcula en tiempo real el
 * total según el tipo de visita y arma un mensaje de WhatsApp con el
 * desglose. No usa backend: al enviar abre WhatsApp con el texto listo.
 */
export default function QuoteForm() {
  const [visit, setVisit] = useState<VisitType>("paquete");

  // Evento con paquete
  const [packageId, setPackageId] = useState(calculatorPackages[1].id); // Súper por defecto
  const [extraKids, setExtraKids] = useState(0);
  const [extraAdults, setExtraAdults] = useState(0);

  // Festeja sin paquete / Solo acceso
  const [kids, setKids] = useState(10);
  const [adults, setAdults] = useState(5);
  const [socks, setSocks] = useState(0);

  // Contacto
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const selectedPackage =
    calculatorPackages.find((p) => p.id === packageId) ?? calculatorPackages[0];

  /* ---- Cálculo del desglose según el tipo de visita ---- */
  let lines: Line[] = [];
  let summary = ""; // resumen para el mensaje de WhatsApp

  if (visit === "paquete") {
    const totalKids = selectedPackage.includedKids + extraKids;
    const totalAdults = selectedPackage.includedAdults + extraAdults;
    lines = [
      { label: selectedPackage.name, amount: selectedPackage.price },
      ...(extraKids > 0
        ? [{ label: `${extraKids} niño(s) extra × ${money(pricing.extraKid)}`, amount: extraKids * pricing.extraKid }]
        : []),
      ...(extraAdults > 0
        ? [{ label: `${extraAdults} adulto(s) extra × ${money(pricing.extraAdult)}`, amount: extraAdults * pricing.extraAdult }]
        : []),
    ];
    summary = `${selectedPackage.name} para ${totalKids} niños y ${totalAdults} adultos`;
  } else if (visit === "sin-paquete") {
    lines = [
      { label: "Cuota de festejo", amount: pricing.noPackageFee },
      { label: `${kids} niño(s) × ${money(pricing.accessKid)}`, amount: kids * pricing.accessKid },
      { label: `${adults} adulto(s) × ${money(pricing.accessAdult)}`, amount: adults * pricing.accessAdult },
      ...(socks > 0
        ? [{ label: `${socks} calcetín(es) × ${money(pricing.sock)}`, amount: socks * pricing.sock }]
        : []),
    ];
    summary = `Festejo sin paquete para ${kids} niños y ${adults} adultos${socks > 0 ? ` (${socks} calcetines)` : ""}`;
  } else {
    lines = [
      { label: `${kids} niño(s) × ${money(pricing.accessKid)}`, amount: kids * pricing.accessKid },
      { label: `${adults} adulto(s) × ${money(pricing.accessAdult)}`, amount: adults * pricing.accessAdult },
      ...(socks > 0
        ? [{ label: `${socks} calcetín(es) × ${money(pricing.sock)}`, amount: socks * pricing.sock }]
        : []),
    ];
    summary = `Solo acceso para ${kids} niños y ${adults} adultos${socks > 0 ? ` (${socks} calcetines)` : ""}`;
  }

  const total = lines.reduce((sum, l) => sum + l.amount, 0);

  /* ---- Mensaje de WhatsApp ---- */
  const showDate = visit !== "acceso";
  const buildWhatsappUrl = () => {
    const parts = [`Hola, quiero cotizar: ${summary}, total aproximado ${money(total)}.`];
    if (name.trim()) parts.push(`Mi nombre es ${name.trim()}.`);
    if (showDate && date) parts.push(`Fecha deseada: ${date}.`);
    return `${business.whatsappUrl}?text=${encodeURIComponent(parts.join(" "))}`;
  };

  return (
    <section id="cotizacion" className="bg-cielo-200 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          kicker="Cotización"
          title="Calcula tu cotización al instante"
          subtitle="Elige el tipo de visita, ajusta los invitados y envíanos tu cotización por WhatsApp con un clic."
        />

        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
          {/* Tabs: tipo de visita */}
          <div className="grid grid-cols-1 gap-2 bg-cielo-100 p-3 sm:grid-cols-3">
            {VISIT_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setVisit(tab.id)}
                aria-pressed={visit === tab.id}
                className={`rounded-2xl px-4 py-3 text-sm font-bold transition-colors ${
                  visit === tab.id
                    ? "bg-sunset-500 text-white shadow-md"
                    : "bg-white text-ink-900 hover:bg-cielo-50"
                }`}
              >
                <span aria-hidden="true">{tab.emoji}</span> {tab.label}
              </button>
            ))}
          </div>

          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Controles */}
            <div>
              {visit === "paquete" && (
                <>
                  <p className="mb-2 font-bold text-ink-900">Elige tu paquete</p>
                  <div className="grid gap-2">
                    {calculatorPackages.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setPackageId(p.id)}
                        aria-pressed={packageId === p.id}
                        className={`flex items-center justify-between rounded-2xl border-2 px-4 py-3 text-left transition-colors ${
                          packageId === p.id
                            ? "border-cielo-500 bg-cielo-50"
                            : "border-cielo-200 hover:border-cielo-300"
                        }`}
                      >
                        <span>
                          <span className="block font-bold text-ink-900">{p.name}</span>
                          <span className="text-sm text-ink-500">
                            Incluye {p.includedKids} niños + {p.includedAdults} adultos
                          </span>
                        </span>
                        <span className="font-display text-lg font-extrabold text-cielo-600">
                          {money(p.price)}
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="mt-6 space-y-4">
                    <Stepper
                      label="Niños adicionales"
                      hint={`por encima de ${selectedPackage.includedKids} · ${money(pricing.extraKid)} c/u`}
                      value={extraKids}
                      onChange={setExtraKids}
                    />
                    <Stepper
                      label="Adultos adicionales"
                      hint={`por encima de ${selectedPackage.includedAdults} · ${money(pricing.extraAdult)} c/u`}
                      value={extraAdults}
                      onChange={setExtraAdults}
                    />
                  </div>
                </>
              )}

              {(visit === "sin-paquete" || visit === "acceso") && (
                <div className="space-y-4">
                  <Stepper
                    label="Niños"
                    hint={`${money(pricing.accessKid)} c/u`}
                    value={kids}
                    onChange={setKids}
                  />
                  <Stepper
                    label="Adultos"
                    hint={`${money(pricing.accessAdult)} c/u`}
                    value={adults}
                    onChange={setAdults}
                  />
                  <Stepper
                    label="Calcetines antiderrapantes"
                    hint={`obligatorios para jugar · ${money(pricing.sock)} c/u`}
                    value={socks}
                    onChange={setSocks}
                  />
                  {visit === "sin-paquete" && (
                    <p className="rounded-2xl bg-cielo-50 p-3 text-sm text-ink-500">
                      Incluye una cuota de festejo de {money(pricing.noPackageFee)} sobre el acceso
                      de tus invitados.
                    </p>
                  )}
                </div>
              )}

              {/* Contacto */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className={showDate ? "" : "sm:col-span-2"}>
                  <label htmlFor="calc-name" className="mb-1.5 block font-bold text-ink-900">
                    Tu nombre
                  </label>
                  <input
                    id="calc-name"
                    type="text"
                    placeholder="Ej. María González"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-2xl border border-cielo-200 bg-white px-4 py-3 text-ink-900 placeholder:text-ink-500/50 outline-none transition-colors focus:border-cielo-500 focus:ring-2 focus:ring-cielo-300"
                  />
                </div>
                {showDate && (
                  <div>
                    <label htmlFor="calc-date" className="mb-1.5 block font-bold text-ink-900">
                      Fecha deseada
                    </label>
                    <input
                      id="calc-date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full rounded-2xl border border-cielo-200 bg-white px-4 py-3 text-ink-900 outline-none transition-colors focus:border-cielo-500 focus:ring-2 focus:ring-cielo-300"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Resumen del cálculo (en tiempo real) */}
            <div className="rounded-3xl bg-cielo-50 p-6">
              <div className="mx-auto mb-2 w-fit">
                <Astronaut className="h-16 w-16" />
              </div>
              <p className="text-center font-display text-lg font-bold text-ink-900">
                Tu cotización
              </p>

              <ul className="mt-4 space-y-2 border-b border-cielo-200 pb-4">
                {lines.map((l) => (
                  <li key={l.label} className="flex justify-between gap-3 text-sm text-ink-500">
                    <span>{l.label}</span>
                    <span className="whitespace-nowrap font-bold text-ink-900">
                      {money(l.amount)}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex items-baseline justify-between">
                <span className="font-bold text-ink-900">Total aproximado</span>
                <span className="font-display text-3xl font-extrabold text-cielo-600">
                  {money(total)}
                </span>
              </div>

              <a
                href={buildWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-6 py-4 text-center font-bold text-white shadow-lg transition-opacity hover:opacity-90"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.4.2-.8l.4-.5c.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.8 2.8 4.5 3.9 1.7.7 2.3.8 3.1.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3z" />
                </svg>
                Enviar cotización por WhatsApp
              </a>
              <p className="mt-3 text-center text-xs text-ink-500">
                Total estimado; los detalles finales se confirman con Toy Planet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Control numérico con botones – / + y campo editable. */
function Stepper({
  label,
  hint,
  value,
  onChange,
}: {
  label: string;
  hint?: string;
  value: number;
  onChange: (n: number) => void;
}) {
  const set = (n: number) => onChange(Math.max(0, Math.min(999, Math.floor(n) || 0)));
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="font-bold text-ink-900">{label}</p>
        {hint && <p className="text-xs text-ink-500">{hint}</p>}
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => set(value - 1)}
          aria-label={`Quitar ${label}`}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-cielo-100 text-xl font-bold text-cielo-700 transition-colors hover:bg-cielo-200"
        >
          −
        </button>
        <input
          type="number"
          min={0}
          value={value}
          onChange={(e) => set(Number(e.target.value))}
          aria-label={label}
          className="w-14 rounded-xl border border-cielo-200 bg-white py-2 text-center font-bold text-ink-900 outline-none focus:border-cielo-500 focus:ring-2 focus:ring-cielo-300"
        />
        <button
          type="button"
          onClick={() => set(value + 1)}
          aria-label={`Agregar ${label}`}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-cielo-100 text-xl font-bold text-cielo-700 transition-colors hover:bg-cielo-200"
        >
          +
        </button>
      </div>
    </div>
  );
}
