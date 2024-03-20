import icons from "../lib/icons.js";

function kebabCase (string) {
    return string
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[\s_]+/g, '-')
        .toLowerCase();
}
function copyClipboard (string) {
    navigator.clipboard.writeText(string);
}

console.log(icons)
console.log(icons.key)

let $col = document.querySelector(".ico-preview");
for (let ic in icons) {
    let $el = $col.cloneNode(true);
    $el.querySelector(".ico").innerHTML = icons[ic];
    $el.querySelector(".name").textContent = ic;
    let hrefDwd = $el.querySelector("[download]");
    hrefDwd.setAttribute("href", `./src/svgs-opti/${kebabCase(ic)}.svg`);
    hrefDwd.setAttribute("download", `${kebabCase(ic)}.svg`);
    let copySvg=$el.querySelector('[data-action="copy"]');
    copySvg.addEventListener("click",()=>{
        copyClipboard(icons[ic])
    })
    $col.parentNode.appendChild($el);
}
$col.style.display = "none";