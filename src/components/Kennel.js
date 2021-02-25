import React from "react"
import "./Kennel.css"
import { AnimalCard } from "./animal/AnimalCard"
import "./animal/Animal.css"
import { EmployeeCard } from "./employee/EmployeeCard"
import "./employee/Employee.css"
import { LocationCard } from "./location/LocationCard"
import "./location/Location.css"
import { CustomerCard } from "./customer/CustomerCard"
import "./customer/Customer.css"
import { PropsAndState } from "./PropsAndState"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        <PropsAndState yourName={"John"} />
        <h2>Animals</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>
        <h2>Employees</h2>
        <article className="employees">
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
        </article>
        <h2>Locations</h2>
        <article className="locations">
            <LocationCard />
            <LocationCard />
        </article>
        <h2>Customers</h2>
        <article className="customers">
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
        </article>
    </>
)