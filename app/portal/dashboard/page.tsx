import { StatCard } from "@/components/cards/StatCard";
import { BookOpen, CheckCircle, Calendar } from "lucide-react";

export default function DashboardHome() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-black mb-2">Welcome Back, User</h1>
        <p className="text-gray-500">Here is what is happening with your courses today.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <StatCard 
          label="Active Courses" 
          value="3" 
          icon={BookOpen} 
          trend="+1 this month"
          color="blue"
        />
        <StatCard 
          label="Completed Assignments" 
          value="12" 
          icon={CheckCircle} 
          trend="Top 5%"
          color="green"
        />
        <StatCard 
          label="Upcoming Classes" 
          value="2" 
          icon={Calendar} 
          trend="Next: 2 PM"
          color="orange"
        />
      </div>

      <div className="mt-16 bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
        <h3 className="text-xl font-bold mb-6">Recent Activity</h3>
        <div className="space-y-6">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <BookOpen size={20} className="text-gray-400" />
                </div>
                <div>
                  <p className="font-bold">Neural Networks Basics</p>
                  <p className="text-sm text-gray-500">New lesson added by Instructor</p>
                </div>
              </div>
              <p className="text-sm font-medium text-gray-400">2h ago</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
