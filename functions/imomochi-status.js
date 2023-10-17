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
            <p>${res}</p>
        </body>
    </html> 
    `
    return new Response(html, {
    headers: {"Content-Type": "text/html"}
    }); 
}

export const onRequestPost = async({request, env}) => {
    const body = request.clone().text();
    const data = JSON.parse(body);
    
    await env.IMOMOCHISTATUS.put("status", data.value);
}