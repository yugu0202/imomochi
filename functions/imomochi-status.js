export const onRequestGet = async({params, env}) => {
    const res = await env.IMOMOCHISTATUS.get("status");
    const html = `
    <p>${res}</p>
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