"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"]



export function CostBreakdown({ data, setData }) {
    const [newCost, setNewCost] = useState({ name: "", value: 0 })

    const handleAddCost = () => {
        if (newCost.name && newCost.value > 0) {
            setData([...data, newCost])
            setNewCost({ name: "", value: 0 })
        }
    }

    const handleUpdateCost = (index, value) => {
        const updatedData = [...data]
        updatedData[index].value = value
        setData(updatedData)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl">Cost Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-[400px] mb-8">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={150}
                                fill="#8884d8"
                                dataKey="value"
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="space-y-4">
                    {data.map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                            <Input
                                type="text"
                                value={item.name}
                                onChange={(e) => {
                                    const updatedData = [...data]
                                    updatedData[index].name = e.target.value
                                    setData(updatedData)
                                }}
                            />
                            <Input
                                type="number"
                                value={item.value}
                                onChange={(e) => handleUpdateCost(index, Number(e.target.value))}
                            />
                        </div>
                    ))}
                    <div className="flex items-center space-x-2">
                        <Input
                            type="text"
                            placeholder="New cost name"
                            value={newCost.name}
                            onChange={(e) => setNewCost({ ...newCost, name: e.target.value })}
                        />
                        <Input
                            type="number"
                            placeholder="Value"
                            value={newCost.value}
                            onChange={(e) => setNewCost({ ...newCost, value: Number(e.target.value) })}
                        />
                        <Button onClick={handleAddCost}>Add</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

