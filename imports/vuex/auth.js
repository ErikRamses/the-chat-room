import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

const authModule = {
	state: {
		user: null,
	},
	mutations: {
		updateUser(state, value) {
			state.user = value
		},
    isUsernameValid(state, value) {
      state.isUsernameValid = value
    }
	},
	actions: {
    submitRegisterForm({commit, state}, user) {
    	Accounts.createUser({
    		username: user,
        email: user.toLowerCase()+'@chatroom.com',
        password: user
      }, error => {
      	error ? console.log(error.reason) : console.log('user registered')
    	})
    	Meteor.loginWithPassword(user, user, error => {
      	error ? console.log(error.reason) : console.log('user logged in')
    	})
    },
    submitLoginForm({commit, state}, user) {
    	Meteor.loginWithPassword(user, user, error => {
      	error ? console.log(error.reason) : console.log('user logged in')
    	})
    },
  	logout() {
  		Meteor.logout(() => {
  			console.log('user logged out')
  		})
  	}
	}
}

export default authModule