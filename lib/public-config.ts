function requiredPublicEnv(value: string | undefined, name: string) {
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

export const publicConfig = {
  siteUrl: requiredPublicEnv(
    process.env.NEXT_PUBLIC_SITE_URL,
    "NEXT_PUBLIC_SITE_URL",
  ),
  phone: requiredPublicEnv(
    process.env.NEXT_PUBLIC_BUSINESS_PHONE,
    "NEXT_PUBLIC_BUSINESS_PHONE",
  ),
  email: requiredPublicEnv(
    process.env.NEXT_PUBLIC_BUSINESS_EMAIL,
    "NEXT_PUBLIC_BUSINESS_EMAIL",
  ),
  address: requiredPublicEnv(
    process.env.NEXT_PUBLIC_BUSINESS_ADDRESS,
    "NEXT_PUBLIC_BUSINESS_ADDRESS",
  ),
  googleReviewsUrl: requiredPublicEnv(
    process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL,
    "NEXT_PUBLIC_GOOGLE_REVIEWS_URL",
  ),
  featurableWidgetId: requiredPublicEnv(
    process.env.NEXT_PUBLIC_FEATURABLE_WIDGET_ID,
    "NEXT_PUBLIC_FEATURABLE_WIDGET_ID",
  ),
  featurableApiUrl: requiredPublicEnv(
    process.env.NEXT_PUBLIC_FEATURABLE_API_URL,
    "NEXT_PUBLIC_FEATURABLE_API_URL",
  ),
};
