import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const steps = [
  "Welcome",
  "Property Selection",
  "Screening Criteria",
  "Applicant Details",
  "Employment Details",
  "Verification",
  "Review & Submit",
];

export default function TenantScreeningWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({ employment: [{ employer: "", position: "", income: "" }] });
  const [typewriterText, setTypewriterText] = useState("");

  useEffect(() => {
    const messages = [
      "Hello! Let's get started with your application.",
      "Choose your property and let’s continue.",
      "Please review the screening criteria carefully.",
      "We need some basic details about you.",
      "Tell us about your employment details.",
      "We will now verify your identity and financials.",
      "Almost done! Review and submit.",
    ];
    setTypewriterText(messages[currentStep]);
  }, [currentStep]);

  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const handleBack = () => setCurrentStep((prev) => Math.max(prev - 1, 0));
  const addEmployment = () => setFormData({ ...formData, employment: [...formData.employment, { employer: "", position: "", income: "" }] });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 p-6 text-white">
      <Card className="w-full max-w-lg shadow-2xl rounded-3xl p-8 bg-white text-gray-900">
        <CardContent>
          <Progress value={(currentStep / (steps.length - 1)) * 100} className="mb-6 h-2 bg-gray-300 rounded-full" />
          <motion.h2 className="text-2xl font-semibold mb-4 text-center" animate={{ opacity: [0, 1] }}>
            {steps[currentStep]}
          </motion.h2>
          <motion.p className="text-gray-600 mb-6 text-center text-lg font-light" animate={{ opacity: [0, 1] }}>
            {typewriterText}
          </motion.p>
          <div className="space-y-6">
            {currentStep === 3 && (
              <div className="space-y-4">
                <Label>Full Name</Label>
                <Input placeholder="John Doe" className="p-3 border rounded-lg w-full" />
                <Label>Date of Birth</Label>
                <Input type="date" className="p-3 border rounded-lg w-full" />
                <Label>Email</Label>
                <Input type="email" placeholder="example@mail.com" className="p-3 border rounded-lg w-full" />
              </div>
            )}
            {currentStep === 4 && (
              <div className="space-y-4">
                <Label>Employment Details</Label>
                {formData.employment.map((_, index) => (
                  <div key={index} className="space-y-2 p-3 border rounded-lg">
                    <Input placeholder="Employer Name" className="w-full" />
                    <Input placeholder="Position" className="w-full" />
                    <Input placeholder="Monthly Income" type="number" className="w-full" />
                  </div>
                ))}
                <Button onClick={addEmployment} variant="outline">+ Add More Employment</Button>
              </div>
            )}
            {currentStep === 5 && (
              <div className="p-6 border rounded-lg bg-gray-100 text-center text-gray-800">
                <p className="animate-pulse">Verifying via Payscore, Plaid, and TransUnion...</p>
              </div>
            )}
            {currentStep === 6 && (
              <div className="space-y-4">
                <Label>Legal Disclaimer</Label>
                <Textarea placeholder="Read and sign below" className="w-full h-24" />
                <Checkbox label="I agree to the terms and conditions" />
                <Label>Upload Supporting Documents</Label>
                <input type="file" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" />
              </div>
            )}
          </div>
          <div className="flex justify-between mt-8">
            {currentStep > 0 && <Button onClick={handleBack} className="bg-gray-300 text-gray-900">Back</Button>}
            <Button onClick={handleNext} className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md">{currentStep === steps.length - 1 ? "Submit" : "Next"}</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
