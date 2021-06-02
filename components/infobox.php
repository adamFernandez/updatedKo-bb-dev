<div class="component-content" id="component-infobox">
  <div class="component-header">
    <h2 class="component-title">Info Box</h2>
    <p><a href="https://keats.kcl.ac.uk/mod/book/view.php?id=3072545&chapterid=269224" target="_blank">Design System guidance and
    examples</a></p>
  </div>
  <div class="component-body container">
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
                  <option value="alert-caution">Caution alert</option>
                  <option value="key-concept-box">Key concept</option>
                  <option value="learning-outcome-box">Learning outcome</option>
                  <option value="reading-box">Reading</option>
                  <option value="editing-help-box">Editing help</option>
                </select>
              </div>
            </div>
            <div class="form-group" id="ib-title-form">
              <label for="ib-title">Info box title</label>
              <input type="text" class="form-control" id="ib-df-title" placeholder="Info box title">
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
<span id="ib-print-code"><span class="code-open-tag">&lt;div&#32;class&#61;&#34;<span id="code-ib-alert-class"></span><span id="code-ib-type">definition-box</span><span id="code-ib-alert-role"></span>&#34;<span id="code-ib-alert-aria-label"></span>&gt;</span>
  <span class="code-open-tag">&lt;div&gt;</span><span id="code-ib-title-open">
    &lt;h5&gt;&lt;span role&#61;&#34;text&#34;&gt;&lt;span class&#61;&#34;sr-only&#34;&gt;Definition:&lt;/span&gt;</span><span id="code-ib-title-text">Info box title</span><span id="code-ib-title-close">&lt;&#47;h5&gt;</span>
    <span id="code-ib-body"><span id="code-ib-body-open">&lt;p&gt;</span><span id="code-ib-body-text">Info box body text</span><span id="code-ib-body-close">&lt;&#47;p&gt;</span></span><span id="code-ib-caption"></span>
  <span class="code-close-tag">&lt;&#47;div&gt;</span>
<span class="code-close-tag">&lt;&#47;div&gt;</span></span>
            </pre>
          </div> 
        </section>
      </div>
    </div>
  </div>
</div>
