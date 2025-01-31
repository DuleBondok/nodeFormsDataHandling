class UsersStorage {
    constructor() {
      this.storage = {};
      this.id = 0;
    }
  
    addUser({ firstName, lastName, emailAddress, age }) {
      const id = this.id.toString(); // Convert ID to string
      this.storage[id] = { id, firstName, lastName, emailAddress, age };
      this.id++;
      return this.storage[id]; // Return the new user
    }
  
    getUsers() {
      return Object.values(this.storage);
    }
  
    getUser(id) {
      return this.storage[id.toString()] || null; // Return null if not found
    }
  
    updateUser(id, { firstName, lastName, emailAddress, age }) {
      id = id.toString();
      if (!this.storage[id]) {
        throw new Error("User not found");
      }
      this.storage[id] = { id, firstName, lastName, emailAddress, age };
      return this.storage[id];
    }
  
    deleteUser(id) {
      id = id.toString();
      if (!this.storage[id]) {
        console.log(`User with ID ${id} not found.`);
        return false;
      }
      delete this.storage[id];
      return true;
    }
  }
  
  module.exports = new UsersStorage(); // Singleton instance