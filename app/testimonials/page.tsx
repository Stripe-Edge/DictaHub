export default function TestimonialsPage() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-8">
      <h1 className="text-4xl font-bold mb-12 text-center">What Our Students Say</h1>
      <div className="grid grid-cols-2 gap-8">
        <div className="p-8 bg-blue-50 rounded-2xl italic text-gray-700">
          &quot;Dicta Hub transformed my career. The AI Engineering programme is intense but worth every second.&quot;
          <p className="mt-4 not-italic font-bold text-blue-900">— Chidi E.</p>
        </div>
        <div className="p-8 bg-blue-50 rounded-2xl italic text-gray-700">
          &quot;The instructors are world-class. I landed a job at a top tech firm within weeks of graduating.&quot;
          <p className="mt-4 not-italic font-bold text-blue-900">— Sarah A.</p>
        </div>
      </div>
    </div>
  );
}
