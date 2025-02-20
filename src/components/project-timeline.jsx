"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"



export function ProjectTimeline({ data, setData }) {
    const [newPhase, setNewPhase] = useState ({
        phase: "",
        duration: "",
        startDate: "",
        endDate: "",
    })

    const handleAddPhase = () => {
        if (newPhase.phase && newPhase.duration && newPhase.startDate && newPhase.endDate) {
            setData([...data, newPhase])
            setNewPhase({ phase: "", duration: "", startDate: "", endDate: "" })
        }
    }

    const handleUpdatePhase = (index, field, value) => {
        const updatedData = [...data]
        updatedData[index][field] = value
        setData(updatedData)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl">Project Duration and Timeline</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Phase</TableHead>
                            <TableHead>Duration</TableHead>
                            <TableHead>Start Date</TableHead>
                            <TableHead>End Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((phase, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <Input value={phase.phase} onChange={(e) => handleUpdatePhase(index, "phase", e.target.value)} />
                                </TableCell>
                                <TableCell>
                                    <Input
                                        value={phase.duration}
                                        onChange={(e) => handleUpdatePhase(index, "duration", e.target.value)}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Input
                                        type="date"
                                        value={phase.startDate}
                                        onChange={(e) => handleUpdatePhase(index, "startDate", e.target.value)}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Input
                                        type="date"
                                        value={phase.endDate}
                                        onChange={(e) => handleUpdatePhase(index, "endDate", e.target.value)}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="mt-4 grid grid-cols-4 gap-2">
                    <Input
                        placeholder="Phase"
                        value={newPhase.phase}
                        onChange={(e) => setNewPhase({ ...newPhase, phase: e.target.value })}
                    />
                    <Input
                        placeholder="Duration"
                        value={newPhase.duration}
                        onChange={(e) => setNewPhase({ ...newPhase, duration: e.target.value })}
                    />
                    <Input
                        type="date"
                        value={newPhase.startDate}
                        onChange={(e) => setNewPhase({ ...newPhase, startDate: e.target.value })}
                    />
                    <Input
                        type="date"
                        value={newPhase.endDate}
                        onChange={(e) => setNewPhase({ ...newPhase, endDate: e.target.value })}
                    />
                </div>
                <Button className="mt-2" onClick={handleAddPhase}>
                    Add Phase
                </Button>
            </CardContent>
        </Card>
    )
}

