<div class="component-content" id="component-table">
  <div class="component-header">
    <h2 class="component-title">Table</h2>
    <p><a href="https://keats.kcl.ac.uk/mod/book/view.php?id=3119719" target="_blank">Design System guidance and examples</a></p>
  </div>
  <div class="component-body container">
    <div class="alert alert-btw" role="alert">
      <p>It is not yet possible to edit content within the Builder for this component. Copy and paste the code into Keats in order to add content.</p>
    </div>
    <div class="row">
      <div class="options col-md-4">
        <section class="options">
          <h3>Options</h3>
          <p>Select your options:</p>
          <form>
            <div class="form-row">
              <div class="form-group col-md-12">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">No. of</span>
                    <label class="input-group-text" for="tab-col-no">columns</label>
                  </div>
                  <select class="custom-select" id="tab-col-no">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3" selected>3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="tab-row-no">rows</label>
                  </div>
                  <select class="custom-select" id="tab-row-no">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3" selected>3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
              <div class="form-group col-md-12">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="tab-width">Width</label>
                  </div>
                  <select class="custom-select" id="tab-width">
                    <option value="full-width" selected>full-width</option>
                    <option value="default">default</option>
                  </select>
                </div>
              </div>
              <div class="form-group col-md-12">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="vertical-align">Vertical align</label>
                  </div>
                  <select class="custom-select" id="vertical-align">
                    <option value="top" selected>Top (defautl)</option>
                    <option value="middle">Middle</option>
                  </select>
                </div>
                <small id="tab-vertical-align-help" class="form-text text-muted">Select 'middle' for tables with merged cells only.</small>
              </div>
            </div>
            <div class="custom-control custom-checkbox mb-3">
              <input type="checkbox" class="custom-control-input checked" id="tab-check-column-header" checked>
              <label class="custom-control-label" for="tab-check-column-header"><span id="tab-toggle-column-header">Remove</span> column headers</label>
            </div>
            <div class="custom-control custom-checkbox mb-3">
              <input type="checkbox" class="custom-control-input unchecked" id="tab-check-row-header">
              <label class="custom-control-label" for="tab-check-row-header"><span id="tab-toggle-row-header">Add</span> row headers</label>
            </div>
            <div id="tab-cards">
            </div>
          </form>
        </section>
      </div>
      <div class="col-md-8">
        <section class="preview">
          <h3 class="preview-title">Preview</h3>
          <div id="tab-preview-pane"></div>
        </section>
        <section class="component-code">
          <div class="code-header">
            <h3 class="code-title">Code</h3>
            <button class="btn btn-secondary" id="copy-tab-code">Copy Code</button>
          </div>
          <div class="code-box">
            <pre class="code-text">
<span id="tab-print-code"><span class="code-open-tag">&lt;div&#32;class&#61;&#34;table&#45;scroll&#34;&gt;</span>
  <span class="code-open-tag">&lt;table&#32;class&#61&#34;table&#32;table&#45;bordered<span id="code-tab-width"></span><span id="code-tab-vertical-align"></span>&#34;&gt;</span><span id="code-tab-thead-open-tag">
    &lt;thead&gt;
      &lt;tr&gt;</span><span id="code-tab-row-0-header"></span><span id="code-tab-headers"></span><span id="code-tab-thead-close-tag">
      &lt;&#47;tr&gt;
    &lt;&#47;thead&gt;</span>
    <span class="code-open-tag">&lt;tbody&gt;</span><span id="code-tab-rows"></span>
    <span class="code-close-tag">&lt;&#47;tbody&gt;</span>
  <span class="code-close-tag">&lt;&#47;table&gt;</span>
<span class="code-close-tag">&lt;&#47;div&gt;</span></span>
            </pre>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>
