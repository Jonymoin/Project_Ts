import { motion } from "framer-motion";
import {
  ShieldCheck,
  PaintBucket,
  PackageCheck,
  Ruler,
  Layers3,
  Sparkles,
  Smile,
  Users2,
  BadgeDollarSign,
  ThumbsUp,
  PhoneCall,
  CalendarDays,
  Hammer,
  PaintRoller,
  Eye,
  Headphones,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SectionWrapper = ({ title, children }) => (
  <motion.section
    variants={fadeInUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="py-12 px-4 max-w-6xl mx-auto"
  >
    <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
      {title}
    </h2>
    {children}
  </motion.section>
);

const policies = [
  { icon: <ShieldCheck />, title: "Free Site Inspection", desc: "We offer complimentary on-site visits to assess your space, answer questions, and give tailored quotes." },
  { icon: <PaintBucket />, title: "Anti-Mould Paint Upgrade", desc: "Upgrade to mould-resistant ceiling paint in toilets for better long-term hygiene and freshness." },
  { icon: <PackageCheck />, title: "Full Protection Provided", desc: "We carefully cover floors, furniture, and fittings to keep your home clean and safe during work." },
  { icon: <Ruler />, title: "Plastering", desc: "Uneven walls or cracks? We smooth surfaces with expert plastering before painting begins." },
  { icon: <Layers3 />, title: "2 Coats of Paint", desc: "Every project gets a full two-coat application for long-lasting coverage and finish." },
  { icon: <Sparkles />, title: "Fresh & Quality Products", desc: "We use only premium, freshly opened paints from trusted suppliers to ensure vibrant, lasting color." },
];

const values = [
  { icon: <Smile />, title: "Friendly Service", desc: "We treat every customer like family. No pushy sales—just helpful advice and a smile." },
  { icon: <Users2 />, title: "Experienced Team", desc: "Our crew knows what they’re doing—years of hands-on painting experience and a passion for perfection." },
  { icon: <BadgeDollarSign />, title: "Affordable Rates", desc: "Transparent pricing, no hidden fees. Quality service at prices that make sense." },
  { icon: <ThumbsUp />, title: "Customer Satisfaction", desc: "We don’t leave until you’re happy. 5-star reviews are not our goal—they’re our standard." },
];

const steps = [
  { icon: <PhoneCall />, title: "Friendly Consultation", desc: "We start with a no-pressure chat to understand your needs. Includes a site visit to assess the space." },
  { icon: <CalendarDays />, title: "Clear Project Timeline", desc: "Once confirmed, we set your project dates and keep you updated—simple and smooth." },
  { icon: <Hammer />, title: "Detailed Prep Work", desc: "We fix cracks, protect furniture, and prep surfaces so the paint looks flawless." },
  { icon: <PaintRoller />, title: "Professional Painting", desc: "2 full coats of quality paint applied with precision by our skilled painters." },
  { icon: <Eye />, title: "Final Walkthrough", desc: "We inspect everything with you and handle any final touch-ups—no shortcuts." },
  { icon: <Headphones />, title: "After-Service Support", desc: "Need help after we leave? We’re always just a call or message away." },
];

const GridSection = ({ data }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {data.map((item, idx) => (
      <motion.div
        key={idx}
        className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition"
        variants={fadeInUp}
        whileInView="show"
        initial="hidden"
        viewport={{ once: true }}
      >
        <div className="text-primary mb-4">{item.icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
        <p className="text-gray-600 text-sm">{item.desc}</p>
      </motion.div>
    ))}
  </div>
);

const VerticalTimeline = ({ steps }) => (
  <div className="relative border-l-4 border-primary pl-6 space-y-12">
    {steps.map((step, idx) => (
      <motion.div
        key={idx}
        className="relative"
        variants={fadeInUp}
        whileInView="show"
        initial="hidden"
        viewport={{ once: true }}
      >
        <div className="absolute -left-9 bg-white border-2 border-primary rounded-full w-10 h-10 flex items-center justify-center">
          {step.icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{step.title}</h3>
        <p className="text-gray-600 text-sm">{step.desc}</p>
      </motion.div>
    ))}
  </div>
);

export default function EverFreshLanding() {
  return (
    <div className="bg-gray-50">
      <SectionWrapper title="Our Commitments">
        <GridSection data={policies} />
      </SectionWrapper>

      <SectionWrapper title="What Makes Us Different">
        <GridSection data={values} />
      </SectionWrapper>

      <SectionWrapper title="Our Painting Process">
        <VerticalTimeline steps={steps} />
      </SectionWrapper>
    </div>
  );
}
