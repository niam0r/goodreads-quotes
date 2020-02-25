class AddBookImgToQuotes < ActiveRecord::Migration[6.0]
  def change
    add_column :quotes, :book_img, :string
  end
end
