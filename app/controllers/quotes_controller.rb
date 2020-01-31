# frozen_string_literal: true

class QuotesController < ApplicationController
  before_action :set_quote, only: %i[show destroy]

  def index
    @quotes = Quote.all
  end

  def show; end

  def destroy
    @quote.destroy
    # redirect_to quotes_path
  end

  private

  def set_quote
    @quote = Quote.find(params[:id])
  end
end
