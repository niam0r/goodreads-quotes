# frozen_string_literal: true

json.array! @quotes do |quote|
  json.extract!(
    quote,
    :author,
    :book_img,
    :book_title,
    :content,
    :id
  )
end
