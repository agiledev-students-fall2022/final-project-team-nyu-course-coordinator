import Accordion from 'react-bootstrap/Accordion';

function SortBy() {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Timings</Accordion.Header>
        <Accordion.Body>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckDefault">
                6:00 AM - 9:00 AM
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckDefault">
                9:00 AM - 12:00 PM
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckDefault">
                12:00 PM - 3:00 PM
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckDefault">
                3:00 PM - 6:00 PM
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckDefault">
                6:00 PM - 9:00 PM
              </label>
            </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Class Availability</Accordion.Header>
        <Accordion.Body>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckDefault">
                Show Open Classes
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckDefault">
                Show Waitlisted Classes
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckDefault">
                Show Closed Classes
              </label>
            </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Credits</Accordion.Header>
        <Accordion.Body>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckDefault">
                1 credits
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckDefault">
                2 credits
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckDefault">
                3 credits
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckDefault">
                4 credits
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckDefault">
                5+ credits
              </label>
            </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default SortBy;