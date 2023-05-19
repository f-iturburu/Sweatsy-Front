import { useEffect, useRef, useState } from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom'

function VerticalNavbar() {
  const [showNavMobile, setShowNavMobile] = useState(true)
  
  const ref = useRef()

  const handleClickOutside = (e) =>{
    if (!(e.target == ref.current)) {
      setShowNavMobile(false)
    }
  }

    return <>
         <div className="d-flex container-fluid p-0">
         <section id="trigger-nav-on-mobile" className='bg-nav d-flex w-100 d-md-none position-absolute '>
          <button  className='bg-transparent m-0 p-0 border-0 ms-2' onClick={() => setShowNavMobile(true)}>
        <i class="fa-solid fa-bars fa-2x px-4 my-2"></i>
          </button>
        </section>

        <section
          id="offcanvas-nav"
          className="min-height-100 bg-nav flex-column px-4 d-none d-md-flex"
        >
          <NavLink className="text-decoration-none" to="/">
              <div id="logo-container" className="d-flex mt-2 mb-3 text-light">
            <h1 className='righteous-font'>S</h1>
            <h1 id="nav-logo" className="ps-0 righteous-font">
              weatsy
            </h1>
          </div>
          </NavLink>
          <NavLink id="item-container" className="d-flex mt-4" to="/">
          <i className="fa-solid fa-dumbbell fa-1x"></i>
            <h5 id="nav-item-text" className="my-auto ps-3">
              My Workouts
            </h5>
          </NavLink>
          <NavLink id="item-container" className="d-flex mt-4" to="/calendar">
          <i className="fa-solid fa-calendar-days fa-1x ps-1"></i>
            <h5 id="nav-item-text" className="my-auto ps-3">
              Calendar
            </h5>
          </NavLink>
          <NavLink id="item-container" className="d-flex mt-4" to="/friends">
          <i className="fa-solid fa-user-group fa-1x"></i>
            <h5 id="nav-item-text" className="my-auto ps-3">
              Friends
            </h5>
          </NavLink>
          <NavLink id="item-container" className="d-flex mt-4" to="/favourites">
          <i className="fa-solid fa-star fa-1x"></i>
            <h5 id="nav-item-text" className="my-auto ps-3">
              Favourites
            </h5>
          </NavLink>
          <NavLink id="item-container" className="d-flex mt-4" to="/forums">
          <i className="fa-solid fa-comments fa-1x"></i>
            <h5 id="nav-item-text" className="my-auto ps-3">
              Forums
            </h5>
          </NavLink>
 
          <NavLink id="item-container" className="d-flex mt-4" to="/settings">
            <i className="fa-solid fa-gear fa-1x"></i>
            <h5 id="nav-item-text" className="my-auto ps-3">
              Settings
            </h5>
          </NavLink>
          <NavLink id="item-container" className="d-flex mt-4" to="/contactus">
            <i className="fa-solid fa-phone fa-1x"></i>
            <h5 id="nav-item-text" className="my-auto ps-3">
              Contact us
            </h5>
          </NavLink>
          <NavLink id="item-container" className="d-flex mt-auto mb-4">
            <i className="fa-solid fa-power-off fa-1x"></i>
            <h5 id="nav-item-text" className="my-auto ps-3">
              Logout
            </h5>
          </NavLink>
        </section>

       <section className={showNavMobile? 'w-100 min-height-100 position-absolute' :"d-none"} onClick={handleClickOutside}>
        <section
          ref={ref}
          id="offcanvas-nav-mobile"
          className={showNavMobile? "min-height-100 bg-nav flex-column px-4 d-flex d-md-none" : "d-none"}
        >
          <NavLink id="item-container-mobile" className="text-decoration-none" to="/">
              <div id="logo-container-mobile" className="d-flex mt-2 mb-3 text-light">
            <h1 className='righteous-font'>S</h1>
            <h1 id="nav-logo-mobile" className="ps-0 righteous-font">
              weatsy
            </h1>
          </div>
          </NavLink>
          <NavLink id="item-container-mobile" className="d-flex mt-4" to="/">
          <i className="fa-solid fa-dumbbell fa-1x"></i>
            <h5 id="nav-item-text-mobile" className="my-auto ps-3">
              My Workouts
            </h5>
          </NavLink>
          <NavLink id="item-container-mobile"  className="d-flex mt-4" to="/calendar">
          <i className="fa-solid fa-calendar-days fa-1x ps-1"></i>
            <h5 id="nav-item-text-mobile" className="my-auto ps-3">
              Calendar
            </h5>
          </NavLink>
          <NavLink id="item-container-mobile"  className="d-flex mt-4" to="/friends">
          <i className="fa-solid fa-user-group fa-1x"></i>
            <h5 id="nav-item-text-mobile" className="my-auto ps-3">
              Friends
            </h5>
          </NavLink>
          <NavLink id="item-container-mobile"  className="d-flex mt-4" to="/favourites">
          <i className="fa-solid fa-star fa-1x"></i>
            <h5 id="nav-item-text-mobile" className="my-auto ps-3">
              Favourites
            </h5>
          </NavLink>
          <NavLink id="item-container-mobile"  className="d-flex mt-4" to="/forums">
          <i className="fa-solid fa-comments fa-1x"></i>
            <h5 id="nav-item-text-mobile" className="my-auto ps-3">
              Forums
            </h5>
          </NavLink>
 
          <NavLink id="item-container-mobile"  className="d-flex mt-4" to="/settings">
            <i className="fa-solid fa-gear fa-1x"></i>
            <h5 id="nav-item-text-mobile" className="my-auto ps-3">
              Settings
            </h5>
          </NavLink>
          <NavLink id="item-container-mobile" className="d-flex mt-4" to="/contactus">
            <i className="fa-solid fa-phone fa-1x"></i>
            <h5 id="nav-item-text-mobile" className="my-auto ps-3">
              Contact us
            </h5>
          </NavLink>
          <NavLink id="item-container-mobile" className="d-flex mt-auto mb-4">
            <i className="fa-solid fa-power-off fa-1x"></i>
            <h5 id="nav-item-text-mobile" className="my-auto ps-3">
              Logout
            </h5>
          </NavLink>
        </section>

</section>

     
        </div>
    </>
}

export default VerticalNavbar