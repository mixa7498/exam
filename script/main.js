function post() {
    let name = document.getElementById("name").value
    let tel = document.getElementById("tel").value
    let num = document.getElementById("num").value
    let date = document.getElementById("date").value
    let place = document.getElementById("place").value
    let com = document.getElementById("com").value
    let dur = document.getElementById("dur").value

    if (name != "" && tel != "" && num != "" && date != "" && place != "" && com != "" && dur != "") {
       const scriptURL = 'https://script.google.com/macros/s/AKfycbyRMmquy5DbJ0KOvDjXzJ1rb_88OyX_YTU0ihNkPj9lFprqNVueI8ipCejmHlwajTUN/exec'
        const form = document.forms['post']

            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message)) 
    }
}
