fetch('https://malvestida.com/wp-json/wp/v2/posts') // haciendo peticion a api de wordpres del sitio web
    .then(res => res.ok ? res.json() : Promise.reject(res)) // enviado peticion a sitio web
    .then(json => {
        console.log(json);
    })




