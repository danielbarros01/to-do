const d = document;

export function openDescription(taskBtn){
    d.addEventListener('click', e => {
        if(e.target.matches(taskBtn)){
            e.target.parentNode.nextSibling.classList.toggle("ocultar");
        }
    })
}

export function viewAddTask(btnAdd){
    d.addEventListener('click', e => {
        if(e.target.matches(btnAdd)){
            e.preventDefault();
            e.target.parentNode.nextSibling.classList.toggle("ocultar");
        }
        if(e.target.matches('.cancelTask')){
            e.preventDefault();
            e.target.parentNode.parentNode.parentNode.parentNode.classList.toggle("ocultar");
        }
    })
}
