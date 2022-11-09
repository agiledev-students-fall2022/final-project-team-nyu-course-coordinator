import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from 'react'
import AddClassPopup from './Components/AddClassPopup.js';
import {} from 'react-redux'
import axios from 'axios';


function EditCart() {

  //prop.data
  const [data, setData] = useState([])

  const initialData = async() => {
    
    axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/load-courses`)
        .then(res => {
            setData(res.data)
        })
        .catch(err => {
          console.log(`ERROR: ${err}`)
        })
    }


  useEffect(() => {
    initialData()
  }, [])



  const SearchAddCourse= ()=>{
    const [input, setInput] = useState("")
    const [submittedInput, setSubmittedInput] = useState("")

    async function handleClick(e){
      e.preventDefault()
      setSubmittedInput(input)
      const url=`/Allclasses/add/?name=${submittedInput}`
      
      axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/${url}`)
        .then(res => {
          const updatedData= [...data, ...res.data]
            setData(updatedData)
        })
        .catch(err => {
          console.log(`ERROR: ${err}`)
        })

      

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

  async function handleRemove(id, e){
    // setData(data.filter((course,index) => index !== id))
    e.preventDefault()
    const unwanted= data.filter((course,index) => index === id)
    const ID = unwanted._id
    const url=`/Allclasses/remove/?id=${ID}`
      
    axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/${url}`)
      .then(res => {
        const updatedData= [...data, ...res.data]
          setData(updatedData)
      })
      .catch(err => {
        console.log(`ERROR: ${err}`)
      })
  }


  const RemoveBtn=(props) =>{
    const id= props.id
    const isRequired= props.isRequired
    
    if (!isRequired){
      
      //to do: save data to db
      return (
        <button onClick={()=> handleRemove(id) }>
          Remove from Cart
        </button>
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
