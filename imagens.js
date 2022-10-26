//variaveis de imagens
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

//variaveis sons
let somTrilha;
let somColisao;
let somPonto;

//funções pré-definidas
function preload ()
{
  imagemDaEstrada = loadImage("imagens/estrada.png")
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro2, imagemCarro, imagemCarro3]
  
  somTrilha = loadSound ("sons/musica.mp3");
  somColisao = loadSound ("sons/colisao.mp3");
  somPonto = loadSound ("sons/ponto.wav");
}