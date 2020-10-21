class ChangeConfabTimesToBigInt < ActiveRecord::Migration[5.2]
  def up
    change_column :confabs, :start_time_in_ms, :bigint
    change_column :confabs, :end_time_in_ms, :bigint
    #Ex:- change_column("admin_users", "email", :string, :limit =>25)
  end

  def down
    change_column :confabs, :start_time_in_ms, :integer
    change_column :confabs, :end_time_in_ms, :integer
  end
end
