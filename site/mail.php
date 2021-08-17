<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$zam = $_POST['zam1'];
$mes = $_POST['mes1'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.ukr.net';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'ukrdrukua@ukr.net'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '18UAW8WY7p9RLfKT'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('ukrdrukua@ukr.net'); // от кого будет уходить письмо?
$mail->addAddress('pavlo.dakiv2007@gmail.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = '' .$name . ' Надіслав(ла) замовлення, його(її) телефон: ' .$phone. '<br>Замовлення: ' .$zam. '<br>Пошта: ' .$email. '<br>Повідомлення: ' .$mes;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    echo 'I SEND';
}
?>

