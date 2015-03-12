module Api
  class ReviewsController < ApiController

    def create
      @review = current_user.reviews.new(reviews_params)

      if @review.save
        render json: @review
      else
        render json: @review.errors.full_messages, status: :unprocessable_entity
      end
    end

    def show

    end

    def update
      @review = Review.find(params[:id])

      if @review.update(reviews_params)
        render json: @review
      else
        render json: @review.errors.full_messages, status: :unprocessable_entity
      end
    end

    def reviews_params
      params.require(:review).permit(:title, :body, :rating, :restaurant_id)
    end
  end
end
