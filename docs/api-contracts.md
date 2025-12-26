# API Contracts

## Auth
- `POST /api/auth/login`: `{ email, password }` -> `{ user, token }`
- `POST /api/auth/register`: `{ email, password, name, role }` -> `{ user }`

## AI Agent
- `POST /api/ai-agent`: `{ prompt }` -> `{ response }`

## LMS
- `GET /api/courses`: List all courses
- `GET /api/programmes`: List all programmes
- `POST /api/admissions/apply`: Submit admission application
