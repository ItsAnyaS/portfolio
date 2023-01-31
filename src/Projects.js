const Projects = () => {
    return (
        <div className='projects' id='projects'>
          <div className='project-spacer'></div>
          <div className='project-slider'>

          <div className='project-item-container'>
              <div className='project-text-container'>
          <h3>
            POS
          </h3>
          <p>
          POS is a Point of sale terminal designed to work on any platform with limited computing power. This app uses, ReactTs, ExpressJs, js-cookies, bcrypt, JWT and js-cookies. 
          </p>
          <button className="project-btn"><a href="https://github.com/ItsAnyaS/POS" target='_blanck'>Repo</a></button>
          <button className="project-btn"><a href="https://point-of-sale.herokuapp.com/" target='_blanck'>View Site</a></button>
          {/* <button className="project-btn">View Demo</button> */}
              </div>
              <div className='laptop-card'></div>
            </div>

            <div className='project-item-container'>
              <div className='project-text-container'>
            <h3>Callbck</h3>
          <p>
            With Callbck dancers no longer need to wonder if they got the role or if they were out of the runnings a long time ago.  Callbck creates an all in one ecosystem for companies to post auditions for dancers, send callbcks, mark dancers as hired and remove them from the running.
          </p>
          <button className="project-btn"><a href="https://github.com/ItsAnyaS/Callbck" target='_blanck'>Repo</a></button>
          <button className="project-btn"><a href="https://www.youtube.com/watch?v=SWORJYAQhMM" target='_blanck'>View Site</a></button>
              </div>
          <div className='laptop-card3' >
          </div>
            </div>
            <div className='project-item-container middle-project-container'>
              <div className='project-text-container'>
          <h3>
            Banana
          </h3>
          <p>
            Banana is a e-commerce site built using postgrSQL, ExpressJS and ReactJS.  The store brings fun back into shopping and making customers go bananas for the great deals.
          </p>
          <button className="project-btn"><a href="https://github.com/ItsAnyaS/banana" target='_blanck'>Repo</a></button>
          {/* <button className="project-btn"><a href="https://www.youtube.com/" target='_blanck'>View Demo</a></button> */}
              </div>
          <div className='laptop-card2' >

          </div>
        
            </div>
          
          </div>
          
        </div>
    )
}

export default Projects