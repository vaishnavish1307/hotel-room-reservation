# 🏨 Hotel Room Reservation System

This is a dynamic room reservation system built as part of the **SDE 3 Assessment**. It simulates booking rooms in a hotel while minimizing travel time for guests.

## 🌟 Features

- 📦 Book up to 5 rooms with optimal proximity
- 🧠 Smart room selection to minimize total travel time
- 📊 Visual layout of hotel floors and rooms
- 🎲 Random occupancy generator
- 🔄 Reset functionality to clear all bookings

## 📐 Project Structure

- `index.html` – Main page layout
- `style.css` – Custom UI design (no frameworks used)
- `script.js` – Functional logic for booking, rendering, and optimization

## 🚀 Live Demo

🔗 [Click here to view the live app](https://vaishnavish1307.github.io/hotel-room-reservation/)

> *(Replace with your actual GitHub Pages link)*

## 🛠️ How It Works

1. Enter the number of rooms (1 to 5)
2. Click **Book Rooms**
3. The system will:
   - First try to book all rooms on the same floor
   - If not possible, choose a combination across floors that **minimizes travel time**
4. Travel time is calculated as:
   - 1 minute per adjacent room (horizontally)
   - 2 minutes per floor (vertically)

## 🧠 Booking Logic Example

If rooms 101, 102, 105, 106 are available and a guest books 4 rooms, they will be selected to minimize walking time.

## 📌 Notes

- Designed for 97 rooms across 10 floors
- No backend — all logic is handled in vanilla JS
- Lightweight and responsive interface

## 👩‍💻 Author

**Vaishnavi Shukla**  
B.Tech CSE – AI/ML | PSIT Kanpur  
