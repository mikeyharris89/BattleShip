class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards do |t|

      t.integer :player_id, null: false
      t.timestamps null: false
    end
  end
end
