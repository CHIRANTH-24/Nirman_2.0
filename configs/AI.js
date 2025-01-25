import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


export const projectOutline = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: '\nGenerate a Bid draft with  \n\nThe government project "Bridge Construction Over River X" (Project ID: PJT-001) involves the construction of a 500-meter bridge over River X,The work will be divided into four phases: Site Preparation (1 month), Foundation Work (2 months), Bridge Structure Construction (4 months), and Finishing and Inspection (1 month), including the necessary foundations and support structures. The project is located in City A, County B, with a total budget of ₹5,000,000 and a minimum bid of ₹4,500,000. The project is expected to be completed by December 31, 2025. \n\nIn json format covering these \n1. Project Overview\n- Project Name\n- Project ID\n- Location\n- Deadline/Completion Date\n- Scope of Work\n\n 2. Cost Breakdown\n- Materials\n- Labor Costs\n- Equipment and Machinery\n- Miscellaneous Costs\n- Profit Margin\n\n 3. Project Duration & Timeline\n- Estimated Duration\n- Detailed Schedule\n\n 4. Compliance and Certifications\n- Regulatory Compliance\n- Certifications\n- Warranties\n\n 5. Risk Analysis & Management\n- Risk Assessment\n- Risk Mitigation Plans\n- Contingency Plans\n\n 6. Previous Experience & Qualifications\n- Company Profile\n- Relevant Project Portfolio\n- Team Composition\n- References\n\n 7. Cost Analysis\n- Unit Price Analysis\n- Historical Cost Comparison\n- Escalation and Inflation\n\n 8. Time and Resource Allocation Analysis\n- Workforce Efficiency\n- Project Schedule Feasibility\n\n 9. Legal & Regulatory Compliance\n- Permit and Licensing Requirements\n- Compliance with Standards\n\n 10. Risk Assessment\n- Contingency Planning\n- Subcontractor Risks\n\n 11. Profitability and Competitive Analysis\n- Break-even Analysis\n- Competitor Comparison\n\n 12. Quality Control & Safety Analysis\n- Safety Plan\n- Quality Assurance\n\n 13. General Information\n- Total Bid Price\n- Payment Terms\n- Warranty Information\n',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "bid_draft": {\n    "1_project_overview": {\n      "project_name": "Bridge Construction Over River X",\n      "project_id": "PJT-001",\n      "location": "City A, County B",\n      "deadline_completion_date": "December 31, 2025",\n      "scope_of_work": "Construction of a 500-meter bridge over River X, including site preparation, foundation work, bridge structure construction, and finishing and inspection, encompassing all necessary foundations and support structures."\n    },\n    "2_cost_breakdown": {\n      "materials": "₹2,000,000",\n      "labor_costs": "₹1,200,000",\n      "equipment_and_machinery": "₹800,000",\n      "miscellaneous_costs": "₹200,000",\n      "profit_margin": "₹800,000"\n    },\n    "3_project_duration_and_timeline": {\n      "estimated_duration": "8 Months",\n      "detailed_schedule": [\n        { "phase": "Site Preparation", "duration": "1 month", "start_date":"TBD", "end_date":"TBD"},\n        { "phase": "Foundation Work", "duration": "2 months", "start_date":"TBD", "end_date":"TBD" },\n        { "phase": "Bridge Structure Construction", "duration": "4 months", "start_date":"TBD", "end_date":"TBD" },\n        { "phase": "Finishing and Inspection", "duration": "1 month", "start_date":"TBD", "end_date":"TBD" }\n      ]\n    },\n    "4_compliance_and_certifications": {\n      "regulatory_compliance": "Complies with all relevant local, state, and national construction regulations and environmental standards.",\n      "certifications": ["ISO 9001 Certified","OHSAS 18001 Certified"],\n       "warranties": "One year warranty on workmanship and materials"\n      \n    },\n    "5_risk_analysis_and_management": {\n      "risk_assessment": [\n        { "risk": "Weather Delays", "severity": "Medium", "probability":"Medium" },\n        { "risk": "Material Price Increase", "severity": "Medium", "probability": "Medium"},\n         { "risk":"Subcontractor Delays", "severity": "Medium", "probability": "Low"},\n        { "risk": "Unexpected Ground Conditions", "severity": "High", "probability":"Low" }\n       ],\n      "risk_mitigation_plans": [\n          { "risk":"Weather Delays", "mitigation":"Schedule Buffer, Use of Weather Forecasting Tools"},\n          {"risk":"Material Price Increase", "mitigation":"Fixed Price Contracts with Suppliers, Price Hedging"},\n           {"risk":"Subcontractor Delays", "mitigation":"Selection of Reliable Subcontractors, Contingency Subcontractor Agreements"},\n          {"risk":"Unexpected Ground Conditions", "mitigation":"Detailed Site Investigation, Geotechnical Expertise"}\n         ],\n         "contingency_plans": {\n            "budget_contingency": "₹100,000 set aside for unforeseen expenses",\n            "schedule_contingency": "A two week buffer is included in the timeline"\n        }\n      },\n    "6_previous_experience_and_qualifications": {\n      "company_profile": "ABC Construction is a leading construction firm with 20+ years of experience in delivering high-quality infrastructure projects.",\n      "relevant_project_portfolio": ["Project 1","Project 2", "Project 3"],\n      "team_composition": "Project Manager, Civil Engineer, Structural Engineer, Site Supervisor, Skilled Laborers",\n      "references": ["Reference 1", "Reference 2", "Reference 3"]\n    },\n    "7_cost_analysis": {\n      "unit_price_analysis": "Detailed breakdown of unit costs for each item in the Bill of Quantities.",\n       "historical_cost_comparison":"Utilizing historical data from similar projects to ensure competitive pricing.",\n      "escalation_and_inflation": "Allowance for 5% inflation over the duration of the project."\n    },\n    "8_time_and_resource_allocation_analysis": {\n      "workforce_efficiency": "Ensuring optimal resource allocation to maximize workforce productivity.",\n      "project_schedule_feasibility": "The project timeline is achievable with proper planning and resource management."\n    },\n    "9_legal_and_regulatory_compliance": {\n     "permit_and_licensing_requirements": "All necessary permits and licenses will be obtained prior to project commencement.",\n     "compliance_with_standards": "Compliance with all applicable construction codes and environmental regulations."\n   },\n   "10_risk_assessment": {\n    "contingency_planning": "Specific contingency plans in place to address potential project disruptions.",\n      "subcontractor_risks": "Assessment of subcontractor performance risks and mitigation strategies."\n  },\n    "11_profitability_and_competitive_analysis": {\n     "break_even_analysis": "Break-even point is achieved with bid price of ₹4,500,000",\n     "competitor_comparison": "Analysis of competitive bidding landscape and positioning our bid accordingly."\n    },\n    "12_quality_control_and_safety_analysis": {\n      "safety_plan": "Comprehensive safety plan in place to minimize workplace hazards.",\n     "quality_assurance": "Stringent quality control measures to ensure the project meets specifications."\n  },\n    "13_general_information": {\n        "total_bid_price": "₹5,000,000",\n        "payment_terms": "30% upfront payment, 30% upon completion of foundation, 30% upon completion of structure, and 10% upon final inspection.",\n       "warranty_information": "One year warranty on workmanship and materials."\n    }\n  }\n}\n```\n',
        },
      ],
    },
  ],
});






