import type { InscriptionInput } from "@/core/inscription/schema";

const BREVO_API = "https://api.brevo.com/v3";

type BrevoConfig = {
  apiKey: string;
  listId?: number;
  senderEmail?: string;
  senderName: string;
  notifyEmail?: string;
};

function getBrevoConfig(): BrevoConfig {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    throw new Error("BREVO_API_KEY is not configured");
  }

  const listIdRaw = process.env.BREVO_LIST_ID;
  const listId = listIdRaw ? Number(listIdRaw) : undefined;

  return {
    apiKey,
    listId: listId && !Number.isNaN(listId) ? listId : undefined,
    senderEmail: process.env.BREVO_SENDER_EMAIL,
    senderName: process.env.BREVO_SENDER_NAME ?? "Circular Impuls",
    notifyEmail: process.env.INSCRIPTION_NOTIFY_EMAIL,
  };
}

async function brevoPost(apiKey: string, path: string, body: unknown) {
  const response = await fetch(`${BREVO_API}${path}`, {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Brevo ${path} failed (${response.status}): ${detail}`);
  }
}

function buildNotificationHtml(data: InscriptionInput) {
  const fullName = [data.firstName, data.lastName].filter(Boolean).join(" ");

  return `
    <h2>Nova inscripció al Programa PRIMER 2026</h2>
    <p><strong>Nom:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Telèfon:</strong> ${data.phone}</p>
    <p><strong>Projecte / empresa:</strong> ${data.project}</p>
    <p><strong>Idioma:</strong> ${data.locale.toUpperCase()}</p>
    <p><strong>Motiu / missatge:</strong></p>
    <p>${data.message.replace(/\n/g, "<br />")}</p>
  `;
}

export async function sendInscription(data: InscriptionInput) {
  const config = getBrevoConfig();

  const contactBody: Record<string, unknown> = {
    email: data.email,
    attributes: {
      FIRSTNAME: data.firstName,
      LASTNAME: data.lastName ?? "",
      SMS: data.phone,
      PROJECT: data.project,
      MESSAGE: data.message,
      LOCALE: data.locale,
    },
    updateEnabled: true,
  };

  if (config.listId) {
    contactBody.listIds = [config.listId];
  }

  await brevoPost(config.apiKey, "/contacts", contactBody);

  if (config.notifyEmail && config.senderEmail) {
    const fullName = [data.firstName, data.lastName].filter(Boolean).join(" ");

    await brevoPost(config.apiKey, "/smtp/email", {
      sender: { name: config.senderName, email: config.senderEmail },
      to: [{ email: config.notifyEmail }],
      replyTo: { email: data.email, name: fullName },
      subject: `Nova inscripció: ${fullName}`,
      htmlContent: buildNotificationHtml(data),
    });
  }
}
