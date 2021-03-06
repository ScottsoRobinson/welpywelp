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
      flash.now[:errors] = ["login was incorrect"]
      render :new
    else
      login(@user)
      redirect_to root_url
    end
  end

  def demo
    @user = User.find_by_credentials("DemoUser", "password")
    login(@user)
    redirect_to root_url
  end

  def destroy
    logout
    redirect_to new_session_url
  end


end
