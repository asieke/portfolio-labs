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