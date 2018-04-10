import React from 'react'

const VehicleDate = props => ([
    <div key="1">{new Date(props.sec * 1000).toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' })}</div>,
    <div key="2">{new Date(props.sec * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</div>,
])

export default VehicleDate

