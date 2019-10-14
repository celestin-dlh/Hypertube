import React from 'react';

/* Style */
import '../style/sidebar.css';

//import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


export default function Sidebar() {

    return (
        <SideNav
            onSelect={(selected) => {
                // Add your code here
            }}
            className="bg-dark dark"
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home" className="bg-dark dark">
                <NavItem eventKey="home">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText style={{color: "white"}}>
                        Home
                    </NavText>
                </NavItem>
                <NavItem eventKey="movies">
                    <NavIcon>
                        <i className="fa fa-fw fa-film text-white" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText style={{color: "white"}}>
                        Movies
                    </NavText>
                </NavItem>
                <NavItem eventKey="settings">
                    <NavIcon>
                        <i className="fa fa-fw fa-user-cog text-white" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText style={{color: "white"}}>
                        User Settings
                    </NavText>
                    <NavItem eventKey="charts/linechart">
                        <NavText style={{color: "white"}}>
                            Line Chart
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="charts/barchart">
                        <NavText style={{color: "white"}}>
                            Bar Chart
                        </NavText>
                    </NavItem>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    )

}