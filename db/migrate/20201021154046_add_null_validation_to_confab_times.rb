class AddNullValidationToConfabTimes < ActiveRecord::Migration[5.2]
	def change
		change_column_null :confabs, :start_time_in_ms, false
		change_column_null :confabs, :end_time_in_ms, false
	end
end
