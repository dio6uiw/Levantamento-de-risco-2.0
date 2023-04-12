
    //controle de EPI
    if (controleEPI === 'controlesim') {
        doc.text('Existe controle de fichas de EPI', 20, 200);
    } else {
        doc.text('Não existe controle de fichas de EPI', 20, 200);
    }

    //Rota de fuga
    if (rotadefuga === 'rotadefugasim') {
        doc.text('Existe rota fuga', 20, 210);
    } else {
        doc.text('Não existe rota fuga', 20, 210);
    }

    //saida de emergencia
    if (saidadeemerg === 'saidadeemergsim') {
        doc.text('Existe saída de emergência', 20, 220);
    } else {
        doc.text('Não existe saída de emergência', 20, 220);
    }

    //iluminação de emergencia
    if (iluminacaoemerg === 'iluminacaoemergsim') {
        doc.text('Existe iluminação e sinalização de emergência', 20, 230);
    } else {
        doc.text('Não existe iluminação e sinalização de emergência', 20, 230);
    }

    //Extintores
    if (extintores === 'extintoressim') {
        doc.text('Existe extintores', 20, 240);
    } else {
        doc.text('Não existe extintores', 20, 240);
    }

    //Eletricidade
    if (eletricidade === 'eletricidadesim') {
        doc.text('Considerar eletricidade', 10, 70);
        doc.text('Exposição: ' + exposicaoeletricidade, 10, 75);
        doc.text('Fonte geradora: ' + document.getElementById("fonteletricidade").value, 10, 80);
    } else {
        doc.text('Não considerar eletricidade', 10, 70);
    }

    //Incêndio
    if (incendio === 'incendiosim') {
        doc.text('Considerar risco de incêndio ou explosão', 10, 70);
        doc.text('Exposição: ' + exposicaoincendio, 10, 75);
        doc.text('Fonte geradora: ' + document.getElementById("fonteincendio").value, 10, 80);
    } else {
        doc.text('Não considerar risco de incêndio ou explosão', 10, 70);
    }

    //queda de materiais 
    if (queda === 'quedasim') {
        doc.text('Considerar queda de materiais', 10, 70);
        doc.text('Exposição: ' + exposicaoqueda, 10, 75);
        doc.text('Fonte geradora: ' + document.getElementById("fontequeda").value, 10, 80);
    } else {
        doc.text('Não considerar queda de materiais', 10, 70);
    }


    
    var rotadefuga = document.querySelector('input[name="rotadefuga"]:checked').value;

    var saidadeemerg = document.querySelector('input[name="saidadeemerg"]:checked').value;

    var iluminacaoemerg = document.querySelector('input[name="iluminacaoemerg"]:checked').value;

    var extintores = document.querySelector('input[name="extintores"]:checked').value;
   
    var eletricidade = document.querySelector('input[name="eletricidade"]:checked').value;
    var exposicaoeletricidade = document.querySelector('input[name="exposicaoeletricidade"]:checked').value;

    var incendio = document.querySelector('input[name="incendio"]:checked').value;
    var exposicaoincendio = document.querySelector('input[name="exposicaoincendio"]:checked').value;

    var queda = document.querySelector('input[name="queda"]:checked').value;
    var exposicaoqueda = document.querySelector('input[name="exposicaoqueda"]:checked').value;

    var transportedepeso = document.querySelector('input[name="transportedepeso"]:checked').value;
    var exposicaoLET = document.querySelector('input[name="exposicaoLET"]:checked').value;

    var controleEPI = document.querySelector('input[name="controleEPI"]:checked').value;

    
    //Rota de fuga
    if (rotadefuga === 'rotadefugasim') {
        doc.text('Existe rota fuga', 20, 210);
    } else {
        doc.text('Não existe rota fuga', 20, 210);
    }

    //saida de emergencia
    if (saidadeemerg === 'saidadeemergsim') {
        doc.text('Existe saída de emergência', 20, 220);
    } else {
        doc.text('Não existe saída de emergência', 20, 220);
    }

    //iluminação de emergencia
    if (iluminacaoemerg === 'iluminacaoemergsim') {
        doc.text('Existe iluminação e sinalização de emergência', 20, 230);
    } else {
        doc.text('Não existe iluminação e sinalização de emergência', 20, 230);
    }

    //Extintores
    if (extintores === 'extintoressim') {
        doc.text('Existe extintores', 20, 240);
    } else {
        doc.text('Não existe extintores', 20, 240);
    }

    //Eletricidade
    if (eletricidade === 'eletricidadesim') {
        doc.text('Considerar eletricidade', 10, 70);
        doc.text('Exposição: ' + exposicaoeletricidade, 10, 75);
        doc.text('Fonte geradora: ' + document.getElementById("fonteletricidade").value, 10, 80);
    } else {
        doc.text('Não considerar eletricidade', 10, 70);
    }

    //Incêndio
    if (incendio === 'incendiosim') {
        doc.text('Considerar risco de incêndio ou explosão', 10, 70);
        doc.text('Exposição: ' + exposicaoincendio, 10, 75);
        doc.text('Fonte geradora: ' + document.getElementById("fonteincendio").value, 10, 80);
    } else {
        doc.text('Não considerar risco de incêndio ou explosão', 10, 70);
    }

    //queda de materiais 
    if (queda === 'quedasim') {
        doc.text('Considerar queda de materiais', 10, 70);
        doc.text('Exposição: ' + exposicaoqueda, 10, 75);
        doc.text('Fonte geradora: ' + document.getElementById("fontequeda").value, 10, 80);
    } else {
        doc.text('Não considerar queda de materiais', 10, 70);
    }
