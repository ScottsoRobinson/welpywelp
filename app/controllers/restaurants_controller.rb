class RestaurantsController < ApplicationController
before_action :require_logged_in
  def new
    @restaurant = Restaurant.new
    render :new
  end

  def index
    @restaurants = Restaurant.all
    render :index
  end

  def create
    @restaurant = Restaurant.new(restaurant_params)
    if @restaurant.save
      render :show
    else
      flash.now[:errors] = @restaurant.errors.full_messages
      render :new
    end

  end

  def show
    @restaurant = Restaurant.find(params[:id])
    render :show
  end

  def update
    @restaurant = Restaurant.find(params[:id])

    if @restaurant.update(restaurant_params)
      render :show
    else
      flash.now[:errors] = @restaurant.errors.full_messages
      render :new
    end
  end

  def edit
    @restaurant = Restaurant.find(params[:id])
    render :edit
  end

  def restaurant_params
    params.require(:restaurant).permit(:owner_id, :name, :cuisine)
  end

end
