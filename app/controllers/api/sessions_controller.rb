class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
        params[:user][:username],
        params[:user][:password]
      )
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid credentials"]
    end
  end

  def destroy
    @user = cuurent_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["Current User does not exist"]
    end
  end
end
