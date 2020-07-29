class CreateTickets < ActiveRecord::Migration[5.2]
  def change
    create_table :tickets do |t|
      t.integer :account_id
      t.string :items_type
      t.string :total_cost
      t.date :date

      t.timestamps
    end
  end
end
