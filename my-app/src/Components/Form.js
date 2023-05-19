
import { useState } from 'react';
import "./Form.css"

function Form() {
 

  const [formData, setFormData] = useState({
    Manufacturer: '',
    Model:'',
    Year:'',
    Milleage: 0,
    Condition: '',
    Features: [],
    Transmission: '',
    Price:0,
    Contacts:''
  })

  const onChangeHandler = (event) => {

    console.log(event)
    if (event.target.name === 'Features') {

      let copy = { ...formData }

      if (event.target.checked) {
        copy.Features.push(event.target.value)
      } else {
        copy.Features = copy.Features.filter(el => el !== event.target.value)
      }

      setFormData(copy)

    } else {
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value
      }))
    }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    console.log(formData)
  }
  return (
    <div className="App">
      <form onSubmit={onSubmitHandler}>
        <h2>Sell Now</h2>
        
        <div className="form-group">
          <label htmlFor="maker" className="form-label">Car Manufacturer:</label>
          <br/>
          <input id="maker" className="form-control" name="Manufacturer" onChange={onChangeHandler} value={formData.Manufacturer} />
        </div>
        <div className="form-group">
          <label htmlFor="model" className="form-label">Car Model:</label>
          <br/>
          <input id="model" className="form-control" name="Model" onChange={onChangeHandler} value={formData.Model} />
        </div>
        <div className="form-group">
          <label htmlFor="year" className="form-label">Year:</label>
          <br/>
          <input type="date" className="form-control"  id="year" name="Year" onChange={onChangeHandler} value={formData.Year} />
        </div>
        <div className="form-group">
          <label htmlFor="mileage" className="form-label">Mileage:</label>
          <br/>
          <input type="number" className="form-control" id="milleage"name="Milleage" onChange={onChangeHandler} value={formData.Milleage} />
        </div>
        <div className="form-group">
          <label htmlFor="mileage" className="form-label">Price</label>
          <br/>
          <input type="range" className="form-control" id="price" name="Price" onChange={onChangeHandler} value={formData.Price} />
        </div>
        <div className="form-group">
          <label htmlFor="contacts" className="form-label">Contacts</label>
          <br/>
          <input className="form-control" name="Contacts" id="contacts" onChange={onChangeHandler} value={formData.Contacts} />
        </div>
        <br/>
        <div className="form-group">
          <label htmlFor="occupation" className="form-label">Transmission</label>
        <br/>
          <select className="form-select" name="Transmission" onChange={onChangeHandler} value={formData.Transmission}>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
        </div>
        <br/>
        
        <div className="form-group">
          <label htmlFor="Condition" className="form-label">Condition</label>
          </div>
          <div>
        
              <input className="radios" type="radio" name="Condition" value="Excellent" onChange={onChangeHandler} checked={formData.Condition === 'Excellent'} />
              <label htmlFor="male">Excellent</label>
            
            
              <input type="radio" className="radios" name="Condition" value="Good" onChange={onChangeHandler} checked={formData.Condition === 'Good'} />
              <label htmlFor="female">Good</label>
        
            
              <input type="radio"  className="radios" name="Condition" value="Fair" onChange={onChangeHandler} checked={formData.Condition === 'Fair'} />
              <label htmlFor="other">Fair</label>
            
    
              <input type="radio" className="radios" name="Condition" value="Poor" onChange={onChangeHandler} checked={formData.Condition === 'Poor'} />
              <label htmlFor="other">Poor</label>
            
          </div>
                 
        <div className="form-group">
          <label htmlFor="gender" className="form-label">Features</label>
          <div>
            <div>
              <input  className="checks" type="checkbox" name="Features" value="Air Conditioning" onChange={onChangeHandler} checked={formData.Features.indexOf('Air Conditioning') !== -1} />
              <label htmlFor="html">Air Conditioning</label>
            </div>
            <div>
              <input className="checks" type="checkbox" name="Features" value="Power Steering" onChange={onChangeHandler} checked={formData.Features.indexOf('Power Steering') !== -1} />
              <label htmlFor="css">Power Steering</label>
            </div>
            <div>
              <input className="checks" type="checkbox" name="Features" value="Power Windows" onChange={onChangeHandler} checked={formData.Features.indexOf('Power Windows') !== -1} />
              <label htmlFor="javascript">Power Windows</label>
            </div>
            <div>
              <input  className="checks" type="checkbox" name="Features" value="ABS" onChange={onChangeHandler} checked={formData.Features.indexOf('ABS') !== -1} />
              <label htmlFor="javascript">ABS</label>
            </div>
            <div>
              <input className="checks" type="checkbox" name="Features" value="Navigation System" onChange={onChangeHandler} checked={formData.Features.indexOf('Navigation System') !== -1} />
              <label htmlFor="javascript">Navigation System</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <button className="btn" type="submit" >Buy</button>
        </div>
    
      </form>
    </div>
  );
}

export default Form;
