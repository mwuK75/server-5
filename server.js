import { Hono } from 'jsr:@hono/hono';
import { serveStatic } from 'jsr:@hono/hono/deno';
const app = new Hono();

app.use('/*', serveStatic({ root: './public' }));

// GETリクエストに対する処理
app.get('/api', (c) => {
  return c.json({ message: 'GET' });
});

// POSTリクエストに対する処理
app.post('/api', async (c) => {
  // POSTされたJSONボディを取得
  const body = await c.req.json();
  return c.json({ message: 'POST', data: body });
});
// PUTリクエストに対する処理
app.put('/api', async (c) => {
  // PUTされたJSONボディを取得
  const body = await c.req.json();
  return c.json({ message: 'PUT', data: body });
});

// DELETEリクエストに対する処理
app.delete('/api', async (c) => {

  const body = await c.req.json();
  return c.json({ message: 'DELETE', data: body });
});

Deno.serve(app.fetch);
