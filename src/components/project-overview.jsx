import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Calendar, FileText } from "lucide-react"

export function ProjectOverview() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl">Project Overview</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
                <div className="flex items-center space-x-4">
                    <MapPin className="h-8 w-8 text-primary" />
                    <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="text-lg font-semibold">Ganga</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <Calendar className="h-8 w-8 text-primary" />
                    <div>
                        <p className="text-sm text-muted-foreground">Deadline Completion Date</p>
                        <p className="text-lg font-semibold">February 5, 2025</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <FileText className="h-8 w-8 text-primary mt-1" />
                    <div>
                        <p className="text-sm text-muted-foreground">Scope of Work</p>
                        <p className="text-lg">Construction of a bridge and river link over the Ganga River.</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

