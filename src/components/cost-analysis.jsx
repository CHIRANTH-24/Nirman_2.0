import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckSquare } from "lucide-react"

export function CostAnalysis() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl">Cost Analysis</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
                <div className="flex items-start space-x-4">
                    <CheckSquare className="h-8 w-8 text-green-500 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold">Unit Price Analysis</h3>
                        <p className="text-muted-foreground">
                            Detailed breakdown of unit costs for each item in the Bill of Quantities.
                        </p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <CheckSquare className="h-8 w-8 text-green-500 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold">Historical Cost Comparison</h3>
                        <p className="text-muted-foreground">
                            Utilizing historical data from similar projects to ensure competitive pricing.
                        </p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <CheckSquare className="h-8 w-8 text-green-500 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold">Escalation and Inflation</h3>
                        <p className="text-muted-foreground">Allowance for 5% inflation over the duration of the project.</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

