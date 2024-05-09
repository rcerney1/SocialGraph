// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    // Your code here
    // create an obj with an ID and name
    let userID = this.currentID + 1;
    let newUser = {'id' : userID, 'name': name} 
    // id should be this.currentID + 1
    
    this.users[userID] = newUser;
    // initialize a new set to track who the user follows --> this.follows[id] = new Set()
    this.follows[userID] = new Set();
    // returns unique ID
    this.currentID++;
    return userID;
  }

  getUser(userID) {
    // Your code here 
  }

  follow(userID1, userID2) {
    // Your code here 
  }

  getFollows(userID) {
    // Your code here 
  }

  getFollowers(userID) {
    // Your code here 
  }

  getRecommendedFollows(userID, degrees) {
    // Your code here 
  }
}

socialNetwork = new SocialNetwork()
//socialNetwork.addUser('John Doe')
console.log(socialNetwork)

console.log(Object.keys(socialNetwork.follows).length)


module.exports = SocialNetwork;
