import { Container, Stack, Button, ButtonGroup, Form, InputGroup } from 'react-bootstrap';


export default function JobFilter({ filteredSkills }) {

  const removeFilter = (skillName) => {
    console.log("Removing:", skillName)
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
        <Stack direction="horizontal" className="bg-white border p-4 mb-5 rounded" gap={3}>
          {filteredSkillArray.map((skill) =>
            <div key={skill["name"]}>
              {skill["status"] &&
                <>
                  <ButtonGroup aria-label="Basic example">
                    <Button disabled className='fs-6 fw-bold emerald-btn'>{skill["name"]} </Button>
                    <Button className='emerald-btn-inverted py-0' onClick={() => removeFilter(skill["name"])}> <span className='fs-3'>&times;</span></Button>
                  </ButtonGroup>

                </>
              }
            </div>
          )}


        </Stack>
      </Container>
    </>
  );
}

