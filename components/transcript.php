<div class="component-content" id="transcript">
  <div class="component-header">
    <h2 class="component-title">Transcript</h2>
    <p>Complete the following fields:</p>
  </div>
  <div class="component-body container">
    <div class="row">
      <div class="options container col-md-6">
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="ts-title">Title</label>
              <input type="text" class="form-control" id="ts-title" placeholder="Transcript title">
            </div>
            <div class="form-group col-md-6">
              <label for="ts-id">Unique ID *</label>
              <input type="text" class="form-control" id="ts-id" placeholder="modname-unitno-transcript" required>
            </div>
          </div>
<!--
              <div class="form-group">
                <label for="ts-file">Upload transcript</label>
                <input type="file" class="form-control-file" id="ts-file">
              </div>
-->
          <div class="form-group">
            <label for="ts-link">Link *</label>
            <input type="text" class="form-control" id="ts-link" placeholder="https://keats.kcl.ac.uk/pluginfile.php/12345/course/section/12345/transcript.pdf" required>
            <small id="ts-link-help" class="form-text text-muted">The transcript must first be uploaded to Keats, where the generated link can be copied and pasted from.</small>
          </div>
          <div class="form-group">
            <label for="ts-body">Body</label>
            <textarea class="form-control" id="ts-body" placeholder="This is the first paragraph.
</p><p>
This is the second paragraph." rows="6"></textarea>
            <small id="ts-body-help" class="form-text text-muted">Copy and paste the body of the transcript text into the textarea.</small>
          </div>
        </form> 
      </div>
      <div class="col-md-6 container">
        <div class="preview">
          <h2 class="preview-title">Preview</h2>
          <div id="ts-preview-pane">
          </div>
        </div>
        <div class="component-code">
          <h2 class="code-title">And here's the code...</h2>
          <div class="code-box">
            <pre class="code-text">
<span id="ts-print-code"><span class="code-open-tag">&lt;div&#32;class&#61;&#34;transcript&#45;container&#34;&gt;</span>
  <span class="code-open-tag">&lt;div&#32;class&#61;&#34;transcript&#45;button&#45;group&#34;&gt;</span>
    <span class="code-open-tag">&lt;a&#32;class&#61;&#34;btn&#32;btn&#45;primary&#32;view&#45;close&#45;transcript&#32;collapsed&#34;&#32;href&#61;&#34;&#35;<span class="code-ts-id">modname-unitno-transcript</span>&#34;&#32;data&#45;toggle&#61;&#34;collapse&#34;&#32;role&#61;&#34;button&#34;&#32;aria&#45;expanded&#61;&#34;false&#34;&#32;aria&#45;controls&#61;&#34;<span class="code-ts-id">modname-unitno-transcript</span>&#34;&gt;</span>View transcript<span class="code-close-tag">&lt;&#47;a&gt;</span>
    <span class="code-open-tag">&lt;a&#32;class&#61;&#34;btn&#32;btn&#45;primary&#34;&#32;href&#61;&#34;<span id="code-ts-link">www.example.com/transcript.pdf</span>&#34;&#32;role&#61;&#34;button&#34;&#32;target&#61;&#34;&#95;blank&#34;&gt;</span>Download transcript<span class="code-close-tag">&lt;&#47;a&gt;</span>
  <span class="code-close-tag">&lt;&#47;div&gt;</span>
  <span class="code-open-tag">&lt;div&#32;class&#61;&#34;transcript&#45;card&#32;card&#32;collapse&#34;&#32;id&#61;&#34;<span class="code-ts-id">modname-unitno-transcript</span>&#34;&gt;</span>
    <span class="code-open-tag">&lt;div&#32;class&#61;&#34;card&#45;body&#34;&gt;</span>
      <span class="code-open-tag">&lt;h3&#32;class&#61;&#34;card&#45;title&#34;&gt;</span><span id="code-ts-title">Transcript title</span><span class="code-close-tag">&lt;&#47;h3&gt;</span>
      <span class="code-open-tag">&lt;p&gt;</span><span id="code-ts-body">Transcript body...</span><span class="code-close-tag">&lt;&#47;p&gt;</span>
    <span class="code-close-tag">&lt;&#47;div&gt;</span>
  <span class="code-close-tag">&lt;&#47;div&gt;</span>
<span class="code-close-tag">&lt;&#47;div&gt;</span>
            </pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>