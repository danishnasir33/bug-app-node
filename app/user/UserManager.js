const { UserUtil } = require('../../utilities') 

const {
  UserHandler
} = require('../../handlers')

class UserManager {
  static getUser(user) {

    user = UserUtil.transformUserData(user);

    console.log(`getUser:: User's data successfully fetched. userId::${user.user_id} user:: ${user.email} user:: ${user.name}`);

    return user;
  }

  static async getDevelopers(user) {

    console.log(`getDevelopers:: Request to get developers. user_id:: `, user.user_id)

    let developers = await UserHandler.fetchDevelopers()

    return developers

  }
}

module.exports = UserManager