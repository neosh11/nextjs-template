# House Tracker
App to track house sales + gain insights

## Functional Requirements
1. Look at a list of houses.
2. Click on a house to open it on a new page for further analysis.
3. Allow fetching data for the house and processing it.

## Technical decisions
#### Database
Workloads will include:
- filtering sales data by type + time
- Embeddings?

ElasticSearch

#### Frontend 
Nextjs React 19

/search 
- Client side

/prperty/id
- preload data on hover xd 

#### Dataprocessing
- Cron adds all the relevant data to a queue for processing.

#### Testing
`phase 2`
- Functional tests for queries? 

#### IaC
`phase 2`
terraform

#### CI/CD 
`phase 2`
CodePipeline?


## Execution plan
Create the repository

Day 1: Set up FE
1. State-management
