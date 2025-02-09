"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question:
        "What makes DEF-X different from other cybersecurity providers?",
      answer:
        "DEF-X stands out by offering intelligence-driven solutions tailored to your industry. With expertise in advanced technologies like AI, zero-trust architecture, and UAV forensics, we provide proactive defense strategies.",
    },
    {
      question: "How can DEF-X help prevent ransomware attacks?",
      answer:
        "We employ a multi-layered security approach including real-time monitoring, advanced threat detection, and employee training to prevent and mitigate ransomware attacks.",
    },
    {
      question: "Is DEF-X equipped to handle compliance for my business?",
      answer:
        "Yes, we specialize in various compliance frameworks including GDPR, HIPAA, and ISO 27001, ensuring your business meets all necessary regulatory requirements.",
    },
  ];

  return (
    <div className="relative bg-slate-950 py-24">
      <div className="absolute inset-0 bg-grid-white/10 bg-grid-pattern" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E2CBFF] to-[#393BB2]">
            Frequently Asked Questions
          </span>
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="relative inline-flex w-full overflow-hidden rounded-xl p-[2px]"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <Card className="inline-flex h-full w-full items-center justify-center rounded-xl bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 text-left flex justify-between items-center"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    <h3 className="text-xl font-semibold text-white">
                      {faq.question}
                    </h3>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-[#E2CBFF]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#E2CBFF]" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-48" : "max-h-0"
                    }`}
                  >
                    <p className="px-6 pb-6 text-gray-400">{faq.answer}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
