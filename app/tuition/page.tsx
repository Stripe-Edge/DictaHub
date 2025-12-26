const programmes = [
  { 
    title: "AI Automation & LLMs", 
    price: "₦4,000,000"
  },
  { 
    title: "Data Science & Machine Learning", 
    price: "₦3,500,000"
  },
];

export default function TuitionPage() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-8">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Tuition & Fees
      </h1>

      <div className="overflow-x-auto rounded-2xl shadow-lg">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-emerald-50">
              <th className="p-4 border-b font-semibold text-black">
                Programme
              </th>
              <th className="p-4 border-b font-semibold text-black">
                Fee (NGN)
              </th>
            </tr>
          </thead>

          <tbody>
            {programmes.map((p) => (
              <tr
                key={p.title}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="p-4 border-b text-black">
                  {p.title}
                </td>
                <td className="p-4 border-b text-black font-medium">
                  {p.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}