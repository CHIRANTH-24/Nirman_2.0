"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectOverview } from "./project-overview"
import { CostBreakdown } from "./cost-breakdown"
import { ProjectTimeline } from "./project-timeline"
import { RiskAnalysis } from "./risk-analysis"
import { CostAnalysis } from "./cost-analysis"
import { TimeAndResourceAllocation } from "./time-and-resource-allocation"
import { RiskAssessment } from "./risk-assessment"
import { ProfitabilityAnalysis } from "./profitability-analysis"
import { QualityControlAndSafety } from "./quality-control-and-safety"
import { GeneralInformation } from "./general-information"
import { ComplianceAndCertifications } from "./compilance-and-certifications"

export function BidDraftUI() {
    const [costData, setCostData] = useState([
        { name: "Materials", value: 200 },
        { name: "Labor Costs", value: 100 },
        { name: "Equipment and Machinery", value: 50 },
        { name: "Miscellaneous Costs", value: 20 },
        { name: "Profit Margin", value: 130 },
    ])

    const [timelineData, setTimelineData] = useState([
        { phase: "Phase 1", duration: "3 months", startDate: "2023-06-01", endDate: "2023-08-31" },
        { phase: "Phase 2", duration: "4 months", startDate: "2023-09-01", endDate: "2023-12-31" },
        { phase: "Phase 3", duration: "6 months", startDate: "2024-01-01", endDate: "2024-06-30" },
        { phase: "Phase 4", duration: "3 months", startDate: "2024-07-01", endDate: "2024-09-30" },
    ])

    const [riskData, setRiskData] = useState([
        { risk: "Weather Delays", severity: "Medium", probability: "Medium" },
        { risk: "Material Price Increase", severity: "Medium", probability: "Medium" },
        { risk: "Subcontractor Delays", severity: "Medium", probability: "Low" },
        { risk: "Unexpected Ground Conditions", severity: "High", probability: "Low" },
    ])

    return (
        <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="costs">Costs & Timeline</TabsTrigger>
                <TabsTrigger value="risks">Risks & Compliance</TabsTrigger>
                <TabsTrigger value="analysis">Analysis</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-8">
                <ProjectOverview />
                <GeneralInformation />
            </TabsContent>
            <TabsContent value="costs" className="space-y-8">
                <CostBreakdown data={costData} setData={setCostData} />
                <ProjectTimeline data={timelineData} setData={setTimelineData} />
                <CostAnalysis />
            </TabsContent>
            <TabsContent value="risks" className="space-y-8">
                <RiskAnalysis data={riskData} setData={setRiskData} />
                <ComplianceAndCertifications />
                <RiskAssessment />
            </TabsContent>
            <TabsContent value="analysis" className="space-y-8">
                <TimeAndResourceAllocation />
                <ProfitabilityAnalysis />
                <QualityControlAndSafety />
            </TabsContent>
        </Tabs>
    )
}

