import PropTypes from 'prop-types'
import AppbarActual from "./AppbarActual"
import Sidebar from "./SIdebar"
import { Outlet } from "react-router-dom"

const Layout= ({ handleLogin })=>{
    return(
        <div>
            <AppbarActual handleLogin={handleLogin} />
            <Sidebar />
            <div className='mainContent'>
                <Outlet />
            </div>
        </div>
    )
}

Layout.propTypes = {
    handleLogin: PropTypes.func.isRequired,
}

export default Layout
