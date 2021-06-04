<div class="component-content" id="component-embed">
  <div class="component-header">
    <h2 class="component-title">Embed</h2>
    <div class="alert alert-btw" role="alert">
      <div>
        <p>Try the new 'YouTube' media type option for YouTube videos</p>
      </div>
    </div>
    <a href="https://keats.kcl.ac.uk/mod/book/view.php?id=3072545" target="_blank">Design System guidance and examples</a>
  </div>
  <div class="component-body container">
    <div class="row">
      <div class="options col-md-6">
        <section class="options">
          <h3>Options</h3>
          <p>Complete the following fields:</p>
          <form>
            <div class="form-row">
              <div class="form-group col-md">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                     <label class="input-group-text" for="em-media-type">Media type</label>
                  </div>
                  <select class="custom-select" id="em-media-type">
                    <option value="kaltura" selected>Video</option>
                    <option value="audio">Audio</option>
                    <option value="youtube">YouTube</option>
                  </select>
                </div>
              </div>
              <div class="form-group col-md-7" id="em-player-size-form">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                     <label class="input-group-text" for="em-player-size">Player Size</label>
                  </div>
                  <select class="custom-select" id="em-player-size">
                    <option value="608by402">608x402</option>
                    <option value="400by285" selected>400x285 (Default)</option>
                    <option value="304by231">304x231</option>
                  </select>
                </div>
              </div>
              <!--
              <div class="form-group col-md-12">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="em-id">Unique ID</label>
                  </div>
                  <input type="text" class="form-control" id="em-id" aria-label="col-id" placeholder="modname-unitno-embed-no" aria-describedby="embed-unique-id">
                </div>
                <small id="tl-id-help" class="form-text text-muted">Optional ID to assist with identification and custom styling.</small>
              </div>
              -->
            </div>
            <div class="form-group">
              <label for="em-embed">Embed code</label>
              <textarea class="form-control" id="em-embed" placeholder="<iframe></iframe>" rows="16"></textarea>
              <small id="em-embed-help" class="form-text text-muted">Copy and paste the embed code into the textarea.</small>
            </div>
          </form>
        </section>
      </div>
      <div class="col-md-6">
        <section class="preview">
          <h3 class="preview-title">Preview</h3>
          <div id="em-preview-pane"></div>
        </section>
        <section class="component-code">
          <div class="code-header">
            <h3 class="code-title">Code</h3>
            <button class="btn btn-secondary" id="copy-em-code">Copy Code</button>
          </div>
          <div class="code-box">
            <pre class="code-text"><span id="em-print-code"><span class="code-open-tag">&lt;div&#32;class&#61;&#34;embed&#45;responsive&#32;embed&#45;responsive&#45;<span id="code-em-player-size">400by285</span>&#34;&gt;</span>
  <span id="code-em-embed"></span>
<span class="code-close-tag">&lt;&#47;div&gt;</span></pre>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>
