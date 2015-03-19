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

      filter_data = params[:filter_data]
      lat_min = filter_data['lat'][0]
      lat_max = filter_data['lat'][1]
      lng_min = filter_data['lng'][0]
      lng_max = filter_data['lng'][1]
      @search_results = Restaurant
                            .search_by_restaurant(params[:query])
                            .page(params[:page])
                            .where("latitude BETWEEN #{lat_min} AND #{lat_max}")
                            .where("longitude BETWEEN #{lng_min} AND #{lng_max}")
      render :search
    end
    # def edit
    #   @restaurant = Restaurant.find(params[:id])
    #   render :edit
    # end

    def restaurant_params
      params.require(:restaurant).permit(:owner_id, :name, :cuisine, :address)
    end

  end

end
