class UserSerializer < ActiveModel::Serializer
  has_many :orders, through: :tickets
  attributes :username, :company, :phone, :address, :accounts, :tickets, :orders, :items
  
end
