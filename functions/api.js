export function onRequest(context){
    return new Response(JSON.stringify({ value: "hello" }))
}