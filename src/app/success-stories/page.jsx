import React from "react";
import { GraduationCap, DollarSign, IdCard, Briefcase } from "lucide-react";

const studentTestimonials = [
  {
    avatar: "A",
    name: "Arjun Patel",
    info: "Computer Science, MIT → Software Engineer at Google",
    story: `"Coming from a middle-class family in Ahmedabad, studying at MIT seemed impossible. OEC India not only helped me secure admission but also guided me through a $50,000 scholarship application. Their essay coaching was phenomenal... Today, I'm working at Google on cutting-edge machine learning projects with a package of ₹2.5 crores. The ROI on my education has been incredible, and it all started with the right guidance from OEC India."`,
    outcome:
      "$50,000 scholarship at MIT, Google job with ₹2.5 Cr package, 1500% ROI on education investment",
  },
  {
    avatar: "P",
    name: "Priya Sharma",
    info: "MBA, London Business School → Management Consultant",
    story: `"As a working professional with 4 years of experience, I needed expert guidance to transition from engineering to business. OEC India's team helped me identify the perfect MBA programs... Their interview coaching was exceptional... The 40% scholarship at LBS saved me over £20,000, and I landed my dream job at McKinsey with a 300% salary increase."`,
    outcome:
      "40% scholarship at London Business School, McKinsey offer, 300% salary increase post-MBA",
  },
  {
    avatar: "R",
    name: "Rajesh Kumar",
    info: "Engineering, University of Toronto → Canadian Permanent Resident",
    story: `"Being from a small town in Rajasthan, I had limited exposure to international education opportunities. OEC India's counselors patiently explained every step... They helped me choose the University of Toronto for its excellent engineering program and immigration-friendly policies... Today, I'm a Canadian permanent resident working at a leading tech company in Toronto."`,
    outcome:
      "Full scholarship at University of Toronto, Canadian PR in 2 years, successful tech career",
  },
  {
    avatar: "S",
    name: "Sneha Krishnan",
    info: "Medicine, University of Melbourne → Practicing Physician",
    story: `"My dream was to become a doctor, but the competition in India was intense. OEC India opened my eyes to opportunities in Australia... They guided me through the complex GAMSAT preparation and helped with my application portfolio... I'm now practicing as a physician in Sydney with excellent work-life balance."`,
    outcome:
      "Admission to University of Melbourne Medicine, successful medical practice in Australia",
  },
  {
    avatar: "V",
    name: "Vikram Gupta",
    info: "PhD in Physics, Stanford → Research Scientist",
    story: `"My goal was to pursue cutting-edge research in quantum physics. OEC India's academic team... helped me identify the right professors and research opportunities at Stanford... The comprehensive funding guidance helped me secure a full assistantship. I'm now working on quantum computing research with top scientists in the field."`,
    outcome:
      "Full PhD funding at Stanford, breakthrough quantum computing research, multiple publication opportunities",
  },
  {
    avatar: "N",
    name: "Neha Agarwal",
    info: "Masters in Data Science, University of Edinburgh → Data Scientist at Amazon",
    story: `"After completing my engineering in India, I wanted to specialize in data science... OEC India helped me choose Edinburgh for its excellent data science program and reasonable costs... The career guidance during my studies helped me land internships that led to my current role at Amazon's Edinburgh office."`,
    outcome:
      "University of Edinburgh admission, Amazon data scientist role, £60,000+ starting salary",
  },
];

const successMetrics = [
  {
    icon: <GraduationCap size={32} />,
    title: "2,000+ Students Placed",
    description:
      "Successfully guided over 2,000 students to their dream universities across 15 countries with a 92% acceptance rate to top-choice universities.",
  },
  {
    icon: <DollarSign size={32} />,
    title: "$50M+ Scholarships Secured",
    description:
      "Our students have received over $50 million in scholarships and financial aid, with an average scholarship of $15,000 per student.",
  },
  {
    icon: <IdCard size={32} />,
    title: "95% Visa Success Rate",
    description:
      "Industry-leading visa success rate with comprehensive preparation and guidance from our experienced visa counselors.",
  },
  {
    icon: <Briefcase size={32} />,
    title: "85% Employment Rate",
    description:
      "85% of our graduates secure employment within 6 months of graduation, with many receiving multiple job offers.",
  },
];

const parentTestimonials = [
  {
    avatar: "RP",
    name: "Mr. & Mrs. Rajesh Patel",
    info: "Parents of Arjun Patel (MIT Graduate)",
    story: `"As parents, we were worried about sending our son abroad... OEC India's team was incredibly patient with all our questions and concerns. They provided complete transparency about costs and procedures... The investment has paid off tremendously - our son's success at MIT and subsequent career at Google has exceeded our expectations."`,
    outcome:
      "Complete transparency, regular communication, excellent ROI on education investment",
  },
  {
    avatar: "MK",
    name: "Dr. & Mrs. Mohan Kumar",
    info: "Parents of Rajesh Kumar (University of Toronto)",
    story: `"Coming from a small town, we had no knowledge about international education. OEC India's counselors explained everything in simple terms... They guided us through the financial planning and even helped us secure an education loan at favorable terms. Seeing our son settled in Canada as a permanent resident makes us proud of the decision we made."`,
    outcome:
      "Complete guidance for first-time international education, financial planning support, son's Canadian PR achievement",
  },
];

const SuccessStories = () => {
  return (
    <div>
      <div className="bg-primary-800 text-white mt-20 py-20 md:py-32 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Success Stories
          </h1>
          <p className="text-secondary-500 text-lg md:text-xl max-w-3xl mx-auto">
            Real journeys, real outcomes - discover how our students achieved
            their international education dreams and built successful careers
          </p>
        </div>
      </div>

      <section className="content-section py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="testimonial-header flex items-center mb-4">
                  <div className="testimonial-avatar w-14 h-14 bg-secondary-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4 shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div className="testimonial-info">
                    <h4 className="font-bold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.info}</p>
                  </div>
                </div>
                <div className="testimonial-content text-gray-600 italic mb-6">
                  {testimonial.story}
                </div>
                <div className="testimonial-outcome mt-auto pt-6 border-t border-gray-200">
                  <div className="p-4 bg-primary-50 text-primary-800 rounded-lg border-l-4 border-primary-400 text-sm">
                    <strong>Outcome:</strong> {testimonial.outcome}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-title text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800">
              Success by Numbers
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Our track record speaks for itself
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div
                key={index}
                className="service-card bg-white p-8 rounded-2xl shadow-lg text-center border"
              >
                <div className="service-icon w-16 h-16 bg-secondary-500 rounded-xl flex items-center justify-center text-white text-3xl mb-6 mx-auto">
                  {metric.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {metric.title}
                </h3>
                <p className="text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-title text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800">
              Parent Testimonials
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Hear from parents who trusted us with their children's future
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {parentTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col"
              >
                <div className="testimonial-header flex items-center mb-4">
                  <div className="testimonial-avatar w-14 h-14 bg-secondary-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4 shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div className="testimonial-info">
                    <h4 className="font-bold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.info}</p>
                  </div>
                </div>
                <div className="testimonial-content text-gray-600 italic mb-6">
                  {testimonial.story}
                </div>
                <div className="testimonial-outcome mt-auto pt-6 border-t border-gray-200">
                  <div className="p-4 bg-primary-50 text-primary-800 rounded-lg border-l-4 border-primary-400 text-sm">
                    <strong>Parent Satisfaction:</strong> {testimonial.outcome}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
