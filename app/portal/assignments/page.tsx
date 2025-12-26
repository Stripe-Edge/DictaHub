export default function AssignmentsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Assignments</h1>
      <div className="bg-white rounded-xl border overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4 font-bold">Assignment</th>
              <th className="p-4 font-bold">Due Date</th>
              <th className="p-4 font-bold">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-4">Linear Regression Model</td>
              <td className="p-4">Dec 30, 2025</td>
              <td className="p-4"><span className="text-orange-600 font-bold">Pending</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
