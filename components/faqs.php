<div class="component-content" id="component-faqs">
  <div class="component-header">
    <h2 class="component-title">FAQs</h2>
  </div>
  <div class="component-body container">
    <h3>How can I report an issue?</h3>
    <p>If something isn't working as expected, <a
    href="https://forms.office.com/Pages/ResponsePage.aspx?id=FM9wg_MWFky4PHJAcWVDVhDwmKH5jB5ElYmJnPqvR8pUQzk1TElHWE9VSEZZUlNaUktFN0pPMlk2Qy4u"
    target="_blank">submit a bug report</a>.
<!--    <p>If something isn't working as expected, <a href="https://docs.google.com/forms/d/e/1FAIpQLScV9PqAFCSyXcnbJoGPpG_BEB3y5fMZv0TggBvHzWl41u5v1w/viewform">submit a bug report via the Google form</a>.</p>
    -->
    <h3>Where can I find examples of all the different components?</h3>
    <p>The <a href="https://keats.kcl.ac.uk/course/view.php?id=73004">King's Online Design System demo course on KEATS</a> demonstrates all of the different components that can be built. This also contains examples of 
commonly used default pages and some of the different types of activities available.</p>
    <h3>Looks good. What's coming next?</h3>
    <p>View the <a href="https://keats.kcl.ac.uk/course/view.php?id=73004&section=1">Release plan and changelog</a> for a 
breakdown of what's currently live and what's in store for future releases.</p>
    <h3>Remind me of the snippet that goes into a Moodle Book actvitiy to make it print nicely?</h3>
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