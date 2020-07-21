class UserSerializer < ActiveModel::Serializer
  attributes :username, :company, :phone, :address, :accounts, :tickets, :orders, :items
end
