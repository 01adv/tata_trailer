"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import img from "@/public/assets/logistic-bgrm.png";
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Import Textarea component
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Printer } from "lucide-react";
import { QuoteHeading } from "./heading";

export default function QuoteV0() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    pickupAddress: "",
    deliveryAddress: "",
    weight: "",
    dimensions: "",
    additionalInfo: "", // Add field for textarea
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    return (
      formData.name &&
      formData.email &&
      formData.address &&
      formData.phone &&
      formData.pickupAddress &&
      formData.deliveryAddress &&
      formData.weight &&
      formData.dimensions
    );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsModalOpen(true);
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const handleWhatsAppSubmit = () => {
    const message = `Name: ${formData.name}\nEmail: ${formData.email}\nAddress: ${formData.address}\nPhone: ${formData.phone}\nPickup Address: ${formData.pickupAddress}\nDelivery Address: ${formData.deliveryAddress}\nweight: ${formData.weight}\nDimensions: ${formData.dimensions}\nAdditional Info: ${formData.additionalInfo}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setIsModalOpen(false);
  };

  const handleGmailSubmit = () => {
    const subject = "Quote Request";
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AAddress: ${formData.address}%0D%0APhone: ${formData.phone}%0D%0APickup Address: ${formData.pickupAddress}%0D%0ADelivery Address: ${formData.deliveryAddress}%0D%0Aweight: ${formData.weight}%0D%0ADimensions: ${formData.dimensions}%0D%0AAdditional Info: ${formData.additionalInfo}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=tatatrailor@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${body}`;
    window.open(gmailUrl, "_blank");
    setIsModalOpen(false);
  };

  return (
    <section id="quote">
      <div className="bg-emerald-100/50 p-8 sm:p-14 md:p-20">
        <QuoteHeading />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <div className="relative h-64 lg:h-auto">
            <Image
              src={img}
              layout="fill"
              objectFit="cover"
              alt="Logistic Background"
              className="rounded-lg"
            />
          </div>
          <Card className="w-full border-none shadow-none max-w-xl bg-inherit sm:w-[90vw] mx-auto lg:mx-0 glassmorphism-nav">
            <CardHeader className="mb-4">
              <div className="flex items-center justify-between flex-wrap">
                <CardTitle className="text-xl font-bold">
                  Request A Quote
                </CardTitle>
                <Printer />
              </div>
              <hr className="border-t border-white/20 mt-2" />
            </CardHeader>
            <CardContent>
              <form
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2"
                onSubmit={handleSubmit}
              >
                <div className="col-span-1">
                  <Input
                    name="name"
                    placeholder="What is your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-span-1">
                  <Input
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-span-1 sm:col-span-2">
                  <Input
                    name="address"
                    placeholder="Your Address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-span-1 sm:col-span-2">
                  <Input
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-span-1 sm:col-span-2">
                  <Input
                    name="pickupAddress"
                    placeholder="Pickup Address"
                    value={formData.pickupAddress}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-span-1 sm:col-span-2">
                  <Input
                    name="deliveryAddress"
                    placeholder="Delivery Address"
                    value={formData.deliveryAddress}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-span-1">
                  <Input
                    name="weight"
                    placeholder="Weight (in Kg)"
                    value={formData.weight}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-span-1">
                  <Input
                    name="dimensions"
                    placeholder="Dimensions"
                    value={formData.dimensions}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-span-1 sm:col-span-2">
                  <Textarea
                    name="additionalInfo"
                    placeholder="Additional Information (Optional)"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-span-1 sm:col-span-2">
                  <Button type="submit">Send Quote Request</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-xl font-bold mb-4">Choose an Option</h2>
              <div className="flex space-x-4">
                <Button onClick={handleWhatsAppSubmit}>WhatsApp</Button>
                <Button onClick={handleGmailSubmit}>Gmail</Button>
                <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
