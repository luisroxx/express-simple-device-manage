import * as express from 'express';
import cors = require('cors');

export function createServer() {
  const app = express();
  app.use(cors());

  app.get('/', (req: express.Request, res: express.Response) => {
    res.send({ greeting: 'Hello' });
  });

  return app;
}
