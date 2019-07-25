<div class="component-content" id="button">
  <div class="component-header">
    <h2 class="component-title">Button</h2>
  </div>
  <div class="component-body container">
    <div class="row">
      <div class="options container col-md-6">
        <section class="options">
          <h3>Options</h3>
          <p>Select your options:</p>
          <form>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="btn-text">Button text</label>
              </div>
              <input type="text" class="form-control" id="btn-text" aria-label="btn-text" placeholder="Button text">
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="btn-style">Button color</label>
                  </div>
                  <select class="custom-select" id="btn-style">
                    <option value="primary" selected>Primary</option>
                    <option value="secondary">Secondary</option>
                  </select>
                </div>
              </div>
              <div class="form-group col-md-6">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="btn-width">Button width</label>
                  </div>
                  <select class="custom-select" id="btn-width">
                    <option value="" selected>Standard</option>
                    <option value=" btn-block">Full-width</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-4">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="btn-tag">Tags</label>
                  </div>
                  <select class="custom-select" id="btn-tag">
                    <option value="button" selected>button</option>
                    <option value="a">a</option>
<!--                    <option value="input">input</option> -->
                  </select>
                  <small id="btn-tag-help" class="form-text text-muted">Select 'a' to add a hyperlink.</small>
                </div>
              </div>
              <div class="form-group col-md-8" id="btn-link-field">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="btn-link">Link</label>
                  </div>
                  <input type="text" class="form-control" id="btn-link" aria-label="btn-link" placeholder="#">
                </div>
              </div>
            </div>

            <div class="input-group">
              <div class="input-group-prepend">
                <label class="input-group-text" for="btn-icon">Icons</label>
              </div>
              <select class="custom-select" id="btn-icon" aria-label="Icon selector">
                <option selected>Choose...</option>
                <option value="1">set</option>
                <option value="2">list</option>
                <option value="3">of</option>
                <option value="4">icons</option>
                <option value="5">from</option>
                <option value="6">UX</option>
              </select>
              <div class="input-group-append">
                <button class="btn btn-outline-secondary no-margin btn-icon disabled" type="button">Prepend</button>
                <button class="btn btn-outline-secondary no-margin btn-icon disabled" type="button">Append</button>
              </div>
            </div>
          </form>
        </section>
      </div>
      <div class="col-md-6 container">
        <section class="preview">
          <h3 class="preview-title">Preview</h3>
          <div id="btn-preview-pane">
            <button type="button" class="btn btn-primary" disabled>Button Text</button>
          </div>
        </section>
        <section class="component-code">
          <div class="code-header">
            <h3 class="code-title">Code</h3>
            <button class="btn btn-outline-primary" id="copy-btn-code">Copy Code</button>
          </div>
          <div class="code-box">
            <pre class="code-text">
<span id="btn-print-code"><span id="code-open-tag">&lt;<span class="code-btn-tag">button</span>&#32;<span id="code-btn-type">type&#61;&#34;<span id="code-btn-type-value">button</span>&#34;&#32;</span><span id="code-btn-link">href&#61;&#34;<span id="code-btn-link-text">#</span>&#34;&#32;</span>class&#61;&#34;<span id="code-btn-class-style">btn&#32;btn&#45;primary</span><span id="code-btn-class-width"></span>&#34;<span id="code-btn-value">&#32;value&#61;&#34;<span class="code-btn-text" id="code-btn-value-text"></span>&#34;</span>&gt;</span>
  <span class="code-btn-text" id="code-btn-text">Button Text</span>
<span id="code-close-tag">&lt;&#47;<span class="code-btn-tag">button</span>&gt;</span></span>
            </pre>
          </div>
        </section>
      </div>
    </div>
  </div>  
</div>