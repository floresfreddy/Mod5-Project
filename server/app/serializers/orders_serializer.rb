class OrderSerializer < ActiveModel::Serializer
    attributes :item, :cost, :description, :date, :account_id
  end