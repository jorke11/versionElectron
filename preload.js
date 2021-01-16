function getVersion(idSelector,version){
    console.log(idSelector)
    let el = document.getElementById(idSelector)

    if(el){
        el.innerHTML = version
    }
}

window.addEventListener("DOMContentLoaded",()=>{
    const components = ["Node","Chrome","Electron"]

    for(const component of components){
        getVersion(`version${component}`,process.versions[component.toLocaleLowerCase()])
    }
});