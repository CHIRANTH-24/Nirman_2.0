import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, CreditCard, Shield } from "lucide-react"

export function GeneralInformation(project) {
    console.log({project})
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
                        <p className="text-2xl font-bold">{project?.project?.projectLayout?.bid_draft?.['13_general_information']?.total_bid_price}</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <CreditCard className="h-8 w-8 text-blue-500 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold">Payment Terms</h3>
                        <p className="text-muted-foreground">
                            {project?.project?.projectLayout?.bid_draft?.['13_general_information']?.payment_terms}
                        </p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <Shield className="h-8 w-8 text-yellow-500 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold">Warranty Information</h3>
                        <p className="text-muted-foreground">{project?.project?.projectLayout?.bid_draft?.['13_general_information']?.warranty_information}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

