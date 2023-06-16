import { Row, Col, Image, Container, Stack, Badge } from 'react-bootstrap';

export default function JobList({ jobs }) {

    return (
        <>
            {console.log(jobs)}
            <Container>
                <Stack gap={3}>
                    {jobs.map((job) =>
                        <div className="bg-white border p-4" key={job.id}>
                            <Row>
                                <Col xs={6}>
                                    <Row>
                                        <Col xs={3}>
                                            <Image src={require("../Assets/" + job.img + ".svg")} roundedCircle className='mx-4' />
                                        </Col>

                                        <Col>
                                            <Stack direction="horizontal" gap={3}>
                                                <span className='text-emerald fw-bold'>{job.company}</span>
                                                {job.tags.map(tag => 
                                                    <>
                                                        {tag === "NEW!" && <Badge pill className="bg-emerald">{tag}</Badge>}
                                                        {tag === "FEATURED" && <Badge pill className="bg-dark">{tag}</Badge>}
                                                    </>)}
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

                                <Col xs={6}>
                                    {job.skills}
                                </Col>
                            </Row>
                        </div>
                    )}
                </Stack>
            </Container>
        </>
    );
}

