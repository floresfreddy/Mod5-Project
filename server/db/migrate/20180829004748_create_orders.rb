class CreateOrders < ActiveRecord::Migration[5.2]
    def change
      create_table :orders do |t|
        t.text :item
        t.string :cost
        t.text :description
        t.integer :ticket_id
        t.date :date
  
        t.timestamps
      end
    end
  end