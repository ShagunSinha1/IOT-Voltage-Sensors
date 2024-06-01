import React from 'react'
import './Poster.css'

const Poster = () => {
    return (
        <div className='main_container'>
            <div style={{ marginRight: '30px' }} >
                <img src="/images/icons8-online-64.png" alt=" image" style={{ float: 'right' }} />
            </div>
            <div style={{ display: 'flex',marginLeft:'15px' }}>

                <div style={{ display: 'flex', flexDirection: 'column' ,marginTop:'20px'}}>
                    <img className='robot_img' src="/images/robot-assistant.svg" alt=""  />
                    <img className='uno_img' src="/images/arduino-uno-board.png" alt=""  />
                    <img className='voltmeter_img' src="/images/icons8-voltmeter-64.png" alt=""  />

                </div>
                <div className="text" >
                    <p>IOT Based </p>
                    <p>Voltage AND Current sensors</p>
                </div>
                
            </div>
            <div className='line' >
                <hr/>
            </div>

        </div>
    )
}

export default Poster