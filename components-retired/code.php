<div class="component-content" id="component-code">
  <div class="component-header">
    <h2 class="component-title">Code</h2>
  </div>
  <div class="component-body container">
    <div class="row">
      <div class="options col-md-6">
        <section class="options">
          <h3>Options</h3>
          <p>Complete the following fields:</p>
          <form id="co-form">
            <div class="form-group">
              <div class="input-group">
                <label class="input-group-text" for="co-lang">Language</label>
              </div>
              <select id="co-lang">
                <option value="html">html</option>
                <option value="javascript">javascript</option>
                <option value="php">php</option>
              </select>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input unchecked" id="co-check-line-nos">
                <label class="custom-control-label" for="co-check-line-nos"><span id="co-toggle-line-nos">Add</span> line numbers</label>
              </div>
            </div>
            <div class="form-group">
              <label for="co-body">Input code</label>
              <textarea class="form-control" id="co-body" placeholder="<h1>Hello world!</h1>" rows="10"></textarea>
            </div>
          </form>
        </section>
      </div>
      <div class="col-md-6">
        <section class="preview" style="display:none">
          <h3 class="preview-title">Preview</h3>
          <div id="co-preview-pane"></div>
        </section>
        <section class="component-code">
          <div class="code-header">
            <h3 class="code-title">Code</h3>
            <button class="btn btn-secondary" id="copy-co-code">Copy Code</button>
          </div>
          <div class="code-box">
            <pre class="code-text">
<span id="co-print-code"><span class="code-open-tag">&lt;span&#32;syntax&#61;&#34;<span id="code-co-lang">html</span>&#34;<span id="code-co-line-nos"></span><span id="code-co-urls"></span><span id="code-co-indent-size"></span>&gt;</span><span id="code-co-body">&lt;h1&gt;Hello world!&lt;&#47;h1&gt;<br></span><span class="code-close-tag">&lt;&#47;span&gt;</span></pre>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>