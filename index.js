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

window.onscroll = function () {

    if(document.documentElement.scrollTop > 20){
        for(let i = 0; i < 3; i++){
            document.querySelectorAll('nav:not([aria-label="Breadcrumb"])')[i].classList.add('fixed')
            document.querySelectorAll('nav:not([aria-label="Breadcrumb"])')[i].classList.add('w-full')
            document.querySelectorAll('nav:not([aria-label="Breadcrumb"])')[i].classList.remove('container')
            document.querySelectorAll('nav:not([aria-label="Breadcrumb"])')[i].classList.remove('py-2')
            document.querySelectorAll('nav:not([aria-label="Breadcrumb"])')[i].classList.add('bg-white')
            document.querySelectorAll('nav:not([aria-label="Breadcrumb"])')[i].classList.add('text-black')
            document.querySelectorAll('nav:not([aria-label="Breadcrumb"])')[i].classList.add('z-[100]')
            document.querySelectorAll('nav:not([aria-label="Breadcrumb"])')[i].classList.add('drop-shadow-md')
        }
        for(let i = 0; i < 12; i++){
            if(document.querySelectorAll('nav .text-gray-200')[i]) document.querySelectorAll('nav .text-gray-200')[i].classList.add('text-gray-800')
        }
    } else {
        for(let i = 0; i < 3; i++){
            document.querySelectorAll('nav:not([aria-label="Breadcrumb"])')[i].classList.remove('fixed')
            document.querySelectorAll('nav:not([aria-label="Breadcrumb"])')[i].classList.remove('w-full')
            document.querySelectorAll('nav:not([aria-label="Breadcrumb"])')[i].classList.add('container')
            document.querySelectorAll('nav:not([aria-label="Breadcrumb"])')[i].classList.add('py-2')
            document.querySelectorAll('nav:not([aria-label="Breadcrumb"])')[i].classList.remove('bg-white')
            document.querySelectorAll('nav:not([aria-label="Breadcrumb"])')[i].classList.remove('z-[100]')
            document.querySelectorAll('nav:not([aria-label="Breadcrumb"])')[i].classList.remove('drop-shadow-md')
            document.querySelectorAll('nav:not([aria-label="Breadcrumb"])')[i].classList.remove('text-black')
        }
        for(let i = 0; i < 12; i++){
            if(document.querySelectorAll('nav .text-gray-800')[i]) document.querySelectorAll('nav .text-gray-800')[i].classList.remove('text-gray-800')
        }
    }

}

function faq(event) {
    var node = event.target
    if(node.tagName === 'path') node = node.parentNode
    node.parentNode.parentNode.childNodes[3].classList.toggle('hidden');
    node.parentNode.parentNode.childNodes[5].classList.toggle('hidden');
    node.parentNode.parentNode.parentNode.childNodes[3].classList.toggle('hidden');
    node.parentNode.parentNode.parentNode.childNodes[5].classList.toggle('hidden');
}

function search(lang){
    window.location = "https://qatralik.com/store.html?" + document.getElementById(`search-navbar-${lang}`).value.toUpperCase();
}


