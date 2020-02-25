# frozen_string_literal: true

require 'open-uri'

class ParseFeedItem
  def initialize(item)
    @quote = parse(item)
  end

  def parse(item)
    author = item.title.gsub!('Romain add a quote by', '').strip
    content = item.description
                  .scan(/"([^"]*)"/).to_s
                  .delete_prefix("[[\"")
                  .delete_suffix("\"]]")

    goodreads_quote_link = item.link
    # book_link = get_book_link(goodreads_quote_link)

    Quote.create(
      content: content,
      author: author,
      # author_img: author_img,
      # book: book
      # TODO: book_link: link to book on goodreads
      # TODO: goodreads_quote_link:
    )
  end

  def get_book_link(goodreads_quote_link)
    doc = Nokogiri::HTML(open(goodreads_quote_link), nil, Encoding::UTF_8.to_s)
    book_link = doc.search('bookTitle')
    puts book_link
  end
end
