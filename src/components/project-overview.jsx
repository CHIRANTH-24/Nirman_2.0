import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Calendar, FileText } from "lucide-react"

export function ProjectOverview(project) {
    
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
                        <p className="text-lg font-semibold">{project?.project?.location}</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <Calendar className="h-8 w-8 text-primary" />
                    <div>
                        <p className="text-sm text-muted-foreground">Deadline Completion Date</p>
                        <p className="text-lg font-semibold">{project?.project?.deadline}</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <FileText className="h-8 w-8 text-primary mt-1" />
                    <div>
                        <p className="text-sm text-muted-foreground">Scope of Work</p>
                        <p className="text-lg">{project?.project?.projectLayout?.bid_draft?.['1_project_overview']?.scope_of_work}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

