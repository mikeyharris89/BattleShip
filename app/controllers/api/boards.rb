class Api::BoardsController < ApplicationController

  def board
    @board = Board.new(board_params)
    if @board.save
      render :show
    else
      redirect_to '/'
    end
  end

  def show
    @game = Game.find(params[:id])
    render "finished" if @game.gameover?
  end

  def destroy
    @game = Game.find(params[:id])
    @game.destroy
    render 'index'
  end
  
end
