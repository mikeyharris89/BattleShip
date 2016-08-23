class Api::PlayersController < ApplicationController
  def create
    @player = Player.new(player_params[:player])
    if @player.save
      redirect
    else
      render 'index'
    end
  end
  
  private

  def player_params
    params.require(:player).permit(:name)
  end
end
