document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('[data-tab-button]');

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
})

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