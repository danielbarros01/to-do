const d = document;

export function archivar(){
    d.addEventListener('click', e => {
        if(e.target.matches('.btnArchivar')){
            console.log('archivar');
        }
    });
}