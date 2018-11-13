Rails.application.routes.draw do
  root 'welcome#index'

  controller :welcome do
    post :sign_in
    delete :sign_out
    get :time
  end
end
