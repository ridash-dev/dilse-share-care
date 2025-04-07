
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";

const DashboardPage = () => {
  const { user, signOut } = useAuth();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Welcome to Your Dashboard
              </h1>
              
              <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
                <p className="mb-2">
                  <span className="font-medium">Email:</span> {user?.email}
                </p>
                <p className="mb-2">
                  <span className="font-medium">User ID:</span> {user?.id}
                </p>
              </div>
              
              <div className="flex justify-end">
                <Button
                  onClick={signOut}
                  variant="outline"
                  className="border-dilse-500 text-dilse-600 hover:bg-dilse-50"
                >
                  Sign Out
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;
