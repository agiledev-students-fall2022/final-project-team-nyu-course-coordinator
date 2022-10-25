import Accordion from 'react-bootstrap/Accordion';

function SortBy() {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Start Time</Accordion.Header>
        <Accordion.Body>
            Filter out classes based on start time
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>End Time</Accordion.Header>
        <Accordion.Body>
            Filter out classes based on end time
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Open/Wailtlisted Class</Accordion.Header>
        <Accordion.Body>
            Only show open or wailtlisted classes
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default SortBy;