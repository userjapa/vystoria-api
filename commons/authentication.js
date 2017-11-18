
import passport from 'passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

import InspectorModel from '../src/v1/models/Inspectors'
import jwtConfigs from '../configs/jwt'

const Authentication = () => {
  const strategy = new Strategy({
    secretOrKey: jwtConfigs.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  }, async ({ _id }, done) => {
    const findByIdResponse = await InspectorModel.findById(_id)
    
    return findByIdResponse
      ? done(null, findByIdResponse)
      : done(new Error('User not found'), null)
  })
  
  passport.use(strategy)
  
  return {
    init: () => passport.initialize(),
    authenticate: () => passport.authenticate('jwt', jwtConfigs.jwtSession)
  }
}

export default Authentication()