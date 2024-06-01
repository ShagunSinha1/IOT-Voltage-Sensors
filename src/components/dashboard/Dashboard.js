import React from 'react'
import './Dashboard.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [logout, setLogout] =useState(false);

    const handleMouseOver = () => {
        setLogout(true);
    }
    const handleMouseOut = () => {
        setLogout(false);
    }

    return (
        <div className='display-body'>
            <div className="navbar">
                
                <div className="user_logo" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} title='LOG OUT'>
                    <Link to="/">
                        <img src="/images/icons8-user-64.png" alt="" height={43} width={45} style={{ float: 'right', marginTop: '5px', cursor: 'pointer', marginRight: '2vw' }} />
                    </Link>
                </div>
                
            </div>

            <div className="display-main">
                <div className="display-left">

                    <div className="display">
                        <div className="voltage">
                            <div className="voltage_heading">

                                <h1>Voltage Sensor Data</h1>
                            </div>
                            <div className="voltage_body">
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>

                                    <placeholder id='voltage_placeholder'>Input Voltage</placeholder>
                                    <input type="text" id='voltage_input' />
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                    <placeholder id='voltage_placeholder'>Sensed Voltage</placeholder>
                                    <input type="text" id='voltage_input' />

                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                    <placeholder id='voltage_placeholder'>Output Voltage</placeholder>
                                    <input type="text" id='voltage_input' />

                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                    <placeholder id='voltage_placeholder'>Fault Voltage</placeholder>
                                    <input type="text" id='voltage_input' />

                                </div>

                            </div>

                        </div>
                        <div className="current">
                            <div className="current_heading">
                                <h1>Current Sensor Data</h1>

                            </div>
                            <div className="current_body">
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                    <placeholder id='current_placeholder'>Input Current</placeholder>
                                    <input type="text" id='current_input' />

                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                    <placeholder id='current_placeholder'>Sensed Current</placeholder>
                                    <input type="text" id='current_input' />

                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>

                                    <placeholder id='current_placeholder'>Output Current</placeholder>
                                    <input type="text" id='current_input' />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>

                                    <placeholder id='current_placeholder'>Fault Current</placeholder>
                                    <input type="text" id='current_input' />
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="limit" >
                        <div className="over_voltage_limit">
                            <placeholder >Over Voltage Limit</placeholder>
                            <input type="text" id='over_voltage' />
                        </div>


                        <div className="over_current_limit">
                            <placeholder>Over Current Limit</placeholder>
                            <input type="text" id='over_current' />
                        </div>

                        <div className="under_voltage_limit" >
                            <placeholder >Under Voltage Limit</placeholder>
                            <input type="text" id='under_voltage' />
                        </div>




                    </div>
                </div>

                <div className="display-right">
                    <div className="fault_indicator">
                        <h1>Fault Indicator</h1>
                        <div className="indicator-body">

                            <div className="over_voltage">
                                <div className="indicator_1"></div>
                                <p>Over Voltage</p>
                            </div>
                            <div className="over_current">
                                <div className="indicator_2"></div>
                                <p>Over Current</p>
                            </div>
                            <div className="under_voltage">
                                <div className="indicator_3"></div>
                                <p>Under Voltage</p>
                            </div>
                        </div>


                    </div>

                    <div className="resolution">
                        <h1>Resolution Selection</h1>
                        <div className="resolution-body">

                            <div className="current_res">
                                <placeholder id="current_resolution">Select Current Resolution</placeholder>
                                <select id="current-regulation" >
                                    <option value="">--Select--</option>
                                    <option value="Ampere">Ampere</option>
                                    <option value="MiliAmpere">MiliAmpere</option>
                                    <option value="MicroAmpere">MicroAmpere</option>
                                    <option value="KiloAmpere">KiloAmpere</option>

                                </select>
                            </div>

                            <div className="voltage_res">
                                <placeholder id="voltage_resolution">Select Voltage Resolution</placeholder>
                                <select id="voltage-regulation">
                                    <option value="">--Select--</option>
                                    <option value="Volts">Volts</option>
                                    <option value="MiliVolts">MiliVolts</option>
                                    <option value="MicroVolts">MicroVolts</option>
                                    <option value="KiloVolts">KiloVolts</option>
                                </select>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard