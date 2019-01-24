Rails.application.routes.draw do
  root 'pages#home'
  get 'pages/home'
  get 'pages/about'
  get 'pages/detail'

  get 'details/company'
  get 'details/intro'
  get 'details/app1'
  get 'details/app2'
end
