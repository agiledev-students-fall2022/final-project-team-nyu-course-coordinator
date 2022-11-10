import { Record } from 'react-bootstrap-icons';
import CourseData from './CourseData.json'

function Sample() {
  return (
    <div>
      {
        CourseData && CourseData.map( course => {
          return (
            <div key ={course.Class}>
              {course.Class}
              {course.Sessions.map(data => {
                return (
                  <div key = {course.Class}>

                  </div>
                )
              })}
            </div>
          )
        })
      } 
    </div>
  )
}

const App = () => {
    const [input] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const data = useMemo(() => {
      const even = [];
      const odd = [];
      const prime = [];
  
      for (let i of input) {
        if (isEven(i)) even.push(i);
        if (isOdd(i)) odd.push(i);
        if (isPrime(i)) prime.push(i);
      }
  
      return [
        { label: "Even", values: even },
        { label: "Odd", values: odd },
        { label: "Prime", values: prime },
      ];
    }, [input]);
    const elements = [];
  
    for (let { label, values } of data) {
      elements.push(
        <div>
          {label}: {values.join(", ")}
        </div>
      );
    }
  
    return <div>{elements}</div>;
  };