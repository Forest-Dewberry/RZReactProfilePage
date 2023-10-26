import { RESUME } from '../../shared/RESUME'

const ResumeItems = ({ section }) => {
    const items = RESUME[0][section]

    // Check if items is an array before trying to map over it
    if (!Array.isArray(items)) {
        return null // or return some fallback UI
    }

    return (
        <>
            <h3 className='resume-title'>{section}</h3>
            {items.map((item, index) => (
                <div className='resume-item' key={index}>
                    <h4>{item.heading}</h4>
                    <h5>{item.date}</h5>
                    <p>
                        <em>{item.location}</em>
                    </p>
                    <ul>{/* li item bullets could go here*/}</ul>
                </div>
            ))}
        </>
    )
}

export default ResumeItems
