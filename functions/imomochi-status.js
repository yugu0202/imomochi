export const onRequestGet = async({params, env}) => {
    const res = await env.IMOMOCHISTATUS.get("status");
    const html = `
    <!doctype html>
    <html lang="ja-JP">
        <head>
            <meta charset="utf-8">
            <title>IMOMOCHI status</title>
        </head>
        <body>
            <h1>IMOMOCHI status</h1>
            <p>現在の状態: ${res}</p>
            <form action="" method="post" class="form">
                <label for="status">status</label>
                <input type="text" name="status" id="status" required />
                <input type="submit">
        </body>
    </html> 
    `
    return new Response(html, {
    headers: {"Content-Type": "text/html"}
    }); 
}

export const onRequestPost = async({request, env}) => {
    //const body = request.clone().text();
    //const data = JSON.parse(body);
    
    //await env.IMOMOCHISTATUS.put("status", data.value);
return new Response(type(request.body)) //.split(/(?<=^[^=]+?)=/));
}