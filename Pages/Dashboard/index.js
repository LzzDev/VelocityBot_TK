import React from 'react'
import { Switch, Route } from 'react-router-dom';

import DashboardView from './SubPages/Dashboard'
import Servers from './SubPages/Servers'

function Dashboard() {
    return (
        <Switch>
            <Route path="/dashboard" exact component={() => <DashboardView />} />
            <Route path="/dashboard/servers" exact component={ () => <Servers /> } />
        </Switch>
    )
}

export default Dashboard
