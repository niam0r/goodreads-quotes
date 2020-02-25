# frozen_string_literal: true

require 'rss'

class FetchUserQuotes
  def initialize(user_quotes_url)
    @user_feed = fetch_feed(user_quotes_url)
    parse_quotes
  end

  def fetch_feed(user_quotes_url)
    response = HTTParty.get(user_quotes_url)
    RSS::Parser.parse(response.body)
  end

  def parse_quotes
    @user_feed.items.each do |item|
      ParseFeedItem.new(item)
    end
  end
end
