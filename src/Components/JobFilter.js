import { Container, Row, Button, ButtonGroup, Col } from 'react-bootstrap';


export default function JobFilter({ filteredSkills, removeFilter }) {

  const removeSkillFilter = (skillName) => {
    console.log("Removing skill:", skillName)
    removeFilter(skillName)
  }

  const removeAllFilters = () => {
    console.log("Removing all filters..");
    filteredSkillArray.forEach(skill => {
      if (skill["status"]) removeSkillFilter(skill["name"])
    })
  }

  const filteredSkillArray = Object.keys(filteredSkills).map((key) => {
    return {
      name: key.charAt(0).toUpperCase() + key.slice(1),
      status: filteredSkills[key]
    };
  });

  return (
    <>
      <Container>
        <Row className="bg-white border p-3 pt-0 mb-5 rounded">
          <Col xs={11}>
            <Row>

              {filteredSkillArray.map((skill) =>
                skill["status"] &&
                <Col xs={2} className='my-3 d-flex justify-content-center' key={skill["name"]}>
                  <ButtonGroup aria-label="Basic example">
                    <Button disabled className='fs-6 fw-bold emerald-btn'>{skill["name"]} </Button>
                    <Button className='emerald-btn-inverted py-0' onClick={() => removeSkillFilter(skill["name"])}> <span className='fs-3'>&times;</span></Button>
                  </ButtonGroup>
                </Col>

              )}
            </Row>
          </Col>

          <Col xs={1} className='pt-3 ps-3 text-end'>
            <Button variant="link" className='fs-5 fw-bold text-emerald text-decoration-underline' onClick={removeAllFilters}>Clear</Button>
          </Col>


        </Row>
      </Container>
    </>
  );
}

