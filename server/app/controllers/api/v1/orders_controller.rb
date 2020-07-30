
class Api::V1::OrdersController < ApplicationController

    def index
      @orders = Order.all
      render json: @orders
    end

    def create
      hash = order_params[:orders].each do |k, v| [k, v] end
      
      ticket = Ticket.create(:account_id => params['id'])

      hash.map{|k,v| Order.create(:item => v['name'], :cost => v['price'], :description=>v['description'], :ticket_id=>ticket.id, :item_type=>v['item_type'])}

      render json: User.find(params['id']), :include => :tickets
  end
  
  
  private

  def order_params
      params.permit(orders:{})
  end
  
end