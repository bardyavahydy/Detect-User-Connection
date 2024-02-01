const $ = document
const wrapperElm = $.querySelector('.wrapper')
const toastElm = $.querySelector('.toast')
const wifiIconElm = $.querySelector('.icon i')
const titleElm = $.querySelector('span')
const subTitleElm = $.querySelector('p');
const closeIconElm = $.querySelector('.close-icon');

const showToastHandler = (titleTxt, descText, wifiClasses) =>{
    wrapperElm.style.animation= 'show_toast 1s ease ';
    titleElm.innerText = titleTxt 
    subTitleElm.innerText = descText   
    wifiIconElm.className = wifiClasses
    wrapperElm.addEventListener('animationend', () =>{
        wrapperElm.style.left = "50px"
        wrapperElm.style.animation= 'hide_toast 1s ease 4s forwards'
    })
}

const checkInternet = async () => {
    try{
        let res = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        if(res.status < 300){
            toastElm.classList.remove('offline')
            showToastHandler("You're online now", "Hurray! Internet is connected.", "uil uil-wifi")
        }
    }catch(err){
        toastElm.classList.add('offline')
        showToastHandler(err.message, 'opps! internet is disconnected', "uil uil-wifi-slash")
    }
}
checkInternet()