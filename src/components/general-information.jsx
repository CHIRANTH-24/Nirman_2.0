import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, CreditCard, Shield } from "lucide-react"

export function GeneralInformation() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl">General Information</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
                <div className="flex items-center space-x-4">
                    <DollarSign className="h-8 w-8 text-green-500" />
                    <div>
                        <p className="text-sm text-muted-foreground">Total Bid Price</p>
                        <p className="text-2xl font-bold">500</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <CreditCard className="h-8 w-8 text-blue-500 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold">Payment Terms</h3>
                        <p className="text-muted-foreground">
                            30% upfront payment, 30% upon completion of foundation, 30% upon completion of structure, and 10% upon
                            final inspection.
                        </p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <Shield className="h-8 w-8 text-yellow-500 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold">Warranty Information</h3>
                        <p className="text-muted-foreground">One year warranty on workmanship and materials.</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

