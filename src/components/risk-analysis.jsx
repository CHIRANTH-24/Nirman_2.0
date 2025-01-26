"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"



function getSeverityColor(severity) {
    switch (severity.toLowerCase()) {
        case "low":
            return "bg-green-500"
        case "medium":
            return "bg-yellow-500"
        case "high":
            return "bg-red-500"
        default:
            return "bg-gray-500"
    }
}

export function RiskAnalysis({ data, setData }) {
    const [newRisk, setNewRisk] = useState ({ risk: "", severity: "", probability: "" })

    const handleAddRisk = () => {
        if (newRisk.risk && newRisk.severity && newRisk.probability) {
            setData([...data, newRisk])
            setNewRisk({ risk: "", severity: "", probability: "" })
        }
    }

    const handleUpdateRisk = (index, field, value) => {
        const updatedData = [...data]
        updatedData[index][field] = value
        setData(updatedData)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl">Risk Analysis and Management</CardTitle>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="risk-assessment">
                        <AccordionTrigger>Risk Assessment</AccordionTrigger>
                        <AccordionContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Risk</TableHead>
                                        <TableHead>Severity</TableHead>
                                        <TableHead>Probability</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {data.map((risk, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <Input value={risk.risk} onChange={(e) => handleUpdateRisk(index, "risk", e.target.value)} />
                                            </TableCell>
                                            <TableCell>
                                                <Select
                                                    value={risk.severity}
                                                    onValueChange={(value) => handleUpdateRisk(index, "severity", value)}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select severity" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="Low">Low</SelectItem>
                                                        <SelectItem value="Medium">Medium</SelectItem>
                                                        <SelectItem value="High">High</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </TableCell>
                                            <TableCell>
                                                <Select
                                                    value={risk.probability}
                                                    onValueChange={(value) => handleUpdateRisk(index, "probability", value)}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select probability" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="Low">Low</SelectItem>
                                                        <SelectItem value="Medium">Medium</SelectItem>
                                                        <SelectItem value="High">High</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <div className="mt-4 grid grid-cols-3 gap-2">
                                <Input
                                    placeholder="Risk"
                                    value={newRisk.risk}
                                    onChange={(e) => setNewRisk({ ...newRisk, risk: e.target.value })}
                                />
                                <Select value={newRisk.severity} onValueChange={(value) => setNewRisk({ ...newRisk, severity: value })}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select severity" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Low">Low</SelectItem>
                                        <SelectItem value="Medium">Medium</SelectItem>
                                        <SelectItem value="High">High</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Select
                                    value={newRisk.probability}
                                    onValueChange={(value) => setNewRisk({ ...newRisk, probability: value })}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select probability" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Low">Low</SelectItem>
                                        <SelectItem value="Medium">Medium</SelectItem>
                                        <SelectItem value="High">High</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <Button className="mt-2" onClick={handleAddRisk}>
                                Add Risk
                            </Button>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
        </Card>
    )
}

