class RemoveGameId < ActiveRecord::Migration
  def change
    remove_column :players, :game_id, :integer
  end
end
