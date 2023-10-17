export const onRequestGet = async({params, env}) => {
    const res = await env.IMOMOCHI-STATUS.get("status");
    return new Response(JSON.stringify({ value: res })); 
}

export async function onRequestPost(context){
    
}