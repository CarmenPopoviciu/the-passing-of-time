export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith('/hello')) {
      return new Response('Hola mundo!');
    }

    if (url.pathname.startsWith('/goodbye')) {
      return new Response('Ciao mundo!');
    }
    
    // Otherwise, serve the static assets.
    // Without this, the Worker will error and no assets will be served.
    return env.ASSETS.fetch(request);
  },
};