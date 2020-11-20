class CreateConflations < ActiveRecord::Migration[5.2]
	def change
		create_table :conflations do |t|
			t.integer :attendee_id, null: false
			t.integer :confab_id, null: false

			t.timestamps
		end

		add_index :conflations, %i[confab_id attendee_id], unique: true
	end
end
