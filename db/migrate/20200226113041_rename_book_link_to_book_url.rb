# frozen_string_literal: true

class RenameBookLinkToBookUrl < ActiveRecord::Migration[6.0]
  def change
    rename_column :quotes, :book_link, :book_url
  end
end
