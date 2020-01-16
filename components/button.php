<div class="component-content" id="component-button">
  <div class="component-header">
    <h2 class="component-title">Button</h2>
    <a href="https://keats.kcl.ac.uk/mod/page/view.php?id=3118001" target="_blank">Design System guidance and examples</a>
  </div>
  <div class="component-body container">
    <div class="row">
      <div class="options col-md-6">
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
                    <label class="input-group-text" for="btn-size">Button size</label>
                  </div>
                  <select class="custom-select" id="btn-size">
                    <option value="standard" selected>Standard</option>
                    <option value="large">Large</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="btn-tag">Tags</label>
                  </div>
                  <select class="custom-select" id="btn-tag">
                    <option value="button" selected>button</option>
                    <option value="a">a</option>
                  </select>
                </div>
                <small id="btn-tag-help" class="form-text text-muted">Select 'a' to add a hyperlink.</small>
              </div>
              <div class="form-group col-md-8" id="btn-link-field" style="display:none">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="btn-link">Link</label>
                  </div>
                  <input type="text" class="form-control" id="btn-link" aria-label="btn-link" placeholder="#">
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
      <div class="col-md-6">
        <section class="preview">
          <h3 class="preview-title">Preview</h3>
          <div id="btn-preview-pane">
            <button type="button" class="btn btn-primary">Button Text</button>
          </div>
        </section>
        <section class="component-code">
          <div class="code-header">
            <h3 class="code-title">Code</h3>
            <button class="btn btn-secondary" id="copy-btn-code">Copy Code</button>
          </div>
          <div class="code-box">
            <pre class="code-text">
<span id="btn-print-code"><span class="code-open-tag">&lt;<span class="code-btn-tag">button</span>&#32;<span id="code-btn-link"></span><span id="code-btn-type">type&#61;&#34;button&#34&#32;</span>class&#61;&#34;<span id="code-btn-class-style">btn&#32;btn&#45;primary</span><span id="code-btn-class-size"></span>&#34;&gt;</span>
  <span id="code-btn-text">Button Text</span>
<span class="code-close-tag">&lt;&#47;<span class="code-btn-tag">button</span>&gt;</span></span>
            </pre>
          </div>
        </section>
      </div>
    </div>
  </div>  
</div>
