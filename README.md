# FITLOG

FITLOG is a modern workout library and planning web application that helps users browse exercises, view detailed workout information, build today's workout plan, and save exercises for later.

## 🔗 Live Demo

[Live Website](https://fit-log-next-app.vercel.app/)

## 🛠️ Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- React Icons
- React Toastify
- Context API
- REST API
- Next.js Image Optimization

## ✨ Key Features

### 1. 🏋️ Workout Library

Browse a collection of workouts with useful information such as:

- Workout name
- Muscle groups
- Equipment
- Difficulty
- Duration
- Calories burned
- Rating

### 2. 📋 Workout Details

View detailed information about each workout, including:

- Workout image
- Description
- Muscle groups
- Equipment
- Difficulty
- Sets and reps
- Duration
- Calories
- Rating
- Step-by-step instructions

### 3. 📅 Today's Workout Plan

Users can add workouts to **Today's Plan** and manage their selected exercises from the My Plan page.

The plan automatically displays:

- Total exercises
- Total workout minutes
- Total calories

Users can also remove workouts from the plan.

### 4. 💾 Save Workouts for Later

Users can save workouts that they want to revisit later.

The **Saved** section provides a separate list of saved workouts with their:

- Duration
- Calories
- Rating
- Workout details

### 5. 📊 My Plan Dashboard

The My Plan page provides separate **Today's Plan** and **Saved** tabs.

Users can:

- Switch between Today's Plan and Saved workouts
- View workout statistics
- Sort workouts
- View workout details
- Mark workouts as completed
- Remove workouts
- Track plan and saved item counts from the navbar

## 📁 Project Structure

```text
src/
├── app/
│   ├── page.tsx
│   ├── My-Plan/
│   │   └── page.tsx
│   └── Workouts/
│       └── [id]/
│           └── page.tsx
│
├── components/
│   ├── Navbar/
│   ├── Footer/
│   ├── Banner/
│   ├── PlanCard/
│   └── Buttons/
│       ├── AddToPlanButton/
│       └── AddToSaveButton/
│
├── Context/
│   └── PlanContext.tsx
│
└── types/
    └── JymCardTypes.ts