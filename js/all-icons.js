var icons=document.getElementsByClassName('wrapper-icon')

for(i=0; i<icons.length; i++){
    icons[i].addEventListener('click', function(){
        var classlist=this.getElementsByClassName('icon')[0].classList,
            classname=this.getElementsByClassName('icon')[0].className,
            icon_name=this.getAttribute('title')
            icon_style=classlist[1];

        if(!!icon_style.match(/-(l|r|s)$/)){
            if(icon_style.match(/-(l|r|s)$/)[0] === '-l') icon_style='Light';
            else if(icon_style.match(/-(l|r|s)$/)[0] === '-r') icon_style='Regular';
            else if(icon_style.match(/-(l|r|s)$/)[0] === '-s') icon_style='Solid';
        }
        else{
            icon_style="Trademark";
        }

        var content="<div class='wrapper-modal' data-selectable='true'>" + 
                        "<header class='header-modal'>" + 
                            "<h3 data-selectable='true'>" + icon_name + "</h3>" +
                            "<p data-selectable='true'>Style: " + icon_style + "</p>" + 
                        "</header>" +
                        "<div class='content-modal'>" +
                            "<span class='" + classname + "'></span>" + 
                        "</div>" +
                        "<footer class='footer-modal'>" +
                            "<pre><code class='html' id='selected-icon' data-selectable='true'>&lt;span class=\"" + classlist[1] + "\"&gt;&lt;/span&gt;</code></pre>" +
                        "</footer>" +
                    "</div>"

        $.fancybox.open(content);

        hljs.highlightBlock(document.getElementById('selected-icon'));
    });
}