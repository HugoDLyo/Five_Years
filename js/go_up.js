window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.icon')
        .classList.add('show');
    }else{
        document.querySelector('.icon')
        .classList.remove('show');
    }
}

document.querySelector('.icon').addEventListener('click', () =>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});