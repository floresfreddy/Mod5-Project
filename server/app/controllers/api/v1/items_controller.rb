class Api::V1::ItemsController < ApplicationController

    def create

        hash = item_params[:price].each do |k, v| [k, v] end
        
        hash.map{|k,v| Item.update(k, :price => v)}

        render json: User.find(params['id'])
    end
    
    
    private

    def item_params
        params.permit(price:{})
    end

end
