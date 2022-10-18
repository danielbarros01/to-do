const d = document;

export default function openDescription(taskBtn){
    d.addEventListener('click', e => {
        if(e.target.matches(taskBtn)){
            e.target.parentNode.nextSibling.classList.toggle("ocultar");
        }
    })
}
