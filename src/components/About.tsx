import { Link } from "react-router-dom";
import { CheckCircle2, Award, Target, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import warehouseImage from "@/assets/warehouse.jpg";

const About = () => {
  const values = [
    {
      icon: CheckCircle2,
      title: "Reliability",
      description: "Consistent on-time performance across every shipment",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Industry-leading standards in safety and service quality",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Tailored logistics solutions for your unique needs",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building long-term relationships based on trust",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            About Budget Carriers
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Over a decade of excellence in Canadian transportation and logistics
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <img
              src={warehouseImage}
              alt="Budget Carriers warehouse facility"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>

          <div className="order-1 md:order-2 space-y-6 text-slate-700 text-lg">
            <p>
              Founded in <strong className="text-slate-900">2014</strong>, Budget Carriers Inc. is a Canadian-owned transportation 
              company headquartered in Regina, Saskatchewan. We've grown into a trusted leader in the 
              trucking industry, delivering consistent, reliable freight solutions across Canada and the United States.
            </p>
            <p>
              Our commitment to excellence is backed by a <strong className="text-slate-900">modern, well-maintained fleet</strong>, 
              experienced drivers, and a dedicated support team. From dry van to refrigerated loads, LTL to FTL, 
              we offer flexible transportation options tailored to meet your unique needs.
            </p>
            <p>
              What sets us apart is our <strong className="text-slate-900">fully integrated operation</strong>. We own and operate 
              state-of-the-art maintenance facilities and an expansive warehouse network spanning Regina, Mississauga, 
              Winnipeg, and Calgary — offering end-to-end logistics solutions under one roof.
            </p>
            <div className="pt-4">
              <Link 
                to="/compliance"
                className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:text-slate-700 transition-colors"
              >
                Learn about our CTPAT certification
                <CheckCircle2 className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="border-2 border-slate-200 text-center hover:border-slate-900 transition-all">
              <CardContent className="pt-6">
                <value.icon className="w-12 h-12 mx-auto mb-4 text-slate-900" />
                <h3 className="font-bold text-lg mb-2 text-slate-900">{value.title}</h3>
                <p className="text-sm text-slate-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
