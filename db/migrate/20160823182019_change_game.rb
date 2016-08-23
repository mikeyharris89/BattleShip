class ChangeGame < ActiveRecord::Migration
  def change
    add_column :games, :player_id, :integer, null: false
  end
end
