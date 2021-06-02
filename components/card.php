<div class="component-content" id="component-card">
  <div class="component-header">
    <h2 class="component-title">Card and Float box</h2>
    <p><a href="https://keats.kcl.ac.uk/mod/book/view.php?id=3118035" target="_blank">Design System guidance and examples</a></p>
  </div>
  <div class="component-body container">
    <div class="row">
      <div class="options col-md-6 px-4">
      <section class="options">
        <h3>Options</h3>
        <p>Complete the following fields:</p>
        <form>
            <div class="form-row">
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="cd-type">Card type</label>
                  </div>
                  <select class="custom-select" id="cd-type">
                    <option value="default" selected>Default card</option>
                    <option value="float-box">Float box</option>
                  </select>
                </div>
              </div>
              <div class="form-group col-md-4">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="cd-card-no">No. of cards</label>
                  </div>
                  <select class="custom-select" id="cd-card-no">
                    <option value="1" selected>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
              </div>
              <div class="form-group col-md-8" id="cd-layout-form">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="cd-layout">Layout</label>
                  </div>
                  <select class="custom-select" id="cd-layout">
                    <option value="block" selected>Block (vertical)</option>
                    <option value="deck">Card deck (horizontal)</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
          <div class="collapse-container" id="cards">
          </div>
        </section>
      </div>
      <div class="col-md-6">
        <section class="preview">
          <h3 class="preview-title">Preview</h3>
          <div id="cd-preview-pane"></div>
        </section>
        <section class="component-code">
           <div class="code-header">
            <h3 class="code-title">Code</h3>
            <button class="btn btn-secondary" id="copy-cd-code">Copy Code</button>
          </div>
          <div class="code-box">
<!-- <pre class="code-text"> -->
<span id="cd-print-code"><pre id="code-cd-deck-open"></pre>
<span id="code-cd-cards"></span>
<pre id="code-cd-deck-close"></span></pre>
<!-- </pre> -->
          </div>
        </section>
      </div>
    </div>
  </div>
</div>
