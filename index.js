function setLang(lang){
    localStorage.setItem('lang', lang)
    setLanguage()
}

function setLanguage(){
    var lang = localStorage.getItem('lang') || 'en'
    document.getElementById('lang-text').innerText = lang
    document.getElementById('lang-img').src = `./assets/${lang}.svg`
    document.querySelector('main[lang="en"]').classList.add('hidden')
    document.querySelector('main[lang="fr"]').classList.add('hidden')
    document.querySelector('main[lang="ar"]').classList.add('hidden')
    document.querySelector(`main[lang="${lang}"]`).classList.remove('hidden')
}

window.onload = setLanguage

function faq(event) {
    var node = event.target
    if(node.tagName === 'path') node = node.parentNode
    node.parentNode.parentNode.childNodes[3].classList.toggle('hidden');
    node.parentNode.parentNode.childNodes[5].classList.toggle('hidden');
    node.parentNode.parentNode.parentNode.childNodes[3].classList.toggle('hidden');
    node.parentNode.parentNode.parentNode.childNodes[5].classList.toggle('hidden');
}

function search(lang){
    window.location = "http://127.0.0.1:5500/store.html?" + document.getElementById(`search-navbar-${lang}`).value.toUpperCase();
}


