return (
    
    <div className="App">

        <SearchAddCourse />

        
        {data.map((course, index)=>{

          return(
            <table className="table table-responsive ">
              <thead>
                  <tr>
                      <th scope="col">{course.name}</th>
                  </tr>
                  <tr> <Requirement isRequired={course.isRequired}/> </tr>
                  <tr> <PrereqSat isPrereqSat={course.isPrereqSat}/> </tr>
              </thead>
              <tbody>
              {course.sessions.map((session, i)=>{
                    return(
                      <table className="table table-responsive ">
                          <thead>
                              <tr>
                                  <th scope="col">{session.section}</th>
                              </tr>
                              
                          </thead>
                          <tbody>
                              <tr>Professor {session.prof}</tr>
                              <tr>{session.day}</tr>
                              <tr>{session.time}</tr>
                              <tr>{session.loc}</tr>
                              <tr> <Conflicted isConflicted={session.isConflicted}/> </tr>
                              <AddClassPopup/>
                              
                              
                          
                          </tbody>
                      </table>
                    )
                  })}


              </tbody>
            </table>
          )
        })}
        
              
    </div>
    
  );