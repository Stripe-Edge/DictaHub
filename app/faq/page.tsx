export default function FAQPage() {
  const faqs = [
    { q: "Is the training online or in-person?", a: "We offer both remote and hybrid options." },
    { q: "Do you offer certificates?", a: "Yes, all graduates receive a globally recognized certificate." },
  ];

  return (
    <div className="max-w-4xl mx-auto py-20 px-8">
      <h1 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((f) => (
          <div key={f.q} className="border-b pb-6">
            <h3 className="font-bold text-xl mb-2">{f.q}</h3>
            <p className="text-gray-600">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
