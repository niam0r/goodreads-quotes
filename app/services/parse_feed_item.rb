# frozen_string_literal: true

require 'open-uri'

class ParseFeedItem
  def initialize(item)
    @quote_page = Nokogiri::HTML(HTTParty.get(item.link.strip).body)
    parse(item)
  end

  def parse(item)
    author = item.title.gsub!('Romain add a quote by', '').strip
    content = item.description
                  .scan(/"([^"]*)"/).to_s
                  .delete_prefix("[[\"")
                  .delete_suffix("\"]]")

    Quote.create(
      author: author,
      author_img: extract_author_img,
      book: extract_book_title,
      # book_img: extract_book_img,
      content: content,
      # TODO: book_link: extract_book_link,
      # TODO: goodreads_quote_link: item.link.strip
    )
  end

  def extract_author_img
    @quote_page.search('a.leftAlignedImage img').attribute('src').value
  end

  def extract_book_title
    @quote_page.search('.bookTitle').text
  end

  # def extract_book_link
  #   partial_url = page.search('.bookTitle').attribute('href').value
  #   puts "https://www.goodreads.com/#{partial_url}"
  # end
end
