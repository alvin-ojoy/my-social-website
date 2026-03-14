import crypto from "crypto";

const DOWNLOAD_SECRET =
  process.env.DOWNLOAD_TOKEN_SECRET || "dev-secret-change-me";

const TOKEN_TTL_MS = 1000 * 60 * 5;

type TokenPayload = {
  slug: string;
  exp: number;
};

function encode(data: string) {
  return Buffer.from(data).toString("base64url");
}

function decode(data: string) {
  return Buffer.from(data, "base64url").toString("utf8");
}

export function createDownloadToken(slug: string) {
  const payload: TokenPayload = {
    slug,
    exp: Date.now() + TOKEN_TTL_MS,
  };

  const payloadString = JSON.stringify(payload);
  const signature = crypto
    .createHmac("sha256", DOWNLOAD_SECRET)
    .update(payloadString)
    .digest("base64url");

  return `${encode(payloadString)}.${signature}`;
}

export function verifyDownloadToken(token: string) {
  const [encodedPayload, signature] = token.split(".");

  if (!encodedPayload || !signature) {
    return { valid: false as const };
  }

  const payloadString = decode(encodedPayload);
  const expected = crypto
    .createHmac("sha256", DOWNLOAD_SECRET)
    .update(payloadString)
    .digest("base64url");

  if (signature !== expected) {
    return { valid: false as const };
  }

  const payload = JSON.parse(payloadString) as TokenPayload;

  if (Date.now() > payload.exp) {
    return { valid: false as const };
  }

  return {
    valid: true as const,
    slug: payload.slug,
  };
}