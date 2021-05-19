<div class="component-content" id="component-quotation">
  <div class="component-header">
    <h2 class="component-title">Quotation</h2>
    <p><a href="https://keats.kcl.ac.uk/mod/book/view.php?id=3072535&chapterid=240598" target="_blank">Design System guidance and examples</a></p>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-5 px-4">
        <section class="options">
          <h3>Options</h3>
          <p>Complete the following fields:</p>
          <form id="quo-form">
            <div class="form-group">
              <label for="quo-body">Quotation body</label>
              <textarea class="form-control" id="quo-body" aria-label="va-q" placeholder="Write your quotation here..." rows="6"></textarea>
            </div>
            <div class="form-group">
              <label for="quo-att">Attribution</label>
              <input type="text" class="form-control" id="quo-att" aria-label="quo-att" placeholder="Attribution goes here">
            </div>
          </form>
        </section>
      </div>
      <div class="col-md-7 px-4">
        <section class="preview">
          <h3 class="preview-title">Preview</h3>
          <div id="quo-preview-pane"></div>
        </section>
        <section class="component-code">
          <div class="code-header">
            <h3 class="code-title">Code</h3>
            <button class="btn btn-secondary" id="copy-quo-code">Copy Code</button>
          </div>
          <div class="code-box">
            <pre class="code-text">
<span id="quo-print-code"><span
            class="code-open-tag">&lt;figure&#32;class&#61;&#34;quote&#45;box&#34;&gt;</span>
  <span class="code-open-tag">&lt;blockquote&#32;class&#61;&#34;quote&#45;body&#34;&gt;</span>
    <span id="code-quo-body">This is the preview area where you can see what your quotation will look like.</span>
  <span class="code-close-tag">&lt;&#47;blockquote&gt;</span>
  <span class="code-open-tag">&lt;figcaption&#32;class&#61;&#34;quote&#45;attribution&#34;&gt;</span>
    <span id="code-quo-att">And the attribution goes here (2021)</span>
  <span class="code-close-tag">&lt;&#47;figcaption&gt;</span>
<span class="code-close-tag">&lt;&#47;figure&gt;</span></span>
            </pre>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>
