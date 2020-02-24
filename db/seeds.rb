# frozen_string_literal: true

# require 'open-uri'

# Quote.destroy_all
# puts 'Destroyed all quotes'

# url = 'https://www.goodreads.com/quotes/list_rss/61714489-romain-niam0r'
# # url = "./app/my_quotes.html"
# doc = Nokogiri::HTML(open(url), nil, Encoding::UTF_8.to_s)


# ???.each do |element|

#   content =
#   author =
#   author_img =
#   book =

#   Quote.create(
#     content: content,
#     author: author,
#     author_img: author_img,
#     book: book
#     # TODO: link: link to book on goodreads
#   )
# end

require 'rss'
require 'httparty'

response = HTTParty.get('https://www.goodreads.com/quotes/list_rss/61714489-romain-niam0r')

feed = RSS::Parser.parse response.body

feed.items.each do |item|
  puts '--------------------------------------------------------------------------------'
  puts item.description
  puts '--------------------------------------------------------------------------------'
end
