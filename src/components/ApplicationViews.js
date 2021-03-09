import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { AnimalForm } from "./animal/AnimalForm"
import { AnimalDetail } from "./animal/AnimalDetail"
import { EmployeeDetail } from "./employee/EmployeeDetail"
import { LocationDetail } from "./location/LocationDetail"
import { LocationForm } from "./location/LocationForm"
import { EmployeeForm } from "./employee/EmployeeForm"
import { AnimalSearch } from "./animal/AnimalSearch"


export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <Route exact path="/animals/detail/:animalId(\d+)">
                    <AnimalDetail />
                </Route>
                <LocationProvider>
                    <CustomerProvider>
                <Route exact path="/animals">
                    <AnimalSearch />
                    <AnimalList />
                </Route>
                <Route exact path="/animals/create">
                    <AnimalForm />
                </Route>
                <Route path="/animals/edit/:animalId(\d+)">
                    <AnimalForm />
                </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
                <Route exact path="/locations/detail/:locationId(\d+)">
                    <LocationDetail />
                </Route>
                <Route path="/locations/edit/:locationId(\d+)">
                    <LocationForm />
                </Route>
            </LocationProvider>

            <CustomerProvider>
                <Route exact path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <EmployeeProvider>
                <LocationProvider>
                    <Route exact path="/employees">
                        <EmployeeList />
                    </Route>
                    <Route exact path="/employees/detail/:employeeId(\d+)">
                        <EmployeeDetail />
                    </Route>
                    <Route path="/employees/edit/:employeeId(\d+)">
                        <EmployeeForm />
                    </Route>
                </LocationProvider>
            </EmployeeProvider>
        </>
    )
}