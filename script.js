function revelarArmadura() {
    const dataInput = document.getElementById('data-nascimento').value;

    if (!dataInput) {
        alert("Por favor, eleve seu cosmo e insira uma data válida!");
        return;
    }

    const partesData = dataInput.split('-');
    const mes = parseInt(partesData[1], 10);
    const dia = parseInt(partesData[2], 10);

    let cavaleiro = "", signo = "", poder = "", casa = "", imagemSrc = "";
    let cosmo = 0, vel = 0, tec = 0, forca = 0;

    // Lógica dos Signos (Mantida igual)
    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
        signo = "Áries"; cavaleiro = "Mu de Áries"; casa = "1ª Casa"; poder = "Extinção Estelar"; 
        cosmo = 90; vel = 80; tec = 100; forca = 60;
        imagemSrc = "/img/aries.webp";
    } 
    // ... (restante dos else if) ...
    else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
        signo = "Peixes"; cavaleiro = "Afrodite de Peixes"; casa = "12ª Casa"; poder = "Rosas Sangrentas"; 
        cosmo = 80; vel = 85; tec = 90; forca = 75;
        imagemSrc = "/img/peixes.webp";
    } 
    else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
        signo = "Touro"; cavaleiro = "Aldebaran de Touro"; casa = "2ª Casa"; poder = "Grande Chifre"; 
        cosmo = 85; vel = 70; tec = 80; forca = 100;
        imagemSrc = "img/touro.webp";
    } 
    else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
        signo = "Gêmeos"; cavaleiro = "Saga de Gêmeos"; casa = "3ª Casa"; poder = "Explosão Galáctica"; 
        cosmo = 100; vel = 90; tec = 100; forca = 85;
        imagemSrc = "img/gemeos.webp";
    } 
    else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
        signo = "Câncer"; cavaleiro = "Máscara da Morte"; casa = "4ª Casa"; poder = "Ondas do Inferno"; 
        cosmo = 80; vel = 80; tec = 85; forca = 75;
        imagemSrc = "img/cancer.webp";
    } 
    else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
        signo = "Leão"; cavaleiro = "Aiolia de Leão"; casa = "5ª Casa"; poder = "Relâmpago de Plasma"; 
        cosmo = 90; vel = 95; tec = 85; forca = 90;
        imagemSrc = "/img/leao.webp";
    } 
    else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
        signo = "Virgem"; cavaleiro = "Shaka de Virgem"; casa = "6ª Casa"; poder = "Tesouro do Céu"; 
        cosmo = 100; vel = 85; tec = 100; forca = 70;
        imagemSrc = "img/virgem.webp";
    } 
    else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
        signo = "Libra"; cavaleiro = "Dohko de Libra"; casa = "7ª Casa"; poder = "Cólera dos Cem Dragões"; 
        cosmo = 100; vel = 90; tec = 100; forca = 95;
        imagemSrc = "img/libra.webp";
    } 
    else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
        signo = "Escorpião"; cavaleiro = "Milo de Escorpião"; casa = "8ª Casa"; poder = "Agulha Escarlate"; 
        cosmo = 85; vel = 95; tec = 90; forca = 80;
        imagemSrc = "img/escorpiao.webp";
    } 
    else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
        signo = "Sagitário"; cavaleiro = "Aiolos de Sagitário"; casa = "9ª Casa"; poder = "Flecha da Justiça"; 
        cosmo = 95; vel = 95; tec = 95; forca = 90;
        imagemSrc = "img/sargitario.webp";
    } 
    else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
        signo = "Capricórnio"; cavaleiro = "Shura de Capricórnio"; casa = "10ª Casa"; poder = "Excalibur"; 
        cosmo = 85; vel = 90; tec = 100; forca = 90;
        imagemSrc = "img/capricornio.webp";
    } 
    else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
        signo = "Aquário"; cavaleiro = "Camus de Aquário"; casa = "11ª Casa"; poder = "Execução Aurora"; 
        cosmo = 85; vel = 85; tec = 95; forca = 80;
        imagemSrc = "img/aquario.webp";
    } 
    

    // --- CORREÇÕES AQUI ---
    document.getElementById('nome-cavaleiro').innerText = cavaleiro;
    // 1. Adicionada crase para o nome do signo
    document.getElementById('nome-signo').innerText = `Signo de ${signo}`; 
    document.getElementById('ficha-casa').innerText = casa;
    document.getElementById('desc-poder').innerText = poder;
    document.getElementById('img-cavaleiro').src = imagemSrc;

    document.getElementById('resultado-basico').classList.remove('hidden');
    document.getElementById('ficha-area').classList.remove('hidden');

    setTimeout(() => {
        // 2. Adicionadas crases para as larguras das barras (CSS)
        document.getElementById('bar-cosmo').style.width = `${cosmo}%`;
        document.getElementById('bar-vel').style.width = `${vel}%`;
        document.getElementById('bar-tec').style.width = `${tec}%`;
        document.getElementById('bar-for').style.width = `${forca}%`;
    }, 100);
}