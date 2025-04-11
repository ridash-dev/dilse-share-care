
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Users, Target, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutPage = () => {
  const values = [
    {
      icon: <Heart className="h-10 w-10 text-dilse-500" />,
      title: "Compassion",
      description: "We believe in the power of compassion to transform lives and communities."
    },
    {
      icon: <Target className="h-10 w-10 text-dilse-500" />,
      title: "Direct Impact",
      description: "We connect donors directly with recipients, ensuring maximum impact without middlemen."
    },
    {
      icon: <Shield className="h-10 w-10 text-dilse-500" />,
      title: "Trust",
      description: "We build trust through transparency, verification, and accountability."
    },
    {
      icon: <Users className="h-10 w-10 text-dilse-500" />,
      title: "Community",
      description: "We foster a community of caring individuals and organizations working together."
    }
  ];

  // Updated team members with your latest changes
  const team = [
    {
      name: "Riya Deshmukh",
      role: "Full Stack Developer",
      bio: "Build The Core Components Of The Program"
    },
    {
      name: "Ashwini Dhumal",
      role: "Planning Head",
      bio: "Assigned And Executed Tasks"
    },
    {
      name: "Vaibhavi Dhepe",
      role: "Research",
      bio: "Researched About The Working Of NGO's And Non Profits"
    },
    {
      name: "Vibha Gajare",
      role: "Marketing Specialist",
      bio: "Helped growing awareness and connecting generous hearts with meaningful causes."
    },
    {
      name: "Shrey Dukre",
      role: "Content Writer",
      bio: "Created compelling content that drives engagement and highlights our mission"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 hero-gradient">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading">
              About <span className="text-dilse-600">DilSeDonate</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to transform how donations work, connecting generous donors directly with organizations in need.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1569937756447-277d472e0c9b?auto=format&fit=crop&q=80&w=800" 
                  alt="Team discussing donation strategies" 
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">
                  Our Story
                </h2>
                <p className="text-lg text-gray-600">
                  DilSeDonate was born from a simple observation: there was a gap between people who wanted to donate items and organizations that needed them. Middlemen often complicated the process, reducing the impact of donations.
                </p>
                <p className="text-lg text-gray-600">
                  Founded in 2025, we set out to create a platform that would connect donors directly with organizations, making the donation process more efficient, transparent, and impactful.
                </p>
                <p className="text-lg text-gray-600">
                  Today, we're proud to have facilitated many of direct donations, helping items find new homes where they're truly needed and valued.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
                Our Values
              </h2>
              <p className="text-xl text-gray-600">
                These core principles guide everything we do at DilSeDonate.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 animate-hover"
                >
                  <div className="w-16 h-16 rounded-full bg-dilse-50 flex items-center justify-center mb-6 mx-auto">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600">
                The passionate individuals behind DilSeDonate who make our mission possible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300 animate-hover"
                >
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {member.name}
                    </CardTitle>
                    <p className="text-dilse-600">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16 md:py-20 bg-dilse-600 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <h3 className="text-4xl md:text-5xl font-bold mb-2">10,000+</h3>
                <p className="text-xl">Donations Made</p>
              </div>
              <div className="p-6">
                <h3 className="text-4xl md:text-5xl font-bold mb-2">500+</h3>
                <p className="text-xl">Organizations Helped</p>
              </div>
              <div className="p-6">
                <h3 className="text-4xl md:text-5xl font-bold mb-2">50,000+</h3>
                <p className="text-xl">Lives Impacted</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
