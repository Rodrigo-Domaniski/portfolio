<?php

// Obtém os dados do formulário
$nome = $_POST['nome'];
$email = $_POST['email'];
$contato = $_POST['contato'];

// Envia um e-mail com os dados do formulário
$to = 'rodrigodomaniski@gmail.com';
$subject = 'Formulário de contato';
$body = "
Nome: $nome
E-mail: $email
Contato: $contato
";
$headers = 'MIME-Version: 1.0' . "\r\n" .
           'Content-type: text/html; charset=utf-8';

mail($to, $subject, $body, $headers);

// Exibe uma mensagem de sucesso
echo 'Mensagem enviada com sucesso!';

?>