
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqData } from "@/constants"; // Adjust the path as needed

export function AccordionFaq() {
  return (
    <Accordion
      type="single"
      collapsible
      className="space-y-6 mt-10 text-xl w-full"
    >
      {FaqData.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`item-${index + 1}`}
          className="w-full border-b border-gray-300"
        >
          <AccordionTrigger className="text-left w-full">{faq.question}</AccordionTrigger>
          <AccordionContent className="w-full text-base">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
