import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users } from "lucide-react"

export function ProfitabilityAnalysis() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl">Profitability and Competitive Analysis</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
                <div className="flex items-start space-x-4">
                    <TrendingUp className="h-8 w-8 text-green-500 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold">Break-even Analysis</h3>
                        <p className="text-muted-foreground">Break-even point is achieved with bid price of 100.</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <Users className="h-8 w-8 text-blue-500 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold">Competitor Comparison</h3>
                        <p className="text-muted-foreground">
                            Analysis of competitive bidding landscape and positioning our bid accordingly.
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

