import React from 'react'
import {FruitsProvider} from './FruitsContext'
import FruitsForm from './FruitsForm'

const Buah = () => {
    return(
        <FruitsProvider>
            <FruitsForm />
        </FruitsProvider>
    )
}

export default Buah;