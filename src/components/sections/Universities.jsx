import React from "react";
import { ArrowRight, Bookmark, Crown, Gift } from "lucide-react";

const universities = [
  {
    name: "Columbia University",
    admitted: "65+",
    scholarshipAmount: "$52k",
    image:
      "https://images.unsplash.com/photo-1583913469137-3e0533555b79?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    studentImage: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    studentName: "Shawari Bhosale",
    intake: "Fall 2024",
  },
  {
    name: "New York University",
    admitted: "80+",
    scholarshipAmount: "$45k",
    image:
      "https://images.unsplash.com/photo-1581357635299-93e58b29b44c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    studentImage: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
    studentName: "Aarav Mehta",
    intake: "Fall 2024",
  },
  {
    name: "U of Southern California",
    admitted: "95+",
    scholarshipAmount: "$60k",
    image:
      "https://images.unsplash.com/photo-1615469335832-4752687c3c5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    studentImage: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
    studentName: "Riya Sharma",
    intake: "Spring 2025",
  },
  {
    name: "Carnegie Mellon University",
    admitted: "70+",
    scholarshipAmount: "$55k",
    image:
      "https://images.unsplash.com/photo-1621379969894-3d03c4c924e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    studentImage: "https://i.pravatar.cc/150?u=a042581f4e29026704a",
    studentName: "Karan Desai",
    intake: "Fall 2024",
  },
  {
    name: "U of Texas at Austin",
    admitted: "100+",
    scholarshipAmount: "$40k",
    image:
      "https://images.unsplash.com/photo-1563889362369-ce0374e45784?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    studentImage: "https://i.pravatar.cc/150?u=a042581f4e29026704b",
    studentName: "Sneha Iyer",
    intake: "Fall 2024",
  },
];

const Universities = () => {
  return (
    <section
      className="py-20 bg-gray-50"
      aria-labelledby="study-destinations-heading"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="study-destinations-heading"
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            TOP PREMIUM ADMITS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gateway to the IVY Leagues
          </p>
        </div>

        <div className="relative w-full overflow-hidden py-4">
          <div className="flex gap-6 animate-infinite-scroll">
            {[...universities, ...universities].map((university, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col w-[320px] flex-shrink-0"
              >
                <div className="p-6 flex-grow">
                  <div className="relative mb-6">
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-xs font-semibold px-4 py-1 rounded-t-none rounded-b-full shadow-md">
                      <div className="flex items-center gap-2">
                        <Crown className="w-4 h-4" /> <span>Admit</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                    {university.name}
                  </h3>
                  <div className="flex justify-between space-x-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Bookmark className="text-primary-600 w-5 h-5" />
                      <div className="text-sm">
                        <div className="font-semibold text-gray-900">
                          {university.admitted}
                        </div>
                        <div className="text-gray-500">Students Admitted</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Gift className="text-primary-600 w-5 h-5" />
                      <div className="text-sm">
                        <div className="font-semibold text-gray-900">
                          {university.scholarshipAmount}
                        </div>
                        <div className="text-gray-500">
                          Scholarships granted
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-40 mb-4">
                    <img
                      src={university.image}
                      alt={university.name}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
                <div className="bg-primary-50 p-4 rounded-b-2xl border-t border-primary-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={university.studentImage}
                        alt={university.studentName}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-sm text-gray-800">
                          {university.studentName}
                        </p>
                        <p className="text-xs text-gray-500">
                          {university.intake}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Universities;
