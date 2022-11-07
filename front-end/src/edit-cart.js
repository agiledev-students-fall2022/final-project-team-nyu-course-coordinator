import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import AddClassPopup from './Components/AddClassPopup.js';

import ReactDeleteRow from 'react-delete-row'


function EditCart() {
  const [input, setInput] = useState("")
  const [submittedInput, setSubmittedInput] = useState("")

  //prop.data
  const [data, setData] = useState(
    [{ name: "CSCI 480- Agile Development and DevOps", 
        isRequired: true, 
        isPrereqSat: true, 
        sessions:
          [{section: 2,
            prof: "John Doe",
            day: "Monday, Wednesday",
            time: 10301145,
            loc: "Silver 420",
            isConflicted: true},
          {section: 4,
            prof: "John Doe",
            day: "Tuesday, Thursday",
            time: 12301345,
            loc: "Silver 409",
            isConflicted: true}]
      },
      { name: "MATH 121 - Discrete Mathematics", 
        isRequired: true, 
        isPrereqSat: true, 
        sessions:
          [{section: 2,
            prof: "John Doe",
            day: "Monday, Wednesday",
            time: 10301145,
            loc: "Silver 420",
            isConflicted: true},
          {section: 4,
            prof: "John Doe",
            day: "Tuesday, Thursday",
            time: 12301345,
            loc: "Silver 409",
            isConflicted: false}]
      },
      { name: "MATH 200 - Calculus IV", 
        isRequired: false, 
        isPrereqSat: false, 
        sessions:
          [{section: 2,
            prof: "John Doe",
            day: "Monday, Wednesday",
            time: 10301145,
            loc: "Silver 420",
            isConflicted: false},
          {section: 4,
            prof: "John Doe",
            day: "Tuesday, Thursday",
            time: 12301345,
            loc: "Silver 409",
            isConflicted: false}]
      },

    ])

  const SearchAddCourse= ()=>{

    const handleClick= (e)=>{
      setSubmittedInput(input)
    
      //hardcode the columns
      const updateData= [...data,{
        name: input,
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

  const Remove = (id) =>{
    return("hello")
    // setData(current => current.filter( index => {
    //   return ("index !== id")
    // }))
  }

  const RemoveBtn=(props) =>{
    const id= props.id
    const isRequired= props.isRequired
    if (!isRequired){
      return (
        <button type='button' onClick={console.log("hello")}>Remove</button>
      )
    }
  }

  const Requirement=(props) => {
    const isRequired= props.isRequired
    if (isRequired){
      return ("Required for your major")
    }
    else {
      return ("Not required for your major")
    }
  }

  const PrereqSat=(props) => {
    const isPrereqSat= props.isPrereqSat
    if (isPrereqSat){
      return ("All prerequisites satisfied")
    }
    else {
      return ("Prerequisite Required")
    }
  }

  const Time=(props) => {
    let time= props.time.toString()
    const startH= time.substring(0,2)
    const startM= time.substring(2,4)
    const endH= time.substring(4,6)
    const endM= time.substring(6,8)
    time= startH + ":" + startM + "~" + endH + ":" + endM
    return(time)
  }

  const Conflicted=(props) => {
    const isConflicted= props.isConflicted
    if (isConflicted){
      return ("You have conflicting classes")
    }
  }
  
  
  return (
      <div>
          <SearchAddCourse />
          {data.map((course, index)=>{
              return(
                <div className="scheduleBox">
                    <h2>{course.name}</h2>
                    <div><RemoveBtn id= {index} isRequired={course.isRequired}/> </div>
                    <ul>
                      <li> <Requirement isRequired={course.isRequired}/> </li>
                      <li> <PrereqSat isPrereqSat={course.isPrereqSat}/> </li>
                    </ul>
                    
                    <h3>Available Sessions</h3>
                    {course.sessions.map((session, i)=>{
                      return(
                        <div className="sessions">
                        <h4>Section {session.section}</h4>
                        <p className="sessionInfo">Professor {session.prof}</p>
                        <p className="sessionInfo">{session.day}</p>
                        <p className="sessionInfo"><Time time={session.time} /> </p>
                        <p className="sessionInfo">{session.loc}</p>
                        <span className="badge rounded-pill text-bg-warning"><Conflicted isConflicted={session.isConflicted}/></span>
                        <br />
                        <AddClassPopup/>
                    </div>
                      )
                    })}
                </div>
              )
          })}
      </div>
        
        
  )
  
      
}

export default EditCart;
