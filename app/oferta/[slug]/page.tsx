export default async function OfferPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1>To jest szablon dla: {resolvedParams.slug}</h1>
    </main>
  );
}