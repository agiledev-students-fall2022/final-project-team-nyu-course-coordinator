import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'

import ReactDeleteRow from 'react-delete-row'


function EditCart() {
  const [input, setInput] = useState("")
  const [submittedInput, setSubmittedInput] = useState("")

  //prop.data
  const [data, setData] = useState([{ section: 'MATH 200 - Calculus IV' },{ section: 'lorum ipsum'},{ section: 'lorum ipsum' }])

  const SearchAddCourse= ()=>{

    const handleClick= (e)=>{
      setSubmittedInput(input)
    
      //hardcode the columns
      const updateData= [...data,{
        section: input,
      }]
      setData(updateData)

      e.preventDefault()

    }

    return (
      <>
        <div className="Search">
          <form className="Search Form">
            <input
              className="search-input"
              key= "course-search"
              type="text"
              placeholder="Enter course ID (eg. CSCI-UA 480)"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="blue-btn" onClick={handleClick}>Search</button>
          </form>
          
          
        </div>
      </>
    )
  }
  
  return (
    
    <div className="App">

        <SearchAddCourse />

        <table className="table table-responsive ">
          <thead>
              <tr>
                  <th scope="col">Course</th>
                  <th scope="col">🗑️</th>
              </tr>
          </thead>
          <tbody>
              { data.map((item, i) => { return (
              <ReactDeleteRow key={i} data={item} onDelete={ item => { return window.confirm(`Are you sure?`) }}>
                  <td>{item.section}</td>
              </ReactDeleteRow>
              )}) }
          </tbody>
        
      </table>
              
    </div>
    
  );
}

export default EditCart;
