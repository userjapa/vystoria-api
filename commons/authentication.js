
import passport from 'passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

import InspectorModel from '../src/v1/models/Inspectors'
import jwtConfigs from '../configs/jwt'

class Authentication {

  constructor () {
    const strategy = new Strategy({
      secretOrKey: jwtConfigs.jwtSecret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }, async ({ _id }, next) => {
      const findByIdResponse = await InspectorModel.findById(_id)
      
      return findByIdResponse
        ? next(null, findByIdResponse)
        : next(new Error('User not found'), null)
    })
    
    passport.use(strategy)
  }

  init () {
    return passport.initialize()
  }

  authenticate () {
    return passport.authenticate('jwt',jwtConfigs.jwtSession)
  }
}

export default new Authentication()