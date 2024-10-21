import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
   <>
   <div>
       <div className="container align-items-center mt-5  ">
        <div className="calculator  justify-content-center mx-auto">
            <div className="col-12 ">
              <h1 className='text-primary mb-3'>CALCULATE DISCOUNT</h1>
              <p className='text-center'> Determine how many percent off you can get.</p>
<div className="d-grid justify-content-center">
<Link to={'/calculator'}><button className='btn btn-primary'>Calculate</button></Link>
</div>
            </div>
        </div>
      </div>
    </div></>
  )
}

export default Home
