class Api::GamesController < ApplicationController
  def index
    @games = Game.all
    @game = Game.new
  end

  def create
    @game = Game.new(params[:game])
    if @game.save
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
