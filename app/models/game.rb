class Game < ActiveRecord::Base

  attr_accessor :player1, :player2

  has_many :boards
  belongs_to :player

  # def initialize(player1)
  #   @player1 = player1
  #   @player2 = ComputerPlayer.new
  # end
  #
  # def run
  #   until gameover?
  #     play_turn
  #   end
  #
  #   if self.player1.board.won?
  #     winning_player = self.player1
  #   else
  #     winning_player = self.player2
  #   end
  #   puts "#{winning_player.name} wins!"
  # end
  #
  # def gameover?
  #   self.player1.board.won? || self.player2.board.won?
  # end

  # def play_turn
  #   current_player = self.turn
  #
  #   @turn = current_player == self.player1 ? self.player2 : self.player1
  # end
end
