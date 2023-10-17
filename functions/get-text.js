export const onRequestGet = async({_params, env}) => {
    const res = await env.IMOMOCHISTATUS.get("status");
    return new Response(JSON.stringify({ value: res }))
}