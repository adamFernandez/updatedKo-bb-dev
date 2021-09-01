<div class="component-content" id="component-timeline">
  <div class="component-header">
    <h2 class="component-title">Timeline</h2>
    <p><a href="https://keats.kcl.ac.uk/mod/page/view.php?id=3118002" target="_blank">Design System guidance and examples</a></p>
  </div>
  <div class="component-body container">
    <div class="alert alert-danger d-none" role="alert" id="timeline-alt-text-alert">
      <p>Please add alternative text for all images.</p>
    </div>
    <div class="row">
      <div class="options col-md-5">
        <section class="options">
          <h3>Options</h3>
          <p>Complete the following fields:</p>
          <form class="needs-validation" id="tl-form" novalidate>
            <!-- <div class="custom-control custom-checkbox mb-3">
              <input type="checkbox" class="custom-control-input" id="timeline-check-label" unchecked>
              <label class="custom-control-label" id="timeline-label-label" for="timeline-check-label">Show All Labels</label>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="timeline-arrows">Choose arrow type for all cards</label>
              </div>
              <select class="custom-select" id="timeline-arrows">
                  <option value="1" selected>Arrow Down</option>
                  <option value="2">Arrow Up</option>
                  <option value="3">Double Arrow</option>
                  <option value="4">Relation</option>
              </select>                
            </div> -->
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="timeline-cards">No. of cards</label>
              </div>
              <select class="custom-select" id="timeline-select">
                  <option value="2">2</option>
                  <option value="3" selected>3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
              </select>
            </div>                
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="timeline-check-caption" checked>
              <label class="custom-control-label" id="timeline-label-caption" for="timeline-check-caption">All Caption Titles</label>
            </div> 
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="timeline-check-img" checked>
              <label class="custom-control-label" id="timeline-label-img" for="timeline-check-img">All Images</label>
            </div>
          </form>
          <div class="collapse-container" id="timeline-collapse-container">
          
          </div>
        </section>
      </div>
      <div class="col-md-7">
        <section class="preview">
          <h3 class="preview-title">Preview</h3>
          <div class="preview-timeline" id="timeline-preview-pane">
            <div class="timeline-container timeline-2021-container">
            </div>
          </div>
        </section>
        <section class="component-code">
          <div class="code-header">
            <h3 class="code-title">Code</h3>
            <button class="btn btn-secondary" id="copy-timeline-code">Copy Code</button>
          </div>
          <div class="code-box">
<pre class="code-text">
<span id="timeline-print-code">&lt;div class=&quot;timeline-container timeline-2021-container&quot;&gt;
<span id="code-timeline"></span>
&lt;/div&gt;</span>
</pre>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>
