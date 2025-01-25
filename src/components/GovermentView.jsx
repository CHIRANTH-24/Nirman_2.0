"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const GovermentView = () => {
  const [inputs, setInputs] = useState({
    materials: 0,
    labor: 0,
    equipment: 0,
    miscellaneous: 0,
  });
  const [profitMargin, setProfitMargin] = useState(10);
  const [calculations, setCalculations] = useState({
    totalCost: 0,
    profitAmount: 0,
    bidPrice: 0,
    costBreakdown: [],
  });

  const [formData, setFormData] = useState({
    name: "",
    details: "",
    deadline: "",
    location: "",
    budgetAmount: "",
    minBid: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

  const fetchCalculations = async () => {
    try {
      const response = await axios.post("/api/calculate-bid", {
        inputs,
        profitMargin,
      });
      setCalculations(response.data);
    } catch (error) {
      console.error("Error fetching calculations:", error);
      toast.error("Failed to fetch calculations. Please try again.");
    }
  };

  useEffect(() => {
    fetchCalculations();
  }, [inputs, profitMargin]);

  const handleInputChange = (field, value) => {
    setInputs((prev) => ({
      ...prev,
      [field]: parseFloat(value) || 0,
    }));
  };

  const handleFormChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const submitTender = async () => {
    setIsLoading(true);
    try {
      const result = await axios.post("/api/submit-tender", {
        projectId: uuidv4(),
        ...formData,
      });
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
      {/* Government Dashboard */}
      <div className="container mx-auto px-4 py-8">
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Submit Your Tender</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Form Fields */}
            <div className="flex flex-col gap-4">
              <div className="space-y-2">
                <Label htmlFor="projectName">Project Name</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Enter the project name"
                  onChange={(e) => handleFormChange("name", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="details">Project Details</Label>
                <Textarea
                  id="details"
                  placeholder="Enter the project details"
                  rows={4}
                  onChange={(e) => handleFormChange("details", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deadline">Deadline</Label>
                <Input
                  type="date"
                  id="deadline"
                  onChange={(e) => handleFormChange("deadline", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Project Location</Label>
                <Input
                  type="text"
                  id="location"
                  placeholder="Enter the project location"
                  onChange={(e) => handleFormChange("location", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="budgetAmount">Budget Amount (₹)</Label>
                <Input
                  type="number"
                  id="budgetAmount"
                  placeholder="Enter the budget amount"
                  onChange={(e) => handleFormChange("budgetAmount", e.target.value)}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button onClick={submitTender} disabled={isLoading}>
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

      {/* Cost Breakdown */}
      <div className="flex max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="w-1/2 p-6 bg-gray-50">
          <h2 className="text-2xl font-bold mb-4">Cost Breakdown</h2>
          {Object.entries(inputs).map(([key, value]) => (
            <div key={key} className="flex items-center gap-4">
              <Label className="capitalize w-1/4">{key}:</Label>
              <Input
                type="number"
                value={value}
                onChange={(e) => handleInputChange(key, e.target.value)}
              />
            </div>
          ))}
          <Slider
            value={[profitMargin]}
            onValueChange={(val) => setProfitMargin(val[0])}
            max={50}
            step={1}
          />
        </div>
        <div className="w-1/2 p-6">
          <PieChart>
            <Pie
              data={calculations.costBreakdown}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={80}
            >
              {calculations.costBreakdown.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default GovermentView;












// import React, { useState, useEffect } from 'react';
// import { Input } from "@/components/ui/input";
// import { Slider } from "@/components/ui/slider";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

// const CostBreakdownCalculator = () => {
//   const [inputs, setInputs] = useState({
//     materials: 0,
//     labor: 0,
//     equipment: 0,
//     miscellaneous: 0
//   });
//   const [profitMargin, setProfitMargin] = useState(10);
//   const [calculations, setCalculations] = useState({
//     totalCost: 0,
//     profitAmount: 0,
//     bidPrice: 0,
//     costBreakdown: []
//   });

//   const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

//   useEffect(() => {
//     const totalCost = 
//       inputs.materials + 
//       inputs.labor + 
//       inputs.equipment + 
//       inputs.miscellaneous;
    
//     const profitAmount = totalCost * (profitMargin / 100);
//     const bidPrice = totalCost + profitAmount;

//     const costBreakdown = [
//       { name: 'Materials', value: inputs.materials },
//       { name: 'Labor', value: inputs.labor },
//       { name: 'Equipment', value: inputs.equipment },
//       { name: 'Miscellaneous', value: inputs.miscellaneous },
//       { name: 'Profit', value: profitAmount }
//     ].filter(item => item.value > 0);

//     setCalculations({
//       totalCost,
//       profitAmount,
//       bidPrice,
//       costBreakdown
//     });
//   }, [inputs, profitMargin]);

//   const handleInputChange = (field, value) => {
//     setInputs(prev => ({
//       ...prev,
//       [field]: parseFloat(value) || 0
//     }));
//   };

//   return (
//     <div className="flex max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
//       <div className="w-1/2 p-6 bg-gray-50">
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Cost Breakdown</h2>
//         <div className="space-y-4">
//           {Object.entries(inputs).map(([key, value]) => (
//             <div key={key} className="grid grid-cols-3 items-center gap-4">
//               <label className="text-right capitalize text-gray-700">{key} Cost:</label>
//               <Input
//                 type="number"
//                 value={value}
//                 onChange={(e) => handleInputChange(key, e.target.value)}
//                 className="col-span-2 bg-white"
//                 placeholder="₹0"
//               />
//             </div>
//           ))}

//           <div className="grid grid-cols-3 items-center gap-4 mt-4">
//             <label className="text-right text-gray-700">Profit Margin:</label>
//             <div className="col-span-2 flex items-center space-x-4">
//               <Slider
//                 value={[profitMargin]}
//                 onValueChange={(val) => setProfitMargin(val[0])}
//                 max={50}
//                 step={1}
//                 className="w-full"
//               />
//               <span className="font-semibold">{profitMargin}%</span>
//             </div>
//           </div>

//           <div className="mt-6 bg-white border rounded-lg p-4 shadow-sm">
//             <div className="flex justify-between mb-2">
//               <span className="text-gray-600">Total Cost:</span>
//               <span className="font-bold">₹{calculations.totalCost.toLocaleString()}</span>
//             </div>
//             <div className="flex justify-between mb-2">
//               <span className="text-gray-600">Profit Amount:</span>
//               <span className="font-bold">₹{calculations.profitAmount.toLocaleString()}</span>
//             </div>
//             <div className="flex justify-between border-t pt-2">
//               <span className="font-semibold text-gray-800">Bid Price:</span>
//               <span className="text-xl font-bold text-blue-600">
//                 ₹{calculations.bidPrice.toLocaleString()}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-1/2 bg-white p-6">
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">Cost Distribution</h2>
//         <ResponsiveContainer width="100%" height={400}>
//           <PieChart>
//             <Pie
//               data={calculations.costBreakdown}
//               cx="50%"
//               cy="50%"
//               labelLine={false}
//               outerRadius={150}
//               fill="#8884d8"
//               dataKey="value"
//             >
//               {calculations.costBreakdown.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//             <Tooltip 
//               formatter={(value) => [`₹${value.toLocaleString()}`, 'Amount']}
//             />
//           </PieChart>
//         </ResponsiveContainer>
//         <div className="mt-4">
//           {calculations.costBreakdown.map((item, index) => (
//             <div key={item.name} className="flex items-center mb-2">
//               <span 
//                 className="inline-block w-3 h-3 mr-2 rounded-full" 
//                 style={{backgroundColor: COLORS[index % COLORS.length]}}
//               />
//               <span className="text-sm">{item.name}: ₹{item.value.toLocaleString()}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CostBreakdownCalculator;
