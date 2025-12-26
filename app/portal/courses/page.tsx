export default function PortalCoursesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">My Courses</h1>
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <h3 className="font-bold text-lg mb-2">Introduction to Machine Learning</h3>
          <p className="text-sm text-gray-500 mb-4">Instructor: Dr. Jane Doe</p>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div className="bg-blue-600 h-2 rounded-full w-1/3"></div>
          </div>
          <p className="text-right text-xs mt-1">33% Complete</p>
        </div>
      </div>
    </div>
  );
}
