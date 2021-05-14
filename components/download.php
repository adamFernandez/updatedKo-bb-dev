<div class="component-content" id="component-download">
  <div class="component-header">
    <h2 class="component-title">Download file</h2>
  </div>
  <div class="component-body container">
    <div class="row">
      <div class="options col-md-6">
        <section class="options">
          <h3>Options</h3>
          <p>Complete the following fields:</p>
          <form class="needs-validation" id="dl-form" novalidate>
            <div class="form-group">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="dl-link">Link*</label>
                </div>
                <input type="text" class="form-control" id="dl-link"
                aria-label="dl-link"
                placeholder="https://keats.kcl.ac.uk/pluginfile.php/12345/course/section/12345/file.pdf" required>
                <div class="invalid-feedback" id="dl-link-invalid-feedback">
                  Please enter the file link.
                </div>
                <small id="dl-link-help" class="form-text text-muted">The file must first be uploaded to Keats, where the generated link can be copied and pasted from.</small>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="dl-type">File type</label>
                  <input type="text" class="form-control" id="dl-type" aria-label="dl-type"
                  placeholder="PDF" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="dl-size">File size</label>
                  <input type="text" class="form-control" id="dl-size" aria-label="dl-size"
                  placeholder="86KB" required>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
      <div class="col-md-6">
        <section class="preview">
          <h3 class="preview-title">Preview</h3>
          <div id="dl-preview-pane"></div>
        </section>
        <section class="component-code">
          <div class="code-header">
            <h3 class="code-title">Code</h3>
            <button class="btn btn-secondary" id="copy-dl-code">Copy Code</button>
          </div>
          <div class="code-box">
            <pre class="code-text">
<span id="dl-print-code"><span class="code-open-tag">&lt;div&#32;class&#61;&#34;download&#45;container&#34;&gt;</span>
  <span
  class="code-open-tag">&lt;a&#32;class&#61;&#34;btn&#32;btn&#45;primary&#32;btn&#45;download&#34;&#32;href&#61;&#34;<span
  id="code-dl-link">www.example.com/file.pdf</span>&#34;&#32;download&gt;</span>Download file<span class="code-close-tag">&lt;&#47;a&gt;</span>
  <span
  id="code-ts-body">&lt;p&#32;class&#61;&#34;download&#45;info&#34&gt;<span
  id="code-dl-type">PDF</span>&#44;&#32;<span id="code-dl-size">86KB</span>&lt;&#47;p&gt;</span>
<span class="code-close-tag">&lt;&#47;div&gt;</span></pre>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>