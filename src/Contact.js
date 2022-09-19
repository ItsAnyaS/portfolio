const Contact = () => {
return (
    <div id='contact' className='contact'>
    <h1>Let's chat!</h1>
   <span className='span'><ion-icon name="call-outline"></ion-icon><a href="tel:347-825-9968">(347)-825-9968</a></span>
   <span className='span'><ion-icon name="mail-outline"></ion-icon><a href = "mailto: anyasirman@outlook.com">anyasirman@outlook</a></span>
   <div className='social-contianer'>
   <a href='https://www.linkedin.com/in/anastasiasirman/' rel="noreferrer" target='_blank'><ion-icon name="logo-linkedin"></ion-icon></a>
   <a href='https://github.com/itsAnyaS' target='_blank' rel="noreferrer"><ion-icon name="logo-github"></ion-icon></a>
    
    </div>
  </div>
)
}

export default Contact