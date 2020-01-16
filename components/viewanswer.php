<div class="component-content" id="component-viewanswer">
  <div class="component-header">
    <h2 class="component-title">View answer</h2>
    <a href="https://keats.kcl.ac.uk/mod/book/view.php?id=3118036" target="_blank">Design System guidance and examples</a>
  </div>
  <div class="component-body container">
    <div class="row">
      <div class="options col-md-6">
        <section class="options">
          <h3>Options</h3>
          <p>Complete the following fields:</p>
          <form id="va-form">
            <div class="form-group">
              <div class="input-group">
                <label class="input-group-text" for="va-type">Type</label>
              </div>
              <select id="va-type">
                <option value="answer">View answer</option>
                <option value="feedback">View feedback</option>
                <option value="model-answer">View model answer</option>
              </select>
            </div>
            <div class="form-group">
              <label class="input-group-text" for="va-q">Question</label>
              <input type="text" class="form-control" id="va-q" aria-label="va-q" placeholder="Lemon drops gingerbread topping?">
            </div>
            <div class="form-group">
              <label for="va-a">Answer</label>
              <textarea class="form-control" id="va-a" placeholder="Pudding pie bonbon muffin carrot cake fruitcake macaroon..." rows="6"></textarea>
            </div>
          </form>
        </section>
      </div>
      <div class="col-md-6">
        <section class="preview">
          <h3 class="preview-title">Preview</h3>
          <div id="va-preview-pane"></div>
        </section>
        <section class="component-code">
          <div class="code-header">
            <h3 class="code-title">Code</h3>
            <button class="btn btn-secondary" id="copy-va-code">Copy Code</button>
          </div>
          <div class="code-box">
            <pre class="code-text">
<span id="va-print-code"><span class="code-open-tag">&lt;div&#32;class&#61;&#34;view&#45;<span class="code-va-type">answer</span>&#45;container&#32;collapsed&#34;&gt;</span>
  <span class="code-open-tag">&lt;h5&gt;</span><span id="code-va-q">Lemon drops gingerbread topping?</span><span class="code-close-tag">&lt;&#47;h5&gt;</span>
  <span class="code-open-tag">&lt;a&#32;class&#61;&#34;btn&#32;btn&#45;primary&#32;view&#45;hide&#45;<span class="code-va-type">answer</span>&#34;&#32;role&#61;&#34;button&#34;&gt;</span>View <span class="code-va-type" id="code-va-type-button-text">answer</span><span class="code-close-tag">&lt;&#47;a&gt;</span>
  <span class="code-open-tag">&lt;div&#32;class&#61;&#34;view&#45;<span class="code-va-type">answer</span>&#45;card&#34;&gt;</span>
    <span class="code-open-tag">&lt;div&#32;class&#61;&#34;card&#45;body&#34;&gt;</span>
      <span class="code-open-tag">&lt;p&gt;</span><span id="code-va-a">Pudding pie bonbon muffin carrot cake fruitcake macaroon. Cupcake dessert topping. Brownie cheesecake sweet jujubes. Liquorice dragée pie cookie. Soufflé lemon drops biscuit dragée biscuit macaroon cake halvah. Bonbon marzipan oat cake danish cupcake brownie chocolate bar.</span><span class="code-close-tag">&lt;&#47;p&gt;</span>
    <span class="code-close-tag">&lt;&#47;div&gt;</span>
  <span class="code-close-tag">&lt;&#47;div&gt;</span>
<span class="code-close-tag">&lt;&#47;div&gt;</span></pre>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>