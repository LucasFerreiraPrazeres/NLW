const linksSocialMedia = {
  github: 'LucasFerreiraPrazeres',
  youtube: '',
  facebook: 'kinhaax',
  instagram: 'prazer.lucass',
  twitter: 'LucasFe30258387'
}

/*primeira opção para alteração de conteúdo

function changeSocialMediaLinks() {
  document.getElementById('userName').textContent = 'Lucas'
}
*/

/* segunda opção
function changeSocialMediaLinks() {
  userName.textContent = 'Lucas'
}
*/

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()
