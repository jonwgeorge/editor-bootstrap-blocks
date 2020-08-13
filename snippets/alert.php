<?php if ($block->isNotEmpty()): ?>
  <div class="alert alert-<?= $attrs->css() ?>" role="alert"><?= $content ?></div>
<?php endif ?>
