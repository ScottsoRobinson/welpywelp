module Api

  class RestaurantsController < ApiController

    # def new
    #   @restaurant = Restaurant.new
    #   render :new
    # end

    def index
      @restaurants = Restaurant.all
      render :index
    end

    def create
      @restaurant = Restaurant.new(restaurant_params)
      if @restaurant.save
        render json: @restaurant
      else
        flash.now[:errors] = @restaurant.errors.full_messages
        render json: @restaurant.errors.full_messages, status: :unprocessable_entity
      end

    end

    def show
      @restaurant = Restaurant.find(params[:id])
      render :show
    end

    def update
      @restaurant = Restaurant.find(params[:id])

      if @restaurant.update(restaurant_params)
        render json: @restaurant
      else
        render json: @restaurant.errors.full_messages, status: :unprocessable_entity
      end
    end

    def search
      @search_results = Restaurant.search_by_restaurant_name(params[:query])

      render :search
    end
    # def edit
    #   @restaurant = Restaurant.find(params[:id])
    #   render :edit
    # end

    def restaurant_params
      params.require(:restaurant).permit(:owner_id, :name, :cuisine)
    end

  end

end
