<?php
use yii\helpers\Html;
use app\assets\AppAsset;
use yii\helpers\BaseUrl;

/* @var $this \yii\web\View */
/* @var $content string */

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>

    <link rel="stylesheet" type="text/css" href="<?= BaseUrl::base(); ?>/css/site.css">
    <?php $this->head() ?>
    <script src="http://www.quasimondo.com/StackBlurForCanvas/StackBlur.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="<?= BaseUrl::base(); ?>/scripts/video.js"></script>
    <script src="<?= BaseUrl::base(); ?>/scripts/forms.js"></script>
</head>
<body>

<?php $this->beginBody() ?>

<?= $content; ?>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
