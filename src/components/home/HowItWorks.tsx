
import { Heart, Truck, FileCheck, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileCheck className="w-10 h-10 text-dilse-500" />,
      title: "Register & List",
      description: "Sign up and list items you want to donate or if you're an organization, list what you need.",
      color: "bg-dilse-50",
    },
    {
      icon: <Heart className="w-10 h-10 text-dilse-500" />,
      title: "Make A Connection",
      description: "Browse organizations and their needs, or wait for donors to respond to your requirements.",
      color: "bg-dilse-100",
    },
    {
      icon: <Truck className="w-10 h-10 text-dilse-500" />,
      title: "Direct Delivery",
      description: "Arrange direct delivery of items to the organization or schedule a pickup.",
      color: "bg-dilse-50",
    },
    {
      icon: <Award className="w-10 h-10 text-dilse-500" />,
      title: "Track Impact",
      description: "Monitor your donation history and see the real impact of your generosity.",
      color: "bg-dilse-100",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
            How DilSeDonate Works
          </h2>
          <p className="text-xl text-gray-600">
            Our platform makes it easy to connect donors directly with organizations in need, without any intermediaries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`rounded-xl p-6 ${step.color} shadow-md hover:shadow-lg transition-all duration-300 animate-hover`}
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 mx-auto">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="relative mt-20 p-8 bg-dilse-50 rounded-2xl shadow-lg max-w-4xl mx-auto">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-lg">
            <Heart className="w-12 h-12 text-dilse-500" />
          </div>
          <h3 className="text-2xl font-semibold text-center mt-6 mb-4">
            Join Our Mission Today
          </h3>
          <p className="text-center text-gray-600 mb-6">
            Whether you're looking to donate items or you're an organization in need, DilSeDonate creates a direct bridge between generosity and impact.
          </p>
          <div className="flex justify-center">
            <Link to="/register">
              <Button
                className="px-8 py-3 bg-dilse-500 text-white rounded-lg hover:bg-dilse-600 transition-colors font-medium text-lg shadow-md hover:shadow-xl animate-hover hover-lift"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
