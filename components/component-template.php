<div class="component-content" id="component-name">
  <div class="component-header">
    <h2 class="component-title">Comoponent Name</h2>
    <p>Select your options:</p>
  </div>
  <div class="component-body container">
    <div class="row">
      <div class="options container col-md-8">
        <div class="option row">
          <div class="col-md-3">
            <h3 class="option-title btn-text">Option Title</h3>
          </div>
          <div class="row col-md-9 option-select">
            <input type="text" id="btn-input" class="btn-input" name="btn-text" onfocus="if(this.value == 'value') { this.value = ''; }" placeholder="Type something...">
          </div> 
        </div>
        <div class="option row">
          <div class="col-md-3">
            <h3 class="option-title">Option Title</h3>
          </div>
          <div class="row option-select col-md-9">
            <div class="btn-group-toggle" data-toggle="buttons">
              <label class="btn btn-primary btn-style active" id="style-primary">
                <input type="radio" name="options" autocomplete="off" checked>Primary
              </label>
              <label class="btn btn-secondary btn-style" id="style-secondary">
                <input type="radio" name="options" autocomplete="off">Secondary
              </label>
            </div>
          </div>          
        </div>
        <div class="option row">
          <div class="col-md-3">
            <h3 class="option-title">Option Title</h3>
          </div>
          <div class="row option-select col-md-9">
            <div class="btn-group-toggle btn-group-block" data-toggle="buttons">
              <label class="btn btn-primary btn-std-width active">
                <input type="radio" name="options" id="width-standard" autocomplete="off" checked>Standard
              </label>
              <label class="btn btn-primary btn-block col-md-12">
                <input type="radio" name="options" id="width-full" autocomplete="off">Full-width
              </label>
            </div>
          </div>
        </div>
        <div class="option row">
          <div class="col-md-3">
            <h3 class="option-title">Option Title</h3>
            <p>Description</p>
          </div>
          <div class="row option-select col-md-9">
            <div class="btn-group-toggle" data-toggle="buttons">
              <label class="btn btn-outline-dashed tag-type tag-button active" value="test">
                <input type="radio" name="options" id="tag-button" autocomplete="off"checked>&lt;button&gt;
              </label>
              <label class="btn btn-outline-dashed tag-type tag-a" id="tag-a-label">
                <input type="radio" name="options" id="tag-a" autocomplete="off">&lt;a&gt;
              </label>
              <label class="btn btn-outline-dashed tag-type tag-input">
                <input type="radio" name="options" id="tag-input" autocomplete="off">&lt;input&gt;
              </label>
            </div>
            <div class="input-set" id="tag-link">
              <label class="no-margin">Link: </label>
              <input type="text" class="link-text" name="btn-link-text" placeholder="#" value="">
            </div>
          </div>
        </div>
        <div class="option row">
          <div class="col-md-3">
            <h3 class="option-title">Option Title</h3>
          </div>
          <div class="row option-select col-md-9">
            <div class="input-group">
              <select class="custom-select" id="icon-select" aria-label="Icon selector">
                <option selected>Choose...</option>
                <option value="1">set</option>
                <option value="2">list</option>
                <option value="3">of</option>
                <option value="4">icons</option>
                <option value="5">from</option>
                <option value="6">UX</option>
              </select>
              <div class="input-group-append">
                <button class="btn btn-outline-secondary no-margin btn-icon disabled" type="button">Prepend</button>
                <button class="btn btn-outline-secondary no-margin btn-icon disabled" type="button">Append</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4 container" id="button">
        <div class="preview">
          <h2 class="preview-title">Preview</h2>
          <div class="preview-pane">
            <button type="button" class="btn btn-primary" disabled>Button Text</button>
          </div>
        </div>
        <div class="component-code">
          <h2 class="code-title">And here's the code...</h2>
          <div class="code-box">
            <pre>
<span id="print-code"><span class="tp">&lt;</span><span class="code-tag">button</span><span class="tp">&#32;</span><span class="code-type-pre">type="</span><span class="code-type">button</span><span class="code-link"></span><span class="tp">&#34;&#32;</span><span class="code-class-pre">class="<span class="code-class-style">btn btn-primary</span><span class="code-class-width"></span><span class="tp">&#34;</span></span><span class="code-input-value"><span class="code-input-value-open"> value="</span><span class="code-input-value-text"></span><span class="code-input-value-close">"</span></span><span class="tp">&gt;</span>  
  <span id="btn-text">Button Text</span>
<span class="code-close-tag"><span id="tp">&lt;&#47;</span><span class="code-tag">button</span><span id="token punctuation">&gt;</span></span></span>
            </pre>
          </div>
        </div>
      </div>
    </div>
  </div>  
</div>