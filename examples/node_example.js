// Run linkedin-jobs-scraper on Apify and print the results. npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const input = {
  "keywords": [
    "software engineer"
  ],
  "locations": [
    "Berlin, Germany"
  ],
  "datePosted": "pastWeek",
  "maxJobsPerSearch": 10,
  "includeJobDetails": true,
  "verifyApplyLinks": false,
  "maxConcurrency": 1
};
const run = await client.actor('kamerozkan/linkedin-jobs-scraper').call(input);
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
