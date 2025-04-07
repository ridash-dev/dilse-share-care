
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DonationForm from "@/components/donation/DonationForm";

const DonationPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
                Make a Donation
              </h1>
              <p className="text-xl text-gray-600">
                Your generous donations directly support organizations in need, making a real difference in your community.
              </p>
            </div>
            
            <DonationForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DonationPage;
