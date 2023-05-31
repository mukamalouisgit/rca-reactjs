import React, { useState } from 'react'

function Form() {
    const [carMake, setCarMake] = useState('')
    const [carModel, setCarModel] = useState('')
    const [year, setYear] = useState('')
    const [mileage, setMileage] = useState(0)
    const [condition, setCondition] = useState('')
    const [features, setFeatures] = useState([])
    const [transmission, setTransimission] = useState('')
    const [priceRange, setPriceRange] = useState(0)
    const [contactNumber, setContactNumber] = useState('')
    const [errors, setErrors] = useState({});

    const handleFeatureChange = (e) => {
        if(e.target.checked){
            setFeatures([...features, e.target.value])
        } else{
            setFeatures(features.filter((feature) => feature !== e.target.value));
        }
    }
   const handleSubmit = (e) => {
    e.preventDefault()
    const formData =  {
        carMake,
        carModel,
        year,
        mileage,
        condition,
        features,
        transmission,
        priceRange,
        contactNumber,
    }
    
    const newErrors = {};
    if (carMake.trim() === '') {
      newErrors.carMake = 'Car Make is required';
    }
    if (carModel.trim() === '') {
      newErrors.carModel = 'Car Model is required';
    }
    if (year === '') {
      newErrors.year = 'Year is required';
    }
    if (mileage <= 0) {
      newErrors.mileage = 'Mileage must be greater than 0';
    }
    if (condition === '') {
      newErrors.condition = 'Condition is required';
    }
    if (features.length === 0) {
      newErrors.features = 'At least one feature must be selected';
    }
    if (transmission === '') {
      newErrors.transmission = 'Transmission is required';
    }
    if (priceRange <= 0) {
      newErrors.priceRange = 'Price Range must be greater than 0';
    }
    if (contactNumber.trim() === '') {
      newErrors.contactNumber = 'Contact Number is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log(formData);
      setCarMake("");
      setCarModel("")
      setCondition("");
      setContactNumber("")
      setFeatures([])
      setMileage(0)
      setTransimission("")
      setYear('')
      setPriceRange(0)
      setErrors({});
      // Perform further actions with the form data
    }

    
   }


  return (
    <div className='container'>
        <div className='image-container'>op
            {/* <p>Hi am celled class</p> */}
        </div>
    <form onSubmit={handleSubmit}>
        <h1>Techcar Registration</h1>
        <p>Fill out the form below to provide details about your car. We'll use this information to help you sell your car or find potential buyers. Please ensure that all required fields are filled out accurately.</p>

        <div>
            <label>Car Make: </label>
            {/** Handling the text inputs*/}
            <input
            type='text'
            value={carMake}
            onChange={(e) => setCarMake(e.target.value)}
            />
            {errors.carMake && <div className="error">{errors.carMake}</div>}
        </div>
        <div>
            <label>Car Model: </label>
            <input
            type='text'
            value={carModel}
            onChange={(e) => setCarModel(e.target.value)}
            />
            {errors.carModel && <div className="error">{errors.carModel}</div>}
        </div>
        <div>
            <label>Year : </label>
            {/**Handling the years and the dates */}
            <input type='date' value={year} onChange={(e) => setYear(e.target.value)} />
            {errors.year && <div className="error">{errors.year}</div>}
        </div>
        <div>
            <label>Mileage : </label>
            {/** Handling the number inputs */}
            <input type='number' value={mileage} onChange={(e) => setMileage(parseInt(e.target.value))} />
            {errors.mileage && <div className="error">{errors.mileage}</div>}
        </div>
        <div>
  <label>Condition:</label>
  <div>
    <label>
      <input
        type="radio"
        value="Excellent"
        checked={condition === "Excellent"}
        onChange={(e) => setCondition(e.target.value)}
      />
      Excellent
    </label>
  </div>
  <div>
    <label>
      <input
        type="radio"
        value="Good"
        checked={condition === "Good"}
        onChange={(e) => setCondition(e.target.value)}
      />
      Good
    </label>
  </div>
  <div>
    <label>
      <input
        type="radio"
        value="Fair"
        checked={condition === "Fair"}
        onChange={(e) => setCondition(e.target.value)}
      />
      Fair
    </label>
  </div>
  <div>
    <label>
      <input
        type="radio"
        value="Poor"
        checked={condition === "Poor"}
        onChange={(e) => setCondition(e.target.value)}
      />
      Poor
    </label>
  </div>
  {errors.condition && <div className="error">{errors.condition}</div>}
</div>

<div>
  <label>Features: </label>
  <div>
    <label>
      <input
        type="checkbox"
        value="Air conditioning"
        checked={features.includes("Air conditioning")}
        onChange={handleFeatureChange}
      />
      Air conditioning
    </label>
  </div>
  <div>
    <label>
      <input
        type="checkbox"
        value="Power Steering"
        checked={features.includes("Power Steering")}
        onChange={handleFeatureChange}
      />
      Power Steering
    </label>
  </div>
  <div>
    <label>
      <input
        type="checkbox"
        value="Power Windows"
        checked={features.includes("Power Windows")}
        onChange={handleFeatureChange}
      />
      Power Windows
    </label>
  </div>
  <div>
    <label>
      <input
        type="checkbox"
        value="ABS"
        checked={features.includes("ABS")}
        onChange={handleFeatureChange}
      />
      ABS
    </label>
  </div>
  <div>
    <label>
      <input
        type="checkbox"
        value="Navigation System"
        checked={features.includes("Navigation System")}
        onChange={handleFeatureChange}
      />
      Navigation System
    </label>
  </div>
  {errors.features && <div className="error">{errors.features}</div>}
</div>

        <div>
            <label>Transmission: </label>
            <select 
            value={transmission}
            onChange={(e) => setTransimission(e.target.value)}
                >
                <option value="">Set Transmission</option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
            </select>
            {errors.transmission && <div className="error">{errors.transmission}</div>}
        </div>
        <div>
            <label>Price range: </label>
            <p>{priceRange}$</p>
            <input 
            type='range'
            min='100000' 
            max= '1000000'
            value={priceRange}
            onChange={(e) => setPriceRange(parseInt(e.target.value)) }/>
            {errors.priceRange && <div className="error">{errors.priceRange}</div>}
        </div>
        <div>
            <label>Contact Number : </label>
            <input 
            type="text"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}/>
            {errors.contactNumber && <div className="error">{errors.contactNumber}</div>}
        </div>
        <button type="submit">Submit</button>
    </form>
    </div>
    
  )
}

export default Form