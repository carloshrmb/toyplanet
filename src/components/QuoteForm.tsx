"use client";

import { useState, type FormEvent } from "react";
import Astronaut from "@/components/ui/Astronaut";
import SectionHeading from "@/components/ui/SectionHeading";
import { business } from "@/data/site";

type FormData = {
  name: string;
  phone: string;
  date: string;
  kids: string;
  message: string;
};

const initialForm: FormData = { name: "", phone: "", date: "", kids: "", message: "" };

/**
 * Formulario de cotización. Por ahora solo muestra una
 * confirmación visual; cuando exista backend, conectar el
 * handleSubmit a la API o servicio de correo correspondiente.
 */
export default function QuoteForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [sent, setSent] = useState(false);

  const update = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyles =
    "w-full rounded-2xl border border-cielo-200 bg-white px-4 py-3 text-ink-900 placeholder:text-ink-600/50 outline-none transition-colors focus:border-cielo-500 focus:ring-2 focus:ring-cielo-300";

  return (
    <section id="cotizacion" className="bg-cielo-100/60 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          kicker="Cotización"
          title="Planea la fiesta en el planeta Toy"
          subtitle="Cuéntanos sobre tu evento y te contactamos para armar la misión perfecta."
        />

        {sent ? (
          /* Confirmación visual con el astronauta como easter egg */
          <div className="rounded-3xl bg-white p-10 text-center shadow-xl">
            <div className="mx-auto w-fit animate-float">
              <Astronaut className="h-40 w-40" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold text-ink-900">
              ¡Misión recibida, {form.name.split(" ")[0] || "explorador"}! 🚀
            </h3>
            <p className="mt-3 text-ink-600">
              Gracias por tu interés. Muy pronto nos comunicaremos contigo
              {form.phone && (
                <>
                  {" "}
                  al <span className="font-bold text-ink-900">{form.phone}</span>
                </>
              )}{" "}
              para confirmar los detalles de tu evento.
            </p>
            <p className="mt-2 text-ink-600">
              ¿Tienes prisa? Llámanos al{" "}
              <a href={business.phoneHref} className="font-bold text-cielo-600 hover:underline">
                {business.phoneDisplay}
              </a>
              .
            </p>
            <button
              type="button"
              onClick={() => {
                setForm(initialForm);
                setSent(false);
              }}
              className="mt-8 rounded-full bg-cielo-100 px-6 py-3 font-bold text-cielo-600 transition-colors hover:bg-cielo-200"
            >
              Enviar otra solicitud
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-6 shadow-xl sm:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="name" className="mb-1.5 block font-bold text-ink-900">
                  Nombre completo
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Ej. María González"
                  value={form.name}
                  onChange={update("name")}
                  className={inputStyles}
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-1.5 block font-bold text-ink-900">
                  Teléfono
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="667 000 0000"
                  value={form.phone}
                  onChange={update("phone")}
                  className={inputStyles}
                />
              </div>

              <div>
                <label htmlFor="date" className="mb-1.5 block font-bold text-ink-900">
                  Fecha del evento
                </label>
                <input
                  id="date"
                  type="date"
                  required
                  value={form.date}
                  onChange={update("date")}
                  className={inputStyles}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="kids" className="mb-1.5 block font-bold text-ink-900">
                  Número de niños
                </label>
                <input
                  id="kids"
                  type="number"
                  min={1}
                  required
                  placeholder="Ej. 15"
                  value={form.kids}
                  onChange={update("kids")}
                  className={inputStyles}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1.5 block font-bold text-ink-900">
                  Mensaje <span className="font-normal text-ink-600">(opcional)</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Cuéntanos sobre tu evento: temática, paquete de interés, dudas..."
                  value={form.message}
                  onChange={update("message")}
                  className={inputStyles}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-full bg-sunset-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-sunset-600/25 transition-all hover:bg-sunset-600 hover:shadow-xl"
            >
              Enviar solicitud de cotización 🚀
            </button>

            <p className="mt-4 text-center text-xs text-ink-600">
              También puedes llamarnos directamente al{" "}
              <a href={business.phoneHref} className="font-bold text-cielo-600 hover:underline">
                {business.phoneDisplay}
              </a>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
