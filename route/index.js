// const inputValidations = require('./validations/input')
// const outputValidations = require('./validations/output')

const _handler = require('../handler/handler');



module.exports = (server) => {
  // const handlers = require('./handlers')(server)
  return [
    // Get /profiles/{username}
    {
      method: 'GET',
      path: '/hello',
      // config: {
      //   auth: { mode: 'optional', strategy: 'jwt' },
      //   response: outputValidations.ProfileOnGetOutputValidationConfig,
      //   validate: inputValidations.ProfileParamsValidation,
      //   description: 'Get the  user profile',
      //   tags: ['api', 'profiles']
      // },
      handler: _handler.sayWelcome
    },

    {
      method: 'GET',
      path: '/getUserById',
      handler: _handler.getUserById
    },
    
    //  {
    //   method: 'POST',
    //   path: '/profiles/{username}/follow',
    //   config: {
    //     auth: 'jwt',
    //     response: outputValidations.ProfileFollowOutputValidationConfig,
    //     validate: inputValidations.ProfileParamsValidation,
    //     description: 'Follow/Unfollow a user',
    //     tags: ['api', 'profiles'],
    //     notes: '__Require a valid JWT Token__'
    //   },
    //   handler: handlers.followProfile
    // },
    // // DELETE /profiles/{username}/follow
    // {
    //   method: 'DELETE',
    //   path: '/profiles/{username}/follow',
    //   config: {
    //     auth: 'jwt',
    //     response: outputValidations.ProfileFollowOutputValidationConfig,
    //     validate: inputValidations.ProfileParamsValidation,
    //     description: 'Follow/Unfollow a user',
    //     tags: ['api', 'profiles'],
    //     notes: '__Require a valid JWT Token__'
    //   },
    //   handler: handlers.unfollowProfile
    // }


  ]
}