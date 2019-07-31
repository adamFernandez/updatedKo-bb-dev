<html>
  <head>
    <title>KO Bootstrap Builder</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
    <link href="https://kit-free.fontawesome.com/releases/latest/css/free.min.css" rel="stylesheet">
    <link href="https://git.iddkingsonline.com/instances/lambda/embed-responsive.css" rel="stylesheet">
    <link href="https://git.iddkingsonline.com/designsystem/base.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
  </head>
  <body>
    <main style="position:relative">
    <h1 class="mt-5">KO Bootstrap Builder</h1>
    <a href="http://iddkingsonline.com/ko-bb/builder-demo.php" style="position:absolute; top:0; right:0"><img src="https://bit.ly/30UWECg" width="125px"></a>
    <div>
      <section>
        <p>Select the component you wish to build:</p>
        <ul class="nav nav-tabs">
          <?php 
            $components = array('Button', 'Carousel', 'Collapse', 'Timeline', 'Grid', 'Table', 'Transcript', 'Embed', 'Card', 'List', 'Quotation', 'Alert');
            sort($components);
            foreach ($components as $component) {
              $id = strtolower(str_replace(' ','',$component));
              echo "<li class=\"nav-item\"><a class=\"nav-link\" href=\"#\" id=\"link-$id\">$component</a></li>";
            }
          ?>
          <li class="nav-item">
            <a class="nav-link text-secondary" href="#" id="link-faqs">FAQs</a>
          </li>
        </ul>
      </section>
      <section>
        <div class="card" id="component-builder">
          <?php include('components/alert.php'); ?>
          <?php include('components/button.php'); ?>
          <?php include('components/card.php'); ?>
          <?php include('components/carousel.php'); ?>
          <?php include('components/collapse.php'); ?>
          <?php include('components/embed.php'); ?>
          <?php include('components/grid.php'); ?>
          <?php include('components/list.php'); ?>
          <?php include('components/quotation.php'); ?>
          <?php include('components/table.php'); ?>
          <?php include('components/timeline.php'); ?>
          <?php include('components/transcript.php'); ?>
          <?php include('components/faqs.php'); ?>
        </div>   
      </section>
    </main>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="js/script.js"></script>
  </body>
</html>

