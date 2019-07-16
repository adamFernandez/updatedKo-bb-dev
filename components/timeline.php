<div class="component-content" id="timeline">
  <div class="component-header">
    <h2 class="component-title">Timeline</h2>
  </div>
  <div class="component-body container">
    <div class="row">
      <div class="options container col-md-6">
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
              <div class="form-group col-md-8">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="tl-id">Unique ID</label>
                  </div>
                  <input type="text" class="form-control" id="tl-id" aria-label="tl-id" placeholder="modname-unitno-timeline-no" aria-describedby="timeline-unique-id">
                </div>
              </div>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input checked" id="tl-check-title" checked>
              <label class="custom-control-label" for="tl-check-title">With title</label>
            </div>
            <div class="custom-control custom-checkbox mb-3">
              <input type="checkbox" class="custom-control-input unchecked" id="tl-check-date" checked>
              <label class="custom-control-label" for="tl-check-date">With dates</label>
            </div>
            <div class="input-group mb-3" id="tl-title-form">
              <div class="input-group-prepend">
                <label class="input-group-text" for="tl-title">Title</label>
              </div>
              <input type="text" class="form-control" id="tl-title" aria-label="tl-title" placeholder="Timeline title" aria-describedby="timeline-title">
            </div>
          </form>
          <div id="tl-cards">
          </div>
        </section>
      </div>
      <div class="col-md-6 container">
        <section class="preview">
          <h3 class="preview-title">Preview</h3>
          <div class="card" id="tl-preview-pane"></div>
        </section>
        <section class="component-code">
          <div class="code-header">
            <h3 class="code-title">Code</h3>
            <button class="btn btn-outline-primary" id="copy-tl-code" type="submit">Copy Code</button>
          </div>
          <div class="code-box">
<pre class="code-text"><span id="tl-print-code"><span class="code-open-tag">&lt;div&#32;class&#61;&#34;container&#32;py&#45;2&#34;&#32;id&#61;&#34;<span class="code-tl-id">modname&#45;unitno&#45;timeline&#45;no</span>&#34;&gt;</span><span id="code-tl-title">&lt;h2&#32;class&#61;&#34;text&#45;center&#32;py&#45;3&#34;&gt;<span id="code-tl-title-text">Timeline title</span>&lt;&#47;h2&gt;</span>
  <span id="code-tl-cards"></span>
<span class="code-close-tag">&lt;&#47;div&gt;</span></span></pre>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>