import { App } from './app'
import { router } from './router'

  ; (async () => {
    const app = App.create({})
    app.use(router.routes())
    app.start()
  })()


 