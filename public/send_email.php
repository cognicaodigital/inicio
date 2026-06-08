<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if ($data) {
        $mail = new PHPMailer(true);

        try {
            // Configurações do Servidor SMTP
            $mail->isSMTP();
            $mail->Host       = 'mail.cognicaodigittal.com';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'contato@cognicaodigittal.com';
            $mail->Password   = 'Cognicao@2024';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Porta 465 usa SMTPS
            $mail->Port       = 465;
            $mail->CharSet    = 'UTF-8';

            // --- 1. ENVIO PARA A EQUIPE (COGNICAO) ---
            $mail->setFrom('contato@cognicaodigittal.com', 'Site | Cognição Digital');
            $mail->addAddress('contato@cognicaodigittal.com');
            $mail->addReplyTo($data['email'], $data['nome']);

            $mail->isHTML(true);
            $mail->Subject = "🎯 NOVO DIAGNOSTICO: " . $data['nome'];
            
            $mail->Body = "
            <div style='font-family: Arial, sans-serif; color: #333;'>
                <h2 style='color: #0A192F;'>🎯 Novo Diagnóstico Recebido</h2>
                <hr>
                <p><strong>Nome:</strong> {$data['nome']}</p>
                <p><strong>E-mail:</strong> {$data['email']}</p>
                <p><strong>WhatsApp:</strong> {$data['whatsapp']}</p>
                <p><strong>Local:</strong> {$data['cidade']} - {$data['estado']}</p>
                <br>
                <h3 style='color: #D4AF37;'>Estratégia & Negócio</h3>
                <p><strong>Nicho:</strong> {$data['nicho']}</p>
                <p><strong>Segmento:</strong> {$data['segmento']}</p>
                <p><strong>Público:</strong> {$data['publico']}</p>
                <p><strong>Diferencial:</strong> {$data['diferencial']}</p>
                <p><strong>Ticket Médio:</strong> {$data['ticket']}</p>
                <p><strong>Tem Landing Page:</strong> {$data['temLandingPage']}</p>
                <p><strong>Possui Fotos Profissionais:</strong> {$data['temFotos']}</p>
                <br>
                <div style='background: #f4f4f4; padding: 20px; border-radius: 10px;'>
                    <p><strong>Descrição do Projeto/Necessidade:</strong></p>
                    <p>" . (isset($data['projeto']) ? nl2br($data['projeto']) : 'Não informado') . "</p>
                </div>
                <hr>
                <p style='font-size: 12px; color: #999;'>Enviado via Formulário Cognição Digital</p>
            </div>";

            $mail->send();

            // --- 2. ENVIO PARA O CLIENTE (LEAD) ---
            $mail->clearAddresses(); // Limpa destinatário anterior
            $mail->addAddress($data['email'], $data['nome']);
            $mail->Subject = "Recebemos seu Diagnóstico - Cognição Digital";
            
            $mail->Body = "
            <div style='font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;'>
                <h2 style='color: #0A192F;'>Olá, {$data['nome']}!</h2>
                <p>Recebemos com sucesso os dados para o seu <strong>Diagnóstico Estratégico</strong>.</p>
                <p>Nossa equipe técnica já está analisando as informações e em breve entraremos em contato via WhatsApp ou e-mail para darmos o próximo passo.</p>
                <br>
                <div style='background: #f9f9f9; padding: 15px; border-left: 4px solid #D4AF37;'>
                    <p style='margin: 0;'><strong>Resumo enviado:</strong></p>
                    <p style='margin: 5px 0; font-size: 14px;'>Nicho: {$data['nicho']}<br>Segmento: {$data['segmento']}</p>
                </div>
                <br>
                <p>Atenciosamente,</p>
                <p><strong>Equipe Cognição Digital</strong><br>
                <a href='https://cognicaodigittal.com' style='color: #D4AF37; text-decoration: none;'>www.cognicaodigittal.com</a></p>
            </div>";

            $mail->send();

            echo json_encode(["status" => "success", "message" => "E-mails enviados com sucesso via SMTP."]);

        } catch (Exception $e) {
            echo json_encode(["status" => "error", "message" => "Erro ao enviar e-mail: {$mail->ErrorInfo}"]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Dados inválidos."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Método não permitido."]);
}
?>
