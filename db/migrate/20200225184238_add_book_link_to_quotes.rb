class AddBookLinkToQuotes < ActiveRecord::Migration[6.0]
  def change
    add_column :quotes, :book_link, :string
  end
end
