module Api
  class UsersController < ApiController

    def show
      @user = User.find(params[:id])
      render :show
    end

    def update
      @user = User.find(params[:id])

      if @user.update(user_params)
        render :show
      else
        render json: @user.errors.full_messages, status: :unprocessable_entity
      end
    end

    def user_params
      params.require(:user).permit(:username, :email, :password, :password_confirmation, :picture)
    end

  end
end
