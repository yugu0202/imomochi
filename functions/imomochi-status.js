export async function onRequest(context){
    const res = await IMOMOCHI-STATUS.get("status");
    return new Response(JSON.stringify({ value: res })); 
}

export async function onRequestPost(context){
    
}