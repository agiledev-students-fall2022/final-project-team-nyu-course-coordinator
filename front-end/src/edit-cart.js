import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from 'react'
import AddClassPopup from './Components/AddClassPopup.js';
import {} from 'react-redux'
import axios from 'axios';


function EditCart() {

  //prop.data
  const [data, setData] = useState([]) 
  //data is an array of objects

  const initialData = async() => { 
    //get data from db
    
    axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/load-courses`) 
    //get data from db
        .then(res => {
            setData(res.data) 
            //set data to the data from db
        })
        .catch(err => {
          console.log(`ERROR: ${err}`) 
          //error handling
        })
    }


  useEffect(() => { 
    //useEffect is a hook that runs after every render
    initialData() 
    //get data from db
  }, [])



  const SearchAddCourse= ()=>{  
    //search and add course
    const [input, setInput] = useState("") 
    //input is the text in the search bar
    const [submittedInput, setSubmittedInput] = useState("")
    //submittedInput is the text that has been submitted

    async function handleClick(e){ 
      //when the search button is clicked
      e.preventDefault() //prevent page from refreshing
      setSubmittedInput(input)
      //set submittedInput to the text in the search bar
      const url=`/Allclasses/add/?name=${submittedInput}`
      //url is the url to get data from db
      
      axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/${url}`) //get data from db
        .then(res => {
          const updatedData= [...data, ...res.data]
            setData(updatedData)
        }) // set data to the data from db
        .catch(err => {
          console.log(`ERROR: ${err}`)
        }) // error handling

      

    }

    return ( //return the search bar
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

  async function handleRemove(id, e){ //remove course from cart
    // setData(data.filter((course,index) => index !== id))
    e.preventDefault() // prevent page from refreshing
    const unwanted= data.filter((course,index) => index === id) //get the course that is to be removed
    const ID = unwanted._id //get the id of the course that is to be removed
    const url=`/Allclasses/remove/?id=${ID}` //url to remove course from db
      
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

// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {useState} from 'react'
// import AddClassPopup from './Components/AddClassPopup.js';

// import ReactDeleteRow from 'react-delete-row'


// function EditCart() {
//   const [input, setInput] = useState("")
//   const [submittedInput, setSubmittedInput] = useState("")

//   //prop.data
//   const [data, setData] = useState(
//     [{ name: "CSCI 480- Agile Development and DevOps", 
//         isRequired: true, 
//         isPrereqSat: true, 
//         sessions:
//           [{section: 2,
//             prof: "John Doe",
//             day: "Monday, Wednesday",
//             time: 10301145,
//             loc: "Silver 420",
//             isConflicted: true},
//           {section: 4,
//             prof: "John Doe",
//             day: "Tuesday, Thursday",
//             time: 12301345,
//             loc: "Silver 409",
//             isConflicted: true}]
//       },
//       { name: "MATH 121 - Discrete Mathematics", 
//         isRequired: true, 
//         isPrereqSat: true, 
//         sessions:
//           [{section: 2,
//             prof: "John Doe",
//             day: "Monday, Wednesday",
//             time: 10301145,
//             loc: "Silver 420",
//             isConflicted: true},
//           {section: 4,
//             prof: "John Doe",
//             day: "Tuesday, Thursday",
//             time: 12301345,
//             loc: "Silver 409",
//             isConflicted: false}]
//       },
//       { name: "MATH 200 - Calculus IV", 
//         isRequired: false, 
//         isPrereqSat: false, 
//         sessions:
//           [{section: 2,
//             prof: "John Doe",
//             day: "Monday, Wednesday",
//             time: 10301145,
//             loc: "Silver 420",
//             isConflicted: false},
//           {section: 4,
//             prof: "John Doe",
//             day: "Tuesday, Thursday",
//             time: 12301345,
//             loc: "Silver 409",
//             isConflicted: false}]
//       }

//     ])

//   const SearchAddCourse= ()=>{

//     const handleClick= (e)=>{
//       setSubmittedInput(input)
    
//       //hardcode the columns
//       const updateData= [...data,{
//         name: input,
//       }]
//       setData(updateData)

//       e.preventDefault()

//     }

//     return (
//       <>
//         <div className="Search">
//           <form className="Search Form">
//             <input
//               className="search-input"
//               key= "course-search"
//               type="text"
//               placeholder="Enter course ID (eg. CSCI-UA 480)"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//             />
//             <button className="blue-btn" onClick={handleClick}>Search</button>
//           </form>
          
          
//         </div>
//       </>
//     )
//   }

//   const handleRemove= (props) => {
//     console.log(props.id)
//     setData(data.filter( (course, index) => index !== props.id))
//   }

//   const RemoveBtn=(props) =>{
//     const id= props.id
//     const isRequired= props.isRequired
//     if (!isRequired){
//       return (
//         <button onClick={(id)=> handleRemove(id) }>Remove</button>
//       )
//     }
//   }

//   const Requirement=(props) => {
//     const isRequired= props.isRequired
//     if (isRequired){
//       return ("Required for your major")
//     }
//     else {
//       return ("Not required for your major")
//     }
//   }

//   const PrereqSat=(props) => {
//     const isPrereqSat= props.isPrereqSat
//     if (isPrereqSat){
//       return ("All prerequisites satisfied")
//     }
//     else {
//       return ("Prerequisite Required")
//     }
//   }

//   const Time=(props) => {
//     let time= props.time.toString()
//     const startH= time.substring(0,2)
//     const startM= time.substring(2,4)
//     const endH= time.substring(4,6)
//     const endM= time.substring(6,8)
//     time= startH + ":" + startM + "~" + endH + ":" + endM
//     return(time)
//   }

//   const Conflicted=(props) => {
//     const isConflicted= props.isConflicted
//     if (isConflicted){
//       return ("You have conflicting classes")
//     }
//   }
  
  
//   return (
//       <div>
//           <SearchAddCourse />
//           {data.map((course, index)=>{
//               return(
//                 <div className="scheduleBox">
//                     <h2>{course.name}</h2>
//                     <div><RemoveBtn id= {index} isRequired={course.isRequired}/> </div>
//                     <ul>
//                       <li> <Requirement isRequired={course.isRequired}/> </li>
//                       <li> <PrereqSat isPrereq Sat={course.isPrereqSat}/> </li>
//                     </ul>
                    
//                     <h3>Available Sessions</h3>
//                     {course.sessions.map((session, i)=>{
//                       return(
//                         <div className="sessions">
//                         <h4>Section {session.section}</h4>
//                         <p className="sessionInfo">Professor {session.prof}</p>
//                         <p className="sessionInfo">{session.day}</p>
//                         <p className="sessionInfo"><Time time={session.time} /> </p>
//                         <p className="sessionInfo">{session.loc}</p>
//                         <span className="badge rounded-pill text-bg-warning"><Conflicted isConflicted={session.isConflicted}/></span>
//                         <br />
//                         <AddClassPopup/>
//                     </div>
//                       )
//                     })}
//                 </div>
//               )
//           })}
//       </div>
        
        
//   )
  
      
// }

// export default EditCart;
}
