import React from 'react'
import {FruitsProvider} from './FruitsContext'
import FruitsForm from './FruitsForm'
// import FruitsList from './FruitsList'

const Fruits = () => {
    return(
        <FruitsProvider>
            {/* <FruitsList /> */}
            <FruitsForm />
        </FruitsProvider>
    )
}

export default Fruits;