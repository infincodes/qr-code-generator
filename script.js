function generateQRCode() {
    var linkInput = document.getElementById('linkInput').value;
    var qrCodeDiv = document.getElementById('qr-code');

    // Clear existing QR code
    qrCodeDiv.innerHTML = '';

    // Generate QR code
    var qrcode = new QRCode(qrCodeDiv, {
      text: linkInput,
      width: 128,
      height: 128
    });

  }