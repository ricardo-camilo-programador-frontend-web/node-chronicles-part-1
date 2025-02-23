import path from 'node:path'
import express, { Express, Request, Response } from 'express';

const app: Express = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname)))

app.get('*', (req: Request, res: Response) => {
  try {
    const routeMap: Record<string, string> = {
      '/': 'index.html',
      '/about': 'about.html',
      '/contact': 'contact.html',
      '/404': '404.html',
      '/pt': 'index-pt.html',
      '/pt/sobre': 'sobre.html',
      '/pt/contato': 'contato.html',
      '/pt/404': '404-pt.html',
    }

    if (routeMap[req.path]) {
      res.sendFile(path.join(__dirname, routeMap[req.path]))
    } else {
      res.status(404).sendFile(path.join(__dirname, '404.html'))
    }
  } catch (error) {
    console.error('Server error:', error)
    res.status(500).send('Internal Server Error')
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
