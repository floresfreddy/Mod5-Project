
class Api::V1::OrdersController < ApplicationController

    def index
      @orders = Order.all
      render json: @orders
    end

    def create

      # hash = order_params[:price].each do |k, v| [k, v] end
      
      # hash.map{|k,v| Item.update(k, :price => v)}

      render json: User.find(params['id'])
  end
  
  
  private

  def order_params
      params.permit(orders:[])
  end
  
  
  
end