class CreateConfabs < ActiveRecord::Migration[5.2]
  def change
    create_table :confabs do |t|
      t.integer :host_id, null: false
      t.text :description, null: false
      t.integer :max_capacity, null: false
      t.datetime :start_time, null: false
      t.datetime :end_time, null: false

      t.timestamps
    end
    add_index :confabs, [:host_id, :start_time], unique: true
    add_index :confabs, :start_time
    add_index :confabs, :end_time

  end
end
