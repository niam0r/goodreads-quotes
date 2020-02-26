# frozen_string_literal: true

class CreateQuotes < ActiveRecord::Migration[6.0]
  def change
    create_table :quotes do |t|
      t.string :author
      t.string :author_img
      t.string :book_img
      t.string :book_title
      t.string :book_url
      t.text :content
      t.string :goodreads_quote_url
      t.timestamps
    end
  end
end
