import React from 'react'
import tscvideo from './assets/tvid10.mp4'
import tscmobile from './assets/tscVideo2.mp4'
import './stylesheets/header.css'

export default function Header () {
  
return(

<div className='header'>
  <video playsInline autoPlay muted loop className='tsc-video' id='tsc-dsk'>
        <source
          src={tscvideo}
          type="video/mp4"
        />
      </video>

        <video playsInline autoPlay muted loop className='tsc-video' id='tsc-mb'>
        <source
          src={tscmobile}
          type="video/mp4"
        />
      </video>
<div className='header-text'>
 <div>TSC</div>
 <small className='tsc-name'>trupti samuel consultancy</small>
      <div className='header-subtext'>
        Working with families to build a solid foundation at home. 
      </div>
</div>
     
</div>

)

}