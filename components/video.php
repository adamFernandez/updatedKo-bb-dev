<div class="component-content" id="component-video">
  <div class="component-header">
    <h2 class="component-title">Video</h2>
    <p><a href="https://keats.kcl.ac.uk/mod/book/view.php?id=3072545&chapterid=240944" target="_blank">Design System guidance and examples</a></p>
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
                     <label class="input-group-text" for="vd-media-type">Media type</label>
                  </div>
                  <select class="custom-select" id="vd-media-type">
                    <option value="kaltura" selected>Kaltura video</option>
                    <!-- <option value="kaltura-playlist">Kaltura video playlist</option> -->
                    <option value="youtube">YouTube</option>
                  </select>
                </div>
              </div>
              <div class="form-group col-md-7" id="vd-player-size-form">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                     <label class="input-group-text" for="vd-player-size">Player Size</label>
                  </div>
                  <select class="custom-select" id="vd-player-size">
                    <option value="608by402">608x402</option>
                    <option value="400by285" selected>400x285 (Default)</option>
                    <option value="304by231">304x231</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="vd-embed">Embed code</label>
              <textarea class="form-control" id="vd-embed" placeholder="<iframe></iframe>" rows="16"></textarea>
              <small id="vd-embed-help" class="form-text text-muted">Copy and paste the embed code into the textarea.</small>
            </div>
          </form>
        </section>
      </div>
      <div class="col-md-6">
        <section class="preview">
          <h3 class="preview-title">Preview</h3>
          <div id="vd-preview-pane"></div>
        </section>
        <section class="component-code">
          <div class="code-header">
            <h3 class="code-title">Code</h3>
            <button class="btn btn-secondary" id="copy-vd-code">Copy Code</button>
          </div>
          <div class="code-box">
            <pre class="code-text"><span id="vd-print-code"><span class="code-open-tag">&lt;div&#32;class&#61;&#34;embed&#45;responsive&#32;embed&#45;responsive&#45;<span id="code-vd-player-size">400by285</span>&#34;&gt;</span>
  <span id="code-vd-embed"></span>
<span class="code-close-tag">&lt;&#47;div&gt;</span></pre>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>
