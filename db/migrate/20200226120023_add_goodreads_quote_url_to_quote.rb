# frozen_string_literal: true

class AddGoodreadsQuoteUrlToQuote < ActiveRecord::Migration[6.0]
  def change
    add_column :quotes, :goodreads_quote_url, :string
  end
end
