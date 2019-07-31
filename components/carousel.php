<div class="component-content" id="component-carousel">
  <div class="component-header">
    <h2 class="component-title">Carousel</h2>
  </div>
  <div class="component-body container">
    <div class="alert alert-instructional mt-3" role="alert">
      <p>Don't forget to link to the css file! - https://git.iddkingsonline.com/designsystem/base.css</p>
    </div>
    <div class="alert alert-danger d-none" role="alert" id="crsl-alt-text-alert">
      <p>Please add alternative text for all images.</p>
    </div>
    <div class="row">
      <div class="options container col-md-5">
        <section class="options">
          <h3>Options</h3>
          <p>Complete the following fields:</p>
          <form class="needs-validation" id="crsl-form" novalidate>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="crsl-slide-no">No. of slides</label>
                </div>
                <select class="custom-select" id="crsl-slide-no">
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
                  <label class="input-group-text" for="crsl-id">Unique ID*</label>
                </div>
                <input type="text" class="form-control" id="crsl-id" aria-label="crsl-id" placeholder="modname-unitno-carousel-no" aria-describedby="carousel-unique-id" required>
                <div class="invalid-feedback" id="crsl-id-invalid-feedback">
                  Please enter a unique ID.
                </div>
              </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input checked" id="crsl-check-img" checked>
              <label class="custom-control-label" for="crsl-check-img"><span id="crsl-toggle-img">Remove</span> image</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input unchecked" id="crsl-check-title">
              <label class="custom-control-label" for="crsl-check-title"><span id="crsl-toggle-title">Add</span> caption title</label>
            </div>
          </form>
          <div id="carousel-slides">
          </div>
        </section>
      </div>
      <div class="col-md-7 container">
        <section class="preview">
          <h3 class="preview-title">Preview</h3>
          <div id="crsl-preview-pane"></div>
        </section>
        <section class="component-code">
          <div class="code-header">
            <h3 class="code-title">Code</h3>
            <button class="btn btn-outline-primary" id="copy-crsl-code">Copy Code</button>
          </div>
          <div class="code-box">
<pre class="code-text"><span id="crsl-print-code"><span class="code-open-tag">&lt;div&#32;id&#61;&#34;<span class="code-crsl-id">modname&#45;unitno&#45;carousel&#45;no</span>&#34;&#32;class&#61;&#34;carousel&#32;slide<span id="code-crsl-text-only"></span>&#34;&#32;data&#45;interval&#61;&#34;false&#34;&#32;data&#45;wrap&#61;&#34;false&#34;&gt;</span>
  <span class="code-open-tag">&lt;ol&#32;class&#61;&#34;carousel&#45;indicators&#34;></span><span id="code-crsl-indicators"></span>
  <span class="code-close-tag">&lt;&#47;ol&gt;</span>
  <span class="code-open-tag">&lt;div&#32;class&#61;&#34;carousel&#45;inner&#34;></span>
    <span id="code-crsl-slides"></span>
  <span class="code-close-tag">&lt;&#47;div&gt;</span>
  <span class="code-open-tag">&lt;a&#32;class&#61;&#34;carousel&#45;control&#45;prev&#34;&#32;href&#61;&#34;&#35;<span class="code-crsl-id">modname&#45;unitno&#45;carousel&#45;no</span>&#34;&#32;role&#61;&#34;button&#34;&#32;data&#45;slide&#61;&#34;prev&#34;&gt;</span>
    <span class="code-open-tag">&lt;span&#32;class&#61;&#34;carousel&#45;control&#32;prev&#45;icon&#34;&#32;aria&#45;hidden&#61;&#34;true&#34;&gt;<span class="code-crsl-i">&lt;i&#32;class&#61;&#34;fas&#32;fa&#45;angle&#45;left&#34;&gt;&lt;&#47;i&gt;</span></span><span class="code-close-tag">&lt;&#47;span&gt;</span>
    <span class="code-open-tag">&lt;span&#32;class&#61;&#34;sr-only&#34;&gt;</span>Previous<span class="code-close-tag">&lt;&#47;span&gt;</span>
  <span class="code-close-tag">&lt;&#47;a&gt;</span>
  <span class="code-open-tag">&lt;a&#32;class&#61;&#34;carousel&#45;control&#45;next&#34;&#32;href&#61;&#34;&#35;<span class="code-crsl-id">modname&#45;unitno&#45;carousel&#45;no</span>&#34;&#32;role&#61;&#34;button&#34;&#32;data&#45;slide&#61;&#34;next&#34;&gt;</span>
    <span class="code-open-tag">&lt;span&#32;class&#61;&#34;carousel&#45;control&#32;next&#45;icon&#34;&#32;aria&#45;hidden&#61;&#34;true&#34;&gt;<span class="code-crsl-i">&lt;i&#32;class&#61;&#34;fas&#32;fa&#45;angle&#45;right&#34;&gt;&lt;&#47;i&gt;</span></span><span class="code-close-tag">&lt;&#47;span&gt;</span>
    <span class="code-open-tag">&lt;span&#32;class&#61;&#34;sr&#45;only&#34;&gt;</span>Next<span class="code-close-tag">&lt;&#47;span&gt;</span>
  <span class="code-close-tag">&lt;&#47;a&gt;</span>
<span class="code-close-tag">&lt;&#47;div&gt;</span></span></pre>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>