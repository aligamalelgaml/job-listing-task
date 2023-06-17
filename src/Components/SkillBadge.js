import { Button } from 'react-bootstrap';


export default function JobList({ skill, addSkillFilter, status }) {

    const handleClick = () => {
        addSkillFilter(skill);
    }

    return (
        <>
            {!status && <Button className='fs-6 fw-bold emerald-btn' onClick={handleClick}>{skill}</Button>}
            {status && <Button disabled className='fs-6 fw-bold emerald-btn-inverted'>{skill}</Button>}
        </>
    )
}

