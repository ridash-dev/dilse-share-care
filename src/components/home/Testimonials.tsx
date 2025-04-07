
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Regular Donor",
      quote: "DilSeDonate made it so easy for me to directly help those in need. Knowing that my donations go straight to the organizations without any middlemen gives me great satisfaction.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Organization Manager",
      quote: "As the manager of an orphanage, DilSeDonate has been a blessing. We can list our exact needs and connect directly with donors who want to help our children.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    },
    {
      id: 3,
      name: "Aarti Patel",
      role: "Monthly Donor",
      quote: "I've been donating clothes and books through DilSeDonate for over a year now. The platform makes it simple to find organizations that need exactly what I have to give.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
            What People Are Saying
          </h2>
          <p className="text-xl text-gray-600">
            Hear from donors and organizations about their experiences with DilSeDonate.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="absolute -top-6 -left-6">
              <Quote className="h-12 w-12 text-dilse-300" />
            </div>
            
            <div className="mb-6 text-center">
              <img 
                src={testimonials[activeIndex].image} 
                alt={testimonials[activeIndex].name} 
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-dilse-100"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                {testimonials[activeIndex].name}
              </h3>
              <p className="text-dilse-500">{testimonials[activeIndex].role}</p>
            </div>
            
            <p className="text-xl text-gray-700 text-center italic">
              "{testimonials[activeIndex].quote}"
            </p>
            
            <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? "bg-dilse-500" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 md:-translate-x-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-dilse-500 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 md:translate-x-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-dilse-500 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
