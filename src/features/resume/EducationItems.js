import React from 'react'
import { education } from '../../shared/EDUCATION'

const EducationItem = () => {
    return (
        <div>
            <h3 className='resume-title'>Education</h3>
            {education.map((item, index) => {
                const parts = item.description.split('*')
                const description = (
                    <p>
                        {parts.map((part, i) =>
                            i % 2 === 0 ? (
                                part
                            ) : (
                                <a href={item.link}>
                                    <em>{part}</em>
                                </a>
                            )
                        )}
                    </p>
                )

                return (
                    <div className='resume-item' key={index} name={item.name}>
                        <h4>{item.focus}</h4>
                        <h5>{`${item.institution} ${item.date}`}</h5>
                        {description}
                        <ul>{/* li item bullets could go here*/}</ul>
                    </div>
                )
            })}
        </div>
    )
}

export default EducationItem
