<div class="component-content" id="component-faqs">
  <div class="component-header">
    <h2 class="component-title">FAQs</h2>
  </div>
  <div class="component-body container">
    <div class="collapse-container">
      <div class="collapse-card collapsed">
        <div class="collapse-header">
          <button class="btn btn-link">
            <h5 class="h4">How can I report an issue?</h5>
          </button>
        </div>
        <div class="collapse-body">
          <p>If something isn't working as expected, <a href="https://iddkingsonline.com/design-system/request-form.html" target="_blank">submit a bug report</a>.
        </div>
      </div>
      <div class="collapse-card collapsed">
        <div class="collapse-header">
          <button class="btn btn-link">
            <h5 class="h4">Where can I find examples of all the different components?</h5>
          </button>
        </div>
        <div class="collapse-body">
          <p>The <a href="http://iddkingsonline.com/design-system/guide.html">King's Online Design System demo course on KEATS</a> demonstrates all of the different components that can be built. This also contains examples of 
      commonly used default pages and some of the different types of activities available.</p>
        </div>
      </div>
      <div class="collapse-card collapsed">
        <div class="collapse-header">
          <button class="btn btn-link">
            <h5 class="h4">Looks good. What's coming next?</h5>
          </button>
        </div>
        <div class="collapse-body">
          <p>View the <a href="https://keats.kcl.ac.uk/course/view.php?id=73004&section=1">Release plan and changelog</a> for a 
      breakdown of what's currently live and what's in store for future releases.</p>
        </div>
      </div>
      <div class="collapse-card collapsed">
        <div class="collapse-header">
          <button class="btn btn-link">
            <h5 class="h4">Remind me of the snippet that goes into a Moodle Book actvitiy to make it print nicely?</h5>
          </button>
        </div>
        <div class="collapse-body">
          <p>Books currently need additional code added in order to make them printer-friendly. Simply add this code to the top of the first page of the book:</p>
          <pre><code>&lt;script type="text/javascript"&gt;
// Load external CSS file into Keats
loadcss("https://git.iddkingsonline.com/designsystem/css/print-book.css");
function loadcss(url) {
  var head = document.getElementsByTagName('head')[0],
  link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = url;
  head.appendChild(link);
  return link;
}
// Load external JS file into Keats
loadjs("https://git.iddkingsonline.com/designsystem/js/book.js");
function loadjs(url) {
  var body = document.getElementsByTagName('body')[0],
  script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  body.appendChild(script);
  return script;
}
&lt;/script&gt;</code></pre>
        </div>
      </div>
      <div class="collapse-card collapsed">
        <div class="collapse-header">
          <button class="btn btn-link">
            <h5 class="h4">Remind me of frequently used custom classes that aren't available via this builder?</h5>
          </button>
        </div>
        <div class="collapse-body">
          <p>You can find a list of commonly used custom classes below:</p>
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <h4>Grid layout</h4>
                <p>Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. More information can be found on their <a href="https://keats.kcl.ac.uk/mod/book/view.php?id=3072535&chapterid=245100">documentation page</a>.</p>
              </div>
              <div class="col-md-3">
                <h4>Images</h4>
                <ul>
                  <li><p><a href="https://keats.kcl.ac.uk/mod/book/view.php?id=3118028">Full width images</a></p></li>
                  <li><p><a href="https://keats.kcl.ac.uk/mod/book/view.php?id=3118028&chapterid=244778">Circular images</a></p></li>
                  <li><p><a href="https://keats.kcl.ac.uk/mod/book/view.php?id=3118028&chapterid=251213">Centered images</a></p></li>
                  <li><p><a href="https://keats.kcl.ac.uk/mod/book/view.php?id=3118028&chapterid=296015">Screenshots</a></p></li>
                  <li><p><a href="https://keats.kcl.ac.uk/mod/book/view.php?id=3118028&chapterid=395483">Images with horizontal scroll</a></p></li>
                </ul>
                <h4>Float box images</h4>
                <ul>
                  <li><p><a href="https://keats.kcl.ac.uk/mod/book/view.php?id=3118035&chapterid=387530#right-aligned-images">Right aligned images</a></p></li>
                  <li><p><a href="https://keats.kcl.ac.uk/mod/book/view.php?id=3118035&chapterid=387530#small-images">Small images</a></p></li>
                </ul>
              </div>
              <div class="col-md-3">
                <h4>Tables</h4>
                <ul>
                  <li><p><a href="https://keats.kcl.ac.uk/mod/book/view.php?id=3119719&chapterid=245102">Tables with horizontal scroll</a></p></li>
                  <li><p><a href="https://keats.kcl.ac.uk/mod/book/view.php?id=3119719&chapterid=382697">Titles and captions</a></p></li>
                  <li><p><a href="https://keats.kcl.ac.uk/mod/book/view.php?id=3119719&chapterid=384760">Highlighting cells</a></p></li>
                  <li><p><a href="https://keats.kcl.ac.uk/mod/book/view.php?id=3119719&chapterid=284890">Diagonally split header</a></p></li>
                  <li><p><a href="https://keats.kcl.ac.uk/mod/book/view.php?id=3119719&chapterid=402312">Tables without borders</a></p></li>
                  <li><p><a href="https://keats.kcl.ac.uk/mod/book/view.php?id=3119719&chapterid=402399">Tables with outer border only</a></p></li>
                  <li><p><a href="https://keats.kcl.ac.uk/mod/book/view.php?id=3119719&chapterid=402422">Tables with right aligned text</a></p></li>
                </ul>
              </div>
              <div class="col-md-3">
                <h4>Typography</h4>
                <p><a
          href="https://keats.kcl.ac.uk/mod/book/view.php?id=3072535&chapterid=245100">Captions</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
