import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'

import ReactDeleteRow from 'react-delete-row'


function EditCart() {
  const [input, setInput] = useState("")
  const [submittedInput, setSubmittedInput] = useState("")

  //prop.data
  const [data, setData] = useState([{ section: 'One', instructor: 'one' },{ section: 'Two', instructor: 'two' },{ section: 'Three', instructor: 'three' }])

  const SearchAddCourse= ()=>{

    const handleClick= (e)=>{
      setSubmittedInput(input)
    
      //hardcode the columns
      const updateData= [...data,{
        section: input,
        instructor: "x"
      }]
      setData(updateData)

      e.preventDefault()

    }

    return (
      <>
        <div className="Search">
          <form className="Search Form">
            <input
              key= "course-search"
              type="text"
              placeholder="Course ID"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleClick}>Search</button>
          </form>
          
          
        </div>
      </>
    )
  }
  
  return (
    
    <div className="App">

        <SearchAddCourse />

        <table className="table">
          <thead>
              <tr>
                  <th scope="col">Section</th>
                  <th scope="col">Instructor</th>
                  <th scope="col"></th>
              </tr>
          </thead>
          <tbody>
              { data.map((item, i) => { return (
              <ReactDeleteRow key={i} data={item} onDelete={ item => { return window.confirm(`Are you sure?`) }}>
                  <td>{item.section}</td>
                  <td>{item.instructor}</td>
              </ReactDeleteRow>
              )}) }
          </tbody>
      </table>
              
    </div>
    
  );
}

export default EditCart;
