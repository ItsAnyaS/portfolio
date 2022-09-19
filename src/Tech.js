const Tech = () => {
return (
    <div className='my-tech'>
          <h2>My technologies</h2>
    <div id="multi-item-example" class="carousel slide carousel-multi-item  tech-container" data-ride="carousel" style={{width: '50%', height: '20%', marginTop: '0.5em', display: 'flex', justifyContent: 'center', paddingTop: '1%'}}>
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <div class="row">
            <div class="col-md-4">
              <div class="card mb-2">
                  <ion-icon class="card-img-top" name="logo-css3"></ion-icon>
              </div>
            </div>
            <div class="col-md-4 clearfix d-none d-md-block">
              <div class="card mb-2">
              <ion-icon className='"d-block w-100' name="logo-html5"></ion-icon>
              </div>
            </div>
            <div class="col-md-4 clearfix d-none d-md-block">
              <div class="card mb-2">
              <ion-icon className='"d-block w-100' name="logo-react"></ion-icon>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">

          <div class="row">
            <div class="col-md-4">
              <div class="card mb-2">
              <ion-icon className='"d-block w-100' name="logo-nodejs"></ion-icon>
              </div>
            </div>

            <div class="col-md-4 clearfix d-none d-md-block">
              <div class="card mb-2">
              <ion-icon className='"d-block w-100' name="git-branch-outline"></ion-icon>
              </div>
            </div>
            <div class="col-md-4 clearfix d-none d-md-block">
              <div class="card mb-2">
              <ion-icon className='"d-block w-100' name="diamond-outline"></ion-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
)
}

export default Tech