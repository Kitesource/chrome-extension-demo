import db from './db'

(async () => {
  await db.setValue('key1', 123)
  const res = await db.getValue('key1')
  console.log('db getValue', res)
  console.log(import.meta.env.MODE)
})()
