var colors=document.getElementsByClassName('color'),
    icon=document.getElementById('icon'),
    icons=document.getElementById('icon-select'),
    styles=document.getElementById('icon-style'),
    code=document.getElementById('code'),
    n_colors=colors.length,
    rand=Math.round(Math.random() * (n_colors - 1)),
    old_icon=icons.value,
    old_style=styles.value,
    start_code="<i class=\"",
    end_code="\"></i>";

colors[rand].focus();

for(i=0; i<n_colors; i++){
    colors[i].addEventListener('focus', function(){
        change_color();
    })
}

function change_color(){
    for(i=0; i<n_colors; i++){
        if(document.activeElement === colors[i]){
            colors[i].style.opacity='1';
            icon.style.color=colors[i].style.backgroundColor
        }
        else{
            colors[i].style.opacity='.65';
        }
    }

    update_code();
}

function update_code(){
    code.innerText=start_code + icon.className + "\" style=\"color: " + icon.style.color + ";" + end_code;
    hljs.highlightBlock(code);
}

icons.addEventListener('change', function(){
    icon.className=icon.className.replace(old_icon, this.value);

    old_icon=this.value;

    update_code();
});

styles.addEventListener('change', function(){
    icon.className=icon.className.substr(0, icon.className.length-1) + this.value;

    old_style=this.value;

    update_code();
});

change_color();