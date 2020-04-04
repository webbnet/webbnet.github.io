var download=document.getElementById('download'),
    getlink=document.getElementById('getlink'),
    initial_text=getlink.innerHTML,
    code=document.getElementById('css-link'),
    link="<link rel=\"stylesheet\" href=\"https://webbnet.github.io/webbnet-v1.0/style.css\">";


download.addEventListener('click', function(){
    // window.location.href='download/webbnet-v1.0.zip';
    var a=document.createElement('a');
    a.setAttribute('href', 'https://webbnet.github.io/download/webbnet-v1.0.zip');
    a.setAttribute('download', '');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

getlink.addEventListener('click', function(){
    var input=document.createElement('input');
        input.setAttribute('type', 'text');
        input.value=link;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);

    this.innerHTML="<i class='wn wn-like-l'></i>&nbsp;&nbsp;Copied!";

    code.innerText=link;

    hljs.highlightBlock(code);

    setTimeout(function(){
        getlink.innerHTML=initial_text;
    }, 2000);
});