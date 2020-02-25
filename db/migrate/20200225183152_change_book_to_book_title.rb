# frozen_string_literal: true

class ChangeBookToBookTitle < ActiveRecord::Migration[6.0]
  def change
    rename_column :quotes, :book, :book_title
  end
end
