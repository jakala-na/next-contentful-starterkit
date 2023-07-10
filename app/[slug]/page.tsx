export default function LandingPage({ params }: { params: { slug: string } }) {
  return <div>Page slug: {params.slug}</div>;
}
