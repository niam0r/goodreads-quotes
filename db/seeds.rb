# frozen_string_literal: true

Quote.destroy_all
puts 'Destroyed all quotes'

base_url = 'https://www.goodreads.com'
my_feed_url = "#{base_url}/quotes/list_rss/61714489-romain-niam0r"
first_page = "#{my_feed_url}?page=1"
second_page = "#{my_feed_url}?page=2"
FetchUserQuotes.new(first_page)
FetchUserQuotes.new(second_page)
# TODO: Find out how many items there is in total and deduct pages

puts "Quote.count: #{Quote.count}"
