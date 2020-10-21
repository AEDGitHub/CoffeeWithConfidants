class AddIndexesToConfabTimes < ActiveRecord::Migration[5.2]
  def change
    add_index :confabs, [:host_id, :start_time_in_ms], unique: true
    add_index :confabs, :start_time_in_ms
  end
end
