import { useState } from "react"
import axios from 'axios'
import './Converter.css'

export const Converter = () => {
  const [formData, setFormData] = useState({
  from: '',
  to: '',
  amount: 1
  })
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')
  const currencyCodes = ['GTQ', 'EUR', 'MXN', 'USD', 'HNL', 'CRC']
  const url = 'http://localhost:2656/convert'

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData((prevData)=>({
      ...prevData,
      [name]: value
  }))
  }
    
  const handleSubmit = async(e)=>{
    e.preventDefault()
    try{
      const { data } = await axios.post(url, formData)
      console.log(data)
      setResult(data)
      setError('')
    }catch(err){
      setResult('')     
      setError({
        "Error":
        err?.response ? err?.response.data?.message : err?.message
      })
    }
  }

  return (
    <div>
      <section className="converter">
        <form onSubmit={handleSubmit}>
          <select 
          className="input"
          name = "from"
          value={formData.from}
          onChange={handleChange}
          >

            <option value="">Select from currency</option>
            {
              currencyCodes.map(code =>(
                <option key={code} value={code}>
                  {code}
                </option>
              ))
            }
          </select>

          <select
          className="input"
            name = "to"
            value={formData.to}
          onChange={handleChange}
          >
            <option value="">Select to Currency</option>
            {
              currencyCodes.map(code =>(
                <option key={code} value={code}>
                  {code}
                </option>
              ))
            }
              </select>
              <input
                className="input"
                name = "amount"
                type="number"
                value = {formData.amount}
                onChange={handleChange}
                placeholder="Amount"
                />
                <button className="submit-btn" type="submit">
                  Convert
                </button>
        </form>
        { //INYECCIONES DE CÓDIGO JS
            result && (
                <div className="result">
                    <p>Conversion Rate: {result.conversonRate}</p>
                    <h2>Conversion Amount: {result.convertedAmount}</h2>
                </div>
            )
        }
        {
            error && <p>Error: {error.Error}</p>
        }
      </section>
    </div>
  )
}
