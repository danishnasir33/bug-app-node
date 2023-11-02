
const {
  knex,
  Validators
} = require('../helpers');

class UserHandler {

  static findUserByEmail(email) {

    return knex('users')
      .select('*')
      .where('email', email)
      .first();

  }

  static createUser({ name, email, password, user_type }) {

    return knex('users')
      .insert({
        name,
        email,
        password,
        user_type
      }).returning('*');

  }

  static setAccessToken(userId, accessToken, refreshToken) {

    return knex('users')
      .where('user_id', Validators.parseInteger(userId, -1))
      .update({
        access_token: accessToken,
        refresh_token: refreshToken,
      }).returning('*');

  }

  static getAuthenticateUser(userId, email = " ", authToken) {

    return knex('users')
      .select('*')
      .where({
        email,
        user_id: Validators.parseInteger(userId, -1),
        access_token: authToken,
      })
      .first();
  }

  static fetchUserById(id) {

    return knex('users')
      .select('*')
      .where('user_id', Validators.parseInteger(id, -1))
      .first();
  }

  static fetchDevelopers() {

    return knex('users')
      .select('user_id', 'name')
      .where('user_type', 'developer');
  }

  // Below are the generic methods you can update and use in your app to extend the functionality

  // static checkEmailUniqueness(userId, email = '') {

  //   return knex('users')
  //     .select('*')
  //     .where('email', email)
  //     .whereNot({
  //       id: Validators.parseInteger(userId, -1)
  //     })
  //     .first();

  // }


  // static findUserByEmailOnly(email = '') {

  //   return knex('users')
  //     .select('*')
  //     .where({ email })
  //     .whereNotNull('email')
  //     .first();

  // }

  // static findUserByAccessToken(token) {

  //   return knex('users')
  //     .select('*')
  //     .where('access_token', token)
  //     .first();

  // }

  // static findUserById(_id, apiToken) {

  //   return knex('users')
  //     .select('*')
  //     .where({
  //       id: Validators.parseInteger(_id, -1),
  //       api_key: apiToken
  //     })
  //     .first();

  // }

  // static updateState(userId, state) {

  //   return knex('users')
  //     .where('id', Validators.parseInteger(userId, -1))
  //     .update({
  //       state
  //     }).returning('*');

  // }

  // static addPersonalInfo(userId, data) {

  //   return knex('users')
  //     .where('id', Validators.parseInteger(userId, -1))
  //     .update({
  //       first_name: data.first_name,
  //       last_name: data.last_name,
  //       title: data.title,
  //     }).returning('*');

  // }

  // static addPersonalInfoOfVendor(userId, data) {

  //   return knex('users')
  //     .where('id', Validators.parseInteger(userId, -1))
  //     .update({
  //       first_name: data.first_name,
  //       last_name: data.last_name,
  //       email: data.email,
  //     }).returning('*');

  // }

  // static findUserToVerifyForgetPassword(forgetPasswordToken) {

  //   return knex('users')
  //     .select('*')
  //     .where({
  //       forget_password_token: forgetPasswordToken
  //     })
  //     .first();

  // }

  // static setUserPassword(userId, data) {

  //   return knex('users')
  //     .where('id', Validators.parseInteger(userId, -1))
  //     .update({
  //       password: data.password
  //     })
  //     .returning('*');

  // }

  // static resetPassword(userId, pass) {

  //   return knex('users')
  //     .where('id', Validators.parseInteger(userId, -1))
  //     .update({
  //       forget_password_token: null,
  //       password: pass
  //     })
  //     .returning('*');

  // }

  // static signOut(userId) {

  //   return knex('users')
  //     .where('id', Validators.parseInteger(userId, -1))
  //     .update({
  //       access_token: null
  //     });

  // }

  // static setForgetPasswordToken(userId, token) {

  //   return knex('users')
  //     .where('id', Validators.parseInteger(userId, -1))
  //     .update({
  //       forget_password_token: token,
  //       access_token: null
  //     });

  // }

  // static findVerifiedUser(email) {

  //   return knex('users')
  //     .select('*')
  //     .where({
  //       email,
  //     })
  //     .first();

  // }

  // static findUserToResetPassword(resetPasswordToken) {

  //   return knex('users')
  //     .select('*')
  //     .where({
  //       reset_password_token: resetPasswordToken
  //     })
  //     .first();

  // }

  // static deleteUser(email) {

  //   return knex('users')
  //     .where('email', email)
  //     .del();

  // }

}

module.exports = UserHandler;
