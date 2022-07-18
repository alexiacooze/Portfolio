import React from 'react'
import "../Avro/Avro.scss"

export default function Avro() {
  return (
    <section className='avro'>
    <div>
      <p className='avro__title'>Avro</p>
      <video></video>
      <p  className='avro__description-title'>Description</p>
      <p className='avro__description'>This is a project that i had completed while freelancing. I have created a front-end focused website for a a biotech company. At the core, they wanted to eloquently translate their passion for science into a a visual/ virtual experience. The website includes all core aspects of the team, the technology, and the company's future plans.</p>
      <p>Installation and Code:</p>
      <p>The demo above includes the general experience of navigating the website. The repositories/ code can be found within github. If you are interested in downloading the code, you will need to click on the GitHub link below, where you will need to navigate to the bottom of the page. Near the bottom there will be a document that says README.md, which will include all of the essential information for downloading the essential code, and running the front end browser, and backend server from your own computer.  </p>
      {/* <img alt='github'>
    github: "https://github.com/alexiacooze/bandsite</img> */}

    </div>
  </section>
  )
}

