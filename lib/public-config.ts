function requiredPublicEnv(value: string | undefined, name: string) {
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

export const publicConfig = {
  siteUrl: requiredPublicEnv(
    process.env.NEXT_SITE_URL,
    "NEXT_SITE_URL",
  ),
  phone: requiredPublicEnv(
    process.env.NEXT_BUSINESS_PHONE,
    "NEXT_BUSINESS_PHONE",
  ),
  email: requiredPublicEnv(
    process.env.NEXT_BUSINESS_EMAIL,
    "NEXT_BUSINESS_EMAIL",
  ),
  address: requiredPublicEnv(
    process.env.NEXT_BUSINESS_ADDRESS,
    "NEXT_BUSINESS_ADDRESS",
  ),
  googleReviewsUrl: requiredPublicEnv(
    process.env.NEXT_GOOGLE_REVIEWS_URL,
    "NEXT_GOOGLE_REVIEWS_URL",
  ),
};
