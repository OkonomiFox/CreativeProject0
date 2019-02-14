<?php
require_once(__DIR__ . '/vendor/.php');

// Configure API key authorization: Apikey
$config = Swagger\Client\Configuration::getDefaultConfiguration()->setApiKey('Apikey', 'dc23098d-3767-4fcd-8554-a288fbd371fd');



$apiInstance = new Swagger\Client\Api\ArtisticApi(


   new GuzzleHttp\Client(),
   $config
);
$style = "la_muse"; // string | The style of the painting to apply.  To start, try \"udnie\" a painting style.  Possible values are: \"udnie\", \"wave\", \"la_muse\", \"rain_princess\".
$image_file = "skywhales.jpg"; // \SplFileObject | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.

try {
   $result = $apiInstance->artisticPainting($style, $image_file);
   print_r($result);
} catch (Exception $e) {
   echo 'Exception when calling ArtisticApi->artisticPainting: ', $e->getMessage(), PHP_EOL;
}
?>
