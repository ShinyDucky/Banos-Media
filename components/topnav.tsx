import React from 'react';
import heading from "@public/banos_media_heading.png"

export function topnav() {
  return (
  <>
    <div className='topnav'>
      <h3>A site created by ShinyDuck21</h3>
    </div>
    <div className='heading'> { /* classname='heading' basically assigns everything in that group the class of 'heading' */ }
      <img src={heading.src} />
    </div>
  </>
)}
