# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'pages#react'

  get 'quotes/', to: 'pages#react'
  get 'quotes/:id', to: 'pages#react'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :quotes, only: %i[index show]
    end
  end
end
