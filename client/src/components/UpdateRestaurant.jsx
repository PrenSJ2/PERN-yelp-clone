import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';
import { useNavigate } from "react-router-dom";


function UpdateRestaurant(props) {
    const { id } = useParams();
    const { restaurants } = useContext(RestaurantsContext);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("");
    let navigate = useNavigate();


    useEffect(() => {
        const fetchData = async() => {
            const response = await RestaurantFinder.get(`/${id}`)
            setName(response.data.data.restaurant.name);
            setLocation(response.data.data.restaurant.location);
            setPriceRange(response.data.data.restaurant.price_range);
        };
        fetchData();
    }, []);
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const updatedRestaurant = await RestaurantFinder.put(`/${id}`, {
            name,
            location,
            price_range: priceRange
        });
        navigate("/");
    }

  return (
    <div>
        <form action="">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className='form-control' id='name' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="location">Location</label>
                <input type="text" className='form-control' id='location'  value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="price_range">Price Range</label>
                <input type="number" className='form-control' id="price_range"  value={priceRange} onChange={(e) => setPriceRange(e.target.value)} />
            </div>
            <button type='submit' onClick={handleSubmit} className='btn btn-primary'>Submit</button>
        </form>
    </div>
  )
}

export default UpdateRestaurant