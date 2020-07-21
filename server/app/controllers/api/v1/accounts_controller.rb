class Api::V1::AccountsController < ApplicationController

    def index
      @Accounts = Account.all
      render json: @Accounts
    end
  
  
  
  end