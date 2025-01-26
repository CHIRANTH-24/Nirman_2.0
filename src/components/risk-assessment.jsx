import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, ShieldCheck } from "lucide-react"

export function RiskAssessment() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl">Risk Assessment</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
                <div className="flex items-start space-x-4">
                    <AlertTriangle className="h-8 w-8 text-yellow-500 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold">Contingency Planning</h3>
                        <p className="text-muted-foreground">
                            Specific contingency plans in place to address potential project disruptions.
                        </p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <ShieldCheck className="h-8 w-8 text-green-500 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold">Subcontractor Risks</h3>
                        <p className="text-muted-foreground">
                            Assessment of subcontractor performance risks and mitigation strategies.
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

