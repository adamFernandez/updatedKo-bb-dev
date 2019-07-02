<div class="component-content" id="embed">
  <div class="component-header">
    <h2 class="component-title">Embed</h2>
    <p>Complete the following fields:</p>
  </div>
  <div class="component-body container">
    <div class="row">
      <div class="options container col-md-6">
        <form>
          <div class="form-row">
            <div class="form group col-md-5">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                   <label class="input-group-text" for="em-player-size">Player Size</label>
                </div>
                <select class="custom-select" id="em-player-size">
                  <option value="608by402">608x402</option>
                  <option value="400by285" selected>400x285</option>
                  <option value="304by231">304x231</option>
                </select>
              </div>
            </div>
            <div class="form-group col-md-7">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="em-id">Unique ID</label>
                </div>
                <input type="text" class="form-control" id="em-id" aria-label="col-id" placeholder="modname-unitno-embed-no" aria-describedby="embed-unique-id">
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="em-embed">Embed code</label>
            <textarea class="form-control" id="em-embed" placeholder="<iframe></iframe>" rows="16"></textarea>
            <small id="em-embed-help" class="form-text text-muted">Copy and paste the embed code into the textarea.</small>
          </div>
        </form>
      </div>
      <div class="col-md-6 container">
        <div class="preview">
          <h2 class="preview-title">Preview</h2>
          <div id="em-preview-pane">
          </div>
        </div>
        <div class="component-code">
          <h2 class="code-title">And here's the code...</h2>
          <div class="code-box">
            <pre class="code-text"><span id="em-print-code"><span class="code-open-tag">&lt;div&#32;class&#61;&#34;embed&#45;responsive&#32;embed&#45;responsive&#45;<span id="code-em-player-size">400by285</span>&#34;&gt;</span>
  <span id="code-em-embed"></span>
<span class="code-close-tag">&lt;&#47;div&gt;</span></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
