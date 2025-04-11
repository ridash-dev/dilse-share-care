import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import {
  Search,
  MapPin,
  FilterX,
  CheckCircle,
  Building,
  User,
  Calendar,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Sample organization data
const organizationsData = [
  {
    id: 1,
    name: "Happy Children Orphanage",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
    category: "Orphanage",
    description: "Supporting children with love, care, and educational opportunities.",
    needs: ["Clothes", "School Supplies", "Toys"],
    location: "Mumbai, Maharashtra",
    verified: true,
    establishedYear: 2010,
    peopleBenefited: 250,
  },
  {
    id: 2,
    name: "Golden Years Home",
    image: "https://images.unsplash.com/photo-1581579438747-86c23bcb06b9?auto=format&fit=crop&q=80&w=800",
    category: "Elder Care",
    description: "Providing comfort and care for the elderly in our community.",
    needs: ["Blankets", "Medical Supplies", "Books"],
    location: "Delhi, NCR",
    verified: true,
    establishedYear: 2005,
    peopleBenefited: 120,
  },
  {
    id: 3,
    name: "Hope NGO",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=800",
    category: "NGO",
    description: "Working to uplift communities through sustainable development initiatives.",
    needs: ["Furniture", "Electronics", "Food Supplies"],
    location: "Bangalore, Karnataka",
    verified: true,
    establishedYear: 2015,
    peopleBenefited: 1500,
  },
  {
    id: 4,
    name: "Sunshine Shelter",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800",
    category: "Homeless Shelter",
    description: "Providing shelter, food, and support for homeless individuals.",
    needs: ["Clothes", "Food", "Toiletries"],
    location: "Chennai, Tamil Nadu",
    verified: false,
    establishedYear: 2018,
    peopleBenefited: 350,
  },
  {
    id: 5,
    name: "New Beginnings Foundation",
    image: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?auto=format&fit=crop&q=80&w=800",
    category: "NGO",
    description: "Helping individuals start fresh with new opportunities and support.",
    needs: ["Clothes", "Household Items", "School Supplies"],
    location: "Hyderabad, Telangana",
    verified: true,
    establishedYear: 2012,
    peopleBenefited: 800,
  },
  {
    id: 6,
    name: "Green Earth Initiative",
    image: "https://images.unsplash.com/photo-1592170882301-7cecc5ed99ec?auto=format&fit=crop&q=80&w=800",
    category: "Environmental",
    description: "Working to protect the environment and promote sustainable living.",
    needs: ["Garden Tools", "Books", "Office Supplies"],
    location: "Pune, Maharashtra",
    verified: false,
    establishedYear: 2020,
    peopleBenefited: 300,
  },
];

const OrganizationsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [organizations, setOrganizations] = useState(organizationsData);

  // Handle search and filtering
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    let filteredOrgs = organizationsData;
    
    // Apply search query
    if (searchQuery) {
      filteredOrgs = filteredOrgs.filter(
        (org) =>
          org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          org.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          org.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply category filter
    if (categoryFilter) {
      filteredOrgs = filteredOrgs.filter(
        (org) => org.category === categoryFilter
      );
    }
    
    setOrganizations(filteredOrgs);
  };

  // Reset filters
  const resetFilters = () => {
    setSearchQuery("");
    setCategoryFilter("");
    setOrganizations(organizationsData);
  };

  // Get unique categories for filter
  const categories = Array.from(
    new Set(organizationsData.map((org) => org.category))
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Organizations
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse verified organizations that need your donations. Find one that aligns with your values and donation items.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-white p-6 rounded-xl shadow-md mb-10">
            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search organizations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 form-input-focus"
                />
              </div>
              
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="form-input-focus">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <div className="flex space-x-2">
                <Button type="submit" className="flex-1 bg-dilse-500 hover:bg-dilse-600">
                  Search
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={resetFilters}
                  className="border-dilse-500 text-dilse-600 hover:bg-dilse-50"
                >
                  <FilterX className="h-4 w-4 mr-2" />
                  Reset
                </Button>
              </div>
            </form>
          </div>

          {/* Organizations Grid */}
          {organizations.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">No organizations found matching your criteria.</p>
              <Button
                variant="link"
                onClick={resetFilters}
                className="text-dilse-500 hover:text-dilse-600 mt-2"
              >
                Clear filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      <div className="flex items-center">
                        {org.verified && (
                          <div className="flex items-center bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            <span>Verified</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-500 mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{org.location}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {org.description}
                    </p>
                    
                    <div className="grid grid-cols-3 gap-2 mb-4 text-sm text-gray-500">
                      <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                        <Building className="h-4 w-4 mb-1" />
                        <span>{org.category}</span>
                      </div>
                      <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                        <Calendar className="h-4 w-4 mb-1" />
                        <span>Est. {org.establishedYear}</span>
                      </div>
                      <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                        <User className="h-4 w-4 mb-1" />
                        <span>{org.peopleBenefited}+ helped</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Current Needs:</h4>
                      <div className="flex flex-wrap gap-2">
                        {org.needs.map((need, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-dilse-50 text-dilse-800 text-xs font-medium rounded-full"
                          >
                            {need}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Link to={`/organizations/${org.id}`} className="flex-1">
                        <Button variant="outline" className="w-full border-dilse-500 text-dilse-600 hover:bg-dilse-50">
                          View Details
                        </Button>
                      </Link>
                      <Link to={`/donate?org=${org.id}`} className="flex-1">
                        <Button className="w-full bg-dilse-500 hover:bg-dilse-600">
                          Donate
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Don't see your organization here?
            </p>
            <Link to="/register">
              <Button className="bg-dilse-500 hover:bg-dilse-600">
                Register Your Organization
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrganizationsPage;
