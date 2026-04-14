import React from 'react'
import {useState} from 'react'
import {createRoot} from 'react'
import {useNavigate} from 'react-router-dom'

function Employees(list) {


    return (
        <div>
            <AddE />
            {list.map()}
        </div>
    )
}