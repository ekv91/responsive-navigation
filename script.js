const burger = document.getElementsByClassName('burger')[0];
const links = document.getElementsByClassName('list-items')[0]

burger.addEventListener('click', () => {
    links.classList.toggle('active');
    burger.classList.toggle('toggle');
})