import { Row, Col, Image, Container, Stack, Badge, Button } from 'react-bootstrap';
import SkillBadge from './SkillBadge';
import { useEffect, useState } from 'react';

const initSkills = {frontend: false, senior: false, html: false, css: false, javascript: false, fullstack: false, midweight: false, python: false, react: false, junior: false, sass: false, ruby: false, backend: false, ror: false, vue: false, django: false};

export default function JobList({ jobs, addFilter }) {
    const [filteredSkills, setFilteredSkills] = useState(initSkills)

    const addSkillFilter = (skill) => {
        console.log("Adding skill: ", skill)
        setFilteredSkills((prevSkills) => ({
          ...prevSkills,
          [skill.toLowerCase()]: true,
        }));
      };

    useEffect(() => {
        addFilter(filteredSkills);
    }, [filteredSkills])

    return (
        <>
            <Container>
                <Stack gap={3}>
                    {jobs.map((job) =>
                        <div className="bg-white border p-4 rounded" key={job.id}>
                            <Row>
                                <Col xs={6}>
                                    <Row>
                                        <Col xs={3}>
                                            <Image src={require("../Assets/" + job.img + ".svg")} roundedCircle className='mx-4' />
                                        </Col>

                                        <Col>
                                            <Stack direction="horizontal" gap={3}>
                                                <span className='text-emerald fw-bold'>{job.company}</span>
                                                {job.tags.map((tag, index) =>
                                                    <div key={index}>
                                                        {tag === "NEW!" && <Badge pill className="bg-emerald">{tag}</Badge>}
                                                        {tag === "FEATURED" && <Badge pill className="bg-dark">{tag}</Badge>}
                                                    </div>)}
                                            </Stack>

                                            <h5 className='text-emerald fw-bold mt-2'>{job.jobTitle}</h5>

                                            <Stack direction="horizontal" gap={2}>
                                                <span>{job.time}</span>
                                                &#183;
                                                <span>{job.contract}</span>
                                                &#183;
                                                <span>{job.location}</span>
                                            </Stack>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col xs={6} className='d-flex justify-content-center align-items-center'>
                                    <Stack direction="horizontal" gap={3}>
                                        {job.skills.map((skill, index) =>
                                            <div key={index} >
                                                <SkillBadge skill={skill} status={filteredSkills[skill.toLowerCase()]} addSkillFilter={addSkillFilter}/>
                                            </div>)}
                                    </Stack>
                                </Col>
                            </Row>
                        </div>
                    )}
                </Stack>
            </Container>
        </>
    );
}

