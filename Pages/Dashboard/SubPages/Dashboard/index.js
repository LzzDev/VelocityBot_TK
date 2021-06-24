import React from 'react'
import dashboardSections from './Sections'

import './Dashboard.scss'

function Dashboard() {
    return (
        <div className="dashboard-sections">
            { dashboardSections.map( ( Section ) => (
                <div className="dashboard-section">
                    <Section />
                </div>
            ) ) }
        </div>
    )
}

export default Dashboard
