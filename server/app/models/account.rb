class Account < ApplicationRecord  
    belongs_to :user
    has_many :tickets
    has_many :orders, through: :tickets
end