# frozen_string_literal: true

class RemoveAuthorImgFromQuotes < ActiveRecord::Migration[6.0]
  def change
    remove_column :quotes, :author_img, :string
  end
end
