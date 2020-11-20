class CreateConurbations < ActiveRecord::Migration[5.2]
	def change
		create_table :conurbations do |t|
			t.string :name, null: false

			t.timestamps
		end
		add_index :conurbations, :name, unique: true
	end
end
