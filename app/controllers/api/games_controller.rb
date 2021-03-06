class Api::GamesController < ApplicationController

  def create
    @game = Game.new(game_params)
    if @game.save
      render :show
    else
      redirect_to '/'
    end
  end

  def show
    @game = Game.find(params[:id].to_i)
    render "finished" if @game.gameover?
  end

  def destroy
    @game = Game.find(params[:id])
    @game.destroy
    render :show
  end

  private
  def game_params
    params.require(:game).permit(:player_id)
  end
end
