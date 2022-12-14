import Accordion from 'react-bootstrap/Accordion';

function SortBy() {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Timings</Accordion.Header>
        <Accordion.Body>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                6:00 AM - 9:00 AM
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                9:00 AM - 12:00 PM
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                12:00 PM - 3:00 PM
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                3:00 PM - 6:00 PM
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                6:00 PM - 9:00 PM
              </label>
            </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Days</Accordion.Header>
        <Accordion.Body>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="form-check-label" for="flexCheckDefault">
                Monday
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="form-check-label" for="flexCheckDefault">
                Tuesday
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="form-check-label" for="flexCheckDefault">
                Wednesday
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="form-check-label" for="flexCheckDefault">
                Thursday
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="form-check-label" for="flexCheckDefault">
                Friday
              </label>
            </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Miscellaneous</Accordion.Header>
        <Accordion.Body>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="form-check-label" for="flexCheckDefault">
                Show Prerequisite Classes
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="form-check-label" for="flexCheckDefault">
                Show Conflicting Classes
              </label>
            </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default SortBy;