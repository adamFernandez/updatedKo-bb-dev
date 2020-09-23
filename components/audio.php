<div class="component-content" id="component-audio">
  <div class="component-header">
    <h2 class="component-title">Audio</h2>
    <p><a href="https://keats.kcl.ac.uk/mod/book/view.php?id=3072545&chapterid=269224" target="_blank">Design System guidance and
    examples</a></p>
  </div>
  <div class="component-body container">
    <div class="row">
      <div class="options col-md-6">
        <section class="options">
          <h3>Options</h3>
          <p>Complete the following fields:</p>
          <form>
            <div class="form-group">
              <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input checked" id="au-check-img"
                checked>
                <label class="custom-control-label" for="au-check-img"><span id="au-toggle-img">Remove</span> image</label>
              </div>
            </div>
            <div class="form-group">
              <label class="input-group-text" for="au-img-src">Image source</label>
              <input type="text" class="form-control" id="au-img-src" aria-label="au-mg-src" placeholder="https://via.placeholder.com/300">
            </div>
            <div class="form-group">
              <label class="input-group-text" for="au-img-alt">Image alternative text</label>
              <input type="text" class="form-control" id="au-img-alt"
              aria-label="au-img-alt" placeholder="Image description">
            </div>
            <div class="form-group">
              <label class="input-group-text" for="au-speaker">Speaker name</label>
              <input type="text" class="form-control" id="au-speaker"
              aria-label="au-speaker" placeholder="Professor Place Holder">
            </div>
            <div class="form-group">
              <label class="input-group-text" for="au-title">Title</label>
              <input type="text" class="form-control" id="au-title"
              aria-label="au-title" placeholder="Audio title">
            </div>
            <div class="form-group">
              <label for="au-embed">Audio embed code</label>
              <textarea class="form-control" id="au-embed" placeholder="<iframe></iframe>" rows="16"></textarea>
              <small id="au-embed-help" class="form-text text-muted">Copy and paste the embed code into the textarea.</small>
            </div>
          </form>
        </section>
      </div>
      <div class="col-md-6">
        <section class="preview">
          <h3 class="preview-title">Preview</h3>
          <div id="au-preview-pane"></div>
        </section>
        <section class="component-code">
          <div class="code-header">
            <h3 class="code-title">Code</h3>
            <button class="btn btn-secondary" id="copy-au-code">Copy Code</button>
          </div>
          <div class="code-box">
            <pre class="code-text"><span id="au-print-code"><span class="code-open-tag">&lt;div&#32;class&#61;&#34;audio&#45;container&#34;&gt;</span>
  <span class="code-open-tag">&lt;div&#32;class&#61;&#34;audio&#45;top&#34;&gt;</span>
    <span id="code-au-img-container"><span class="code-open-tag">&lt;div&#32;class&#61;&#34;audio&#45;image&#45;container&#34;&gt;</span>
      <span class="code-open-tag">&lt;img&#32;class&#61;&#34;audio&#45;image&#34&#32;src&#61;&#34;<span id="code-au-img-src">https://via.placeholder.com/150</span>&#34;&#32;alt&#61;<span id="code-au-img-alt">Image description</span>&#34;&gt;</span>
    <span class="code-close-tag">&lt;&#47;div&gt;</span>  
    </span><span class="code-open-tag">&lt;div&#32;class&#61;&#34;audio&#45;info&#34;&gt;</span>
      <span class="code-open-tag">&lt;p&#32;class&#61;&#34;audio&#45;speaker&#34;&gt;</span><span id="code-au-speaker">Professor Place Holder</span><span class="code-close-tag">&lt;&#47;p&gt;</span>  
      <span class="code-open-tag">&lt;h3&#32;class&#61;&#34;audio&#45;title&#34;&gt;</span><span id="code-au-title">Audio title</span><span class="code-close-tag">&lt;&#47;h3&gt;</span>  
    <span class="code-close-tag">&lt;&#47;div&gt;</span>  
  <span class="code-close-tag">&lt;&#47;div&gt;</span>  
  <span class="code-open-tag">&lt;div&#32;class&#61;&#34;embed&#45;responsive&#32;embed&#45;responsive&#45;audio&#34;&gt;</span>
    <span id="code-au-embed"></span>
  <span class="code-close-tag">&lt;&#47;div&gt;</span>  
<span class="code-close-tag">&lt;&#47;div&gt;</span></span></pre>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>
