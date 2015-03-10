class SessionsController < ApplicationController

  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(
        params[:user][:username],
        params[:user][:password]
    )
    if @user.nil?
      flash.now[:errors] = @user.errors.full_messages
      render :new
    elseo
      login(@user)
      redirect_to user_url(@user.id)
    end
  end

  def destroy
    logout
    redirect_to new_session_url
  end


end
