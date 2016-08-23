class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.string :name, null: false
      t.integer :game_id, null: false
      
      t.timestamps null: false
    end
  end
end
