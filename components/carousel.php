<div class="component-content" id="component-carousel">
  <div class="component-header">
    <h2 class="component-title">Carousel</h2>
    <p><a href="https://keats.kcl.ac.uk/mod/page/view.php?id=3118002" target="_blank">Design System guidance and examples9</a></p>
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
                   <option value="2">2</option>
                   <option value="3" selected>3</option>
                   <option value="4">4</option>
                   <option value="5">5</option>
                   <option value="6">6</option>
                   <option value="7">7</option>
                   <option value="8">8</option>
                </select>
              </div>
              <!-- Option to show or display image -->
            <!-- <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input checked" id="crs-check-img" checked>
              <label class="custom-control-label" id="label-img" for="crs-check-img">Remove image</label>
            </div> -->
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input unchecked" id="crs-check-caption" checked>
              <label class="custom-control-label" id="crs-label-caption" for="crs-check-caption">All Caption Titles</label>
            </div>
          </form>
          <div class="collapse-container" id="crs-collapse-container">

          </div>
        </section>
      </div>
      <div class="col-md-7">
        <section class="preview">
          <h3 class="preview-title">Preview</h3>
          <div class="preview-crs" id="crs-preview-pane">
          <div class="new-carousel landscape-carousel w-100" tabindex="0" role="region" aria-label="gallery">
    <ul class="nc-gallery">        
    </ul>
    <ul class="nc-buttons" aria-label="gallery controls">
        <li>
            <button class="nc-previous btn btn-primary">Previous</button>
        </li>
        <li class="indic-container">
            <ul class="indic-dots" aria-hidden="true">
                <li class="active"></li>               
            </ul>
        </li>
        <li>
            <button class="nc-next btn btn-primary">Next</button>
        </li>
    </ul>
</div>
          </div>
        </section>
        <section class="component-code">
          <div class="code-header">
            <h3 class="code-title">Code</h3>
            <button class="btn btn-secondary" id="copy-crs-code">Copy Code</button>
          </div>
          <div class="code-box">
<pre class="code-text">
<span id="crs-print-code">&#60;div&#32;class&#61;&#34;new&#45;carousel&#32;<span class="crs-type">landscape</span>&#45;carousel&#32;w&#45;100&#34;&#32;tabindex&#61;&#34;0&#34;&#32;role&#61;&#34;region&#34;&#32;aria&#45;label&#61;&#34;gallery&#34;&#62;
  &#60;ul&#32;class&#61;&#34;nc&#45;gallery&#34;&#62;<span id="slides-code-crs"></span>
  &#60;/ul&#62;
  &#60;ul&#32;class&#61;&#34;nc&#45;buttons&#34;&#32;aria&#45;label&#61;&#34;gallery&#32;controls&#34;&#62;
    &#60;li&#62;
      &#60;button&#32;class&#61;&#34;nc&#45;previous&#32;btn&#32;btn&#45;primary&#34;&#32;disabled&#61;&#34;&#34;&#62;Previous&#60;/button&#62;
    &#60;/li&#62;
    &#60;li&#32;class&#61;&#34;indic&#45;container&#34;&#62;
      &#60;ul&#32;class&#61;&#34;indic&#45;dots&#34;&#32;aria&#45;hidden&#61;&#34;true&#34;&#62;
        &#60;li&#32;class&#61;&#34;active&#34;&#62;&#60;/li&#62;<span id="dots-code-crs"></span>
      &#60;/ul&#62;
    &#60;/li&#62;
    &#60;li&#62;
      &#60;button&#32;class&#61;&#34;nc&#45;next&#32;btn&#32;btn&#45;primary&#34;&#62;Next&#60;/button&#62;
    &#60;/li&#62;
  &#60;/ul&#62;
&#60;/div&#62;
  </span>
</pre>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>
