const requiredServerEnvs = ['CONTACT_TO_EMAIL', 'RESEND_API_KEY'] as const;

export function validateEnv() {
  for (const key of requiredServerEnvs) {
    if (!process.env[key]) {
      console.warn(`Missing environment variable: ${key}`);
    }
  }
}