class ChangeTimeColumnsInConfabTable < ActiveRecord::Migration[5.2]
	def up
		remove_column :confabs, :start_time
		remove_column :confabs, :end_time
		add_column :confabs, :start_time_in_ms, :integer
		add_column :confabs, :end_time_in_ms, :integer
	end

	def down
		remove_column :confabs, :start_time_in_ms
		remove_column :confabs, :end_time_in_ms
		add_column :confabs, :start_time, :datetime
		add_column :confabs, :end_time, :datetime
	end
end
