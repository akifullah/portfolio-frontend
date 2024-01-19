import React from 'react'

const Skill = (props) => {
    return (
        <>
            <div className='profile'>
                <h3>Skills</h3>

                {
                    props.skill.map((e, i) => {
                        const value = e.percentage;
                        return (
                            <div className='skill-wrap' key={i}>
                                <h4>{e.name}</h4>
                                <div className='skill-bar'>
                                    <div className='skill-bar-inner' style={{ width: value + "%" }}>
                                        <div className='skill-bar-value'>
                                            {`${value}%`}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }





            </div>
        </>
    )
}

export default Skill
