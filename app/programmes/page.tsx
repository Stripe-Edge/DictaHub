import { CourseCard } from "@/components/cards/CourseCard";

export default function ProgrammesPage() {
  const programmes = [
    { 
      title: "AI Engineering", 
      description: "Master deep learning, neural networks, and LLMs with hands-on projects and industry-standard tools.",
      instructor: "Dr. Paul Adebayo",
      price: "₦4,000,000k"
    },
    { 
      title: "ChatBot Development", 
      description: "Build modern, Smart and configurable chatbots businesses need.",
      instructor: "Engr. Sam Nnamdi",
      price: "₦2,500,000k"
    },
    { 
      title: "Data Science", 
      description: "Learn to extract insights from complex data and build predictive models using advanced analytics.",
      instructor: "Prof. Alan Turing",
      price: "₦3,500,000"
    },
  ];

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto py-12 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 text-gray-900">
            Our Programmes
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-4">
            Industry-aligned standards ensuring global competitiveness. Choose the path that defines your future.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {programmes.map((p) => (
            <CourseCard 
              key={p.title}
              title={p.title}
              description={p.description}
              instructor={p.instructor}
              price={p.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}