class User {
    constructor() {
      // In-memory storage for demo purposes
      this.users = new Map();
    }
  
    async findByEmail(email) {
      return this.users.get(email);
    }
  
    async create(userData) {
      if (!userData.email || !userData.password) {
        throw new Error('Email and password are required');
      }
      
      // Check if user already exists
      if (this.users.has(userData.email)) {
        throw new Error('User already exists');
      }
      
      this.users.set(userData.email, userData);
      return userData;
    }
  }
  
  module.exports = new User();