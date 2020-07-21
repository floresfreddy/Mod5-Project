class Api::V1::UsersController < ApplicationController
  skip_before_action :logged_in?, only: [:create]
  
  # Sign Up
  def create
    user = User.new(user_params)

    if user.valid?
      user.save
      render json: {user: UserSerializer.new(user)}, status: :created
    else
      render json: {error: "Failed to create a user"}, status: :not_acceptable
    end
  end

  def index 
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end


  private

  def user_params
    params.permit(:username, :password, :company, :address, :phone)
  end

end
