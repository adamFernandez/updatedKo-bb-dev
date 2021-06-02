<div class="component-content" id="component-carousel">
  <div class="component-header">
    <h2 class="component-title">Carousel</h2>
    <p><a href="https://keats.kcl.ac.uk/mod/page/view.php?id=3118002" target="_blank">Design System guidance and examples</a></p>
  </div>
  <div class="component-body container">
    <div class="alert alert-danger d-none" role="alert" id="crs-alt-text-alert">
      <p>Please add alternative text for all images.</p>
    </div>
    <div class="row">
      <div class="options col-md-5">
        <section class="options">
          <h3>Options</h3>
          <p>Complete the following fields:</p>
          <form class="needs-validation" id="crs-form" novalidate>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="crs-type">Carousel type</label>
                </div>
                <select class="custom-select" id="crs-type">
                   <option value="1" selected>Landscape</option>
                   <option value="2">Portrait</option>
                </select>
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="crs-slide-no">No. of slides</label>
                </div>
                <select class="custom-select" id="crs-slide-no">
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3" selected>3</option>
                   <option value="4">4</option>
                   <option value="5">5</option>
                   <option value="6">6</option>
                   <option value="7">7</option>
                   <option value="8">8</option>
                </select>
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="crs-id">Unique ID*</label>
                </div>
                <input type="text" class="form-control" id="" aria-label="crsl-id" placeholder="Please give an unique id name" aria-describedby="carousel-unique-id"> 
                <div class="invalid-feedback" id="crsl-id-invalid-feedback">
                  Please enter a unique ID.
                </div>
              </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input checked" id="crs-check-img" checked>
              <label class="custom-control-label" id="label-img" for="crs-check-img">Remove image</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input unchecked" id="crs-check-caption" checked>
              <label class="custom-control-label" id="label-caption" for="crs-check-caption">Remove caption</label>
            </div>
          </form>
          <div class="collapse-container" id="crs-collapse-container">

          </div>
        </section>
      </div>
      <div class="col-md-7">
        <section class="preview">
          <h3 class="preview-title">Preview</h3>
          <div class="preview-dcfs"></div>
          <div class="preview-crs"></div>
        </section>
        <section class="component-code">
          <div class="code-header">
            <h3 class="code-title">Code</h3>
            <button class="btn btn-secondary" id="copy-crsl-code">Copy Code</button>
          </div>
          <div class="code-box">
<pre class="code-text">
  <span id="code-crs"></span>
</pre>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>
