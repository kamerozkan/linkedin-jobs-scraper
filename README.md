# LinkedIn Jobs Scraper & API - UK, Germany, US, No Login

LinkedIn jobs scraper and API for the UK, Germany, the US and any country: export public LinkedIn job postings by keyword, location or company without login, with full job descriptions. LinkedIn job alerts for new jobs only and job-board feeds. From $1 per 1,000 jobs; apply-link checks cost extra.

**[Run it on Apify Store](https://apify.com/kamerozkan/linkedin-jobs-scraper)**: no servers, no proxies to manage, results as JSON, CSV or Excel, or straight into your app through the API.

## Why use it

- Runs in the cloud on [Apify](https://apify.com/kamerozkan/linkedin-jobs-scraper); start it from the browser, the API, a schedule, or tools like Make, n8n and Zapier.
- Pay only for results. The current price and plan discounts are always on the [Store page](https://apify.com/kamerozkan/linkedin-jobs-scraper).
- Cap the cost of any run with the maximum cost per run setting.

## Quick start

1. Open the [Actor page](https://apify.com/kamerozkan/linkedin-jobs-scraper) and click **Try for free**.
2. Paste an input like the one below and click **Start**.
3. Download the dataset or read it over the API.

```json
{
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
}
```

## Use it from code

Python ([examples/python_example.py](examples/python_example.py)), Node.js ([examples/node_example.js](examples/node_example.js)) and cURL ([examples/curl.sh](examples/curl.sh)) examples are in the `examples` folder. All of them need an [Apify API token](https://console.apify.com/settings/integrations).

## Use in n8n & Make

- **n8n:** Import [integrations/n8n-workflow.json](integrations/n8n-workflow.json) directly into your n8n workspace, set your `APIFY_TOKEN` environment variable (or Bearer token header), and click **Execute Workflow**.
- **Make / Zapier:** Call the Apify **Run an Actor** module with Actor ID `kamerozkan/linkedin-jobs-scraper` and the JSON input above, or POST to `https://api.apify.com/v2/acts/kamerozkan~linkedin-jobs-scraper/run-sync-get-dataset-items`.

## Use with AI Agents (Apify MCP)

This Actor works with Claude Desktop, Cursor, Windsurf and any MCP-compatible AI agent through the official [Apify MCP Server](https://mcp.apify.com). Copy [integrations/mcp-config.json](integrations/mcp-config.json) into your MCP client configuration and replace `YOUR_APIFY_TOKEN` with your token.

## Sample output

Real rows from a recent run, with any contact details masked. Full sample: [sample-output.json](sample-output.json).

```json
[
  {
    "id": "4356507350",
    "url": "https://www.linkedin.com/jobs/view/4356507350",
    "title": "Senior Software Engineer (f/m/d)",
    "companyName": "Upvest",
    "companyUrl": "https://de.linkedin.com/company/upvest",
    "companyLogo": "https://media.licdn.com/dms/image/v2/C4D0BAQEqT8TaIoJYPw/company-logo_100_100/company-logo_100_100/0/1647937810578/upvest_logo?e=2147483647&v=beta&t=He3tI3JuhOmJwTlv8bKuBCQhLDv3IOlkxwQtOOV2l-s",
    "location": "Berlin, Berlin, Germany",
    "postedAt": "2026-11-12",
    "postedText": "6 days ago",
    "applicantsCount": 200,
    "applicantsText": "Over 200 applicants",
    "salaryText": null,
    "benefits": null,
    "seniorityLevel": "Not Applicable",
    "employmentType": "Full-time",
    "jobFunction": null,
    "industries": "Financial Services",
    "descriptionText": "At Upvest, we are on a mission to make investing as easy as spending money. Upvest empowers businesses to offer a wide range of investment products and the best experience in the field of capital market investment and retirement planning. Upvest’s Investment API is easy to integrate so that fintechs and financial institutions can save resources and fully focus on their core business.\n\nWe are proud to partner with Europe’s leading Fintechs and financial institutions such as DKB, Revolut, N26 and Raisin. Founded in 2017 by Martin Kassing, Upvest now brings together over 270 talented professionals from more than 70 nationalities. Upvest is backed by €280M in total funding from world-class investors, including BlackRock, Tencent, Sapphire Ventures, and Bessemer Venture Partners, Earlybird, Notion Capital, and Motive. Our latest €105M funding round in March 2026 - led by Sapphire and Tencent - serves as a massive catalyst for our growth, allowing us to offer premier investment experience.\n\nAbout The Role\n\nOur hubs are in Berlin, London and Tallinn, but we are open to hire remotely from Europe and United Kingdom.\n\nWhat You’ll Do\n\n- Make an impact in a true product team with a large ownership scope.\n- Work with cutting-edge technologies (Go is the primary language; it’s okay if you’re willing to switch from another language) without a legacy codebase.\n- Work on improving the reliability of our API.\n- Deliver fast and often. We embrace an agile methodology with a retrospective and demo at the end of the two-week cycle.\n- Design, build and own event-driven, fault-tolerant, horizontally scalable distributed systems using a Microservice architecture powered by Docker, Kubernetes, Kafka and PostgreSQL.\n\nIt’s Great If You Have\n\n- Experience with Investment products or the Fintech domain, in general.\n- Experience in event-driven architectures, event streaming, and event sourcing systems.\n- Experience with operating services in a decoupled, event-driven system, leveraging modern observability tooling (e.g. monitoring and tracing).\n\nYou’re likely to be successful in this role if:\n\n- You're excited about fintech and building
```

## Support

Found a problem or need a field? Open an issue on the [Actor's Issues tab](https://apify.com/kamerozkan/linkedin-jobs-scraper/issues) and include your run link.

---
This repository holds usage examples and sample data. The Actor itself runs on Apify.
