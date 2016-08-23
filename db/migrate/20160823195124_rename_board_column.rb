class RenameBoardColumn < ActiveRecord::Migration
  def change
    rename_column :boards, :player_id, :game_id
  end
end
