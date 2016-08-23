class Board < ActiveRecord::Base
  attr_reader :grid

  belongs_to :player

  def self.blank_grid
    Array.new(5) { Array.new(5) }
  end

  def initialize(grid = self.class.blank_grid)
    @grid = grid
  end

  def [](pos)
    row, col = pos
    @grid[row][col]
  end

  def []=(pos, mark)
    raise "mark already placed there!" unless empty?(pos)

    row, col = pos
    @grid[row][col] = mark
  end

  def empty?(pos)
    self[pos].nil?
  end

  def won?
    @grid.flatten.none? {|el| el == :s }
  end

end
