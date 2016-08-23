class ComputerPlayer < ActiveRecord::Base
  attr_reader :name

  has_one :board
  belongs_to :game

  def initialize(ships = 10)
    debugger
    @name = "Computer"
    @board = Board.new
    @ships = ships
  end

  def set_ships
    self.ships.times do
      pos = random_pos
      place_ship(pos, self.board)
    end
  end

  def place_ship(pos,board)
    board[pos] = :s
  end

  def random_pos
    pos = [rand(5), rand(5)]
    while self.board[pos] == :s
      pos = [rand(5), rand(5)]
    pos
  end
end
