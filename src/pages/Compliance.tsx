import { Shield, FileCheck, Lock, Award, AlertCircle, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Compliance = () => {
  const certifications = [
    {
      icon: Shield,
      title: "CTPAT Certified",
      description: "Customs-Trade Partnership Against Terrorism certification ensuring highest security standards for cross-border operations",
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
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24">
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Compliance & Safety</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Committed to the highest standards of safety, security, and regulatory compliance
            </p>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
                Certifications & Credentials
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {certifications.map((cert, index) => (
                  <Card key={index} className="border-2 border-slate-200">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="p-4 bg-slate-900 rounded-lg">
                          <cert.icon className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle className="text-2xl">{cert.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-700">{cert.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Safety Metrics */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
                Safety Performance
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                {safetyMetrics.map((metric, index) => (
                  <Card key={index} className="border-0 shadow-lg text-center">
                    <CardContent className="pt-6">
                      <metric.icon className="w-12 h-12 mx-auto mb-4 text-green-600" />
                      <p className="text-3xl font-bold text-slate-900 mb-2">{metric.value}</p>
                      <p className="text-sm text-slate-600">{metric.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
                Operational Standards
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {standards.map((standard, index) => (
                  <Card key={index} className="border-2 border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-xl">{standard.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {standard.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-700">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
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

        {/* CTPAT Details */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Shield className="w-16 h-16 mx-auto mb-6 text-slate-900" />
                <h2 className="text-4xl font-bold mb-6 text-slate-900">CTPAT Certification</h2>
                <p className="text-lg text-slate-700">
                  Budget Carriers maintains CTPAT (Customs-Trade Partnership Against Terrorism) certification, 
                  demonstrating our commitment to supply chain security and expedited border processing.
                </p>
              </div>

              <Card className="border-2 border-slate-200">
                <CardHeader>
                  <CardTitle>What CTPAT Means for Your Shipments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Faster Border Crossings</h3>
                        <p className="text-sm text-slate-700">Reduced inspection times and priority processing at customs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Enhanced Security</h3>
                        <p className="text-sm text-slate-700">Rigorous security protocols protecting your cargo throughout transit</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Trusted Partner Status</h3>
                        <p className="text-sm text-slate-700">Recognized by U.S. Customs and Border Protection as a low-risk carrier</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Supply Chain Integrity</h3>
                        <p className="text-sm text-slate-700">Continuous monitoring and improvement of security measures</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Insurance Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <AlertCircle className="w-16 h-16 mx-auto mb-6 text-slate-900" />
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Insurance & Liability</h2>
              <p className="text-lg text-slate-700 mb-8">
                Your freight is protected by comprehensive cargo liability insurance, giving you peace of mind 
                throughout the shipping process. We maintain coverage that meets or exceeds industry standards.
              </p>
              <Card className="border-2 border-slate-200 text-left">
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-slate-900">Coverage Details</h3>
                      <ul className="space-y-2 text-slate-700">
                        <li>• $2M liability coverage</li>
                        <li>• All-risk cargo insurance</li>
                        <li>• Temperature failure protection</li>
                        <li>• Transit damage coverage</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-slate-900">Claims Process</h3>
                      <ul className="space-y-2 text-slate-700">
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

