import React from 'react'
import "./iconsDev.css"

import icons from '../JS/arrayIconsDev'

export default function IconsDev() {
    return (
        <div className='container-icons-general'>
            {
                icons.map((icon, i) =>
                    <img src={icon} className='icon-general' key={i} />
                )
            }
        </div>
    )
}