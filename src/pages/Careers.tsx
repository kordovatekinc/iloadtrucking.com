import { Users, TrendingUp, Shield, Award, DollarSign, Home } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Careers = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Industry-leading pay rates with performance bonuses and regular increases",
    },
    {
      icon: Home,
      title: "Home Time",
      description: "Flexible schedules with options for local, regional, and long-haul routes",
    },
    {
      icon: Shield,
      title: "Health Benefits",
      description: "Comprehensive health, dental, and vision coverage for you and your family",
    },
    {
      icon: Award,
      title: "Career Growth",
      description: "Professional development programs and advancement opportunities",
    },
  ];

  const positions = [
    {
      title: "Class 1 Drivers (Long Haul)",
      type: "Full-time",
      location: "Canada & USA Routes",
      requirements: [
        "Valid Class 1 license",
        "Clean driving abstract",
        "2+ years experience preferred",
        "Cross-border authorization",
      ],
    },
    {
      title: "Class 1 Drivers (Regional)",
      type: "Full-time",
      location: "Western & Central Canada",
      requirements: [
        "Valid Class 1 license",
        "1+ years experience",
        "Home weekly",
        "Regional route knowledge",
      ],
    },
    {
      title: "Dispatch Coordinator",
      type: "Full-time",
      location: "Regina, SK",
      requirements: [
        "Transportation industry experience",
        "Strong communication skills",
        "Logistics software proficiency",
        "Problem-solving ability",
      ],
    },
    {
      title: "Owner Operators",
      type: "Contract",
      location: "Canada & USA",
      requirements: [
        "Own equipment (tractor)",
        "Authority to operate",
        "Insurance coverage",
        "Professional operation standards",
      ],
    },
  ];

  const handleApply = () => {
    const mailtoLink = `mailto:hr@iloadtrucking.com?subject=Career Application - iLoad Trucking`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24">
        {/* Hero Section */}
        <section className="bg-black text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our <span className="text-gold">Team</span></h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Build your career with a growing North American transportation company committed to excellence
            </p>
            <Button 
              onClick={handleApply}
              className="bg-gold text-black hover:bg-gold/90 text-lg h-12 px-8 font-semibold"
            >
              Apply Now
            </Button>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-white">Why <span className="text-gold">iLoad Trucking</span>?</h2>
                <p className="text-lg text-gray-400">
                  We invest in our people because they drive our success
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="border-2 border-border bg-background text-center hover:border-gold transition-all">
                    <CardContent className="pt-6">
                      <benefit.icon className="w-12 h-12 mx-auto mb-4 text-gold" />
                      <h3 className="font-bold text-lg mb-2 text-white">{benefit.title}</h3>
                      <p className="text-sm text-gray-400">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Users className="w-16 h-16 mx-auto mb-6 text-gold" />
                <h2 className="text-4xl font-bold mb-6 text-white">Our <span className="text-gold">Culture</span></h2>
                <p className="text-lg text-gray-400">
                  At iLoad Trucking, we're more than a transportation company—we're a team of professionals 
                  dedicated to safety, reliability, and mutual respect. We believe in open communication, 
                  recognizing hard work, and creating opportunities for growth.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-2 border-gold/30 bg-card">
                  <CardContent className="pt-6 text-center">
                    <TrendingUp className="w-10 h-10 mx-auto mb-3 text-gold" />
                    <h3 className="font-bold mb-2 text-white">Growth Focused</h3>
                    <p className="text-sm text-gray-400">Continuous expansion creating new opportunities</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-gold/30 bg-card">
                  <CardContent className="pt-6 text-center">
                    <Shield className="w-10 h-10 mx-auto mb-3 text-gold" />
                    <h3 className="font-bold mb-2 text-white">Safety First</h3>
                    <p className="text-sm text-gray-400">Your well-being is our top priority</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-gold/30 bg-card">
                  <CardContent className="pt-6 text-center">
                    <Award className="w-10 h-10 mx-auto mb-3 text-gold" />
                    <h3 className="font-bold mb-2 text-white">Recognition</h3>
                    <p className="text-sm text-gray-400">Performance rewards and appreciation programs</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">
                Current <span className="text-gold">Openings</span>
              </h2>

              <div className="space-y-6">
                {positions.map((position, index) => (
                  <Card key={index} className="border-2 border-border bg-background hover:border-gold transition-all">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-2xl mb-2 text-white">{position.title}</CardTitle>
                          <div className="flex gap-4 text-sm text-gray-400">
                            <span className="font-semibold text-gold">{position.type}</span>
                            <span>•</span>
                            <span>{position.location}</span>
                          </div>
                        </div>
                        <Button 
                          onClick={handleApply}
                          className="bg-gold hover:bg-gold/90 text-black font-semibold"
                        >
                          Apply
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <p className="font-semibold text-white mb-2">Requirements:</p>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {position.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                              <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-400 mb-4">
                  Don't see a position that fits? We're always looking for talented professionals.
                </p>
                <Button 
                  onClick={handleApply}
                  variant="outline"
                  className="border-2 border-gold text-gold hover:bg-gold hover:text-black"
                >
                  Submit General Application
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Careers;

