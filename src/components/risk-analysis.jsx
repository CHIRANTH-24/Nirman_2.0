import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const riskAssessmentData = [
    { risk: "Weather Delays", severity: "Medium", probability: "Medium" },
    { risk: "Material Price Increase", severity: "Medium", probability: "Medium" },
    { risk: "Subcontractor Delays", severity: "Medium", probability: "Low" },
    { risk: "Unexpected Ground Conditions", severity: "High", probability: "Low" },
]

const riskMitigationData = [
    { risk: "Weather Delays", mitigation: "Schedule Buffer, Use of Weather Forecasting Tools" },
    { risk: "Material Price Increase", mitigation: "Fixed Price Contracts with Suppliers, Price Hedging" },
    {
        risk: "Subcontractor Delays",
        mitigation: "Selection of Reliable Subcontractors, Contingency Subcontractor Agreements",
    },
    { risk: "Unexpected Ground Conditions", mitigation: "Detailed Site Investigation, Geotechnical Expertise" },
]

function getSeverityColor(severity) {
    switch (severity.toLowerCase()) {
        case "low":
            return "bg-green-500"
        case "medium":
            return "bg-yellow-500"
        case "high":
            return "bg-red-500"
        default:
            return "bg-gray-500"
    }
}

export function RiskAnalysis() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl">Risk Analysis and Management</CardTitle>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="risk-assessment">
                        <AccordionTrigger>Risk Assessment</AccordionTrigger>
                        <AccordionContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Risk</TableHead>
                                        <TableHead>Severity</TableHead>
                                        <TableHead>Probability</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {riskAssessmentData.map((risk) => (
                                        <TableRow key={risk.risk}>
                                            <TableCell className="font-medium">{risk.risk}</TableCell>
                                            <TableCell>
                                                <Badge className={getSeverityColor(risk.severity)}>{risk.severity}</Badge>
                                            </TableCell>
                                            <TableCell>{risk.probability}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="risk-mitigation">
                        <AccordionTrigger>Risk Mitigation Plans</AccordionTrigger>
                        <AccordionContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Risk</TableHead>
                                        <TableHead>Mitigation</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {riskMitigationData.map((risk) => (
                                        <TableRow key={risk.risk}>
                                            <TableCell className="font-medium">{risk.risk}</TableCell>
                                            <TableCell>{risk.mitigation}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="contingency-plans">
                        <AccordionTrigger>Contingency Plans</AccordionTrigger>
                        <AccordionContent>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>
                                    <span className="font-semibold">Budget Contingency:</span> 10% set aside for unforeseen expenses
                                </li>
                                <li>
                                    <span className="font-semibold">Schedule Contingency:</span> A two week buffer is included in the
                                    timeline
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
        </Card>
    )
}

