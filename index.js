;
(() => {
    let bg1 = document.getElementById('bg1');
    let bg2 = document.getElementById('bg2');
    let bg3 = document.getElementById('bg3');
    let bg4 = document.getElementById('bg4');
    let tree = document.getElementById('tree');
    let btn = document.getElementById('btn');
    let leaves_front = document.getElementById('leaves_front');
    let bush = document.getElementById('bush');
    let header = document.querySelector('header');

    window.addEventListener('scroll',  function(){
        let value = window.scrollY;
        bg1.style.top = value * 0.5 + 'px';
        bg2.style.top = value * 0.5 + 'px';
        bg3.style.top = value * 0.5 + 'px';
        bg4.style.top = value * 0.5 + 'px';
        tree.style.top = value * 0.3 + 'px';
        leaves_front.style.top = value * 0 + 'px';
        bush.style.top = value * 0 + 'px';
        btn.style.marginTop = value * 1.5 + 'px';
        header.style.top = value * 0.5 + 'px';
    });


    const signOutButton = document.querySelector('#signOut');
    signOutButton.addEventListener('click', (event) => {
        event.preventDefault();
        signOut();
    });

})();