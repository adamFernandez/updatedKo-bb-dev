<html>
  <head>
    <title>KO Bootstrap Builder</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=PT+Mono&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
  </head>
  <body>
    <main>
    <h1>KO Bootstrap Builder</h1>
    <div>
      <section>
        <p>Select the component you wish to build:</p>
        <select id="component-select">
          <option value="" disabled selected>Select a component</option>
          <?php 
            $components = array('Button', 'Carousel', 'Collapse', 'Timeline', 'Card', 'Grid', 'Table', 'Transcript', 'Embed');
            sort($components);
            foreach ($components as $component) {
              $value = strtolower(str_replace(' ','',$component));
              echo "<option value=\"$value\">$component</option>";
            }
          ?>
        </select>
      </section>
      <section>
        <div class="card" id="component-builder">
          <?php include('components/button.php'); ?>
          <?php include('components/card.php'); ?>
          <?php include('components/carousel.php'); ?>
          <?php include('components/collapse.php'); ?>
          <?php include('components/grid.php'); ?>
          <?php include('components/embed.php'); ?>
          <?php include('components/table.php'); ?>
          <?php include('components/timeline.php'); ?>
          <?php include('components/transcript.php'); ?>
        </div>   
      </section>
      <section style="display:none;">
        <p><a href="http://tinymce-bootstrap-plugin.creation-site.org/">tinyMce Bootstrap Plugin</a></p>
      </section>
    </main>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/ea529b88ed.js"></script>
    <script src="js/script.js"></script>
  </body>
</html>

