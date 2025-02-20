import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Clock } from "lucide-react"

export function TimeAndResourceAllocation() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl">Time and Resource Allocation Analysis</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
                <div className="flex items-start space-x-4">
                    <Users className="h-8 w-8 text-blue-500 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold">Workforce Efficiency</h3>
                        <p className="text-muted-foreground">
                            Ensuring optimal resource allocation to maximize workforce productivity.
                        </p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <Clock className="h-8 w-8 text-blue-500 mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold">Project Schedule Feasibility</h3>
                        <p className="text-muted-foreground">
                            The project timeline is achievable with proper planning and resource management.
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

