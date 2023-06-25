import React from 'react'

const Registration = () => {
  return (
    <div className='registration'>
      <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label">Name</label>
          <input type="text" class="form-control" id="validationCustom01" value="Mark" required />
            <div class="valid-feedback">
              Looks good!
            </div>
        </div>
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label">Email</label>
          <input type="text" class="form-control" id="validationCustom02" value="Otto" required />
            <div class="valid-feedback">
              Looks good!
            </div>
        </div>
        <div class="col-md-4">
          <label for="validationCustomUsername" class="form-label">Password</label>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend">@</span>
            <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
              <div class="invalid-feedback">
                Please choose a username.
              </div>
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">Submit form</button>
        </div>
      </form>
    </div>
  )
}

export default Registration