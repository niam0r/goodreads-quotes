# frozen_string_literal: true

require 'open-uri'

Quote.destroy_all
puts 'Destroyed all quotes'

url = 'https://www.goodreads.com/quotes/list/61714489-romain-niam0r?utf8=%E2%9C%93&sort=date_added'
# url = "./app/my_quotes.html"
doc = Nokogiri::HTML(open(url), nil, Encoding::UTF_8.to_s)

element_list = doc.search('.elementList')
puts "There's #{element_list.length} quotes"

element_list.each do |element|
  quote_text = element.search('.quoteText').text.strip.split('//<![CDATA[')[0]

  content = quote_text.split("\n")[0][1...-1]

  # author = quote_text.split("\n")[2].tr(',', '').strip // old selector
  author = element.search('span.authorOrTitle').text.strip.gsub(',', '')

  author_img = element.search('a > img').empty? ? '' : element.search('a > img').attribute('src').value

  # book = quote_text.split("\n")[4].nil? ? '' : quote_text.split("\n")[4].strip // old selector
  book = element.search('a.authorOrTitle').text

  Quote.create(
    content: content,
    author: author,
    author_img: author_img,
    book: book
  )
end
