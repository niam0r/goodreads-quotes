class PagesController < ApplicationController
  def react
    @quotes = Quote.all
  end
end
