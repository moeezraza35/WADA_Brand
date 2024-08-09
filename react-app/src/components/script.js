let themeStyle = document.getElementById("theme");
let asideBar = document.getElementById("aside")

export function toggleTheme(){
    if(themeStyle.href.slice(themeStyle.href.length -"/static/light.css".length) == "/static/light.css"){
        themeStyle.href = "/static/dark.css";
    }else{
        themeStyle.href = "/static/light.css";
    }
}
export function show_and_hide_aside(){
    if(asideBar.classList.contains("active")){
        asideBar.classList.remove("active");
    }else{
        asideBar.classList.add("active")
    }
}