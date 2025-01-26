"use client";

import { UserButton } from '@clerk/nextjs';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Clock, Users, ChefHat, Utensils } from 'lucide-react'
import { BidDraftUI } from '@/components/bid-draft-ui';

function RecipePage() {
  const { projectId } = useParams();
  const [project, setProject] = useState([]);

  useEffect(() => {
    getProject();
  }, []);

  const getProject = async () => {
    try {
      const result = await axios.get('/api/viewProject?projectId=' + projectId);
      setProject(result.data.result);
      console.log(result.data.result);
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  }

  if (!project) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className='min-h-screen bg-gray-100'>
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Bid Draft for {project?.projectLayout?.bid_draft?.["1_project_overview"]?.project_name}</h1>
          <BidDraftUI project={ project} />
      </div>
      </div>
    </div>
  )
}

export default RecipePage;
