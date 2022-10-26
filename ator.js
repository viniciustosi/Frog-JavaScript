//variaveis do ator
let xAtor = 250;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor()
{
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor()
{
  if (keyIsDown(UP_ARROW)){yAtor-=3}
  if (keyIsDown(DOWN_ARROW)){
    if(podeMover()){
    yAtor+=3}
  }
  if (keyIsDown(LEFT_ARROW)){xAtor-=3}
  if (keyIsDown(RIGHT_ARROW)){xAtor+=3}
}

function verificaColisao()
{
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++)
    {
      colisao = collideRectCircle (xCarros[i], yCarros[i],comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
      if (colisao){
        voltaAtor();
        somColisao.play();
        if(pontosMaiorQueZero()){
        meusPontos -= 1;
        }
      }
    }
}

function voltaAtor ()
{
  yAtor = 366;
}

function incluiPontos()
{
  textAlign(CENTER);
  textSize (25);
  fill(255,240,60);
  text(meusPontos, width / 2, 27);
}

function marcaPonto()
{
  if(yAtor < 15){
    meusPontos += 1;
    somPonto.play();
    voltaAtor();
  }
}

function pontosMaiorQueZero()
{
  return meusPontos > 0
}

function podeMover ()
{
  return yAtor < 366;
}