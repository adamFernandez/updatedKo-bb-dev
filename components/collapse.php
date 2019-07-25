<div class="component-content" id="collapse">
  <div class="component-header">
    <h2 class="component-title">Collapse</h2>
  </div>
  <div class="component-body container">
    <div class="row">
      <div class="options container col-md-6">
        <section class="options">
          <h3>Options</h3>
          <p>Complete the following fields:</p>
          <form class="needs-validation" id="col-form" novalidate>
            <div class="form-row">
              <div class="form-group col-md-5">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="col-card-no">No. of cards</label>
                  </div>
                  <select class="custom-select" id="col-card-no">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3" selected>3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                  </select>
                </div>
              </div>
              <div class="form-group col-md-7">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="col-id">Unique ID*</label>
                  </div>
                  <input type="text" class="form-control" id="col-id" aria-label="col-id" placeholder="modname-unitno-collapse-no" aria-describedby="collapse-unique-id" required>
                  <div class="invalid-feedback" id="col-id-invalid-feedback">
                    Please enter a unique ID.
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div id="collapse-cards">
          </div>
        </section>
      </div>
      <div class="col-md-6 container">
        <section class="preview">
          <h3 class="preview-title">Preview</h3>
          <div id="col-preview-pane"></div>
        </section>
        <section class="component-code">
          <div class="code-header">
            <h3 class="code-title">Code</h3>
            <button class="btn btn-outline-primary" id="copy-col-code" type="submit">Copy Code</button>
          </div>
          <div class="code-box">
<pre class="code-text"><span id="col-print-code"><span class="code-open-tag">&lt;div&#32;id&#61;&#34;<span class="code-col-id">modname&#45;unitno&#45;collapse&#45;no</span>&#34;&gt;</span>
  <span id="code-col-cards"></span>
<span class="code-close-tag">&lt;&#47;div&gt;</span></span></pre>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>