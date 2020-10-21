class ChangeTimeColumnsInConfabTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :confabs, :start_time
    remove_column :confabs, :end_time
    add_column :confabs, :start_time_in_ms, :integer
    add_column :confabs, :end_time_in_ms, :integer
  end
end
