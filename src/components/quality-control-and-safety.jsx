import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, CheckCircle } from "lucide-react"

export function QualityControlAndSafety() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl">Quality Control and Safety Analysis</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
                <div className="flex items-start space-x-4">
                    <ShieldCheck className="h-8 w-8 text-green-500 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold">Safety Plan</h3>
                        <p className="text-muted-foreground">Comprehensive safety plan in place to minimize workplace hazards.</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <CheckCircle className="h-8 w-8 text-blue-500 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold">Quality Assurance</h3>
                        <p className="text-muted-foreground">
                            Stringent quality control measures to ensure the project meets specifications.
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

