export async function ReviewsSection() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/reviews`, {
    next: {
      revalidate: 86400,
    },
  });

  const data = await res.json();

  return (
    <section>
      {data?.reviews?.map((review: any) => (
        <article key={review.name}>
          <strong>
            {review.authorAttribution?.displayName}
          </strong>

          <div>
            {"★".repeat(review.rating)}
          </div>

          <p>
            {review.text?.text}
          </p>

          <small>
            {review.relativePublishTimeDescription}
          </small>
        </article>
      ))}
    </section>
  );
}