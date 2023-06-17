import { Row, Col, Image, Container, Stack, Badge} from 'react-bootstrap';
import SkillBadge from './SkillBadge';


export default function JobList({ jobs, addFilter, filteredSkills }) {

    /**
     * Prop function used to change parent component's status of passed skill name.
     * @param {string} skill | String representing skill name.
     */
    const addSkillFilter = (skill) => {
        console.log("Adding skill: ", skill)
        addFilter(skill)
    };

    // Converts JSON Object representing status of all skills into a list of strings of all skills with a status === true.
    const desiredFilter = Object.entries(filteredSkills).filter(([skillName, status]) => status === true).map(([skillName, status]) => skillName);;

    return (
        <>
            <Container>
                <Stack gap={3}>
                    {jobs.map((job) =>
                        desiredFilter.every(skill => job.skills.some(jobSkill => jobSkill.toLowerCase() === skill.toLowerCase())) &&
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
                                                <SkillBadge skill={skill} status={filteredSkills[skill.toLowerCase()]} addSkillFilter={addSkillFilter} />
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

