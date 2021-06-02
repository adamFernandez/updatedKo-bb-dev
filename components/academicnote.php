<div class="component-content" id="component-academicnote">
  <div class="component-header">
    <h2 class="component-title">Academic note</h2>
    <p><a href="https://keats.kcl.ac.uk/mod/page/view.php?id=3219389&forceview=1" target="_blank">Design System guidance and examples</a></p>
  </div>
  <div class="component-body container">
    <div class="row">
      <div class="col-md-6 px-4">
        <section class="options">
          <h3>Options</h3>
          <p>Complete the following fields:</p>
          <form id="an-form">
            <div class="form-group">
              <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input unchecked"
                id="an-check-author">
                <label class="custom-control-label" for="an-check-author"><span
                id="an-toggle-author">Add</span> author</label>
              </div>
              <div class="an-author" style="display:none;">
                <div class="form-group">
                  <label class="input-group-text" for="an-author-img-src">Author image source</label>
                  <input type="text" class="form-control" id="an-author-img-src"
                  aria-label="an-aurhor-img-src" placeholder="https://keats.kcl.ac.uk/pluginfile.php/1234567/mod_folder/content/1/23/name.jpg">
                </div>
                <div class="form-group">
                  <label class="input-group-text" for="an-author-img-alt">Author image alternative text</label>
                  <input type="text" class="form-control" id="an-author-img-alt"
                  aria-label="an-author-img-alt" placeholder="Description of image">
                </div>
                <div class="form-group">
                  <label class="input-group-text" for="an-author-name">Author name</label>
                  <input type="text" class="form-control" id="an-author-name"
                  aria-label="an-author-name" placeholder="Author name">
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="an-body">Body text</label>
              <textarea class="form-control" id="an-body" placeholder="Pudding pie bonbon muffin carrot cake fruitcake macaroon..." rows="6"></textarea>
            </div>
          </form>
        </section>
      </div>
      <div class="col-md-6 px-4">
        <section class="preview">
          <h3 class="preview-title">Preview</h3>
          <div id="an-preview-pane"></div>
        </section>
        <section class="component-code">
          <div class="code-header">
            <h3 class="code-title">Code</h3>
            <button class="btn btn-secondary" id="copy-an-code">Copy Code</button>
          </div>
          <div class="code-box">
            <pre class="code-text">
<span id="an-print-code"><span
            class="code-open-tag">&lt;div&#32;class&#61;&#34;academic&#45;note&#45;container&#34;&gt;</span>
  <span class="code-open-tag">&lt;div&#32;class&#61;&#34;academic&#45;note&#45;card&#34;&gt;</span>
    <span class="code-open-tag">&lt;div&#32;class&#61;&#34;card&#45;body&#34;&gt;</span>
      <span id="code-an-author"></span><span class="code-open-tag">&lt;div&#32;class&#61;&#34;card&#45;text&#34;&gt;</span>
        <span class="code-open-tag">&lt;p&gt;</span><span id="code-an-body">Pudding pie bonbon muffin carrot cake fruitcake macaroon. Cupcake dessert topping. Brownie cheesecake sweet jujubes. Liquorice dragée pie cookie. Soufflé lemon drops biscuit dragée biscuit macaroon cake halvah. Bonbon marzipan oat cake danish cupcake brownie chocolate bar.</span><span class="code-close-tag">&lt;&#47;p&gt;</span>
      <span class="code-close-tag">&lt;&#47;div&gt;</span>
    <span class="code-close-tag">&lt;&#47;div&gt;</span>
  <span class="code-close-tag">&lt;&#47;div&gt;</span>
<span class="code-close-tag">&lt;&#47;div&gt;</span></pre>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>