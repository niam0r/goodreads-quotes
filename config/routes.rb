# frozen_string_literal: true

Rails.application.routes.draw do
  resources :quotes, only: %i[index show destroy]
  # root to:
end
