import db from './db'
import { showStayHydratedNotification } from './utils'

(async () => {
  await db.setValue('key1', 123)
  const res = await db.getValue('key1')
  console.log('db getValue', res)
  console.log(import.meta.env.MODE)

  showStayHydratedNotification()
})()
