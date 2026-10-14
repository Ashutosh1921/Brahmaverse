# Brahmaverse AI Assignment

This project contains two parts:

## 1. Backend - CRM REST API (`/backend`)

A Node.js + Express + MongoDB backend for a Customer Relationship Management system.

### Setup
```
cd backend
npm install
npm start
```

### API Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | /api/employees/register | Register employee | No |
| POST | /api/employees/login | Login employee | No |
| POST | /api/enquiries/submit | Submit enquiry form | No |
| GET | /api/enquiries/public | Get unclaimed leads | JWT |
| PUT | /api/enquiries/claim/:id | Claim a lead | JWT |
| GET | /api/enquiries/my-claims | Get my claimed leads | JWT |

## 2. Frontend - Mobile App Design (`/frontend`)

A React.js implementation of the Figma mobile app design with 4 screens:
- Sign Up (phone number input)
- OTP Verification (6-digit code)
- Home (bestsellers, promo banner, popular items)
- Product Detail (portions, quantity, add to cart)

### Setup
```
cd frontend
npm install
npm run dev
```

## Tech Stack

**Backend:** Node.js, Express, MongoDB, JWT, bcryptjs

**Frontend:** React, React Router, Vite
