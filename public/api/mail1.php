<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    if (!$data) {
        echo json_encode(['status' => 'error', 'message' => 'Dados invlidos']);
        exit;
    }

    $to = "contato@cognicaodigittal.com";
    $subject = "Novo Formulario Recebido - Cognicao Digittal";
    
    // Determine the type of form
    $formType = isset($data['form_type']) ? $data['form_type'] : 'Formulrio Geral';
    $subject = "[$formType] " . $subject;

    $message = "<html><body>";
    $message .= "<h2 style='color: #0d1117;'>Novo Lead Recebido via Website</h2>";
    $message .= "<table style='width: 100%; border-collapse: collapse;'>";
    
    foreach ($data as $key => $value) {
        if ($key === 'form_type') continue;
        $label = ucfirst(str_replace('_', ' ', $key));
        $message .= "<tr>";
        $message .= "<td style='padding: 10px; border: 1px solid #eee; background: #f9f9f9; font-weight: bold;'>$label:</td>";
        $message .= "<td style='padding: 10px; border: 1px solid #eee;'>$value</td>";
        $message .= "</tr>";
    }
    
    $message .= "</table>";
    $message .= "<p style='color: #888; font-size: 12px; margin-top: 20px;'>Enviado via Ecossistema Digital Cognio Digittal</p>";
    $message .= "</body></html>";

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: sistema@cognicaodigittal.com" . "\r\n";
    $headers .= "Reply-To: " . (isset($data['email']) ? $data['email'] : "contato@cognicaodigittal.com") . "\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(['status' => 'success', 'message' => 'E-mail enviado com sucesso']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Falha no envio do e-mail']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Mtodo no permitido']);
}
?>
