
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FeaturedOrganizations = () => {
  const organizations = [
    {
      id: 1,
      name: "Happy Children Orphanage",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
      category: "Orphanage",
      description: "Supporting children with love, care, and educational opportunities.",
      needs: ["Clothes", "School Supplies", "Toys"],
    },
    {
      id: 2,
      name: "Golden Years Home",
      image: "https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?auto=format&fit=crop&q=80&w=800",
      category: "Elder Care",
      description: "Providing comfort and care for the elderly in our community.",
      needs: ["Blankets", "Medical Supplies", "Books"],
    },
    {
      id: 3,
      name: "Hope NGO",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=800",
      category: "NGO",
      description: "Working to uplift communities through sustainable development initiatives.",
      needs: ["Furniture", "Electronics", "Food Supplies"],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Featured Organizations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              These organizations are making a difference in their communities. See what they need and how you can help.
            </p>
          </div>
          <Link to="/organizations">
            <Button variant="outline" className="border-dilse-500 text-dilse-600 hover:bg-dilse-50 animate-hover hover-lift">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {organizations.map((org) => (
            <div 
              key={org.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden card-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={org.image} 
                  alt={org.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {org.name}
                  </h3>
                  <span className="px-3 py-1 bg-dilse-100 text-dilse-800 text-xs font-medium rounded-full">
                    {org.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  {org.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Current Needs:</h4>
                  <div className="flex flex-wrap gap-2">
                    {org.needs.map((need, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full"
                      >
                        {need}
                      </span>
                    ))}
                  </div>
                </div>
                <Link to={`/organizations/${org.id}`}>
                  <Button className="w-full bg-dilse-500 hover:bg-dilse-600">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedOrganizations;
