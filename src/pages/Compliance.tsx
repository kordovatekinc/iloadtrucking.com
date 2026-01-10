import { Shield, FileCheck, Lock, Award, AlertCircle, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Compliance = () => {
  const certifications = [
    {
      icon: Shield,
      title: "Canada-U.S. Bonded",
      description: "Fully bonded carrier for seamless cross-border freight between Canada and the United States",
    },
    {
      icon: Award,
      title: "DOT Compliant",
      description: "Full compliance with Department of Transportation regulations for safety, maintenance, and driver qualifications",
    },
    {
      icon: FileCheck,
      title: "Carrier Safety Rating",
      description: "Satisfactory safety rating with comprehensive inspection and maintenance protocols",
    },
    {
      icon: Lock,
      title: "Cargo Insurance",
      description: "Comprehensive cargo liability coverage protecting your freight throughout transit",
    },
  ];

  const safetyMetrics = [
    { label: "Safety Rating", value: "Satisfactory", icon: CheckCircle2 },
    { label: "Fleet Inspection Rate", value: "100%", icon: CheckCircle2 },
    { label: "Driver Training", value: "Ongoing", icon: CheckCircle2 },
    { label: "Compliance Audits", value: "Annual", icon: CheckCircle2 },
  ];

  const standards = [
    {
      title: "Vehicle Maintenance",
      items: [
        "Pre-trip and post-trip inspections",
        "Scheduled preventive maintenance",
        "DOT annual inspections",
        "Electronic logging compliance",
        "Equipment certification tracking",
      ],
    },
    {
      title: "Driver Qualifications",
      items: [
        "Valid commercial driver licenses",
        "Clean driving records verification",
        "Medical certification requirements",
        "Hours of service compliance",
        "Ongoing safety training programs",
      ],
    },
    {
      title: "Cross-Border Operations",
      items: [
        "CTPAT security protocols",
        "FAST program participation",
        "Customs broker partnerships",
        "PAPS/PARS processing",
        "Border security training",
      ],
    },
    {
      title: "Cargo Protection",
      items: [
        "$2M liability coverage",
        "Cargo insurance policies",
        "Proper load securing methods",
        "Temperature monitoring systems",
        "GPS tracking & security",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24">
        {/* Hero Section */}
        <section className="bg-black text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Compliance & <span className="text-gold">Safety</span></h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Committed to the highest standards of safety, security, and regulatory compliance
            </p>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">
                Certifications & <span className="text-gold">Credentials</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {certifications.map((cert, index) => (
                  <Card key={index} className="border-2 border-gold/30 bg-background">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="p-4 bg-gold rounded-lg">
                          <cert.icon className="w-8 h-8 text-black" />
                        </div>
                        <CardTitle className="text-2xl text-white">{cert.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400">{cert.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Safety Metrics */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">
                Safety <span className="text-gold">Performance</span>
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                {safetyMetrics.map((metric, index) => (
                  <Card key={index} className="border-0 shadow-lg text-center bg-card border border-gold/20">
                    <CardContent className="pt-6">
                      <metric.icon className="w-12 h-12 mx-auto mb-4 text-gold" />
                      <p className="text-3xl font-bold text-gold mb-2">{metric.value}</p>
                      <p className="text-sm text-gray-400">{metric.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-white">
                Operational <span className="text-gold">Standards</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {standards.map((standard, index) => (
                  <Card key={index} className="border-2 border-gold/30 bg-background">
                    <CardHeader>
                      <CardTitle className="text-xl text-gold">{standard.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {standard.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-300">
                            <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cross-Border Capabilities */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Shield className="w-16 h-16 mx-auto mb-6 text-gold" />
                <h2 className="text-4xl font-bold mb-6 text-white">Cross-Border <span className="text-gold">Capabilities</span></h2>
                <p className="text-lg text-gray-400">
                  As a Canada–U.S. bonded carrier, iLoad Trucking specializes in cross-border freight operations 
                  with full customs compliance and efficient border processing.
                </p>
              </div>

              <Card className="border-2 border-gold/30 bg-card">
                <CardHeader>
                  <CardTitle className="text-white">What This Means for Your Shipments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Seamless Border Crossings</h3>
                        <p className="text-sm text-gray-400">Efficient customs processing at Canada-U.S. borders</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Bonded Carrier Status</h3>
                        <p className="text-sm text-gray-400">Fully bonded for international freight between Canada and the United States</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Documentation Support</h3>
                        <p className="text-sm text-gray-400">Full assistance with PAPS, PARS, and customs paperwork</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">North American Coverage</h3>
                        <p className="text-sm text-gray-400">Strategic hubs in Regina, Saskatoon, Calgary, Mississauga, and San Diego</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Insurance Information */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <AlertCircle className="w-16 h-16 mx-auto mb-6 text-gold" />
              <h2 className="text-4xl font-bold mb-6 text-white">Insurance & <span className="text-gold">Liability</span></h2>
              <p className="text-lg text-gray-400 mb-8">
                Your freight is protected by comprehensive cargo liability insurance, giving you peace of mind 
                throughout the shipping process. We maintain coverage that meets or exceeds industry standards.
              </p>
              <Card className="border-2 border-gold/30 bg-background text-left">
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gold">Coverage Details</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li>• $2M liability coverage</li>
                        <li>• All-risk cargo insurance</li>
                        <li>• Temperature failure protection</li>
                        <li>• Transit damage coverage</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gold">Claims Process</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li>• 24-hour claim reporting</li>
                        <li>• Dedicated claims support</li>
                        <li>• Transparent investigation</li>
                        <li>• Timely resolution</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Compliance;

