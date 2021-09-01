import 'assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Error404 from 'components/common/PageNotFound'
import DashboardPage from 'components/inner/dashboard/DashboardPage'
import ServicesPage from 'components/inner/services/ServicesPage'
import AboutPage from 'components/inner/about/AboutPage'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = ({ ...props }) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={DashboardPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route component={Error404} />
      </Switch>
    </Router>
  )
}
export default App
