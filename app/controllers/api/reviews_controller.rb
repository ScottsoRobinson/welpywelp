module Api
  class ReviewsController < ApiController

    def create
      @review = current_user.reviews.new(reviews_params)
      @review.review_pictures = params[:review][:review_pictures]
      if @review.save
        render :show
      else
        render json: @review.errors.full_messages, status: :unprocessable_entity
      end
    end

    def show

    end

    def update
      @review = Review.find(params[:id])
      @review.review_pictures = params[:review][:review_pictures]
      if @review.update(reviews_params)
        render :show
      else
        render json: @review.errors.full_messages, status: :unprocessable_entity
      end
    end

    def reviews_params
      params.require(:review).permit(:title, :body, :rating, :restaurant_id)
    end
  end
end
