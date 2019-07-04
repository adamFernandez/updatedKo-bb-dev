<div class="component-content" id="card">
  <div class="component-header">
    <h2 class="component-title">Card</h2>
  </div>
  <div class="component-body container">
    <div class="row">
      <div class="options container col-md-6">
      <section class="options">
        <h3>Options</h3>
        <p>Complete the following fields:</p>
        <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <div class="input-group mb-3">
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
              <div class="form-group col-md-6">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="cd-layout">Layout</label>
                  </div>
                  <select class="custom-select" id="cd-layout">
                    <option value="block" selected>Block</option>
                    <option value="deck">Card deck</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
          <div id="cd-collapse">
          </div>
        </section>
      </div>
      <div class="col-md-6 container">
        <section class="preview">
          <h3 class="preview-title">Preview</h3>
          <div id="cd-preview-pane"></div>
        </section>
        <section class="component-code">
           <div class="code-header">
            <h3 class="code-title">Code</h3>
            <button class="btn btn-outline-primary" id="copy-cd-code">Copy Code</button>
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