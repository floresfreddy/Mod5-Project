class Ticket < ApplicationRecord
    belongs_to :account
    has_many :orders
end
