"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  CalendarDays,
  Users,
  Settings,
  LogOut,
  Clock,
  DollarSign,
  Map,
} from "lucide-react";

const navItems = [
  {
    label: "Dashboard",
    href: "/portal",
    icon: LayoutDashboard,
  },
  {
    label: "Courses",
    href: "/portal/courses",
    icon: BookOpen,
  },
  {
    label: "Assignments",
    href: "/portal/assignments",
    icon: ClipboardList,
  },
  {
    label: "Schedule",
    href: "/portal/schedule",
    icon: CalendarDays,
  },
  {
    label: "Community",
    href: "/portal/community",
    icon: Users,
  },
  {
    label: "Course Duration",
    href: "/portal/course-duration",
    icon: Clock,
  },
  {
    label: "Academy Calendar",
    href: "/portal/calendar",
    icon: CalendarDays,
  },
  {
    label: "Sitemap",
    href: "/sitemap",
    icon: Map,
  },
  {
    label: "Settings",
    href: "/portal/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-64 bg-gradient-to-b from-[#f4fff7] via-white to-[#f4fff7] border-r border-gray-100 flex flex-col">
      
      {/* Logo */}
      <div className="px-6 py-6">
        <h2 className="text-xl font-bold text-black">Dicta Hub</h2>
        <p className="text-xs text-gray-700 mt-1">Student Portal</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition
                 ${
                   active
                     ? "bg-[#b7f5c6] text-black"
                     : "text-gray-700 hover:bg-[#b7f5c6]/40 hover:text-black"
                 }
               `}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer / Logout */}
      <div className="px-4 py-6 border-t border-gray-100">
        <button
           className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
         >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}
