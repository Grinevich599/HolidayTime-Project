const select = document.querySelector('select')
const allLang = ['ua', 'ru', 'en' ];

select.addEventListener('change', changeURLLanguage)

function changeURLLanguage () {
    let lang = select.value;
    location.href = window.location.pathname + '#'+lang;
    location.reload(); 
}

function changeLanguage (){
    let hash = window.location.hash;
    hash = hash.substring(1);
    console.log(hash);
    if (!allLang.includes(hash)){
        location.href = window.location.pathname + '#ua';
        lacation.reload();
    }
    select.value = hash;
    document.querySelector('title').innerHTML = langArr['unit'][hash];
    document.querySelector('.header_title_home').innerHTML = langArr['home'][hash];
    document.querySelector('.header_title_aboutus').innerHTML = langArr['aboutus'][hash];
    document.querySelector('.header_title_reserve').innerHTML = langArr['reserve'][hash];
    document.querySelector('.header_title_contact').innerHTML = langArr['contact'][hash];
    document.querySelector('.header_title_cabinet').innerHTML = langArr['cabinet'][hash];
    // for (let key in langArr){
    //     document.querySelector('.header_title_'+ key).innerHTML = langArr[key][hash];
    // }
    
}

changeLanguage();