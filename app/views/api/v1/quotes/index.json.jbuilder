# frozen_string_literal: true

json.array! @quotes do |quote|
  json.partial! 'quote', quote: quote
end
