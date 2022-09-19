const Projects = () => {
    return (
        <div className='projects' id='projects'>
          <div className='project-spacer'></div>
          <div className='project-slider'>
            <div className='project-item-container'>
              <div className='project-text-container'>
          <h3>
           Arther
          </h3>
          <p>
            Arther is a website that connect freelancers to cosumers.  Built with ReactJS, Ruby on Rails and postgreSQL Arther is easily scalable.
          </p>
              </div>
          <div className='laptop-card' >
          {/* <img className='card1-bg' src='arther-bg.png'/> */}
          </div>
          {/* <button className='card-btn card-btn-1'>Check it out</button>
          <button className='card-btn card-btn-2' >See the repo</button> */}
            </div>
            <div className='project-item-container middle-project-container'>
              <div className='project-text-container'>
          <h3>
            Banana
          </h3>
          <p>
            Banana is a e-commerce site built using postgrSQL, ExpressJS and ReactJS.  The store brings fun back into shopping and makingcustomres go bananas for the great deals.
          </p>
              </div>
          <div className='laptop-card2' >
          {/* <img className='card2-bg' src='bananBG.png'/> */}
          </div>
          {/* <img className='card1-bg' src='comp-BG.png'/> */}
          {/* <button className='card-btn card-btn-1'>Check it out</button>
          <button className='card-btn card-btn-2' >See the repo</button> */}
            </div>
            <div className='project-item-container'>
              <div className='project-text-container'>
          <h3>
            Coming soon...
          </h3>
          <p>
            This project with be released 10/07/2022
          </p>
              </div>
          <div className='laptop-card' >
            </div>
          {/* <img className='card1-bg' src='comp-BG.png'/> */}
          {/* <button className='card-btn card-btn-1'>Check it out</button>
          <button className='card-btn card-btn-2' >See the repo</button> */}
            </div>
          </div>
          
        </div>
    )
}

export default Projects