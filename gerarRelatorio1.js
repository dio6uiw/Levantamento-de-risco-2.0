// Obter o valor do elemento de rádio selecionado
var ruido = document.querySelector('input[name="ruido"]:checked').value;
var exposicaoR = document.querySelector('input[name="exposicaoR"]:checked').value;

function gerarPDF() {
    // Criar um novo objeto jsPDF
    var doc = new jsPDF();
    var cumprimento = parseInt(document.getElementById("cumprimento").value);
    var largura = parseInt(document.getElementById("largura").value);
    var area = cumprimento * largura;
    doc.setFont("Arial");
    doc.setFontSize(12);

    doc.text("EMPRESA: " + document.getElementById("empresa").value, 10, 10);
    doc.text("SETOR: " + document.getElementById("setor").value, 10, 15);
    doc.text("ÁREA: " + area + " m²", 10, 20);
    doc.text("PÉ DIREITO: " + document.getElementById("pé_direito").value + " m", 10, 25);
    doc.text("PISO: " + document.getElementById("piso").value, 10, 30);
    doc.text("ESTRUTURA: " + document.getElementById("estrutura").value, 10, 35);
    doc.text("FORRO: " + document.getElementById("forro").value, 10, 40);
    doc.text("ILUMINAÇÃO NATURAL: " + document.getElementById("iluminação_natural").value, 10, 45);
    doc.text("ILUMINAÇÃO ARTIFICIAL: " + document.getElementById("iluminação_artificial").value, 10, 50);
    doc.text("VENTILAÇÃO NATURAL: " + document.getElementById("ventilador_natural").value, 10, 55);
    doc.text("VENTILAÇÃO ARTIFICIAL: " + document.getElementById("ventilador_artificial").value, 10, 60);
    doc.text("MÁQUINAS E EQUIPAMENTOS - LUX: " + document.getElementById("myTextarea").value, 10, 85);
    
    //ruido
    if (ruido === 'ruidosim') {
        doc.text('Considerar ruído:', 10, 130);
        doc.text('Exposição: ' + exposicaoR, 10, 135);
        doc.text('Fonte geradora: ' + document.getElementById("fonteRuido").value, 10, 140);
    } else {
        doc.text('Não considerar ruído', 10, 130);
    }

    // Salvar o PDF
    doc.save('levantamento.pdf');
    }