class WelcomeController < ApplicationController
  def index
  end
  
  def sign_in
    session[:user] = 'Username'
    redirect_to :root
  end

  def sign_out
    session[:user] = nil
    redirect_to :root
  end

  def time
    render json: { time: Time.current.to_i * 1000 }
    sleep 3
  end
end
