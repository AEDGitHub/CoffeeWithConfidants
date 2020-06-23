class CreateConfidants < ActiveRecord::Migration[5.2]
  def change
    create_table :confidants do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :location_id, null: false
      t.boolean :is_host, default: true, null: false

      t.timestamps
    end
    add_index :confidants, :username, unique: true
    add_index :confidants, :email, unique: true
    add_index :confidants, :session_token, unique: true
    add_index :confidants, :location_id
  end
end
