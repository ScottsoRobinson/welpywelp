module Api
  class ReviewsController < ApiController

    def create
      @review = Review.new(reviews_params)

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
      params.require(:reviews).permit(:title, :body, :rating)
    end
  end
end
