<?php
// (A) DATABASE CREDENTIALS - CHANGE TO YOUR OWN!
define("DB_HOST", "mysql-muzaffar.alwaysdata.net");
define("DB_NAME", "muzaffar_cv_survey");
define("DB_CHARSET", "utf8");
define("DB_USER", "muzaffar_muzo");
define("DB_PASSWORD", "123456789qsxq");

// (B) CONNECT TO DATABASE
$error = null;
try {
  $pdo = new PDO(
    "mysql:host=" . DB_HOST . ";charset=" . DB_CHARSET . ";dbname=" . DB_NAME,
    DB_USER, DB_PASSWORD, [
      PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]
  );
} catch (Exception $ex) { $error = $ex->getMessage(); }

// (C) INSERT
if (is_null($error)) {
  try {
    $stmt = $pdo->prepare("INSERT INTO `survey` (`name`, `surname`,`email`, `message`) VALUES (?, ?, ?,?)");
    $stmt->execute([$_POST["name"], $_POST["surname"], $_POST["email"], $_POST["message"]]);
  } catch (Exception $ex) { $error = $ex->getMessage(); }
}


// (X) SEND EMAIL
if (is_null($error)) {
  $message = "";
  foreach ($_POST as $k=>$v) { $message .= "$k : $v\r\n"; }
  if (!mail("muzaffar.mustafayev@ufaz.az", "Survey Received", $message)) {
    $error = "Failed to send email";
  }
}



// (D) RESULTS
echo is_null($error) ? "Your message was recorded" : $error ;
