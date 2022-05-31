import { Route, Routes as Switcher } from 'react-router-dom'

import { Dashboard } from '../pages/Dashboard'

export const Routes = () => {
    return (
        <Switcher>
            <Route path ='/' element={<Dashboard />} >
            </Route>
        </Switcher>
    )
}