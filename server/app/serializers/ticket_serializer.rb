class TicketSerializer < ActiveModel::Serializer
  attributes :id, :orders, :account_id
end
