<div class="component-content" id="component-timeline">
  <div class="component-header">
    <h2 class="component-title">Timeline</h2>
    <a href="https://keats.kcl.ac.uk/mod/page/view.php?id=3119704" target="_blank">Design System guidance and examples</a>
  </div>
  <div class="component-body container">
    <div class="row">
      <div class="options col-md-5">
        <section class="options">
          <h3>Options</h3>
          <p>Complete the following fields:</p>
          <form>
            <div class="form-row">
              <div class="form-group col-md-4">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="tl-card-no">No. of cards</label>
                  </div>
                  <select class="custom-select" id="tl-card-no">
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4" selected>4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                  </select>
                </div>
              </div>
              <!--
              <div class="form-group col-md-8">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="tl-id">Unique ID</label>
                  </div>
                  <input type="text" class="form-control" id="tl-id" aria-label="tl-id" placeholder="modname-unitno-timeline-no" aria-describedby="timeline-unique-id">
                </div>
                <small id="tl-id-help" class="form-text text-muted">Optional ID to assist with identification and custom styling.</small>
              </div>
               -->
            </div>
            <div class="custom-control custom-checkbox mb-3">
              <input type="checkbox" class="custom-control-input checked" id="tl-check-date" checked>
              <label class="custom-control-label" for="tl-check-date"><span id="tl-toggle-date">Remove</span> dates</label>
            </div>
          </form>
          <div class="collapse-container" id="tl-cards">
          </div>
        </section>
      </div>
      <div class="col-md-7">
        <section class="preview">
          <h3 class="preview-title">Preview</h3>
          <div class="card" id="tl-preview-pane"></div>
        </section>
        <section class="component-code">
          <div class="code-header">
            <h3 class="code-title">Code</h3>
            <button class="btn btn-secondary" id="copy-tl-code" type="submit">Copy Code</button>
          </div>
          <div class="code-box">
<pre class="code-text"><span id="tl-print-code"><span class="code-open-tag">&lt;div&#32;class&#61;&#34;timeline&#45;container&#34;<span id="code-tl-id"></span>&gt;</span>
  <span id="code-tl-cards"></span>
<span class="code-close-tag">&lt;&#47;div&gt;</span></span></pre>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>