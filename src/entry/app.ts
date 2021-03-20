import { Router } from 'express'
import { Entry, MongoAccessor } from 'less-api'
import Config from '../config'
const rules = require('../rules/app.json')

const router = Router()

router.all('*', function (_req, _res, next) {
  next()
})

const accessor = new MongoAccessor(Config.db.database, Config.db.uri, {
  poolSize: Config.db.poolSize,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const entry = new Entry(accessor)
entry.init()
entry.loadRules(rules)

router.post('/entry', async (req, res) => {
  const auth = req['auth'] ?? {}

  // parse params
  const params = entry.parseParams(req.body)

  const injections = {
    $uid: auth.uid
  }
  // validate query
  const result = await entry.validate(params, injections)
  if (result.errors) {
    return res.send({
      code: 1,
      error: result.errors,
      injections
    })
  }

  // execute query
  try {
    const data = await entry.execute(params)
    return res.send({
      code: 0,
      data
    })
  } catch (error) {
    return res.send({
      code: 2,
      error: error,
      injections
    })
  }
})

export default router