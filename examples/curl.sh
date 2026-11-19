#!/usr/bin/env bash
# Run linkedin-jobs-scraper synchronously and get the dataset items back. Needs APIFY_TOKEN.
curl -s -X POST "https://api.apify.com/v2/acts/kamerozkan~linkedin-jobs-scraper/run-sync-get-dataset-items" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"keywords": ["software engineer"], "locations": ["Berlin, Germany"], "datePosted": "pastWeek", "maxJobsPerSearch": 10, "includeJobDetails": true, "verifyApplyLinks": false, "maxConcurrency": 1}'
