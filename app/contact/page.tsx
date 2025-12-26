import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Reach out via any channel below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="p-6 sm:p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Mail size={24} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Email</h3>
            </div>
            <p className="text-gray-600 break-all">info@dictahub.com</p>
          </div>

          <div className="p-6 sm:p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <Phone size={24} className="text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Phone</h3>
            </div>
            <p className="text-gray-600">+234 123 456 7890</p>
          </div>

          <div className="p-6 sm:p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <MapPin size={24} className="text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Address</h3>
            </div>
            <p className="text-gray-600">Lagos, Nigeria</p>
          </div>
        </div>
      </div>
    </div>
  );
}
