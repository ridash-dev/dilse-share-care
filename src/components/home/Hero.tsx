
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-12 md:py-20 hero-gradient overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 font-heading">
              Give Directly, <br />
              <span className="text-dilse-600">Impact</span> Immediately
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Connect with organizations in need and donate essential items directly, without middlemen. Your generosity makes an immediate difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/donate">
                <Button size="lg" className="bg-dilse-600 hover:bg-dilse-700 text-lg px-8 py-6 rounded-lg shadow-lg hover-lift animate-hover">
                  Donate Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/organizations">
                <Button size="lg" variant="outline" className="border-dilse-500 text-dilse-600 hover:bg-dilse-50 text-lg px-8 py-6 rounded-lg hover-lift animate-hover">
                  Find Organizations
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=800" 
                alt="People helping each other" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white p-4">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                  <p className="text-xl font-semibold">
                    "The greatest joy is found in giving."
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-dilse-100 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-dilse-200 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
