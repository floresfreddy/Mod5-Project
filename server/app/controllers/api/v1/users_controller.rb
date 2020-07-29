require_relative 'items'

class Api::V1::UsersController < ApplicationController
  skip_before_action :logged_in?, only: [:create]
  
  # Sign Up
  def create
    user = User.new(user_params)
    
    if user.valid?

      user.save

      items = Items.new
      items.items.map{|item| Item.create(name:item[:name], item_type:item[:item_type], price:item[:price], user_id:user.id)}
      
      render json: {user: UserSerializer.new(user)}, status: :created
    else
      render json: {error: "Failed to create a user"}, status: :not_acceptable
    end
  end


  def show
      render json: User.find(params[:id])
  end

  def update
    user = User.find(params[:id])
    user.update(user_params)
    render json: user
  end

  private

  def user_params
    params.permit(:username, :password, :company, :address, :phone)
  end

end
