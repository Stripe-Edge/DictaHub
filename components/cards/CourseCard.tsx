import React from "react";
import { Button } from "../ui/Button";

interface CourseCardProps {
  title: string;
  description: string;
  instructor: string;
  thumbnail?: string;
  price?: string;
}

export const CourseCard = ({ title, description, instructor, thumbnail, price }: CourseCardProps) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col">
      <div className="h-40 sm:h-48 bg-gradient-to-br from-blue-50 to-green-50 w-full flex-shrink-0">
        {thumbnail && <img src={thumbnail} alt={title} className="w-full h-full object-cover" />}
      </div>
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 text-xs sm:text-sm line-clamp-3 mb-4 flex-grow">{description}</p>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium text-gray-700 uppercase tracking-wider">By {instructor}</span>
            {price && <span className="text-lg font-bold text-blue-600">{price}</span>}
          </div>
          <Button className="w-full text-sm" variant="outline">View Course</Button>
        </div>
      </div>
    </div>
  );
};
