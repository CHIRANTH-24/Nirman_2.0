"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";


const GovermentView = () => {
  const { user } = useUser();
  const [formData, setFormData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const tenderId = uuidv4();
  const router = useRouter();
  const createdBy = user?.fullName || "unknown";

  const handleUserInput = (fieldName, fieldValue) => {
    setFormData((prev) => ({ ...prev, [fieldName]: fieldValue }));
  };

  useEffect(() => {
    console.log("Updated formData:", formData);
  }, [formData]);

  const submitTender = async () => {
    setIsLoading(true);
    try {
      const result = await axios.post("/api/submit-tender", {
        tenderId: tenderId,
        ...formData,
      });

      console.log("API response:", result.data.message);
      router.push("/dashboard/tenders");
      toast.success("Tender submitted successfully!");
    } catch (error) {
      console.error("Error submitting tender:", error);
      toast.error("Failed to submit tender. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="border rounded-lg bg-gray-100 dark:bg-gray-800 p-6">
          <h2 className="text-lg font-bold">Government Dashboard</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Welcome to the government view. Here you can manage projects and track bids from construction companies.
          </p>
        </div>
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Submit Your Tender</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Tender Input Fields */}
            <div className="flex flex-col gap-4">
              {/* Project Name */}
              <div className="space-y-2">
                <Label htmlFor="projectName">Project Name</Label>
                <Input
                  type="text"
                  id="projectName"
                  placeholder="Enter the project name"
                  onChange={(e) => handleUserInput("projectName", e.target.value)}
                />
              </div>

              {/* Project Details */}
              <div className="space-y-2">
                <Label htmlFor="projectDetails">Project Details</Label>
                <Textarea
                  id="projectDetails"
                  placeholder="Enter the project details"
                  rows={4}
                  onChange={(e) => handleUserInput("projectDetails", e.target.value)}
                />
              </div>

              {/* Deadline */}
              <div className="space-y-2">
                <Label htmlFor="deadline">Deadline</Label>
                <Input
                  type="date"
                  id="deadline"
                  onChange={(e) => handleUserInput("deadline", e.target.value)}
                />
              </div>

              {/* Project Location */}
              <div className="space-y-2">
                <Label htmlFor="projectLocation">Project Location</Label>
                <Input
                  type="text"
                  id="projectLocation"
                  placeholder="Enter the project location"
                  onChange={(e) => handleUserInput("projectLocation", e.target.value)}
                />
              </div>

              {/* Budget Amount */}
              <div className="space-y-2">
                <Label htmlFor="budgetAmount">Budget Amount (₹)</Label>
                <Input
                  type="number"
                  id="budgetAmount"
                  placeholder="Enter the budget amount"
                  onChange={(e) => handleUserInput("budgetAmount", e.target.value)}
                />
              </div>

              {/* Bid Amount */}
              <div className="space-y-2">
                <Label htmlFor="bidAmount">Bid Amount (₹)</Label>
                <Input
                  type="number"
                  id="bidAmount"
                  placeholder="Enter your bid amount"
                  onChange={(e) => handleUserInput("bidAmount", e.target.value)}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              onClick={submitTender}
              disabled={isLoading}
              className="w-full sm:w-auto"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Tender"
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>


    </div>
  )
}

export default GovermentView


