export default function TuitionPage() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Tuition & Fees</h1>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 border">Programme</th>
              <th className="p-4 border">Fee (NGN)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 border">AI Engineering</td>
              <td className="p-4 border">500,000</td>
            </tr>
            <tr>
              <td className="p-4 border">Full-Stack Development</td>
              <td className="p-4 border">450,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
