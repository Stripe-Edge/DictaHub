export default function AboutPage() {
  return (
    <div className="w-full min-h-screen">
      <div className="max-w-6xl mx-auto py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              About Dicta Hub
            </h1>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl">
              Dicta Hub is a premier AI and Tech Training Academy dedicated to bridging the skill gap in Nigeria and beyond. 
              Our curriculum is modeled after UK educational standards, ensuring our students receive globally recognized training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-base text-gray-700 leading-relaxed">
                To empower World's next generation with world-class AI and technology education that meets global standards.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Vision</h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Creating a continent of innovators who can compete globally in the AI and technology sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
