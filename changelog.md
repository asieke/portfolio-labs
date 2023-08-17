# Changelog
This document will summarize every PR made to the portfolio labs repo


## [2023-08-14] - Table Display for Benchmark Prices
[Link to PR](https://github.com/asieke/portfolio-labs/pull/12)

Added a table in the modeling page to display the first 3 benchmark prices.
- ✨ Display a table with the id, date, and price for benchmark prices
- 🐛 Fix asset_id property missing in BenchmarkPrice type

## 2023-08-15 - Update Dialog and Toast Components and Blog Page
[Link to PR](https://github.com/asieke/portfolio-labs/pull/13)
- Added a new Dialog component and updated the Toast component.
- Modified the Blog page to only fetch published blogs and added a draft tag.
- Added an Edit page that allows syncing and saving blogs from Notion.
- Updated the layout component to include the Toast and Dialog components.
- Created a new Dialog store and added the `showDialog` function.
- Updated the Blog type to include a `status` field and the Profile type to include an `is_admin` field.

## 2023-08-16 - Sync blogs with Notion
[Link to PR](https://github.com/asieke/portfolio-labs/pull/14)
Sync blogs with Notion by making a POST request to fetch and save blogs.
- 💻 Sync blogs with Notion by making a POST request to fetch and save blogs.
- 🔑 Add authentication to the `/api/notion/get-blogs` endpoint using Supabase session or API key.

## 2023-08-17 - AI Store Context and Chat Component Updates
[Link to PR](https://github.com/asieke/portfolio-labs/pull/15)
AI store context and chat component updates, including switching pages and displaying messages.
- ✨ Update AI store context to include page and content properties
- 🔄 Update chat component to use new AI store context
- 🐛 Fix bug in chat component where conversation variable is unused
- 📝 Refactor submitMessage function to use new AI store context
- 💄 Update chat component UI to display messages when switching pages
- 🩹 Prevent default behavior when pressing Enter in chat component