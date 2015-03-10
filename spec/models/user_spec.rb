require 'rails_helper'
require 'user'
describe User do
  describe "password encryption and user creation" do
    it "does not save passwords to the database" do
      User.create!(username: "tom", password: "abcdef", email: "tom")
      user = User.find_by_username("tom")
      expect(user.password).not_to be("abcdef")
    end

    it "does not allow users made without username" do

      user = User.new(email: "tom", password: "abcdef")
      expect(user).to_not be_valid

    end

    it "does not allow users made without email" do

        user = User.new(username: "tom", password: "abcdef")
        expect(user).to_not be_valid
    end

    it "does not allow users made without password" do

      user = User.new(username: "tom", email: "abcdef")
      expect(user).to_not be_valid

    end

    it "encrypts the password using BCrypt" do
      expect(BCrypt::Password).to receive(:create)
      User.new(username: "jack_bruce", password: "abcdef")
    end


  end
end
