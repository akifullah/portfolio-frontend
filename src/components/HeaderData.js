import React from 'react'

const HeaderData = (props) => {
    return (
        <>
            <header id='header' >
                <div></div>
                <div className='header-content' data-aos="fade-left">
                    <h5>HELLO, WORLD.</h5>
                    <h1>I'm {props.admin?.name}.</h1>
                    <p><span>

                        {
                            props.admin?.headLine
                        }
                    </span>
                    </p>

                    <a href='#about' >
                        <button className='h-btn btn--ouline  '>
                            MORE ABOUT ME <i className="fa-solid fa-angle-down"></i>
                        </button>
                    </a>

                </div>

                <div className='header-social-icon w-100' data-aos="fade-down">
                    <ul className=' d-flex align-items-center mb-0 justify-content-center pl-0'>

                        <li><a href={props.admin?.fb} target='_blank'><i className={"fa-brands fa-facebook-f"}></i></a></li>
                        <li><a href={props.admin?.in} target='_blank'><i className={"fa-brands fa-linkedin"}></i></a></li>
                        <li><a href={props.admin?.git} target='_blank'><i className={"fa-brands fa-github"}></i></a></li>


                    </ul>
                </div>

            </header>
        </>
    )
}

export default HeaderData
