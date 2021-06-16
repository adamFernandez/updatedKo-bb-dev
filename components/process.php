<div class="component-content" id="component-process">
  <div class="component-header">
    <h2 class="component-title">Carousel</h2>
    <p><a href="https://keats.kcl.ac.uk/mod/page/view.php?id=3118002" target="_blank">Design System guidance and examples</a></p>
  </div>
  <div class="component-body container">
    <div class="alert alert-danger d-none" role="alert" id="prcss-alt-text-alert">
      <p>Please add alternative text for all images.</p>
    </div>
    <div class="row">
      <div class="options col-md-5">
        <section class="options">
          <h3>Options</h3>
          <p>Complete the following fields:</p>
          <form class="needs-validation" id="prcss-form" novalidate>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="prcss-arrows">Choose arrow typ</label>
                </div>
                <select class="custom-select" id="prcss-arrows">
                   <option value="1" selected>One way arrow</option>
                   <option value="2">Two way arrows</option>
                </select>
                <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input unchecked" id="prcss-check-label" checked>
              <label class="custom-control-label" id="prcss-label-label" for="prcss-check-label">Remove label</label>
            </div>
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="prcss-cards">No. of slides</label>
                </div>
                <select class="custom-select" id="prcss-cards">
                   <option value="2">2</option>
                   <option value="3" selected>3</option>
                   <option value="4">4</option>
                   <option value="5">5</option>
                   <option value="6">6</option>
                   <option value="7">7</option>
                   <option value="8">8</option>
                </select>
              </div>
                
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input checked" id="prcss-check-" checked>
              <label class="custom-control-label" id="prcss-label-img" for="prcss-check-img">Remove image</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input unchecked" id="prcss-check-caption" checked>
              <label class="custom-control-label" id="prcss-label-caption" for="prcss-check-caption">Remove caption</label>
            </div>
            
          </form>
          <div class="collapse-container" id="prcss-collapse-container">
          
          </div>
        </section>
      </div>
      <div class="col-md-7">
        <section class="preview">
          <h3 class="preview-title">Preview</h3>
          <div class="preview-prcss">
            <div class="process-container container" role="list">
              <div class="step" role="listitem">
                <div class="card process-card">
                  <img src="http://placekitten.com/300" alt="A placeholder image">
                  <div class="card-body">
                    <h4 class="card-text">1Sesame snaps...</h4>
                    <p class="card-text">Gummi bears gummies bonbon carrot cake sugar plum apple pie bonbon cake...</p>
                  </div>
                </div>
                <div class="connector-container no-gutters">
                  <div class="process-label sr-only">Leads to</div>
                  <div class="icon arrow-down" aria-hidden="true"></div>
                </div>
              </div>
          </div>
        </section>
        <section class="component-code">
          <div class="code-header">
            <h3 class="code-title">Code</h3>
            <button class="btn btn-secondary" id="copy-prcss-code">Copy Code</button>
          </div>
          <div class="code-box">
<pre class="code-text">
<span id="code-prcss">&lt;div class=&quot;process-container container&quot; role=&quot;list&quot;&gt; 
  &lt;div class=&quot;step&quot; role=&quot;listitem&quot;&gt; 
    &lt;div class=&quot;card process-card&quot;&gt; 
      &lt;img src=&quot;http://placekitten.com/300&quot; alt=&quot;A placeholder image&quot;&gt; 
      &lt;div class=&quot;card-body&quot;&gt; 
        &lt;h4 class=&quot;card-text&quot;&gt;1Sesame snaps...&lt;/h4&gt; 
        &lt;p class=&quot;card-text&quot;&gt;Gummi bears gummies bonbon carrot cake sugar plum apple pie bonbon cake...&lt;/p&gt; 
      &lt;/div&gt; 
    &lt;/div&gt; 
    &lt;div class=&quot;connector-container no-gutters&quot;&gt; 
      &lt;div class=&quot;process-label sr-only&quot;&gt;Leads to&lt;/div&gt; 
      &lt;div class=&quot;icon arrow-down&quot; aria-hidden=&quot;true&quot;&gt;&lt;/div&gt; 
    &lt;/div&gt; 
  &lt;/div&gt; 
&lt;/div&gt;</span>
</pre>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>
