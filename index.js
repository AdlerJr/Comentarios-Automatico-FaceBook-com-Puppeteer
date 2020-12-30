const puppeteer = require('puppeteer');

console.log('Bem vindo');

(async () => {
    //Abre o navegador com o link da postagem
    const browser = await puppeteer.launch({ headless: false, args: ['--disable-notifications']});
    const page = await browser.newPage();
    
    await page.goto('LINK DA POSTAGEM')

    // Informação de login
    await page.type('#email', 'EMAIL DO FACEBOOK QUE FARÁ LOGIN')
    await page.type('#pass', 'SENHA DO FACEBOOK')
    await page.click('#loginbutton')
    
    for (let index = 0; index < 'Informar um número que será quantidade de comentarios'; index++) {
        await page.keyboard.type(
          'TEXTO QUE DESEJA COMENTAR', 
          //Dalay para postar, deixar a cima de 100 para o facebook não te bloquear de comentar
          { delay: 100 }
        )
          //Faz o papel de enter após comentar 
        await page.keyboard.press('Enter')
        await page.waitFor(1000)
      }
      //Fecha o browser ao concluir 
    await browser.close();
  })();