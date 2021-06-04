<div class="component-content" id="component-alert">
  <div class="component-header">
    <h2 class="component-title">Alert</h2>
  </div>
  <div class="component-body container">
    <div class="alert alert-instructional mt-3" role="alert">
    <p>Don't forget to link to the css file! - https://git.iddkingsonline.com/designsystem/base.css.
     Alerts also rely on Font Awesome icons so this needs to be included too! - https://kit-free.fontawesome.com/releases/latest/css/free.min.css.</p>
    </div>
    <div class="row">
      <div class="options container col-md-6">
        <section class="options">
          <h3>Options</h3>
          <p>Select your options:</p>
          <form>
            <div class="form-row">
              <div class="form-group col-md">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="al-type">Alert type</label>
                  </div>
                  <select class="custom-select" id="al-type">
                    <option value="success" selected>Success</option>
                    <option value="instructional">Instructional</option>
                    <option value="danger">Danger</option>
                    <option value="lo">Learning outcome</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
              </div>
              <div class="form-group col-md-6" id="al-feedback-select" style="display:none">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="al-feedback-type">Answer type</label>
                  </div>
                  <select class="custom-select" id="al-feedback-type">
                    <option value="model" selected>Model</option>
                    <option value="correct">Correct</option>
                    <option value="incorrect">Incorrect</option>
                  </select>
                </div>
              </div>
            </div>
            <div id="al-title-check-form">
              <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input checked" id="al-check-title" checked>
                <label class="custom-control-label" for="al-check-title"><span id="al-toggle-title">Remove</span> title</label>
              </div>
              <div class="form-group al-title-form">
                <label for="al-title">Alert title</label>
                <input type="text" class="form-control" id="al-title" placeholder="Alert title">
              </div>
            </div>
            <div class="form-group">
              <label for="al-text">Alert text</label>
              <textarea class="form-control" id="al-text" placeholder="This is an alert!" rows="3"></textarea>
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
            <button class="btn btn-secondary" id="copy-al-code">Copy Code</button>
          </div>
          <div class="code-box">
            <pre class="code-text">
<span id="al-print-code"><span class="code-open-tag">&lt;div&#32;class&#61&#34;alert&#32;alert-<span id="code-al-type">success</span><span id="code-al-feedback-type"></span>&#34;&#32;role&#61;&#34;alert&#34;&gt;</span>
  <span class="code-open-tag">&lt;div&gt;</span>
    <span id="code-al-title"><span id="code-al-title-open">&lt;h5&gt;</span><span id="code-al-title-text">Alert title</span><span id="code-al-title-close">&lt;&#47;h5&gt;</span></span>&lt;p&#32;class&#61;&#34;m&#45;0&#34;&gt;<span id="code-al-text">This is an alert!</span>&lt;&#47;p&gt;
  <span class="code-close-tag">&lt;&#47;div&gt;</span>
<span class="code-close-tag">&lt;&#47;div&gt;</span></span>
            </pre>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>
