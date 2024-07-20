// type rfc for getting this react component bcoz we haved added extension ES6 something
import React from 'react'
// this below line also imported using "impt" only bcoz of that extension
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {  //here I'm passing props like this wherever i want to use i can use
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> {/*here we have used for the mode*/}
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>  {/*here used*/}
                    {/* <Link className="navbar-brand" to="/">{props.title}</Link>  here used */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                                {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="/about">{props.aboutText}</a>  here used props */}
                                {/* <Link className="nav-link" to="/about">{props.aboutText}</Link>  here used props */}
                            </li>

                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
                                <label class="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}


// this is bcoz od that we can pass only string in the prop type if we pass like int it will thorw error
// this is just like a check
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

// Specifies the default values for props:
Navbar.defaultProps = {
    title: 'set title here',
    aboutText: 'AboutText here'
};
