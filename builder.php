<html>
  <head>
    <title>KO Bootstrap Builder</title>
    <link href="https://moodle.iddkingsonline.com/theme/styles.php/lambda/1563538449_1/all" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
    <link href="https://kit-free.fontawesome.com/releases/latest/css/free.min.css" rel="stylesheet">
    <link href="https://git.iddkingsonline.com/designsystem/bootstrap.css" rel="stylesheet">
    <link href="https://git.iddkingsonline.com/designsystem-dev/main.css" rel="stylesheet">
    <link href="css/style-demo.css" rel="stylesheet">
  </head>
  <body>
    <main>
    <h1>KO Bootstrap Builder</h1>
    <div>
      <div>
        <p>Select the component you wish to build:</p>
        <ul class="nav nav-tabs">
          <?php
            $components = array('Button', 'Carousel', 'Collapse', 'Timeline', 'Grid', 'Table', 'Transcript', 'Embed', 'Card', 'List', 'Quotation', 'Infobox', 'View answer', 'Geshi');
            sort($components);
            foreach ($components as $component) {
              $id = strtolower(str_replace(' ','',$component));
              echo "<li class=\"nav-item\"><a class=\"nav-link\" href=\"#\" id=\"link-$id\">$component</a></li>";
            }
          ?>
          <li class="nav-item">
            <a class="nav-link" href="#" id="link-faqs">FAQs</a>
          </li>
        </ul>
      </div>
      <section id="region-main">
       <div id="component-builder">
          <?php include('components/button.php'); ?>
          <?php include('components/card.php'); ?>
          <?php include('components/carousel.php'); ?>
          <?php include('components/collapse.php'); ?>
          <?php include('components/embed.php'); ?>
          <?php include('components/geshi.php'); ?>
          <?php include('components/grid.php'); ?>
          <?php include('components/infobox.php'); ?>
          <?php include('components/list.php'); ?>
          <?php include('components/quotation.php'); ?>
          <?php include('components/table.php'); ?>
          <?php include('components/timeline.php'); ?>
          <?php include('components/transcript.php'); ?>
          <?php include('components/viewanswer.php'); ?>
          <?php include('components/faqs.php'); ?>
        </div>
      </section>
    </main>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/ea529b88ed.js"></script>
    <script src="https://git.iddkingsonline.com/designsystem-dev/js/main.js"></script>
    <script src="js/script-demo.js"></script>
  </body>
</html>

