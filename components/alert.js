<div class="component-content" id="component-alert">
  <div class="component-header">
    <h2 class="component-title">Alert</h2>
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
                <label class="input-group-text" for="al-type">Alert type</label>
              </div>
              <select class="custom-select" id="al-type">
                <option value="success" selected>Success</option>
                <option value="warning">Warning</option>
                <option value="danger">Danger</option>
              </select>
            </div>
            <div class="custom-control custom-checkbox mb-3">
              <input type="checkbox" class="custom-control-input checked" id="al-check-title" checked>
              <label class="custom-control-label" for="al-check-title"><span id="al-toggle-title">Remove</span> title</label>
            </div>
            <div class="form-group al-title-form">
              <label for="al-title">Alert title</label>
              <input type="text" class="form-control" id="al-title" placeholder="Alert title">
            </div>
            <div class="form-group">
              <label for="al-text">Alert text</label>
              <textarea class="form-control" id="al-text" placeholder="This is an alert!" rows="2"></textarea>
            </div>
          </form>
        </section>
      </div>
      <div class="container col-md-6">
        <section class="preview">
          <h3 class="preview-title">Preview</h3>
          <div id="al-preview-pane"></div>
        </section>
        <section class="component-code">
          <div class="code-header">
            <h3 class="code-title">Code</h3>
            <button class="btn btn-outline-primary" id="copy-al-code">Copy Code</button>
          </div>
          <div class="code-box">
            <pre class="code-text">
<span id="al-print-code"><span class="code-open-tag">&lt;div&#32;class&#61&#34;alert&#32;alert-<span id="code-al-type">success</span>&#34;&#32;role&#61;&#34;alert&#34;&gt;</span>
  <span class="code-open-tag">&lt;div&gt;</span>
    <span id="code-al-title">&lt;h5&gt;<span id="code-al-title-text">Alert title</span>&lt;&#47;h5&gt;</span>&lt;p&#32;class&#61;&#34;m&#45;0&#34;&gt;<span id="code-al-text">This is an alert!</span>&lt;&#47;p&gt;
  <span class="code-close-tag">&lt;&#47;div&gt;</span>
<span class="code-close-tag">&lt;&#47;div&gt;</span></span>
            </pre>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>
