import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "../animal/AnimalProvider"
import "./Location.css"
import { useHistory, useParams } from 'react-router-dom';

export const LocationForm = () => {
   
    const { getLocations, addLocation, getLocationById, updateLocation } = useContext(LocationContext)

    //for edit, hold on to state of animal in this view
    const [location, setLocation] = useState({})
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    const {locationId} = useParams();
	  const history = useHistory();

    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {
      //When changing a state object or array,
      //always create a copy make changes, and then set state.
      const newLocation = { ...location }
      //animal is an object with properties.
      //set the property to the new value
      newLocation[event.target.name] = event.target.value
      //update state
      setLocation(newLocation)
    }

    const handleSaveLocation = () => {
      if (parseInt(location.id) === 0) {
          window.alert("Please select a location")
      } else {
        //disable the button - no extra clicks
        setIsLoading(true);
        if (location.id){
          //PUT - update
          updateLocation({
              id: location.id,
              name: location.name,
              address: location.address
          })
          .then(() => history.push(`/locations/detail/${location.id}`))
        }else {
          //POST - add
          addLocation({
              id: location.id,
              name: location.name,
              address: location.address
          })
          .then(() => history.push("/locations"))
        }
      }
    }

    // Get customers and locations. If animalId is in the URL, getAnimalById
    useEffect(() => {
      getLocations().then(() => {
        if (locationId){
          getLocationById(locationId)
          .then(location => {
              setLocation(location)
              setIsLoading(false)
          })
        } else {
          setIsLoading(false)
        }
      })
    }, [])

    //since state controlls this component, we no longer need
    //useRef(null) or ref

    return (
      <form className="locationForm">
        <h2 className="locationForm__title">Edit Location</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="locationName">Location Name: </label>
            <input type="text" id="locationName" name="name" required autoFocus className="form-control"
            placeholder="Location Name"
            onChange={handleControlledInputChange}
            defaultValue={location.name}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="locationAddress">Location Address: </label>
            <input type="text" id="locationAddress" name="name" required autoFocus className="form-control"
            placeholder="Location Address"
            onChange={handleControlledInputChange}
            defaultValue={location.address}/>
          </div>
        </fieldset>
        
        <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveLocation()
          }}>
        {locationId ? <>Save Location</> : <>Update Location</>}</button>
      </form>
    )
}