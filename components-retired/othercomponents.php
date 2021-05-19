<div class="card" id="component-builder">
  <div class="component-content col-md-8 container" id="button">
    <h2 class="component-title">Button</h2>
    <p>Select your options:</p>
    <div class="option row">
      <div class="col-md-3">
        <h3 class="option-title">Button Text</h3>
      </div>
      <div class="col-md-9 no-padding">
        <input type="text" class="form-control" name="btn-text" onfocus="if(this.value == 'value') { this.value = ''; }" value="Button Text">
        <input type="text" class="form-control" name="btn-value" value="Button Value" style="display:none">
      </div> 
    </div>
    <div class="option row">
      <div class="col-md-3">
        <h3 class="option-title">Button Style</h3>
      </div>
      <div class="row col-md-9">
        <button type="button" class="btn btn-primary col-md-2" id="primary">Primary</button>
        <button type="button" class="btn btn-secondary col-md-2" id="secondary">Secondary</button>
      </div>          
    </div>
    <div class="option row">
    <div class="col-md-3">
        <h3 class="option-title">Button Width</h3>
      </div>
      <div class="row col-md-9">
        <button type="button" class="btn btn-primary col-md-2">Standard</button>
        <button type="button" class="btn btn-primary col-md-12 btn-block">Full-width</button>
      </div>
    </div>
    <div class="option row">
      <div class="col-md-3">
        <h3 class="option-title">Tags</h3>
        <p>Description</p>
      </div>
      <div class="row col-md-9">
        <button class="btn btn-outline-dashed col-md-2">&lt;button&gt;</button>
        <button class="btn btn-outline-dashed col-md-2">&lt;a&gt;</button>
        <button class="btn btn-outline-dashed col-md-2">&lt;input&gt;</button>
        <div class="col-md-5">
          <label class="no-margin">Link: </label>
          <input type="text" name="btn-link-text" value="#">
        </div>
      </div>
    </div>
    <div class="option row">
      <div class="col-md-3">
        <h3 class="option-title">Button Icons</h3>
      </div>
      <div class="col-md-9">
        Display a set list of icons to prepend or append button text
      </div>
    </div>
  </div>
  <div class="component-content" id="card">
    <ul>
      <li>Select colour (full colour of just border?</li>
      <li>Header/no header</li>
      <li>Picture at top/no picture</li>
      <li>Footer/no footer</li>
      <li>Add content via editor?</li>
      <li>Multiple cards at once? Then we need to consider grid as well possibly?</li>
    </ul>
  </div>
  <div class="component-content" id="carousel">
    <ul>
      <li>Create full carousel(including image upload and text) within editor</li>
      <li>Get ideal aspect ratio from UX team</li>
      <li>Maybe: open text field for adding css calss names to change the way it appears</li>
      <li>Selector for how many fields</li>
      <li>UX: Carousel with no images?</li>
      <li>Radio buttons to change options (cycling in particular)</li>
    </ul>
  </div>
  <div class="component-content" id="collapse">
    <ul>
      <li>Select box - up to 10</li>
      <li>Click on whole of the button to drop down, not just the title</li>
    </ul>
  </div>
  <div class="component-content" id="grid">
    <ul>
      <li>Presets, UX will determine which ones</li>
      <li>Display borders somehow?</li>
    </ul>
  </div>
  <div class="component-content" id="table">
    <ul>
      <li>TBD by UX, might have a few different options</li>
      <li>Define horizntal/vertical header options</li>
      <li>Advanced table editing (merging, add cells, add columns, delete, etc)</li>
      <li>Colspan/rowspan within editor</li>
    </ul>
  </div>
  <div class="component-content" id="timeline">
    <ul>
      <li>Add each box via the editor</li>
      <li>Left, right, full-width boxes</li>
      <li>Select colour</li>
    </ul>
  </div>
 
  <div class="component-code col-md-4 container" id="button">
    <h2 class="code-title">And here's the code</h2>
    <div class="code-box">
      <span class="token tag">
        <span class="token punctuation">&lt;</span>button
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">&#61;</span><span class="token punctuation">&#34;</span>button<span class="token punctuation">&#34;</span></span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">&#61;</span><span class="token punctuation">&#34;</span>btn btn-primary<span class="token punctuation">&#34;</span></span><span class="token punctuation">&gt;</span>
      </span>
      <br>
      <span id="btn-text">Button Text</span>
      <br>
      <span id="token tag">
        <span id="token punctuation">&lt;&#47;</span>button<span id="token punctuation">&gt;</span>
      </span>
    </div>
  </div>
</div>  
