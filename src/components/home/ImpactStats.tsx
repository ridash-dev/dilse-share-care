
import { Users, Package, Building, Award } from "lucide-react";

const ImpactStats = () => {
  const stats = [
    {
      icon: <Users className="w-10 h-10 text-dilse-500" />,
      value: "10,000+",
      label: "Active Donors",
    },
    {
      icon: <Package className="w-10 h-10 text-dilse-500" />,
      value: "25,000+",
      label: "Items Donated",
    },
    {
      icon: <Building className="w-10 h-10 text-dilse-500" />,
      value: "500+",
      label: "Registered Organizations",
    },
    {
      icon: <Award className="w-10 h-10 text-dilse-500" />,
      value: "100%",
      label: "Direct Impact",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-dilse-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-lg text-white/90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
