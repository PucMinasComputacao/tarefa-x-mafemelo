var looks = [
  {
    id: 1,
    nome: "Casual Chique",
    descricao: "Camisa listrada, calça wide leg e tênis. Conforto para o dia a dia.",
    conteudo: "O look casual chique é perfeito para quem quer parecer bem vestido sem exagerar. A camisa listrada combina muito bem com a calça wide leg e o tênis branco deixa tudo mais leve. Dá pra usar no trabalho, num almoço ou num passeio.",
    categoria: "Casual",
    estilo: "Sofisticado",
    ocasiao: "Trabalho e passeio",
    tendencia: "Quiet Luxury",
    combinacoes: "Calça + Camisa + Tênis",
    destaque: true,
    imagem: "assets/img/look1.jpg",
    compras: [
      { peca: "Camisa listrada", loja: "Zara", link: "https://www.zara.com/br/" },
      { peca: "Calça wide leg", loja: "Renner", link: "https://www.lojasrenner.com.br/" },
      { peca: "Tênis branco", loja: "Nike", link: "https://www.nike.com.br/" },
      { peca: "Bolsa shoulder bag", loja: "Arezzo", link: "https://www.arezzo.com.br/" }
    ],
    fotos: [
      { titulo: "Camisa listrada", imagem: "assets/img/look1-pt1.jpg" },
      { titulo: "Calça wide leg", imagem: "assets/img/look1-pt2.jpg" },
      { titulo: "Tênis", imagem: "assets/img/look1-pt3.jpg" }
    ]
  },
  {
    id: 2,
    nome: "Sporty Urbano",
    descricao: "Camiseta oversized, saia plissada e chunky sneaker.",
    conteudo: "Esse look mistura o conforto do esporte com o estilo da cidade. A camiseta branca grande combinada com a saia plissada e o tênis grandão fica muito bonito. A bolsa crossbody ajuda a completar o visual.",
    categoria: "Sporty",
    estilo: "Ativo",
    ocasiao: "Passeio casual",
    tendencia: "Athleisure",
    combinacoes: "Camiseta + Saia + Tênis + Bolsa",
    destaque: true,
    imagem: "assets/img/look2.jpg",
    compras: [
      { peca: "Camiseta oversized", loja: "C&A", link: "https://www.cea.com.br/" },
      { peca: "Saia plissada", loja: "Zara", link: "https://www.zara.com/br/" },
      { peca: "Tênis chunky", loja: "Netshoes", link: "https://www.netshoes.com.br/" },
      { peca: "Bolsa crossbody", loja: "Riachuelo", link: "https://www.riachuelo.com.br/" }
    ],
    fotos: [
      { titulo: "Bolsa crossbody", imagem: "assets/img/look2-pt1.jpg" },
      { titulo: "Tênis chunky", imagem: "assets/img/look2-pt2.jpg" },
      { titulo: "Camiseta oversized", imagem: "assets/img/look2-pt3.jpg" }
    ]
  },
  {
    id: 3,
    nome: "Streetwear",
    descricao: "Moletom zip oversized, calça baggy preta lavada, Timberland e boné.",
    conteudo: "Esse look é puro streetwear sem filtro. O moletom zip cinza escuro oversized sobre camiseta branca, calça jeans baggy preta lavada e Timberland amarela formam uma combinação muito forte. O boné e as correntes fecham o visual com personalidade.",
    categoria: "Streetwear",
    estilo: "Urban",
    ocasiao: "Shows e lazer",
    tendencia: "Oversized 2025",
    combinacoes: "Moletom + Calça Baggy + Bota + Boné",
    destaque: true,
    imagem: "assets/img/stret.jpg",
    compras: [
      { peca: "Moletom zip oversized", loja: "Renner", link: "https://www.lojasrenner.com.br/" },
      { peca: "Calça baggy jeans preta", loja: "C&A", link: "https://www.cea.com.br/" },
      { peca: "Timberland amarela", loja: "Centauro", link: "https://www.centauro.com.br/" },
      { peca: "Boné aba reta", loja: "Netshoes", link: "https://www.netshoes.com.br/" }
    ],
    fotos: [
      { titulo: "Timberland", imagem: "assets/img/look3-pt1.jpg" },
      { titulo: "Calça baggy", imagem: "assets/img/look3-pt2.jpg" },
      { titulo: "Moletom zip", imagem: "assets/img/look3-pt3.jpg" }
    ]
  },
  {
    id: 4,
    nome: "Minimalista",
    descricao: "Camisa oversized listrada, calça pantalona e tênis branco.",
    conteudo: "O estilo minimalista é sobre usar menos peças mas escolher bem. A camisa listrada azul com a calça pantalona preta e o tênis branco é uma combinação simples que funciona muito bem.",
    categoria: "Casual",
    estilo: "Minimalista",
    ocasiao: "Trabalho e passeio",
    tendencia: "Clean Girl",
    combinacoes: "Camisa + Calça Pantalona + Tênis + Óculos",
    destaque: false,
    imagem: "assets/img/look4.jpg",
    compras: [
      { peca: "Camisa listrada azul", loja: "Zara", link: "https://www.zara.com/br/" },
      { peca: "Calça pantalona preta", loja: "Renner", link: "https://www.lojasrenner.com.br/" },
      { peca: "Tênis branco clássico", loja: "Adidas", link: "https://www.adidas.com.br/" },
      { peca: "Acessórios minimalistas", loja: "Riachuelo", link: "https://www.riachuelo.com.br/" }
    ],
    fotos: [
      { titulo: "Camisa listrada azul", imagem: "assets/img/look4-pt1.jpg" },
      { titulo: "Tênis branco", imagem: "assets/img/look4-pt2.jpg" },
      { titulo: "Calça pantalona", imagem: "assets/img/look4-pt3.jpg" }
    ]
  },
  {
    id: 5,
    nome: "Alfaiataria",
    descricao: "Jaqueta de couro, gola alta e calça pantalona.",
    conteudo: "A alfaiataria é um estilo mais elegante e estruturado. A jaqueta de couro marrom com gola alta e calça pantalona de cintura alta formam um look muito bonito pra eventos e jantares. O boné e a bolsa pequena completam tudo.",
    categoria: "Alfaiataria",
    estilo: "Elegante",
    ocasiao: "Eventos e noite",
    tendencia: "Quiet Luxury",
    combinacoes: "Jaqueta + Gola Alta + Calça + Mini Bag",
    destaque: false,
    imagem: "assets/img/look5.jpg",
    compras: [
      { peca: "Boné", loja: "Zara", link: "https://www.zara.com/br/" },
      { peca: "Jaqueta de Couro", loja: "C&A", link: "https://www.cea.com.br/" },
      { peca: "Calça pantalona", loja: "Farm", link: "https://www.farmrio.com.br/" },
      { peca: "Bolsa mini bag", loja: "Arezzo", link: "https://www.arezzo.com.br/" }
    ],
    fotos: [
      { titulo: "Boné", imagem: "assets/img/look5-pt1.jpg" },
      { titulo: "Jaqueta", imagem: "assets/img/look5-pt2.jpg" },
      { titulo: "Tênis", imagem: "assets/img/look5-pt3.jpg" }
    ]
  },
  {
    id: 6,
    nome: "Comfy Urbano",
    descricao: "Jaqueta fleece azul marinho, calça moletom wide leg cinza e tênis chunky branco.",
    conteudo: "Esse look prova que dá pra ser estiloso sem abrir mão do conforto. A jaqueta fleece azul marinho combina muito bem com a calça moletom wide leg cinza. O tênis chunky branco fecha o visual com um toque moderno.",
    categoria: "Comfy",
    estilo: "Relaxed",
    ocasiao: "Dia a dia e passeio",
    tendencia: "Cozy Aesthetic",
    combinacoes: "Jaqueta Fleece + Moletom + Tênis Chunky",
    destaque: false,
    imagem: "assets/img/comfy.jpg",
    compras: [
      { peca: "Jaqueta fleece azul", loja: "The North Face", link: "https://www.thenorthface.com.br/" },
      { peca: "Calça moletom wide leg", loja: "Renner", link: "https://www.lojasrenner.com.br/" },
      { peca: "Tênis chunky branco", loja: "New Balance", link: "https://www.newbalance.com.br/" },
      { peca: "Camiseta interna", loja: "C&A", link: "https://www.cea.com.br/" }
    ],
    fotos: [
      { titulo: "Jaqueta", imagem: "assets/img/look6-pt1.jpg" },
      { titulo: "Calça moletom", imagem: "assets/img/look6-pt2.jpg" },
      { titulo: "Tênis", imagem: "assets/img/look6-pt3.jpg" }
    ]
  }
];


function buscarLook(id) {
  var resultado = null;
  for (var i = 0; i < looks.length; i++) {
    if (looks[i].id == id) {
      resultado = looks[i];
    }
  }
  return resultado;
}

function pegarDestaques() {
  var lista = [];
  for (var i = 0; i < looks.length; i++) {
    if (looks[i].destaque == true) {
      lista.push(looks[i]);
    }
  }
  return lista;
}

function montarSlider() {
  var destaques = pegarDestaques();
  var inner = document.getElementById("sliderInner");
  var indicators = document.getElementById("sliderIndicators");

  if (inner == null) return;

  for (var i = 0; i < destaques.length; i++) {
    var look = destaques[i];

    var classe = "carousel-item";
    if (i == 0) classe = "carousel-item active";

    var slide = document.createElement("div");
    slide.className = classe;
    slide.innerHTML =
      '<img src="' + look.imagem + '" class="d-block w-100 img-slider" alt="' + look.nome + '">' +
      '<div class="carousel-caption d-none d-md-block">' +
        '<a href="detalhe.html?id=' + look.id + '" class="btn btn-light btn-sm">Ver look</a>' +
      '</div>';

    inner.appendChild(slide);

    var dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("data-bs-target", "#slider");
    dot.setAttribute("data-bs-slide-to", i);
    dot.setAttribute("aria-label", "Slide " + (i + 1));
    if (i == 0) {
      dot.className = "active";
      dot.setAttribute("aria-current", "true");
    }
    indicators.appendChild(dot);
  }
}

function montarCards() {
  var container = document.getElementById("listaLooks");
  if (container == null) return;

  for (var i = 0; i < looks.length; i++) {
    var look = looks[i];

    var col = document.createElement("div");
    col.className = "col";

    col.innerHTML =
      '<div class="card h-100 shadow-sm">' +
        '<a href="detalhe.html?id=' + look.id + '">' +
          '<img src="' + look.imagem + '" class="card-img-top img-card-look" alt="' + look.nome + '">' +
        '</a>' +
        '<div class="card-body">' +
          '<h5 class="card-title">' +
            '<a href="detalhe.html?id=' + look.id + '" class="text-decoration-none text-dark">' + look.nome + '</a>' +
          '</h5>' +
          '<p class="card-text text-muted">' + look.descricao + '</p>' +
        '</div>' +
        '<div class="card-footer">' +
          '<span class="badge bg-dark">' + look.categoria + '</span>' +
        '</div>' +
      '</div>';

    container.appendChild(col);
  }
}

function montarDetalhe() {
  var url = window.location.search;
  var params = new URLSearchParams(url);
  var id = params.get("id");

  var look = buscarLook(id);

  if (look == null) {
    document.getElementById("infoLook").innerHTML = "<p>Look não encontrado.</p>";
    return;
  }

  document.title = look.nome + " - The Look";

  var infoArea = document.getElementById("infoLook");
  infoArea.innerHTML =
    '<div class="row g-4">' +
      '<div class="col-12 col-md-5">' +
        '<img src="' + look.imagem + '" class="img-fluid rounded" alt="' + look.nome + '">' +
      '</div>' +
      '<div class="col-12 col-md-7">' +
        '<h2>' + look.nome + '</h2>' +
        '<p class="texto-detalhe">' + look.conteudo + '</p>' +
        '<table class="tabela-info">' +
          '<tr><td class="rotulo">Categoria</td><td>' + look.categoria + '</td></tr>' +
          '<tr><td class="rotulo">Estilo</td><td>' + look.estilo + '</td></tr>' +
          '<tr><td class="rotulo">Ocasião</td><td>' + look.ocasiao + '</td></tr>' +
          '<tr><td class="rotulo">Tendência</td><td>' + look.tendencia + '</td></tr>' +
          '<tr><td class="rotulo">Combinações</td><td>' + look.combinacoes + '</td></tr>' +
        '</table>' +
      '</div>' +
    '</div>';

  var areaCompras = document.getElementById("ondeComprar");
  if (areaCompras && look.compras) {
    for (var c = 0; c < look.compras.length; c++) {
      var item = look.compras[c];
      var card = document.createElement("div");
      card.className = "col-6 col-md-3";
      card.innerHTML =
        '<div class="card h-100 text-center p-3">' +
          '<p class="fw-semibold mb-3">' + item.peca + '</p>' +
          '<a href="' + item.link + '" target="_blank" class="btn btn-dark btn-sm mt-auto">Ver na ' + item.loja + '</a>' +
        '</div>';
      areaCompras.appendChild(card);
    }
  }

  var areaFotos = document.getElementById("fotosLook");
  if (areaFotos) {
    for (var f = 0; f < look.fotos.length; f++) {
      var foto = look.fotos[f];
      var col = document.createElement("div");
      col.className = "col-6 col-md-4";
      col.innerHTML =
        '<div class="card border-0 shadow-sm">' +
          '<img src="' + foto.imagem + '" class="card-img-top img-foto-look" alt="' + foto.titulo + '">' +
          '<div class="card-body p-2 text-center">' +
            '<small class="text-muted">' + foto.titulo + '</small>' +
          '</div>' +
        '</div>';
      areaFotos.appendChild(col);
    }
  }
}

window.onload = function() {
  var pagina = document.body.id;

  if (pagina == "pagina-index") {
    montarSlider();
    montarCards();
  }

  if (pagina == "pagina-detalhe") {
    montarDetalhe();
  }
};