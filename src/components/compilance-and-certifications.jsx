import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Shield } from "lucide-react"

export function ComplianceAndCertifications() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl">Compliance and Certifications</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
                <div className="flex items-start space-x-4">
                    <CheckCircle className="h-8 w-8 text-green-500 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold">Regulatory Compliance</h3>
                        <p className="text-muted-foreground">
                            Complies with all relevant local, state, and national construction regulations and environmental
                            standards.
                        </p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <Shield className="h-8 w-8 text-blue-500 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold">Warranties</h3>
                        <p className="text-muted-foreground">One year warranty on workmanship and materials</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

