class OrderSerializer < ActiveModel::Serializer
    attributes :item, :cost, :description, :ticket_id
  end