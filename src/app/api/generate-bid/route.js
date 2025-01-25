import { NextResponse } from "next/server";
import { PROJECT_TABLE } from "../../../../configs/schema";
import { projectOutline } from "../../../../configs/AI";

export async function POST(req) {
  const { projectId, name, details, deadline, location, budgetAmount, minBid } =
    await req.json();

  const PROMPT =
    "Generate a Bid draft with The government project" +
    name +
    details +
    "The project is located" +
    location +
    "with a total budget of" +
    budgetAmount +
    "and a minimum bid of " +
    minBid +
    ". The project is expected to be completed by " +
    deadline +
    ". \n\nIn json format covering these \n1. Project Overview\n- Project Name\n- Project ID\n- Location\n- Deadline/Completion Date\n- Scope of Work\n\n 2. Cost Breakdown\n- Materials\n- Labor Costs\n- Equipment and Machinery\n- Miscellaneous Costs\n- Profit Margin\n\n 3. Project Duration & Timeline\n- Estimated Duration\n- Detailed Schedule\n\n 4. Compliance and Certifications\n- Regulatory Compliance\n- Certifications\n- Warranties\n\n 5. Risk Analysis & Management\n- Risk Assessment\n- Risk Mitigation Plans\n- Contingency Plans\n\n 6. Previous Experience & Qualifications\n- Company Profile\n- Relevant Project Portfolio\n- Team Composition\n- References\n\n 7. Cost Analysis\n- Unit Price Analysis\n- Historical Cost Comparison\n- Escalation and Inflation\n\n 8. Time and Resource Allocation Analysis\n- Workforce Efficiency\n- Project Schedule Feasibility\n\n 9. Legal & Regulatory Compliance\n- Permit and Licensing Requirements\n- Compliance with Standards\n\n 10. Risk Assessment\n- Contingency Planning\n- Subcontractor Risks\n\n 11. Profitability and Competitive Analysis\n- Break-even Analysis\n- Competitor Comparison\n\n 12. Quality Control & Safety Analysis\n- Safety Plan\n- Quality Assurance\n\n 13. General Information\n- Total Bid Price\n- Payment Terms\n- Warranty Information\n";
  //Generate
  const aiResp = await projectOutline.sendMessage(PROMPT);
  const aiResult = JSON.parse(aiResp.response.text());
  console.log("Here is the error");

  //Save to DB
  const dbResult = await db
    .insert(PROJECT_TABLE)
    .values({
      projectId: projectId,
      name: name,
      details: details,
      deadline: deadline,
      location: location,
      budgetAmount: budgetAmount,
      projectLayout: aiResult,
      minBid: minBid,
    })
    .returning({ resp: PROJECT_TABLE });

  console.log(dbResult);

  return NextResponse.json({ result: dbResult[0] });
}
