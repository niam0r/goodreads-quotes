# frozen_string_literal: true

class ParseFeedItem
  def initialize(item)
    @item = item
    @quote_page = Nokogiri::HTML(HTTParty.get(item.link.strip).body)
    @book_page = Nokogiri::HTML(HTTParty.get(scrape_book_url).body)
    parse(item)
  end

  def parse(item)
    Quote.create(
      author: item.title.gsub!('Romain add a quote by', '').strip,
      author_img: scrape_author_img,
      book_title: scrape_book_title,
      book_img: scrape_book_img,
      content: scrape_content,
      book_url: scrape_book_url,
      goodreads_quote_url: item.link.strip
    )
  end

  def scrape_author_img
    @quote_page.search('.quoteDetails img')&.attribute('src')&.value
  end

  def scrape_book_title
    @quote_page.search('.bookTitle').text
  end

  def scrape_book_img
    @book_page.search('#coverImage')&.attribute('src')&.value
  end

  def scrape_content
    @item.description
         .scan(/"([^"]*)"/).to_s
         .delete_prefix("[[\"")
         .delete_suffix("\"]]")
  end

  def scrape_book_url
    partial_url = @quote_page.search('.bookTitle')&.attribute('href')&.value
    "https://www.goodreads.com#{partial_url}"
  end
end
