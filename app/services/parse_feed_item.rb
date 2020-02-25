# frozen_string_literal: true

require 'open-uri'

class ParseFeedItem
  def initialize(item)
    @item = item
    @quote_page = Nokogiri::HTML(HTTParty.get(item.link.strip).body)
    parse(item)
  end

  def parse(item)
    Quote.create(
      author: item.title.gsub!('Romain add a quote by', '').strip,
      author_img: extract_author_img,
      book_title: extract_book_title,
      book_img: extract_book_img,
      content: extract_content,
      book_link: extract_book_link,
      # TODO: goodreads_quote_link: item.link.strip
    )
  end

  def extract_author_img
    # TODO: inside selector details something
    # @quote_page.search('a.leftAlignedImage img').attribute('src').value
  end

  def extract_book_img
    @quote_page.search('.leftAlignedImage img').attribute('src').value
  end

  def extract_book_title
    @quote_page.search('.bookTitle').text
  end

  def extract_book_link
    partial_url = @quote_page.search('.bookTitle').attribute('href').value
    "https://www.goodreads.com/#{partial_url}"
  end

  def extract_content
    @item.description.scan(/"([^"]*)"/).to_s
                     .delete_prefix("[[\"")
                     .delete_suffix("\"]]")
  end
end
