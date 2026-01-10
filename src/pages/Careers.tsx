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
    const mailtoLink = `mailto:Info@budgetcarrierinc.com?subject=Career Application - Budget Carriers Inc.`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24">
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Build your career with a growing Canadian transportation company committed to excellence
            </p>
            <Button 
              onClick={handleApply}
              className="bg-white text-slate-900 hover:bg-slate-100 text-lg h-12 px-8"
            >
              Apply Now
            </Button>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-slate-900">Why Budget Carriers?</h2>
                <p className="text-lg text-slate-700">
                  We invest in our people because they drive our success
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="border-2 border-slate-200 text-center hover:border-slate-900 transition-all">
                    <CardContent className="pt-6">
                      <benefit.icon className="w-12 h-12 mx-auto mb-4 text-slate-900" />
                      <h3 className="font-bold text-lg mb-2 text-slate-900">{benefit.title}</h3>
                      <p className="text-sm text-slate-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Users className="w-16 h-16 mx-auto mb-6 text-slate-900" />
                <h2 className="text-4xl font-bold mb-6 text-slate-900">Our Culture</h2>
                <p className="text-lg text-slate-700">
                  At Budget Carriers, we're more than a transportation company—we're a family of professionals 
                  dedicated to safety, reliability, and mutual respect. We believe in open communication, 
                  recognizing hard work, and creating opportunities for growth.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-2 border-slate-200">
                  <CardContent className="pt-6 text-center">
                    <TrendingUp className="w-10 h-10 mx-auto mb-3 text-slate-900" />
                    <h3 className="font-bold mb-2 text-slate-900">Growth Focused</h3>
                    <p className="text-sm text-slate-600">Continuous expansion creating new opportunities</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-slate-200">
                  <CardContent className="pt-6 text-center">
                    <Shield className="w-10 h-10 mx-auto mb-3 text-slate-900" />
                    <h3 className="font-bold mb-2 text-slate-900">Safety First</h3>
                    <p className="text-sm text-slate-600">Your well-being is our top priority</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-slate-200">
                  <CardContent className="pt-6 text-center">
                    <Award className="w-10 h-10 mx-auto mb-3 text-slate-900" />
                    <h3 className="font-bold mb-2 text-slate-900">Recognition</h3>
                    <p className="text-sm text-slate-600">Performance rewards and appreciation programs</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
                Current Openings
              </h2>

              <div className="space-y-6">
                {positions.map((position, index) => (
                  <Card key={index} className="border-2 border-slate-200 hover:border-slate-900 transition-all">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-2xl mb-2">{position.title}</CardTitle>
                          <div className="flex gap-4 text-sm text-slate-600">
                            <span className="font-semibold">{position.type}</span>
                            <span>•</span>
                            <span>{position.location}</span>
                          </div>
                        </div>
                        <Button 
                          onClick={handleApply}
                          className="bg-slate-900 hover:bg-slate-800"
                        >
                          Apply
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <p className="font-semibold text-slate-900 mb-2">Requirements:</p>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {position.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                              <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 flex-shrink-0" />
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
                <p className="text-slate-700 mb-4">
                  Don't see a position that fits? We're always looking for talented professionals.
                </p>
                <Button 
                  onClick={handleApply}
                  variant="outline"
                  className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
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

