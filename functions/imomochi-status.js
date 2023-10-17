export async function onRequest(context){
    const res = await env.IMOMOCHI-STATUS.get("status");
    return new Response(JSON.stringify({ value: res })); 
}

export function onRequestPost(context){
    
}