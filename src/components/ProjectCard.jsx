import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

function ProjectCard({project}) {
    return (
        <div style={{
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '16px',
            width: '350px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            fontFamily: 'Arial, sans-serif'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '15px'
            }}>
                <h2 style={{
                    fontSize: '22px',
                    fontWeight: 'bold',
                    color: '#333',
                    margin: 0
                }}>
                    {project?.name}
                </h2>
                <span style={{
                    backgroundColor: '#2e7d32',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px'
                }}>
                    Active Bidder
                </span>
            </div>

            <div style={{
                backgroundColor: '#f5f5f5',
                padding: '12px',
                borderRadius: '6px',
                marginBottom: '12px'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '8px'
                }}>
                    <span style={{ color: '#666', fontWeight: '500' }}>Bid Range:</span>
                    <span style={{ fontWeight: 'bold', color: '#1565c0' }}>${project?.minBid} - ${project?.budgetAmount }</span>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '8px'
                }}>
                    <span style={{ color: '#666', fontWeight: '500' }}>Total Budget:</span>
                    <span style={{ fontWeight: 'bold', color: '#d32f2f' }}>{project?.budgetAmount }</span>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <span style={{ color: '#666', fontWeight: '500' }}>Bid Submission Date:</span>
                    <span style={{ fontWeight: 'bold', color: '#424242' }}>{ project?.deadline}</span>
                </div>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <span style={{ color: '#666', fontSize: '14px' }}>Project Ref: #{project?.id }</span>
                <Link href={'dashboard/project' + project?.projectId}>
                <Button>
                    View Details
                    </Button>
                </Link>
                    
                
            </div>
        </div>
    );
}

export default ProjectCard;