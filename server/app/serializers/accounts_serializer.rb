class AccountSerializer < ActiveModel::Serializer
    attributes :first_name, :last_name, :address, :phone, :user_id
  end