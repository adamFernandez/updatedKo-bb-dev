<div class="component-content" id="list">
  <div class="component-header">
    <h2 class="component-title">List</h2>
  </div>
  <div class="component-body container">
    <div class="row">
      <div class="options container col-md-6">
        <section class="options">
          <h3>Options</h3>
          <p>Complete the following fields:</p>
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="ls-type">Type of List</label>
                  </div>
                  <select class="custom-select" id="ls-type">
                    <option value="ul" selected>Unordered</option>
                    <option value="ol">Ordered</option>
                  </select>
                </div>
              </div>
              <div class="form-group col-md-6">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="ls-item-no">No. of list items</label>
                  </div>
                  <select class="custom-select" id="ls-item-no">
                    <option value="2">2</option>
                    <option value="3" selected>3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="ls-custom-class">Custom class(es)</label>
              <input type="text" class="form-control" id="ls-custom-class" aria-label="btn-text" placeholder="custom-class">
              <small id="ls-custom-class-help" class="form-text text-muted">Add custom classes separated by a space</small>
            </div>
          </form>
          <div>
            <label for="ls-items">List item text</label>
            <div id="ls-items">
          </div>
        </section>
      </div>
      <div class="col-md-6 container">
        <section class="preview">
          <h3 class="preview-title">Preview</h3>
          <div class="card" id="ls-preview-pane"></div>
        </section>
        <section class="component-code">
          <div class="code-header">
            <h3 class="code-title">Code</h3>
            <button class="btn btn-outline-primary" id="copy-ls-code">Copy Code</button>
          </div>
          <div class="code-box">
<pre class="code-text"><span id="ls-print-code"><span class="code-open-tag">&lt;<span class="code-ls-tag">ul</span><span id="code-ls-custom-class"></span>&gt;</span><span id="code-ls-items"></span>
<span class="code-close-tag">&lt;&#47;<span class="code-ls-tag">ul</span>&gt;</span></span></pre>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>