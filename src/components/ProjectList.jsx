"use client";
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard';

const ProjectList = () => {
    const [projectList, setprojectList] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
          GetprojectList();
    }, [])

    const GetprojectList = async () => {
        setLoading(true);
        const result = await axios.get("/api/sample");
        setprojectList(result.data.result);
        console.log(result.data.result);
        setLoading(false);
    }
    return (
        <div>
            {loading && <p>Loading...</p>}
            {!loading && projectList.length === 0 && <p>No projects available.</p>}
            {projectList.map((project, index) => (
            <div key={index}>
                <ProjectCard project={project} /> {/* Pass individual project data */}
            </div>
        ))}
            
        </div>
    )
}

export default ProjectList