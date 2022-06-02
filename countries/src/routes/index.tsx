import { Route, Routes as Switcher } from 'react-router-dom'

import { Country } from '../pages/Country'
import { Dashboard } from '../pages/Dashboard'
import { RoutesProps } from '../types'

export const Routes = ({ setCountries, countries }: RoutesProps) => {
    return (
        <Switcher>
            <Route path ='/' element={<Dashboard  setCountries={setCountries} countries={countries}  />} />
            <Route path ='/country/:name' element={<Country setCountries={setCountries} countries={countries} />} />
        </Switcher>
    )
}