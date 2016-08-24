class Game < ActiveRecord::Base

  attr_accessor :player1, :player2

  has_many :boards
  belongs_to :player


end
