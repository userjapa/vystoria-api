## Vystoria API

---

#### Features:

- [x] Crud Dependencies
- [x] Crud Inspections
- [x] Crud Inspectors
- [x] JWT Auth
- [ ] Upload files to s3
- [x] Generate PDF
- [ ] Get location by lat/long
- [ ] Well formatted relatory template

### Build Setup

``` bash
# install dependencies
npm install

# run server
npm run dev

# Go to http://localhost:4000/ :)
```

### Routes

| Action        | URI           | Description  |
| ------------- |:-------------:| -----:|
| GET           | inspector/   | Get inspector |
| GET           | inspector/:id   | Get inspector by id |
| POST          | inspector/   |   Insert inspector |
| POST          | login/     |    Authentication |
| GET           | inspection/   | Get inspections |
| GET           | inspection/:id   | Get inspections by id |
| POST          | inspection/   |   Insert inspection |
| GET           | /inspection/relatory/:id   | Generate PDF |
| POST          | inspection/   |   Insert inspection |
| GET           | dependency/   | Get dependency |
| GET           | dependency/:id   | Get dependency by id |
| POST          | dependency/   |   Insert dependency |
| POST          | dependency/item/:id   |   Insert item to dependency |