class Api::V1::AccountsController < ApplicationController

  def index
    @Accounts = Account.all
    render json: @Accounts
  end

  def create
    account = Account.new(account_params)

    if account.valid?
      account.save
      render json: User.find(account.user.id)
    else
      render json: {error: "Failed to create a user"}, status: :not_acceptable
    end
  end

  def update
    account = Account.find(params[:id])
    account.update(account_params)
    render json: User.find(account.user.id)
  end

  private

  def account_params
    params.permit(:user_id, :first_name, :last_name, :address, :phone)
  end
  
  
  
  end