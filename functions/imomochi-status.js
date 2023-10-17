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
            <p>現在の表示: ${res}</p>
            <form action="" method="post" enctype= class="form">
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
    const text = await request.text();
    const json = JSON.parse('{"' + text.replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) { return key === "" ? value : decodeURIComponent(value) });
    
    await env.IMOMOCHISTATUS.put("status", json.status);
    return new Response(null, {
        "status": 301,
        "headers": {
            "method": "GET",
            "Location": request.url(),
        }});
}