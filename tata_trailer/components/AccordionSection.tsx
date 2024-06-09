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
      className=" space-y-6 mt-10 text-xl"
    >
      {FaqData.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
