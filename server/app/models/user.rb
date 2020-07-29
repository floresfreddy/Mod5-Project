class User < ApplicationRecord
  has_secure_password
  
  validates :username, uniqueness: {case_sensitive: false}
  
  has_many :items
  
  has_many :accounts
  has_many :tickets, through: :accounts
  has_many :orders, through: :tickets
  
end
