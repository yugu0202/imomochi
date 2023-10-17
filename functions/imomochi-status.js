export const onRequestGet = async({params, env}) => {
    const res = await env.IMOMOCHISTATUS.get("status");
    return new Response(JSON.stringify({ value: res })); 
}

export async function onRequestPost(context){
    
}