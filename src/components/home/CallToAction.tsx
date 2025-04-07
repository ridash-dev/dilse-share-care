
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-dilse-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
            Ready to Make a <span className="text-dilse-600">Difference?</span>
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Join thousands of donors and organizations creating direct, meaningful impact. Start your giving journey today.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">I Want to Donate</h3>
              <p className="text-gray-600 mb-6">
                Share your items directly with organizations in need and make an immediate impact.
              </p>
              <Link to="/donate">
                <Button size="lg" className="w-full bg-dilse-500 hover:bg-dilse-600 animate-hover hover-lift">
                  Donate Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">I Represent an Organization</h3>
              <p className="text-gray-600 mb-6">
                Register your organization to receive donations that match your specific needs.
              </p>
              <Link to="/register-organization">
                <Button size="lg" variant="outline" className="w-full border-dilse-500 text-dilse-600 hover:bg-dilse-50 animate-hover hover-lift">
                  Register Organization
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
