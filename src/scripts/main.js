document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const headerElmt = document.querySelector('.header');
    const heightHero = heroSection.clientHeight;

    window.addEventListener('scroll', () => {
        const posicao = window.scrollY;
        // console.log('scroll: ' + posicao + ' | altura: ' + heightHero);
        // console.log(heroSection.classList);

        if (posicao < heightHero) { // True: esconde os elementos
            headerElmt.classList.add('header--is-hidden')
        } else {
            headerElmt.classList.remove('header--is-hidden')
        }
    })

    // seção de atrações, programação da aba ativa
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", (bt) => {
            console.log(bt.target.dataset.tabButton); // nome de atributo 'data-tab-button'
            const tabAttr = bt.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabAttr}]`);
            
            escondeAbas();
            tab.classList.add('shows__list--is-active');
            removeAtivo();
            bt.target.classList.add('shows__tabs__button--is-active');
        });
    }

    // seção FAQ, accordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', toggleQuestion)
    }
})

/* function hiddeElementsFromHeader() {
    const header = document.querySelector('.header');
    header.classList.
} */

function showElementsFromHeader() {
    const header = document.querySelector('.header');
    header.classList.remove('header--is-hidden')
}

function toggleQuestion(elem) {
    const classe = 'faq__questions__item--is-open';
    console.log(elem.target);
    const pai = elem.target.parentNode;

    pai.classList.toggle(classe);
}

function removeAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondeAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}