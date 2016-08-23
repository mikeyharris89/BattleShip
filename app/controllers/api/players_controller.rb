class Api::PlayersController < ApplicationController
  def create
    @player = Player.new(player_params)
    if @player.save
      render 'show'
    else
      redirect_to '/'
    end
  end

  def destroy
    @player = Player.find(params[:id])
    @player.destroy
    redirect_to "/"
  end

  private

  def player_params
    params.require(:player).permit(:name)
  end
end
