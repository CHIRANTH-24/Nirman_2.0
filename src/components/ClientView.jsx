import React from 'react'
import ProjectList from './ProjectList'

const ClientView = () => {
  return (
    <div>
      <div className="p-6 border rounded-lg bg-gray-100 dark:bg-gray-800">
              <h2 className="text-lg font-bold">Client Dashboard</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Welcome to the client view. Here you can manage your projects and track progress.
              </p>
      </div>
      <ProjectList />
    </div>
  )
}

export default ClientView
