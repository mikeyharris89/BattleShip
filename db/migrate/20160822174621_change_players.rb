class ChangePlayers < ActiveRecord::Migration
  def change
    change_column :players, :game_id, :integer, null: true
  end
end
