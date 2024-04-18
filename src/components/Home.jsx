import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Center from './Center'
import Rightside from './Rightside'
import Leftside from './Leftside'
import './Style.css';


function Home() {
  return (
    <div>
      <div className='row'>
          <div className='col-sm-12'>
              <Header/>
          </div>
      </div>
      <div className='row'>
          <div className='col-sm-3'>
              <Rightside/>
          </div>
          <div className='col-sm-6'>
              <Center/>
          </div>
          <div className='col-sm-3'>
              <Leftside/>
          </div>
      </div>
      <div className='row'>
          <div className='col-sm-12'>
              <Footer/>
          </div>
      </div>
      
    </div>
  )
}

export default Home
