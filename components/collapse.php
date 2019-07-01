<div class="component-content" id="collapse">
  <div class="component-header">
    <h2 class="component-title">Collapse</h2>
    <p>Complete the following fields:</p>
  </div>
  <div class="component-body container">
    <div class="row">
      <div class="options container col-md-6">
        <form>
          <div class="form-row">
            <div class="form-group col-md-4">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="col-card-no">No. of cards</label>
                </div>
                <select class="custom-select" id="col-card-no">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3" selected>3</option>
                </select>
              </div>
            </div>
            <div class="form-group col-md-8">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="col-id">Unique ID</label>
                </div>
                <input type="text" class="form-control" id="col-id" aria-label="col-id" placeholder="modname-unitno-collapse-no" aria-describedby="collapse-unique-id">
              </div>
            </div>
          </div>
        </form>
        <div id="col-collapse">
          <div class="card col-card" id="col-card-1">
            <div class="card-header p-0" id="col-card-heading-1">
              <button class="btn btn-link btn-block text-left px-3" data-toggle="collapse" data-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                <h3 class="h5" style="margin-bottom:0 !important">Card #1</h3>
              </button>
            </div>
            <div id="collapse-1" class="collapse show" aria-labelledby="col-card-heading-1" data-parent="#col-collapse">
              <div class="card-body">
                <form>
                  <div class="form-group">
                    <label for="collapse-1-heading">Heading</label>
                    <input type="text" class="form-control" id="collapse-1-heading" placeholder="Collapse card #1 heading">
                  </div>
                  <div class="form-group">
                    <label for="collapse-1-body">Body</label>
                    <textarea class="form-control" id="collapse-1-body" placeholder="Collapse card #1 body" rows="6"></textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="card col-card" id="col-card-2">
            <div class="card-header p-0" id="col-card-heading-2">
              <button class="btn btn-link btn-block text-left px-3" data-toggle="collapse" data-target="#collapse-2" aria-expanded="true" aria-controls="collapse-2">
                <h3 class="h5" style="margin-bottom:0 !important">Card #2</h3>
              </button>
            </div>
            <div id="collapse-2" class="collapse" aria-labelledby="col-card-heading-2" data-parent="#col-collapse">
              <div class="card-body">
                  <div class="form-group">
                    <label for="collapse-2-heading">Heading</label>
                    <input type="text" class="form-control" id="collapse-2-heading" placeholder="Collapse card #2 heading">
                  </div>
                  <div class="form-group">
                    <label for="collapse-2-body">Body</label>
                    <textarea class="form-control" id="collapse-2-body" placeholder="Collapse card #2 body" rows="6"></textarea>
                  </div>
              </div>
            </div>
          </div>
          <div class="card col-card" id="col-card-3">
            <div class="card-header p-0" id="col-card-heading-3">
              <button class="btn btn-link btn-block text-left px-3" data-toggle="collapse" data-target="#collapse-3" aria-expanded="true" aria-controls="collapse-3">
                <h3 class="h5" style="margin-bottom:0 !important">Card #3</h3>
              </button>
            </div>
            <div id="collapse-3" class="collapse" aria-labelledby="col-card-heading-3" data-parent="#col-collapse">
              <div class="card-body">
                  <div class="form-group">
                    <label for="collapse-3-heading">Heading</label>
                    <input type="text" class="form-control" id="collapse-3-heading" placeholder="Collapse card #3 heading">
                  </div>
                  <div class="form-group">
                    <label for="collapse-3-body">Body</label>
                    <textarea class="form-control" id="collapse-3-body" placeholder="Collapse card #2 body" rows="6"></textarea>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 container">
        <div class="preview">
          <h2 class="preview-title">Preview</h2>
          <div id="col-preview-pane">
          </div>
        </div>
        <div class="component-code">
          <h2 class="code-title">And here's the code...</h2>
          <div class="code-box">
<pre class="code-text"><span id="col-print-code"><span class="code-open-tag">&lt;div&#32;id&#61;&#34;<span class="code-col-id">modname&#45;unitno&#45;collapse&#45;no</span>&#34;&gt;</span>
  <span id="code-col-cards"></span>
<span class="code-close-tag">&lt;&#47;div&gt;</span></span></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>