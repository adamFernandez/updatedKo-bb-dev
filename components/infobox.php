<div class="component-content" id="component-infobox">
  <div class="component-header">
    <h2 class="component-title">Info Box</h2>
    <a href="https://keats.kcl.ac.uk/mod/book/view.php?id=3118030" target="_blank">Design System guidance and examples</a>
  </div>
  <div class="component-body container">
    <div class="alert alert-instructional" role="alert">
      <p>Don't forget to link to the css file! - https://git.iddkingsonline.com/designsystem/base.css. Info Boxes also rely on Font Awesome icons so this needs to be included too! - https://kit-free.fontawesome.com/releases/latest/css/free.min.css.</p>
    </div>
    <div class="row">
      <div class="options col-md-6">
        <section class="options">
          <h3>Options</h3>
          <p>Select your options:</p>
          <form>
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="ib-type">Info Box type</label>
                </div>
                <select class="custom-select" id="ib-type">
                  <option value="definition-box">Definition</option>
                  <option value="alert-instructional">Instructional alert</option>
                  <option value="key-concept-box">Key concept</option>
                  <option value="learning-outcome-box">Learning outcome</option>
                </select>
              </div>
            </div>
            <div class="form-group" id="ib-title-form">
              <label for="ib-title">Definition title</label>
              <input type="text" class="form-control" id="ib-df-title" placeholder="Definition title">
            </div>
            <div class="form-group">
              <label for="ib-text">Info box body text</label>
              <textarea class="form-control" id="ib-text" placeholder="Info box body text" rows="3"></textarea>
            </div>
          </form>
        </section>
      </div>
      <div class="col-md-6">
        <section class="preview">
          <h3 class="preview-title">Preview</h3>
          <div id="ib-preview-pane"></div>
        </section>
        <section class="component-code">
          <div class="code-header">
            <h3 class="code-title">Code</h3>
            <button class="btn btn-secondary" id="copy-ib-code">Copy Code</button>
          </div>
          <div class="code-box">
            <pre class="code-text">
<span id="ib-print-code"><span class="code-open-tag">&lt;div&#32;class&#61&#34;<span id="code-ib-alert-class"></span><span id="code-ib-type">definition-box</span><span id="code-ib-alert-role"></span>&#34;&gt;</span>
  <span class="code-open-tag">&lt;div&gt;</span><span id="code-ib-title-open">
    &lt;h5&gt;</span><span id="code-ib-title-text">Definition title</span><span id="code-ib-title-close">&lt;&#47;h5&gt;</span>
    <span id="code-ib-body">&lt;<span id="code-ib-body-open">p</span>&gt;<span id="code-ib-text">Info box body text</span>&lt;&#47;<span id="code-ib-body-close">p</span>&gt;</span>
  <span class="code-close-tag">&lt;&#47;div&gt;</span>
<span class="code-close-tag">&lt;&#47;div&gt;</span></span>
            </pre>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>
