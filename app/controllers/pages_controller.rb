# frozen_string_literal: true

class PagesController < ApplicationController
  def react
    @quotes = Quote.all
  end
end
