"""Run linkedin-jobs-scraper on Apify and print the results. pip install apify-client"""
import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])
run_input = {'keywords': ['software engineer'],
 'locations': ['Berlin, Germany'],
 'datePosted': 'pastWeek',
 'maxJobsPerSearch': 10,
 'includeJobDetails': True,
 'verifyApplyLinks': False,
 'maxConcurrency': 1}
run = client.actor("kamerozkan/linkedin-jobs-scraper").call(run_input=run_input)
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
