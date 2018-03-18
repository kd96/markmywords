function loaded(){
    if(localStorage.getItem("mdtext") && localStorage.getItem("mdtext")!=''){
        document.getElementById('mdbox').innerHTML = localStorage.getItem('mdtext')
    }
    update()
}
function update(){
    md = new Remarkable('full')
	md.set({breaks:true,html:true})
    code = document.getElementById('mdbox').value.trim()
    text = md.render(code)
    localStorage.setItem('mdtext',code)
    t = document.getElementById('preview').scrollTop
    document.getElementById('preview').innerHTML = text
    document.getElementById('preview').scrollTop = t
}
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(function(registration) {
    console.log('ServiceWorker registration successful with scope: ',    registration.scope);
  }).catch(function(err) {
    console.log('ServiceWorker registration failed: ', err);
});
}
