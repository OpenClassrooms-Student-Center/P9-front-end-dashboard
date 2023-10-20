const {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
} = require('./data')


/**
 * @description Retrieve all users
 * @returns {Array} All users
 */
const getAllUsers = () => USER_MAIN_DATA

/**
 * @description Retrieve the main user info (first name, last name, today score)
 * @param {number} id 
 */
const getUserById = id => USER_MAIN_DATA
    .filter(user => user.id === id)
    .shift()


/**
 * @param {number} id 
 */
const getUserActivityById = id => USER_ACTIVITY
    .filter(userActivity => userActivity.userId === id)
    .shift()


/**
 * @param {number} id 
 */
const getUserAverageSession = id => USER_AVERAGE_SESSIONS
    .filter(userActivity => userActivity.userId === id)
    .shift()


/**
 * @param {number} id 
 */
const getUserPerformance = id => USER_PERFORMANCE
    .filter(userPerformance => userPerformance.userId === id)
    .shift()

module.exports = {
    getAllUsers,
    getUserById,
    getUserActivityById,
    getUserAverageSession,
    getUserPerformance
}
