
class Player < ActiveRecord::Base
  attr_reader :name

  has_one :board
  belongs_to :game

  def initialize(name, ships = 10)
    debugger
    @name = name
    # @board = Board.new
    @ships = ships
  end

  def set_ships
    self.ships.times do
      place_ship(pos, self.board)
    end
  end

  def place_ship(pos,board)
    board[pos] = "S"
  end
end
