import { useState } from "react"
import { Button } from 'react-bootstrap';


export default function JobList({ skill }) {
    const [buttonState, setButtonState] = useState(false)

    const handleClick = () => {
        setButtonState(!buttonState);
    }


    return (
        <>
            {!buttonState && <Button className='fs-6 fw-bold emerald-btn' onClick={handleClick}>{skill}</Button>}
            {buttonState && <Button className='fs-6 fw-bold emerald-btn-inverted' onClick={handleClick}>{skill}</Button>}
        </>
    )
}

