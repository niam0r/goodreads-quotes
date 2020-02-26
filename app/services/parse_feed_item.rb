# frozen_string_literal: true

require 'open-uri'

class ParseFeedItem
  def initialize(item)
    @item = item
    @quote_page = Nokogiri::HTML(HTTParty.get(item.link.strip).body)
    @book_url ||= extract_book_url
    parse(item)
  end

  def parse(item)
    Quote.create(
      author: item.title.gsub!('Romain add a quote by', '').strip,
      book_title: extract_book_title,
      # book_img: extract_book_img,
      content: extract_content,
      book_url: @book_url,
      goodreads_quote_url: item.link.strip
    )
  end

  # def extract_book_img
  #   book_page = Nokogiri::HTML(HTTParty.get(@book_url).body)
  #   book_page.search('#coverImage')&.attribute('href')&.value
  # end

  def extract_book_title
    @quote_page.search('.bookTitle').text
  end

  def extract_book_url
    partial_url = @quote_page.search('.bookTitle')&.attribute('href')&.value
    return nil if partial_url.nil?

    "https://www.goodreads.com#{partial_url}"
  end

  def extract_content
    @item.description
         .scan(/"([^"]*)"/).to_s
         .delete_prefix("[[\"")
         .delete_suffix("\"]]")
  end
end
